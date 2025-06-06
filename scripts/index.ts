import { fileURLToPath } from "node:url";
import { getSvgContent } from '../src/utils'
import { componentTemplate } from '../src/utils'
import path from "node:path";
import fs from 'fs-extra'
import type { Svgl } from "../src/types/index"
const regex = /import type \{ iSVG \} from '@\/types\/svg';\s*export const svgs: iSVG\[\] = \[([\s\S]*)\]/;
function extractAndCreateArray(sourceCode: string) {
    const match = sourceCode.match(regex);
    if (match && match[1]) {
        const extractedContent = match[1].trim();
        try {
            const newArray = new Function(`return [${extractedContent}]`)();
            return newArray;
        } catch (error) {
            console.error("Error creating array from extracted content:", error);
            return [];
        }
    }
    return [];
}
(async () => {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/pheralb/svgl/main/src/data/svgs.ts`);
        const resJson = await response.text();
        const data = extractAndCreateArray(resJson);
        if (data.length) {
            return data.forEach((res: Svgl) => {
                return copySvgComponent({
                    id: res.id,
                    title: res.title,
                    category: res.category,
                    url: res.url,
                    route: typeof res.route === 'string' ? `https://svgl.app${res.route}` : {
                        dark: `https://svgl.app${res.route?.dark}`,
                        light: `https://svgl.app${res.route?.light}`
                    }
                })
            })
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err)
        }
    }
})();
const isWordmarkSvg: boolean = false
const getSvgUrl = (svgInfo: Svgl) => {
    let svgUrlToCopy: string | undefined;
    const dark = false;

    if (isWordmarkSvg) {
        const svgHasTheme = typeof svgInfo.wordmark !== 'string';
        if (!svgHasTheme) {
            svgUrlToCopy =
                typeof svgInfo.wordmark === 'string'
                    ? svgInfo.wordmark
                    : "Something went wrong. Couldn't copy the SVG.";
        }

        svgUrlToCopy =
            typeof svgInfo.wordmark !== 'string'
                ? dark
                    ? svgInfo.wordmark?.dark
                    : svgInfo.wordmark?.light
                : svgInfo.wordmark;
    } else {
        const svgHasTheme = typeof svgInfo.route !== 'string';
        if (!svgHasTheme) {
            svgUrlToCopy =
                typeof svgInfo.route === 'string'
                    ? svgInfo.route
                    : "Something went wrong. Couldn't copy the SVG.";
        }
        svgUrlToCopy =
            typeof svgInfo.route !== 'string'
                ? dark
                    ? svgInfo.route.dark
                    : svgInfo.route.light
                : svgInfo.route;
    }

    return svgUrlToCopy;
};
const getFileUrlToPath = fileURLToPath(import.meta.url);
const getRootPath = path.resolve(getFileUrlToPath, '..', '..');
const targetDir = path.join(getRootPath, 'src', 'components');
const specialCases = {
    'C#.vue': 'CSharp',
    'C++.vue': 'CPlusPlus',
    'CSS(New).vue': 'CSSNew',
    '1Password.vue': 'OnePassword',
};
const sanitize = (fileName: string) => {
    if (specialCases[fileName]) return specialCases[fileName];
    return fileName
        .replace('.vue', '')
        .replace(/[^\w]/g, '')
};
async function createFiles(dirPath: string, file: string, content: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, file), content);
    exportFiles();
}
const copySvgComponent = async (svgInfo: Svgl) => {
    try {
        const svgUrlToCopy = getSvgUrl(svgInfo);

        const content = await getSvgContent(svgUrlToCopy);

        const code = componentTemplate(content);

        if (code) {
            createFiles(targetDir, `${sanitize(`${svgInfo.title?.split(' ').join('').charAt(0)?.toLocaleUpperCase() + svgInfo.title?.slice(1)}.vue`)}.vue`, code)
        }
    } catch (err) {
        console.error(`Error copying component:`, err);
    }
};
const exportFiles = async () => {
  try {
    const getRootPath = process.cwd();
    
    const vueFiles = (await fs.readdir(targetDir))
      .filter(f => f.endsWith('.vue'))
      .map(file => ({
        name: path.basename(file, '.vue'),
        path: `./components/${file}`
      }));

    const utilsDir = path.join(getRootPath, 'src', 'utils');
    const utilFiles = (await fs.readdir(utilsDir))
      .filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts') && file !== 'index.ts')
      .map(file => ({
        name: path.basename(file, '.ts'),
        path: `./utils/${file.replace('.ts', '')}`
      }));

    const vueExports = vueFiles
      .map(({ name, path }) => `export { default as ${name === 'Svgl' ? 'Svgl' : `Svgl${pascalCase(name)}`}Logo } from '${path}';`)
      .join('\n');

    const utilExports = utilFiles
      .map(({ name }) => `export * as ${camelCase(name)} from './utils/${name}';`)
      .join('\n');

    const typeExports = `export type * from './types';`;

    const finalOutput = [
      '// Auto-generated by exportFiles',
      '// Vue Components',
      vueExports,
      '\n// Utils',
      utilExports,
      '\n// Types',
      typeExports
    ].join('\n');

    await fs.writeFile(
      path.join(getRootPath, 'src', 'index.ts'),
      finalOutput,
      'utf-8'
    );
  } catch (error) {
    console.error('❌ Export failed:', error);
    process.exit(1);
  }
};

function pascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (match) => 
    match.replace(/-/, '').toUpperCase()
  );
}

function camelCase(str: string) {
  return str.replace(/-\w/g, (match) => 
    match.replace(/-/, '').toUpperCase()
  );
}
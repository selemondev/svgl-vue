import { parseSvgContent } from './parseSvgContent';

export const componentTemplate = (content: string, framework: string) => {
    const { templateContent, scriptTag } = parseSvgContent(content, framework);
    return `
${scriptTag}
<template>
    ${templateContent}
</template>
    `;
};

// ${componentStyle}
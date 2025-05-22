import { parseSvgContent } from './parseSvgContent';

export const componentTemplate = (content: string) => {
    const { templateContent, scriptTag } = parseSvgContent(content);
    return `
${scriptTag}
<template>
    ${templateContent}
</template>
    `;
};

// ${componentStyle}
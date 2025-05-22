export const parseSvgContent = (content: string) => {
  // Remove XML and DOCTYPE declarations
  content = content.replace(/<\?xml[^>]*\?>/i, '');
  content = content.replace(/<!DOCTYPE[^>]*>/i, '');

  // Remove all <script> tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<script[^>]*\/?>/gi, '');

  // Extract <style> content
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const styles: string[] = [];
  let matched;
  while ((matched = styleTagRegex.exec(content)) !== null) {
    styles.push(
      matched[1]
        .replace('<![CDATA[', '')
        .replace(']]>', '')
        .trim()
    );
  }

  // Remove <style> tags from the SVG
  let templateContent = content.replace(styleTagRegex, '');

  // Modify <svg> tag:
  // - remove static width/height
  // - add :width, :height, and v-bind="$attrs"
  templateContent = templateContent.replace(
    /<svg\b([^>]*)>/i,
    (_match, attrs) => {
      // remove static width and height attributes
      const cleanedAttrs = attrs
        .replace(/\s*width="[^"]*"/i, '')
        .replace(/\s*height="[^"]*"/i, '');
      return `<svg${cleanedAttrs} :key="width" :width="width" :height="height" :style="{
      width: width + 'px', height: height + 'px'
      }">`;
    }
  );

  // Generate <script setup> with props
  const scriptTag = `<script setup lang="ts">
withDefaults(defineProps<{
  width?: string | number,
  height?: string | number
}>(), {
  width: 50,
  height: 50
});
</script>`;

  // Optional scoped style
  // const componentStyle = styles.length
  //   ? `<style${framework ? ' scoped' : ''}>\n${styles.join('\n')}\n</style>`
  //   : '';

  // Combine all parts into a Vue SFC-like string
  return {
    // componentStyle,
    scriptTag,
    templateContent
  };
};

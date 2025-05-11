export function flattenColorPalette(
  colors: Record<string, unknown>
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [colorName, colorValue] of Object.entries(colors)) {
    if (typeof colorValue === 'string') {
      result[colorName] = colorValue;
    } else if (typeof colorValue === 'object' && colorValue !== null) {
      for (const [shade, hex] of Object.entries(colorValue)) {
        if (typeof hex === 'string') {
          result[`${colorName}-${shade}`] = hex;
        }
      }
    }
  }

  return result;
}

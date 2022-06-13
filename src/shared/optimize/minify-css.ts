// @ts-ignore
import cssnano from 'cssnano';
import postcss from 'postcss';
import Result from 'postcss/lib/result';

// https://github.com/clean-css/clean-css
// https://github.com/postcss/postcss
// https://vitejs.dev/guide/features.html#postcss
// https://cssnano.co/docs/config-file/

export function minifyCSS(
  code: string,
): Promise<string> {
  const cssnanoPlugin = cssnano({
    preset: 'default',
  });

  return postcss([
    cssnanoPlugin,
  ])
    .process(code)
    .then((result: Result): string => {
      return result.css;
    });
}

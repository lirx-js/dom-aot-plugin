// @ts-ignore
import sass from 'sass';
import { CompileResult } from 'sass/types/compile';

export function compileSASSFile(
  path: string,
): string {
  const result: CompileResult = sass.compile(path);
  return result.css;
}

// export function compileSASS(
//   code: string,
// ): string {
//   const result: CompileResult = sass.compileString(code);
//   return result.css;
// }

import { sep, resolve } from 'path';
import { LLVM } from 'smake';

export function wt(t: LLVM) {
  Object.defineProperty(t, 'sysIncludedirs', {
    value: [
      ...t.sysIncludedirs,
      resolve(__dirname, '..', 'wt', 'include').replace(
        new RegExp(sep, 'g'),
        '/'
      ),
      resolve(__dirname, '..', 'MPMCQueue', 'include').replace(
        new RegExp(sep, 'g'),
        '/'
      ),
    ],
    configurable: true,
  });
}

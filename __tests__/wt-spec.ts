import { wt } from '../src/wt';
import { LLVM_Darwin } from 'smake';
import { addLibs } from '@smake/libs';
import { resolve, sep } from 'path';

test('wt', () => {
  class A extends LLVM_Darwin {
    files = [];
  }
  const B = addLibs(A, wt, wt, wt);
  const b = new B();
  const p1 = resolve(__dirname, '..', 'wt', 'include').replace(
    new RegExp(sep, 'g'),
    '/'
  );
  const p2 = resolve(__dirname, '..', 'wt', 'include').replace(
    new RegExp(sep, 'g'),
    '/'
  );
  expect(b.sysIncludedirs.includes(p1)).toBe(true);
  expect(b.sysIncludedirs.includes(p2)).toBe(true);
  expect(b.sysIncludedirs.length).toBe(6);
});

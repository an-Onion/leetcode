import { TreeNode } from './TreeNode';

describe('TreeNode', () => {
  it('[4, 5]', () => {
    const array = [4, 5];
    const target: TreeNode = TreeNode.of(array);
    expect(target.toArray()).toStrictEqual([
      4, 5,
      undefined,
      undefined,
      undefined,
    ]);
  });

  it('[1]', () => {
    const target: TreeNode = TreeNode.of([1]);
    expect(target.toArray()).toStrictEqual([1, undefined, undefined]);
  });

  it('[3,4,5,1,2]', () => {
    const target: TreeNode = TreeNode.of([3, 4, 5, 1, 2]);
    expect(target.toArray()).toStrictEqual([
      3, 4, 5, 1, 2,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });
});

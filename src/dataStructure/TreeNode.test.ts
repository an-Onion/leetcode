import { TreeNode } from './TreeNode';

describe('TreeNode', () => {
  it('[4, 5]', () => {
    const array = [4, 5];
    const target: TreeNode = TreeNode.of(array);
    expect(TreeNode.toArray(target)).toStrictEqual([
      4, 5,
    ]);
  });

  it('[1]', () => {
    const target: TreeNode = TreeNode.of([1]);
    expect(TreeNode.toArray(target)).toStrictEqual([1]);
  });

  it('[3,4,5,1,2]', () => {
    const target: TreeNode = TreeNode.of([3, 4, 5, 1, 2]);
    expect(TreeNode.toArray(target)).toStrictEqual([
      3, 4, 5, 1, 2,
    ]);
  });
});

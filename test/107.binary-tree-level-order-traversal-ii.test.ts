import { levelOrderBottom } from '../src/107.binary-tree-level-order-traversal-ii';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Binary Tree Level Order Traversal II', () => {

  it('3,9,20,null,null,15,7', () => {
    const input = TreeNode.of([3,9,20,null,null,15,7]);
    expect(levelOrderBottom(input)).toStrictEqual([[15,7],[9,20],[3]]);
  });

  it('1', () => {
    const input = TreeNode.of([1]);
    expect(levelOrderBottom(input)).toStrictEqual([[1]]);
  });

  it('[]', () => {
    const input = TreeNode.of([]);
    expect(levelOrderBottom(input)).toStrictEqual([]);
  });

});

import { inorderTraversal } from '../src/94.binary-tree-inorder-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Binary Tree inorder Traversal', () => {

  it('[1,null,2,3]', () => {
    const input = TreeNode.of([1,null,2,3]);
    const output = inorderTraversal(input);
    expect(output).toStrictEqual([1,3,2]);
  });

  it('[]', () => {
    const input = TreeNode.of([]);
    const output = inorderTraversal(input);
    expect(output).toStrictEqual([]);
  });

  it('[1]', () => {
    const input = TreeNode.of([1]);
    const output = inorderTraversal(input);
    expect(output).toStrictEqual([1]);
  });

  it('[1,2]', () => {
    const input = TreeNode.of([1,2]);
    const output = inorderTraversal(input);
    expect(output).toStrictEqual([2,1]);
  });

  it('[1,null,2]', () => {
    const input = TreeNode.of([1,null,2]);
    const output = inorderTraversal(input);
    expect(output).toStrictEqual([1,2]);
  });
});

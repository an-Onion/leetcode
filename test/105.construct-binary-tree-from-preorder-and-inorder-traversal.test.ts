import { buildTree } from '../src/105.construct-binary-tree-from-preorder-and-inorder-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Construct Binary Tree from Preorder and Inorder Traversal', () => {

  it('[3,9,20,null,null,15,7]', () => {
    const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
    const output = buildTree(preorder, inorder);
    expect(TreeNode.toArray(output)).toStrictEqual([3,9,20,null,null,15,7]);
  });

  it('[-1]', () => {
    const preorder = [-1], inorder = [-1];
    const output = buildTree(preorder, inorder);
    expect(TreeNode.toArray(output)).toStrictEqual([-1]);
  });

});

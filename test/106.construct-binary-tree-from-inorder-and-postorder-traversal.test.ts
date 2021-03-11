import { buildTree } from '../src/106.construct-binary-tree-from-inorder-and-postorder-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Construct Binary Tree from Inorder and Postorder Traversal', () => {

  it('[3,9,20,null,null,15,7]', () => {
    const root = buildTree([9,3,15,20,7],[9,15,7,20,3]);
    expect(TreeNode.toArray(root)).toStrictEqual([3,9,20,null,null,15,7]);
  });

  it('[-1]', () => {
    const root = buildTree([-1],[-1]);
    expect(TreeNode.toArray(root)).toStrictEqual([-1]);
  });

});

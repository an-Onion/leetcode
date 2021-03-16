import { TreeNode } from '../src/dataStructure/TreeNode';
import { isBalanced } from '../src/110.balanced-binary-tree';

describe('Balanced Binary Tree', () => {

  it('[3,9,20,null,null,15,7]', () => {
    const input = TreeNode.of([3,9,20,null,null,15,7]);
    expect(isBalanced(input)).toBeTruthy();
  });

  it('[1,2,2,3,3,null,null,4,4]', () => {
    const input = TreeNode.of([1,2,2,3,3,null,null,4,4]);
    expect(isBalanced(input)).toBeFalsy();
  });

});


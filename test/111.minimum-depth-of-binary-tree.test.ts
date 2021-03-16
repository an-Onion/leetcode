import { minDepth } from '../src/111.minimum-depth-of-binary-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Minimum Depth of Binary Tree', () => {

  it('[1,2]', () => {
    const input = TreeNode.of([1,2]);
    expect(minDepth(input)).toBe(2);
  });

  it('[3,9,20,null,null,15,7]', () => {
    const input = TreeNode.of([3,9,20,null,null,15,7]);
    expect(minDepth(input)).toBe(2);
  });

  it('[2,null,3,null,4,null,5,null,6]', () => {
    const input = TreeNode.of([2,null,3,null,4,null,5,null,6]);
    expect(minDepth(input)).toBe(5);
  });

});

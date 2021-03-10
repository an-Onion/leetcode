import { maxDepth } from '../src/104.maximum-depth-of-binary-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Maximum Depth of Binary Tree', () => {

  it('[3,9,20,null,null,15,7]', () => {
    const input = TreeNode.of([3,9,20,null,null,15,7]);
    expect(maxDepth(input)).toBe(3);
  });

  it('[1,null,2]', () => {
    const input = TreeNode.of([1,null,2]);
    expect(maxDepth(input)).toBe(2);
  });

  it('[]', () => {
    const input = TreeNode.of([]);
    expect(maxDepth(input)).toBe(0);
  });

  it('[0]', () => {
    const input = TreeNode.of([0]);
    expect(maxDepth(input)).toBe(1);
  });

});

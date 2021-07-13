import { sumRootToLeaf } from '../src/1022.sum-of-root-to-leaf-binary-numbers';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Sum Of root To leaf Binary Numbers', () => {

  it('[1,0,1,0,1,0,1]', () => {
    const root = TreeNode.of([1,0,1,0,1,0,1]);
    expect(sumRootToLeaf(root)).toBe(22);
  });

  it('[0]', () => {
    const root = TreeNode.of([0]);
    expect(sumRootToLeaf(root)).toBe(0);
  });

  it('[1]', () => {
    const root = TreeNode.of([1]);
    expect(sumRootToLeaf(root)).toBe(1);
  });

  it('[1,1]', () => {
    const root = TreeNode.of([1,1]);
    expect(sumRootToLeaf(root)).toBe(3);
  });

});

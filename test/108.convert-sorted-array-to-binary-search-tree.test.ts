import { sortedArrayToBST } from '../src/108.convert-sorted-array-to-binary-search-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Convert Sorted Array to Binary Search Tree', () => {

  it('[-10,-3,0,5,9]', () => {
    const root = sortedArrayToBST([-10,-3,0,5,9]);
    const output = TreeNode.toArray(root);
    expect(output).toStrictEqual([0,-3,9,-10,null,5]);
  });

  it('[1,3]', () => {
    const output = TreeNode.toArray(sortedArrayToBST([1,3]));
    expect(output).toStrictEqual([3,1]);
  });

});

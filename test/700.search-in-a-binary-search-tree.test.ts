import { searchBST } from '../src/700.search-in-a-binary-search-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Search in a Binary Search Tree', () => {
  it('root = [4,2,7,1,3], val = 2', () => {
    const root: TreeNode = TreeNode.of([4,2,7,1,3]);
    const output: TreeNode | null= searchBST(root, 2);
    expect(TreeNode.toArray(output)).toEqual([2,1,3]);
  });

  it('root = [4,2,7,1,3], val = 5', () => {
    const root: TreeNode = TreeNode.of([4,2,7,1,3]);
    const output: TreeNode | null= searchBST(root, 5);
    expect(TreeNode.toArray(output)).toEqual([]);
  });

});

import { TreeNode } from '../src/dataStructure/TreeNode';
import { pathSum } from '../src/113.path-sum-ii';

describe('Path Sum II', () => {

  it('root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22', () => {
    const root = TreeNode.of([5,4,8,11,null,13,4,7,2,null,null,5,1]);
    expect(pathSum(root, 22)).toStrictEqual([[5,4,11,2],[5,8,4,5]]);
  });

  it('root = [1,2,3], targetSum = 5', () => {
    const root = TreeNode.of([1,2,3]);
    expect(pathSum(root, 5)).toStrictEqual([]);
  });

  it('root = [1,2], targetSum = 0', () => {
    const root = TreeNode.of([1,2]);
    expect(pathSum(root, 0)).toStrictEqual([]);
  });

});

import { sumNumbers } from '../src/129.sum-root-to-leaf-numbers';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe('Sum Root to Leaf Numbers', () => {

  it('[1,2,3]', () => {
    const root = TreeNode.of([1,2,3]);
    expect(sumNumbers(root)).toBe(25);
  });

  it('[4,9,0,5,1]', () => {
    const root = TreeNode.of([4,9,0,5,1]);
    expect(sumNumbers(root)).toBe(1026);
  });

});


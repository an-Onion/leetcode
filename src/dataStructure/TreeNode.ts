export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left || null;
    this.right = right || null;
  }

  static of(array: number[]): TreeNode {

    if( !array || array.length === 0 || array[0] === undefined ) return null;
    const root = new TreeNode(array.shift());
    const queue: TreeNode[] = [root];

    while( queue.length ) {
      const node = queue.shift();
      const left = array.shift();

      if( left !== undefined && left !== null ){
        node.left = new TreeNode(left);
        queue.push(node.left);
      }
      const right = array.shift();

      if( right !== undefined && right !== null ){
        node.right = new TreeNode(right);
        queue.push(node.right);
      }
    }

    return root;
  }

  static toArray(node: TreeNode | null) : number[] {
    if( !node ) return [];
    const arr =  node.toArray();
    const last  = arr.reduceRight((acc, e, idx) => {
      return acc || e !== null && idx;
    }, undefined);
    return arr.slice(0, last+1);
  }

  toArray(): number[] {
    const queue: TreeNode[] = [this];
    const array: number[] = [];

    while( queue.length ) {
      const node = queue.shift();
      array.push(node?.val || null);

      if( node ){
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    return array;
  }
}

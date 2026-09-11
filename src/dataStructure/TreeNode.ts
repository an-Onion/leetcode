export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor( val?: number, left?: TreeNode | null, right?: TreeNode | null ) {
        this.val = val === undefined ? 0 : val;
        this.left = left || null;
        this.right = right || null;
    }

    static of( array: ( number | null )[] ): TreeNode | null {
        if ( !array || array.length === 0 || array[0] === undefined ) return null;
        const root = new TreeNode( array.shift()! );
        const queue: TreeNode[] = [root];

        while ( queue.length ) {
            const node = queue.shift()!;
            const left = array.shift();

            if ( left !== undefined && left !== null ) {
                node.left = new TreeNode( left );
                queue.push( node.left );
            }
            const right = array.shift();

            if ( right !== undefined && right !== null ) {
                node.right = new TreeNode( right );
                queue.push( node.right );
            }
        }

        return root;
    }

    static toArray( node: TreeNode | null ): ( number | null )[] {
        if ( !node ) return [];
        const arr = node.toArray();

        let last = -1;
        for ( let i = arr.length - 1; i >= 0; i-- ) {
            if ( arr[i] !== null ) {
                last = i;
                break;
            }
        }

        return arr.slice( 0, last + 1 );
    }

    toArray(): ( number | null )[] {
        const queue: ( TreeNode | null )[] = [this];
        const array: ( number | null )[] = [];

        while ( queue.length ) {
            const node = queue.shift()!;
            array.push( node?.val ?? null );

            if ( node ) {
                queue.push( node.left );
                queue.push( node.right );
            }
        }

        return array;
    }
}

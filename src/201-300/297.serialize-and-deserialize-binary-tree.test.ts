
import { TreeNode } from '../dataStructure/TreeNode';

/*
 * Encodes a tree to a single string.
 */
function serialize( root: TreeNode | null ): string {
    const output = [];
    function dfs( node: TreeNode | null ) {
        if( !node ) {
            output.push( null );
            return;
        }
        output.push( node.val );
        dfs( node.left );
        dfs( node.right );
    }
    dfs( root );

    while( output.at( -1 ) === null ) {
        output.pop();
    }

    return output.join( ',' );
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize( data: string ): TreeNode | null {
    if( data === '' ) {
        return null;
    }
    const values = data.split( ',' );
    let i = 0;
    function dfs(): TreeNode | null {
        if( i >= values.length ) {
            return null;
        }
        const value = values[ i ];
        i++;
        if( value === '' ) {
            return null;
        }
        const node = new TreeNode( +value );

        node.left = dfs( );
        node.right = dfs( );
        return node;
   }
   return dfs( );

}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

describe( '297. Serialize and Deserialize Binary Tree', () => {

    it( '[1,2,3,,,4,5]', () => {
        const root = '1,2,3,,,4,5';
        expect( serialize( deserialize( root )  ) ).toEqual( '1,2,3,,,4,5' );
    } );

    it( '[1]', () => {
        const root = '1';
        expect( serialize( deserialize( root )  ) ).toEqual( '1' );
    } );

    it( '[]', () => {
        const root = '';
        expect( serialize( deserialize( root )  ) ).toEqual( '' );
    } );

    it( '[1,2]', () => {
        const root = '1,2';
        expect( serialize( deserialize( root )  ) ).toEqual( '1,2' );
    } );

} );
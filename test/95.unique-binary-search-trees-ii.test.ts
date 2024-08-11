import { generateTrees } from '../src/1-100/95.unique-binary-search-trees-ii';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Unique Binary Search Trees II', () => {
    it( '2', () => {
        const trees = generateTrees( 2 );

        const output = trees.map( ( tree ) => TreeNode.toArray( tree ) ).sort();
        console.log( output );
        expect( output ).toStrictEqual(
            [
                [1, null, 2],
                [2, 1],
            ].sort(),
        );
    } );

    it( '3', () => {
        const trees = generateTrees( 3 );

        const output = trees.map( ( tree ) => TreeNode.toArray( tree ) ).sort();

        expect( output ).toStrictEqual(
            [
                [1, null, 2, null, 3],
                [1, null, 3, 2],
                [2, 1, 3],
                [3, 1, null, null, 2],
                [3, 2, null, 1],
            ].sort(),
        );
    } );

    it( '1', () => {
        const trees = generateTrees( 1 );

        const output = trees.map( ( tree ) => TreeNode.toArray( tree ) ).sort();

        expect( output ).toStrictEqual( [[1]].sort() );
    } );
} );

import { heapSort } from './Heap';

describe( 'heap sort', () => {
    it( 'should sort an array', () => {
        // Arrange
        const input = [1, 5, 2, 7, 3, 9, 4, 6, 8];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // Act
        const result = heapSort( input );

        // Assert
        expect( result ).toEqual( expected );
    } );
} );
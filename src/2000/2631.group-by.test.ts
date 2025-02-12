interface Array<T> {
    groupBy( fn: ( item: T ) => string ): Record<string, T[]>;
}

Array.prototype.groupBy = function ( fn ) {
    return this.reduce( ( acc, item ) => {
        const key = fn( item );
        if ( !acc[key] ) {
            acc[key] = [];
        }
        acc[key].push( item );
        return acc;
    }, {} );
};

describe( '2631. group-by', () => {
    it( 'case 1', () => {
        type Item = { id: string };
        const array: Array<Item> = [{ id: '1' }, { id: '1' }, { id: '2' }];
        const fn = function ( item: Item ) {
            return item.id;
        };

        expect( array.groupBy( fn ) ).toEqual( {
            '1': [{ id: '1' }, { id: '1' }],
            '2': [{ id: '2' }],
        } );
    } );

    it( 'case 2', () => {
        const array = [
                [1, 2, 3],
                [1, 3, 5],
                [1, 5, 9],
            ],
            fn = function ( list ) {
                return String( list[0] );
            };
        expect( array.groupBy( fn ) ).toEqual( {
            '1': [
                [1, 2, 3],
                [1, 3, 5],
                [1, 5, 9],
            ],
        } );
    } );

    it( 'case 3', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            fn = function ( n ) {
                return String( n > 5 );
            };
        expect( array.groupBy( fn ) ).toEqual( {
            true: [6, 7, 8, 9, 10],
            false: [1, 2, 3, 4, 5],
        } );
    } );
} );

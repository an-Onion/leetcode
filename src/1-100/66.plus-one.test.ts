function plusOne( digits: number[] ): number[] {
    return digits
        .reverse()
        .reduce(
            ( acc, digit, idx ) => {
                const carry = acc.pop();
                const sum = digit + carry;
                acc.push( sum % 10 );
                const newCarry = ( sum / 10 ) | 0;
                if ( idx !== digits.length - 1 || newCarry === 1 )
                    acc.push( newCarry );

                return acc;
            },
            [1],
        )
        .reverse();
}

describe( '66. Plus One', () => {
    it( '[1,2,3]', () => {
        expect( plusOne( [1, 2, 3] ) ).toStrictEqual( [1, 2, 4] );
    } );

    it( '[4,3,2,1]', () => {
        expect( plusOne( [4, 3, 2, 1] ) ).toStrictEqual( [4, 3, 2, 2] );
    } );

    it( '[0]', () => {
        expect( plusOne( [0] ) ).toStrictEqual( [1] );
    } );

    it( '[9]', () => {
        expect( plusOne( [9] ) ).toStrictEqual( [1, 0] );
    } );
} );

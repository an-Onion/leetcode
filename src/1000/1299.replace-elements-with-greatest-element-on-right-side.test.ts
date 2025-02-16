function replaceElements( arr: number[] ): number[] {
    const ret = [-1];

    for ( let i = arr.length - 2; i >= 0; i-- ) {
        ret.push( Math.max( ret.at( -1 ), arr[i + 1] ) );
    }
    return ret.reverse();
}

describe( '1299. Replace Elements with Greatest Element on Right Side', () => {
    it( 'case 1', () => {
        const arr = [17, 18, 5, 4, 6, 1];
        const output = [18, 6, 6, 6, 1, -1];
        expect( replaceElements( arr ) ).toEqual( output );
    } );

    it( 'case 2', () => {
        const arr = [400];
        const output = [-1];
        expect( replaceElements( arr ) ).toEqual( output );
    } );
} );

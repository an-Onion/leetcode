function countSymmetricIntegers( low: number, high: number ): number {
    let ret = 0;
    for ( let a = low; a <= high; ++a ) {
        if ( a < 100 && a % 11 === 0 ) {
            ret++;
        }

        if ( 1000 <= a && a < 10000 ) {
            const left = Math.floor( a / 1000 ) + Math.floor( ( a % 1000 ) / 100 );
            const right = Math.floor( ( a % 100 ) / 10 ) + ( a % 10 );
            if ( left === right ) {
                ret++;
            }
        }
    }
    return ret;
}

describe( '2843. Count Symmetric Integers', () => {
    it( 'case 1', () => {
        expect( countSymmetricIntegers( 1, 100 ) ).toBe( 9 );
    } );
    it( 'case 2', () => {
        expect( countSymmetricIntegers( 1200, 1230 ) ).toBe( 4 );
    } );
} );

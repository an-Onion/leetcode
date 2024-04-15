function countPrimes( n: number ): number {

    const isPrimary = Array( n ).fill( true );

    isPrimary[ 0 ] = isPrimary[ 1 ] = false;

    for( let i = 2; i * i < n; i++ ){
        if( isPrimary[ i ] ){
            for( let j = i * i; j < n; j += i ){
                isPrimary[ j ] = false;
            }
        }
    }

    let ret = 0;

    for( let i = 0; i < n; i++ ){
        if( isPrimary[ i ] ){
            ret++;
        }
    }
    return ret;
}

describe( '204. count primes', () => {
    it( '10', () => {
        expect( countPrimes( 10 ) ).toBe( 4 );
    } );

    it( '0', () => {
        expect( countPrimes( 0 ) ).toBe( 0 );
    } );

    it( '1', () => {
        expect( countPrimes( 1 ) ).toBe( 0 );
    } );

    it( '2', () => {
        expect( countPrimes( 2 ) ).toBe( 0 );
    } );

} );
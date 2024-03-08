function getPermutation( n: number, k: number ): string {
    
    const nums: number[] = Array.from( { length: n }, ( _, i ) => i + 1 );

    const factorials = [1];
    for( let i = 1; i <= n; i++ ){
        factorials[i] = factorials[i-1] * i;
    }

    const ret = [];

    while( n ){

        if( k <= factorials[n-1] ) {
            ret.push( nums.shift() );
        } else {
            const idx = Math.ceil( k / factorials[n-1] );
            const [target] = nums.splice( idx-1, 1 );
            ret.push( target );
             k -= ( idx-1 ) * factorials[n-1];
        }
        n--;
    }

    return ret.join( '' );
}


describe( '60. Permutation Sequence', () => {

    it( 'n = 3, k = 1', () => {
        expect( getPermutation( 3, 1 ) ).toBe( '123' );
    } );

    it( 'n = 3, k = 2' ,() => {
        expect( getPermutation( 3, 2 ) ).toBe( '132' );
    } );

    it( 'n = 3, k = 3', () => {
        expect( getPermutation( 3, 3 ) ).toBe( '213' );
    } );

    it( 'n = 3, k = 4', () => {
        expect( getPermutation( 3, 4 ) ).toBe( '231' );
    } );

    it( 'n = 3, k = 5', () => {
        expect( getPermutation( 3, 5 ) ).toBe( '312' );
    } );

    it( 'n = 3, k = 6', () => {
        expect( getPermutation( 3, 6 ) ).toBe( '321' );
    } );

    it( 'n = 4, k = 9', () => {
        expect( getPermutation( 4, 9 ) ).toBe( '2314' );
    } );

    it( 'n = 3, k = 1', () => {
        expect( getPermutation( 3, 1 ) ).toBe( '123' );
    } );

    it( 'n = 2, k = 2', () => {
        expect( getPermutation( 2, 2 ) ).toBe( '21' );
    } );

} );
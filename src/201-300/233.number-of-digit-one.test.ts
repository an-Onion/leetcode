function countDigitOne( n: number ): number {

    const dp = [0];
    for( let i = 1; i <= 10; i++ ){
        dp.push( dp[i-1] * 10 + 10 ** ( i-1 ) );
    }

    let ret = 0, acc = 0;

    for( let i = 1; n; i++ ){
        const c = n % 10; // 当前位
        if( c === 1 ){
            ret += dp[i-1] + 1 + acc;
        }else if( c > 1 ){
            ret += c * dp[i-1] + 10 ** ( i-1 );
        }

        acc += c * 10 ** ( i-1 );
        n = n / 10 | 0;
    }

    return ret;
}

describe( '233. number of digit one', () => {
    it( '13', () => {
        expect( countDigitOne( 13 ) ).toBe( 6 );
    } );
    it( '0', () => {
        expect( countDigitOne( 0 ) ).toBe( 0 );
    } );

    it( '10', () => {
        expect( countDigitOne( 10 ) ).toBe( 2 );
    } );

    it( '20', () => {
        expect( countDigitOne( 20 ) ).toBe( 12 );
    } );

    it( '100', () => {
        expect( countDigitOne( 100 ) ).toBe( 21 );
    } );
} );
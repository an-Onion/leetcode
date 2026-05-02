function rotatedDigits( n: number ): number {
    const check = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1];
    const memo = Array.from( { length: 5 }, () =>
        Array.from( { length: 2 }, () => Array( 2 ).fill( -1 ) ),
    );

    const digits = [];

    while ( n !== 0 ) {
        digits.push( n % 10 );
        n = Math.floor( n / 10 );
    }
    digits.reverse();

    return dfs( 0, 1, 0 );

    function dfs( pos, bound, diff ) {
        if ( pos === digits.length ) {
            return diff;
        }
        if ( memo[pos][bound][diff] !== -1 ) {
            return memo[pos][bound][diff];
        }

        let ret = 0;
        for ( let i = 0; i <= ( bound !== 0 ? digits[pos] : 9 ); ++i ) {
            if ( check[i] !== -1 ) {
                ret += dfs(
                    pos + 1,
                    bound !== 0 && i === digits[pos] ? 1 : 0,
                    diff !== 0 || check[i] === 1 ? 1 : 0,
                );
            }
        }
        return ( memo[pos][bound][diff] = ret );
    }
}

describe( '788. rotated-digits', () => {
    it( 'case 1', () => {
        expect( rotatedDigits( 10 ) ).toBe( 4 );
    } );
} );

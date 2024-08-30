function sumDigitDifferences( nums: number[] ): number {
    let ret: bigint = BigInt( 0 );
    const N = nums.length;

    while ( nums[0] > 0 ) {
        const cnt = Array( 10 ).fill( 0 );
        for ( let i = 0; i < nums.length; i++ ) {
            const tail = nums[i] % 10;
            cnt[tail]++;
            nums[i] = ( nums[i] / 10 ) | 0;
        }

        for ( let i = 0; i < 10; i++ ) {
            ret += BigInt( cnt[i] * ( N - cnt[i] ) );
        }
    }

    return Number( ret / BigInt( 2 ) );
}

describe( '3153. Sum of Digit Differences of All Pairs', () => {
    it( 'case 1', () => {
        const nums = [13, 23, 12];

        expect( sumDigitDifferences( nums ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        const nums = [10, 10, 10, 10];
        expect( sumDigitDifferences( nums ) ).toBe( 0 );
    } );
} );

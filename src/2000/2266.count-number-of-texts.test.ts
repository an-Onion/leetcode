function countTexts( pressedKeys: string ): number {
    const keyMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const MOD = 1e9 + 7;
    const dp = Array( pressedKeys.length + 1 ).fill( 0 );
    dp[0] = 1;

    for ( let i = 0; i < pressedKeys.length; i++ ) {
        const key = pressedKeys[i];
        const chars = keyMap[key];
        for (
            let j = i;
            pressedKeys[j] === key && i - j <= chars.length - 1;
            j--
        ) {
            dp[i + 1] = ( dp[i + 1] + dp[j] ) % MOD;
        }
    }
    return dp[pressedKeys.length];
}

describe( '2266. Count Number of Texts', () => {
    it( 'case 1', () => {
        const pressedKeys = '22233';
        expect( countTexts( pressedKeys ) ).toBe( 8 );
    } );

    it( 'case 2', () => {
        const pressedKeys = '222222222222222222222222222222222222';
        expect( countTexts( pressedKeys ) ).toBe( 82876089 );
    } );
} );

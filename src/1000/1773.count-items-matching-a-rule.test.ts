function countMatches(
    items: string[][],
    ruleKey: string,
    ruleValue: string,
): number {
    const index = { type: 0, color: 1, name: 2 }[ruleKey];

    let res = 0;
    for ( const item of items ) {
        if ( item[index] === ruleValue ) {
            res++;
        }
    }
    return res;
}

describe( '1773. count-items-matching-a-rule', () => {
    it( 'case 1', () => {
        const items = [
                ['phone', 'blue', 'pixel'],
                ['computer', 'silver', 'lenovo'],
                ['phone', 'gold', 'iphone'],
            ],
            ruleKey = 'color',
            ruleValue = 'silver';
        const res = countMatches( items, ruleKey, ruleValue );
        expect( res ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const items = [
                ['phone', 'blue', 'pixel'],
                ['computer', 'silver', 'phone'],
                ['phone', 'gold', 'iphone'],
            ],
            ruleKey = 'type',
            ruleValue = 'phone';
        const res = countMatches( items, ruleKey, ruleValue );
        expect( res ).toBe( 2 );
    } );
} );

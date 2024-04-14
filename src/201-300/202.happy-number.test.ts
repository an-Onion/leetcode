function isHappy( n: number ): boolean {
    
    const set = new Set<number>();
    
    while( n !== 1 && !set.has( n ) ){
        set.add( n );
        n = getNext( n );
    }

    return n === 1;

    function getNext( n: number ): number {
        let sum = 0;
        while( n > 0 ){
            const digit = n % 10;
            sum += digit ** 2;
            n = n / 10 | 0;
        }
        return sum;
    }
}

describe( '202. happy-number', () => {
    it( '19', () => {
        expect( isHappy( 19 ) ).toBe( true );
    } );

    it( '2', () => {
        expect( isHappy( 2 ) ).toBe( false );
    } );

} );
function numRabbits( answers: number[] ): number {
    const map = new Map<number, number>();
    for ( const ans of answers ) {
        map.set( ans, ( map.get( ans ) || 0 ) + 1 );
    }

    let ans = 0;
    for ( const [key, value] of map ) {
        const group = Math.ceil( value / ( key + 1 ) );
        ans += group * ( key + 1 );
    }

    return ans;
}

describe( '781. Rabbits in Forest', () => {
    it( 'case 1', () => {
        expect( numRabbits( [1, 1, 2] ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        expect( numRabbits( [10, 10, 10] ) ).toBe( 11 );
    } );
} );

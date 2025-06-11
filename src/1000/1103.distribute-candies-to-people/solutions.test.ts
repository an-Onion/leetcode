export function distributeCandies(
    candies: number,
    num_people: number,
): number[] {
    const n: number = num_people;
    // how many people received complete gifts
    const p: number = Math.floor( Math.sqrt( 2 * candies + 0.25 ) - 0.5 );
    const remaining: number = candies - Math.floor( ( p + 1 ) * p * 0.5 );
    const rows: number = Math.floor( p / n ),
        cols: number = p % n;
    const ret: number[] = new Array( n ).fill( 0 );

    for ( let i = 0; i < n; ++i ) {
        // Complete rows
        ret[i] = ( i + 1 ) * rows + Math.floor( rows * ( rows - 1 ) * 0.5 ) * n;
        // Columns in the last row
        if ( i < cols ) {
            ret[i] += i + 1 + rows * n;
        }
    }
    // Remaining candies
    ret[cols] += remaining;

    return ret;
}

describe( '1103. Distribute Candies to People', () => {
    it( 'case 1', () => {
        expect( distributeCandies( 7, 4 ) ).toEqual( [1, 2, 3, 1] );
    } );

    it( 'case 2', () => {
        expect( distributeCandies( 10, 3 ) ).toEqual( [5, 2, 3] );
    } );
} );

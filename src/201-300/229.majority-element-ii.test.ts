function majorityElement( nums: number[] ): number[] {

    const votes = [[undefined, 0], [undefined, 0]];

    for ( const num of nums ) {
        if ( num === votes[0][0] ) {
            votes[0][1]++;
            continue;
        }
        if ( num === votes[1][0] ) {
            votes[1][1]++;
            continue;
        }
        if ( votes[0][1] === 0 ) {
            votes[0] = [num, 1];
            continue;
        }
        if ( votes[1][1] === 0 ) {
            votes[1] = [num, 1];
            continue;
        }
        votes[0][1]--, votes[1][1]--;
    }

    votes[0][1] = 0;
    votes[1][1] = 0;

    for( const num of nums ) {
        if( num === votes[0][0] ) {
            votes[0][1]++; continue;
        }
        if ( num === votes[1][0] ) {
            votes[1][1]++;
        }
    }
    return votes.filter( ( [, count] ) => count > nums.length / 3 )
                .map( ( [num] ) => num );
}

describe( '229. majority-element-ii', () => {
    it( '[3,2,3]', () => {
        expect( majorityElement( [3, 2, 3] ) ).toEqual( [3] );
    } );

    it( '[1]', () => {
        expect( majorityElement( [1] ) ).toEqual( [1] );
    } );

    it( '[1,2]', () => {
        expect( majorityElement( [1, 2] ) ).toEqual( [1, 2] );
    } );

    it( '[4,2,1,1]', () => {
        expect( majorityElement( [4,2,1,1] ) ).toEqual( [1] );
    } );
} );
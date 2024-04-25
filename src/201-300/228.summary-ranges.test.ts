function summaryRanges( nums: number[] ): string[] {

    const ret: Array<[number, number]> = [];
    for ( let i = 0; i < nums.length; i++ ) {
        const rear = ret.at( -1 )?.at( 1 ) ?? -Infinity;
        if ( rear === nums[ i ] - 1 ) {
            ret.at( -1 )[ 1 ] = nums[ i ];
            continue;
        }
        ret.push( [nums[ i ], nums[ i ]] );
    }

    return ret.map( ( [start, end] ) => start === end ? `${start}` : `${start}->${end}` );
    
}

describe( '228. summary-ranges', () => {
    
    it( '[0,2,3,4,6,8,9]', () => {
        expect( summaryRanges( [0,2,3,4,6,8,9] ) ).toStrictEqual( ['0','2->4','6','8->9'] );
    } );
    it( '[0,1,2,4,5,7]', () => {
        expect( summaryRanges( [0,1,2,4,5,7] ) ).toStrictEqual( ['0->2','4->5','7'] );
    } );
} );
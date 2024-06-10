function maxNumber( nums1: number[], nums2: number[], k: number ): number[] {

    const pickMax = ( nums: number[], size: number ): number[] => {

        const stack: number[] = [];
        let drop = nums.length - size;

        for( const num of nums ) {
            while( drop && stack.at( -1 ) < num ) {
                stack.pop();
                drop--;
            }
            if( stack.length < size )
                stack.push( num );
            else drop--;
        }
        return stack;
    };

    const merge = ( left: number[], right: number[] ): string => {

        const res: number[] = [];

        const getMaxArray = (  ) => left.join( '' ) > right.join( '' )  ? left : right;

        while( left.length || right.length ) {
            const max = getMaxArray();
            res.push( max.shift() );
        }
        return res.join( '' );
    };

    const res: string[] = [];

    for( let i = 0; i <= Math.min( k, nums1.length ); ++i ) {
        const j = k - i;
        if( j > nums2.length ) continue;

        const left = pickMax( nums1, i );
        const right = pickMax( nums2, j );
        res.push( merge( left, right ) );
    }

    return res.sort( ( a, b )=> b.localeCompare( a ) ).at( 0 ).split( '' ).map( Number );
}

describe( '321. create-maximum-number', () => {

    it( 'case 1', () => {
        expect( maxNumber( [3,4,6,5], [9,1,2,5,8,3], 5 ) ).toEqual( [9,8,6,5,3] );
    } );

    it( 'case 2', () => {
        expect( maxNumber( [6,7], [6,0,4], 5 ) ).toEqual( [6,7,6,0,4] );
    } );

    it( 'case 3', () => {
        expect( maxNumber( [3,9], [8,9], 3 ) ).toEqual( [9,8,9] );
    } );

    it( 'case 4', () => {
        expect( maxNumber( [6,7,5], [4,8,1], 3 ) ).toEqual( [8,7,5] );
    } );

    it( 'case 5', () => {
        expect( maxNumber( [7,6,1,9,3,2,3,1,1], [4,0,9,9,0,5,5,4,7], 9 ) ).toEqual( [9,9,9,7,3,2,3,1,1] );
    } );
} );
import * as case3 from '../largeData/215.json';

function findKthLargest( nums: number[], k: number ): number {
    
    function swap( i:number, j: number ) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function partition( l: number, u: number ){
        let m = Math.floor( Math.random() * ( u - l + 1 ) + l );
        swap( m, l );
        const pivot = nums[l];
        m = l;
        for( let i = l + 1; i <= u; i++ ){
            if( nums[i] > pivot ){
                m++;
                [nums[i], nums[m]] = [nums[m], nums[i]];
            }
        }
        [nums[l], nums[m]] = [nums[m], nums[l]];
        return m;
    }

    let l = 0, u = nums.length - 1;

    while( l < u ){
        const m = partition( l, u );
        if( m === k - 1 ) 
            return nums[m];
        if( m > k - 1 ) u = m - 1;
        else l = m + 1;
    }
    return nums[l];
}

describe( '215. kth-largest-element-in-an-array', () => {
    it( '[3,2,1,5,6,4], k = 2', () => {
        expect( findKthLargest( [3,2,1,5,6,4], 2 ) ).toBe( 5 );
    } );

    it( '[3,2,3,1,2,4,5,5,6], k = 4', () => {
        expect( findKthLargest( [3,2,3,1,2,4,5,5,6], 4 ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( findKthLargest( case3, 50000 ) ).toStrictEqual( 1 );
    } );
} );
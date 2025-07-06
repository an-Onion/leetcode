class FindSumPairs {
    nums1: number[];
    nums2: number[];
    map: Map<number, number>;
    constructor( nums1: number[], nums2: number[] ) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.map = new Map();
        for ( const num of nums2 ) {
            const prev = this.map.get( num ) || 0;
            this.map.set( num, prev + 1 );
        }
    }

    add( index: number, val: number ): void {
        const oldValue = this.nums2[index];
        this.map.set( oldValue, this.map.get( oldValue )! - 1 );
        const newValue = ( this.nums2[index] = oldValue + val );
        this.map.set( newValue, ( this.map.get( newValue ) || 0 ) + 1 );
    }

    count( tot: number ): number {
        let result = 0;
        for ( const num of this.nums1 ) {
            result += this.map.get( tot - num ) || 0;
        }
        return result;
    }
}

describe( '1865. finding-pairs-with-a-certain-sum', () => {
    it( 'case 1', () => {
        const findSumPairs = new FindSumPairs(
            [1, 1, 2, 2, 2, 3],
            [1, 4, 5, 2, 5, 4],
        );
        expect( findSumPairs.count( 7 ) ).toBe( 8 );
        findSumPairs.add( 3, 2 );
        expect( findSumPairs.count( 8 ) ).toBe( 2 );
        expect( findSumPairs.count( 4 ) ).toBe( 1 );
        findSumPairs.add( 0, 1 );
        findSumPairs.add( 1, 1 );
        expect( findSumPairs.count( 7 ) ).toBe( 11 );
    } );
} );

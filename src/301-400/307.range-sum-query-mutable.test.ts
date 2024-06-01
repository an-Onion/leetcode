export class NumArray {
    nums: number[];
    tree: number[];

    constructor( nums: number[] ) {
        this.nums = nums;
        this.tree = Array( nums.length + 1 ).fill( 0 );

        for ( let i = 0; i < nums.length; i++ ) {
            this.updateTree( i + 1, nums[i] );
        }
    }

    update( index: number, val: number ): void {
        this.updateTree( index + 1, val - this.nums[index] );
        this.nums[index] = val;
    }

    updateTree( index: number, delta: number ): void {
        while ( index < this.tree.length ) {
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    sumRange( left: number, right: number ): number {
        return this.query( right + 1 ) - this.query( left );
    }

    query( index: number ): number {
        let sum = 0;
        while ( index > 0 ) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

describe( '307. range-sum-query-mutable', () => {
    it( 'Case 1', () => {
        const nums = [1, 3, 5];
        const obj = new NumArray( nums );


        expect( obj.sumRange( 0, 2 ) ).toEqual( 9 );

        obj.update( 1, 2 );
        expect( obj.sumRange( 0, 2 ) ).toEqual( 8 );

    } );
} );
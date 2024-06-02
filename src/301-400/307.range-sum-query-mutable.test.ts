export class NumArray {
    tree: number[];
    N: number;

    constructor( nums: number[] ) {

        this.N = nums.length;
        this.tree = Array( 4 * this.N ).fill( 0 );

        const build = ( { node, start, end }: { node: number, start: number, end: number } ) => {
            if( start === end ){
                this.tree[ node ] = nums[ start ];
                return;
            }
            const mid = start + end >> 1;
            build( { node: node * 2 + 1, start, end: mid } );
            build( { node: node * 2 + 2, start: mid + 1, end } );
            this.tree[ node ] = this.tree[ node * 2 + 1 ] + this.tree[ node * 2 + 2 ];
        };
        build( { node: 0, start: 0, end: this.N - 1 } );
    }

    sumRange( left: number, right: number, params:{ node: number, start: number, end: number } = { node: 0, start: 0, end: this.N - 1 } ): number {
        const { node, start, end } = params;
        if( start > right || end < left ) {
            throw new Error( 'out of range' );
        }
        if( start === left && end === right ) return this.tree[ node ];
        const mid = start + end >> 1;

        if( left >= mid+1 ){
            return this.sumRange( left, right, { node: node * 2 + 2, start: mid + 1, end } );
        }

        if( right <= mid ){
            return this.sumRange( left, right, { node: node * 2 + 1, start, end: mid } );
        }

        return this.sumRange( left, mid, { node: node * 2 + 1, start, end: mid } ) + this.sumRange( mid + 1, right, { node: node * 2 + 2, start: mid + 1, end } );
    }

    update( index: number, val: number ): void {

        const change = ( { node, start, end }: { node: number, start: number, end: number } ) => {
            if( start === end ){
                this.tree[ node ] = val;
                return;
            }
            const mid = start + end >> 1;
            if( index <= mid ){
                change( { node: node * 2 + 1, start, end: mid } );
            } else {
                change( { node: node * 2 + 2, start: mid + 1, end } );
            }
            this.tree[ node ] = this.tree[ node * 2 + 1 ] + this.tree[ node * 2 + 2 ];
        };
        change( { node: 0, start: 0, end: this.N - 1 } );
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

    it( 'Case 2', () => {
        const nums = [0,9,5,7,3];
        const obj = new NumArray( nums );

        expect( obj.sumRange( 4, 4 ) ).toEqual( 3 );
        expect( obj.sumRange( 2, 3 ) ).toEqual( 12 );
        expect( obj.sumRange( 3, 3 ) ).toEqual( 7 );
        obj.update( 4, 5 );
    } );
} );
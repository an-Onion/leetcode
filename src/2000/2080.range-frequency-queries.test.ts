class RangeFreqQuery {
    map: Map<number, number[]>;
    constructor( arr: number[] ) {
        this.map = new Map();
        for ( let i = 0; i < arr.length; i++ ) {
            if ( !this.map.has( arr[i] ) ) {
                this.map.set( arr[i], [] );
            }
            this.map.get( arr[i] ).push( i );
        }
    }

    query( left: number, right: number, value: number ): number {
        const pos = this.map.get( value ) ?? [];

        return lowerBound( right + 1 ) - lowerBound( left );

        function lowerBound( target: number ): number {
            let l = 0,
                u = pos.length - 1;

            while ( l <= u ) {
                const m = Math.floor( ( l + u ) / 2 );
                if ( pos[m] < target ) {
                    l = m + 1;
                } else {
                    u = m - 1;
                }
            }
            return l;
        }
    }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

describe( '2080. Range Frequency Queries', () => {
    it( 'case 1', () => {
        const obj = new RangeFreqQuery( [
            12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56,
        ] );
        expect( obj.query( 1, 2, 4 ) ).toBe( 1 );
        expect( obj.query( 0, 11, 33 ) ).toBe( 2 );
    } );
} );

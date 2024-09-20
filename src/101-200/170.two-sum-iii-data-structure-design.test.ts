class TwoSum {
    map: Map<number, number>;
    constructor() {
        this.map = new Map<number, number>();
    }

    add( number: number ): void {
        const count = this.map.get( number ) || 0;
        this.map.set( number, count + 1 );
    }

    find( value: number ): boolean {
        for ( const [key, count] of this.map.entries() ) {
            const complement = value - key;
            if ( complement === key && count > 1 ) return true;
            if ( complement !== key && this.map.has( complement ) ) return true;
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

describe( '170. Two Sum III - Data structure design', () => {
    it( 'should work', () => {
        const obj = new TwoSum();
        obj.add( 1 );
        obj.add( 3 );
        obj.add( 5 );
        expect( obj.find( 4 ) ).toBe( true );
        expect( obj.find( 7 ) ).toBe( false );
    } );
} );

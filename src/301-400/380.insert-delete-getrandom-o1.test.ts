class RandomizedSet {
    array: number[];
    map: Map<number, number>;
    constructor() {
        this.array = [];
        this.map = new Map();
    }

    insert( val: number ): boolean {
        if ( this.map.has( val ) ) {
            return false;
        }
        this.array.push( val );
        this.map.set( val, this.array.length - 1 );
        return true;
    }

    remove( val: number ): boolean {
        if ( !this.map.has( val ) ) {
            return false;
        }

        const idx = this.map.get( val );
        this.map.delete( val );

        const last = this.array.pop();

        if ( last === val ) {
            return true;
        }

        this.map.set( last, idx );
        this.array[idx] = last;
        return true;
    }

    getRandom(): number {
        const idx = Math.floor( Math.random() * this.array.length );
        return this.array[idx];
    }
}

describe( '380. Insert Delete GetRandom O(1)', () => {
    it( 'should work', () => {
        const rSet = new RandomizedSet();
        expect( rSet.insert( 1 ) ).toBeTruthy();

        expect( rSet.remove( 2 ) ).toBeFalsy;
        expect( rSet.getRandom() ).toBe( 1 );
        expect( rSet.insert( 2 ) ).toBeTruthy();
        expect( rSet.remove( 1 ) ).toBeTruthy();
        expect( rSet.insert( 2 ) ).toBeFalsy();
        expect( rSet.getRandom() ).toBe( 2 );
    } );
} );

class RandomizedCollection {
    map: Map<number, Set<number>>;
    array: Array<number>;
    constructor() {
        this.map = new Map();
        this.array = [];
    }

    insert( val: number ): boolean {
        if ( !this.map.has( val ) ) {
            this.map.set( val, new Set() );
        }
        this.array.push( val );
        const set = this.map.get( val );

        set.add( this.array.length - 1 );

        return set.size === 1;
    }

    remove( val: number ): boolean {
        if ( !this.map.get( val )?.size ) {
            return false;
        }

        const targetSet = this.map.get( val );
        let idx: number;
        for ( const it of targetSet ) {
            idx = it;
            break;
        }

        const rear = this.array.at( -1 );
        this.array[idx] = rear;
        targetSet.delete( idx );
        const rearSet = this.map.get( rear );
        rearSet.add( idx );
        rearSet.delete( this.array.length - 1 );

        this.array.pop();
        return true;
    }

    getRandom(): number {
        const rand = Math.floor( Math.random() * this.array.length );
        return this.array[rand];
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

describe( '381. Insert Delete GetRandom O(1) - Duplicates allowed', () => {
    it( 'should work 1', () => {
        const collection = new RandomizedCollection();
        expect( collection.insert( 1 ) ).toBe( true );
        expect( collection.insert( 1 ) ).toBe( false );
        expect( collection.insert( 2 ) ).toBe( true );
        expect( collection.remove( 2 ) ).toBe( true );
        expect( collection.getRandom() ).toBe( 1 );
    } );

    it( ' should work 2', () => {
        const collection = new RandomizedCollection();
        expect( collection.insert( 1 ) ).toBe( true );
        expect( collection.remove( 1 ) ).toBe( true );
        expect( collection.insert( 1 ) ).toBe( true );
    } );

    it( 'should work 3', () => {
        const collection = new RandomizedCollection();
        expect( collection.insert( 0 ) ).toBe( true );
        expect( collection.remove( 0 ) ).toBe( true );
        expect( collection.insert( -1 ) ).toBe( true );
        expect( collection.remove( 0 ) ).toBe( false );
    } );
} );

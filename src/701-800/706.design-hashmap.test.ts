class MyHashMap {
    base: number;
    data: Array<Array<[number, number]>>;

    constructor() {
        this.base = 769;
        this.data = Array.from( { length: this.base }, () => [] );
    }

    put( key: number, value: number ): void {
        const hash = key % this.base;
        const bucket = this.data[hash];
        for ( const it of bucket ) {
            if ( it[0] === key ) {
                it[1] = value;
                return;
            }
        }
        bucket.push( [key, value] );
    }

    get( key: number ): number {
        const hash = key % this.base;
        const bucket = this.data[hash];
        for ( const it of bucket ) {
            if ( it[0] === key ) {
                return it[1];
            }
        }
        return -1;
    }

    remove( key: number ): void {
        const hash = key % this.base;
        const bucket = this.data[hash];
        for ( let i = 0; i < bucket.length; i++ ) {
            if ( bucket[i][0] === key ) {
                bucket.splice( i, 1 );
                return;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

describe( '706. Design HashMap', () => {
    it( 'e.g.', () => {
        const hashMap = new MyHashMap();
        hashMap.put( 1, 1 );
        hashMap.put( 2, 2 );
        expect( hashMap.get( 1 ) ).toBe( 1 );
        expect( hashMap.get( 3 ) ).toBe( -1 );
        hashMap.put( 2, 1 );
        expect( hashMap.get( 2 ) ).toBe( 1 );
        hashMap.remove( 2 );
        expect( hashMap.get( 2 ) ).toBe( -1 );
    } );
} );

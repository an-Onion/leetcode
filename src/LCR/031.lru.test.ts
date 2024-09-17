class LRUCache {
    cache: Map<number, number>;
    capacity: number;
    constructor( capacity: number ) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get( key: number ): number {
        if ( !this.cache.has( key ) ) return -1;
        const value = this.cache.get( key );
        this.cache.delete( key );
        this.cache.set( key, value );
        return value;
    }

    put( key: number, value: number ): void {
        if ( this.cache.has( key ) ) {
            this.cache.delete( key );
        } else if ( this.cache.size >= this.capacity ) {
            const rear = this.cache.keys().next().value;
            this.cache.delete( rear );
        }

        this.cache.set( key, value );
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

describe( 'LCR 031, LRU Cache', () => {
    it( 'e.g. 1', () => {
        const obj = new LRUCache( 2 );
        obj.put( 1, 1 );
        obj.put( 2, 2 );
        expect( obj.get( 1 ) ).toBe( 1 );
        obj.put( 3, 3 );
        expect( obj.get( 2 ) ).toBe( -1 );
        obj.put( 4, 4 );
        expect( obj.get( 1 ) ).toBe( -1 );
        expect( obj.get( 3 ) ).toBe( 3 );
        expect( obj.get( 4 ) ).toBe( 4 );
    } );
} );

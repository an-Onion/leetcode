/* eslint-disable @typescript-eslint/no-explicit-any */
class TimeLimitedCache {
    map: Map<string, any> = new Map();
    times: Record<string, any> = {};

    set( key: string, value: any, duration: number ) {
        const res = this.map.has( key );
        this.map.set( key, value );
        clearTimeout( this.times[key] );
        this.times[key] = setTimeout( () => {
            this.map.delete( key );
        }, duration );
        return res;
    }

    get( key: string ) {
        return this.map.get( key ) ?? -1;
    }

    count() {
        return this.map.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

describe.skip( '2622.cache-with-time-limit', () => {
    it( 'case 1', () => {
        const timeLimitedCache = new TimeLimitedCache();
        expect( timeLimitedCache.set( '1', 42, 100 ) ).toBeFalsy(); // false
        setTimeout( () => {
            expect( timeLimitedCache.get( '1' ) ).toBe( 42 );
            expect( timeLimitedCache.count() ).toBe( 1 );
        }, 50 );
        setTimeout( () => {
            expect( timeLimitedCache.get( '1' ) ).toBe( -1 );
        }, 150 );
    } );

    it( 'case 2', () => {
        const timeLimitedCache = new TimeLimitedCache();
        expect( timeLimitedCache.set( '1', 42, 100 ) ).toBeFalsy(); // false
        setTimeout( () => {
            expect( timeLimitedCache.set( '1', 50, 100 ) ).toBeTruthy();
        }, 40 );
        setTimeout( () => {
            expect( timeLimitedCache.get( '1' ) ).toBe( 50 );
        }, 120 );
        setTimeout( () => {
            expect( timeLimitedCache.get( '1' ) ).toBe( 50 );
        }, 200 );
        setTimeout( () => {
            expect( timeLimitedCache.get( '1' ) ).toBe( -1 );
        }, 250 );
    } );
} );

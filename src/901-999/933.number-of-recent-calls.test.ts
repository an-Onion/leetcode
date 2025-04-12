class RecentCounter {
    queue: number[];
    constructor() {
        this.queue = [];
    }

    ping( t: number ): number {
        this.queue.push( t );
        while ( this.queue[0] < t - 3000 ) {
            this.queue.shift();
        }
        return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

describe( '933. Number of Recent Calls', () => {
    it( 'case 1', () => {
        const obj = new RecentCounter();
        expect( obj.ping( 1 ) ).toBe( 1 );
        expect( obj.ping( 100 ) ).toBe( 2 );
        expect( obj.ping( 3001 ) ).toBe( 3 );
        expect( obj.ping( 3002 ) ).toBe( 3 );
    } );
} );

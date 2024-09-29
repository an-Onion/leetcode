class MovingAverage {
    size: number;
    queue: number[];
    sum: number;
    constructor( size: number ) {
        this.size = size;
        this.sum = 0;
        this.queue = [];
    }

    next( val: number ): number {
        if ( this.queue.length === this.size ) {
            this.sum -= this.queue.shift();
        }
        this.queue.push( val );
        this.sum += val;
        return this.sum / this.queue.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

describe( '346. Moving Average from Data Stream', () => {
    it( 'should return correct moving average', () => {
        const movingAverage = new MovingAverage( 3 );
        expect( movingAverage.next( 1 ) ).toEqual( 1 );
        expect( movingAverage.next( 10 ) ).toEqual( 5.5 );
        expect( movingAverage.next( 3 ) ).toEqual( 4.666666666666667 );
        expect( movingAverage.next( 5 ) ).toEqual( 6 );
    } );
} );

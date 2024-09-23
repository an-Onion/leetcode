class Logger {
    cache: Map<string, number>;
    constructor() {
        this.cache = new Map();
    }

    shouldPrintMessage( timestamp: number, message: string ): boolean {
        if ( !this.cache.has( message ) ) {
            this.cache.set( message, timestamp );
            return true;
        }
        const lastTimestamp = this.cache.get( message )!;
        if ( timestamp - lastTimestamp < 10 ) {
            return false;
        }
        this.cache.set( message, timestamp );
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

describe( '359. Logger Rate Limiter', () => {
    it( 'should work', () => {
        const logger = new Logger();
        expect( logger.shouldPrintMessage( 1, 'foo' ) ).toBe( true );
        expect( logger.shouldPrintMessage( 2, 'bar' ) ).toBe( true );
        expect( logger.shouldPrintMessage( 3, 'foo' ) ).toBe( false );
        expect( logger.shouldPrintMessage( 8, 'bar' ) ).toBe( false );
        expect( logger.shouldPrintMessage( 10, 'foo' ) ).toBe( false );
        expect( logger.shouldPrintMessage( 11, 'foo' ) ).toBe( true );
    } );
} );

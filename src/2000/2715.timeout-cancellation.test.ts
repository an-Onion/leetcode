export type Fn = ( ...args: JSONValue[] ) => void;

function cancellable( fn: Fn, args: JSONValue[], t: number ): () => void {
    const timeId = setTimeout( () => {
        fn.call( null, ...args );
    }, t );
    return () => {
        clearTimeout( timeId );
    };
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

describe( '2715.timeout-cancellation', () => {
    it( 'case 1', () => {
        const result = [];

        const fn = ( x: number ) => x * 5;
        const args = [2],
            t = 20,
            cancelTimeMs = 50;

        const start = performance.now();

        const log = ( argsArr: number ) => {
            const diff = Math.floor( performance.now() - start );
            result.push( { time: diff, returned: fn( argsArr ) } );
        };

        const cancel = cancellable( log, args, t );

        const maxT = Math.max( t, cancelTimeMs );

        setTimeout( cancel, cancelTimeMs );

        setTimeout( () => {
            expect( result ).toEqual( [{ time: 20, returned: 10 }] );
        }, maxT + 15 );
    } );
} );

/* eslint-disable @typescript-eslint/no-explicit-any */

function cancellable<T>(
    generator: Generator<Promise<any>, T, unknown>,
): [() => void, Promise<T>] {
    let cancel = () => {};
    const p: Promise<any> = new Promise( ( resolve, reject ) => {
        cancel = ( msg = 'Cancelled' ) => {
            run( msg, 'throw' );
        };
        const run = ( ret, fnName = 'next' ) => {
            try {
                const { value, done } = generator[fnName]( ret );
                if ( done ) {
                    resolve( value );
                    return;
                }
                value
                    .then( ( val ) => {
                        run( val );
                    } )
                    .catch( ( err ) => {
                        run( err, 'throw' );
                    } );
            } catch ( errorByGenerator ) {
                reject( errorByGenerator );
            }
        };
        run( null );
    } );
    return [cancel, p];
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */

describe( '2255.design-cancellable-function', () => {
    it( 'case 1', () => {
        function* tasks() {
            const val = yield new Promise( ( resolve ) => resolve( 2 + 2 ) );
            yield new Promise( ( resolve ) => setTimeout( resolve, 100 ) );
            return val + 1;
        }
        const [cancel, promise] = cancellable( tasks() );
        setTimeout( cancel, 50 );
        promise.catch( ( e ) => {
            expect( e ).toBe( 'Cancelled' );
        } );
    } );

    it( 'case 2', () => {
        function* tasks() {
            const val = yield new Promise( ( resolve ) => resolve( 2 + 2 ) );
            yield new Promise( ( resolve ) => setTimeout( resolve, 100 ) );
            return val + 1;
        }
        const [cancel, promise] = cancellable( tasks() );
        setTimeout( cancel, 150 );
        promise.then( ( data ) => {
            expect( data ).toBe( 5 );
        } );
    } );
} );

export type Fn<T> = () => Promise<T>;

function promiseAll<T>( functions: Fn<T>[] ): Promise<T[]> {
    return new Promise( ( resolve, reject ) => {
        const ret: T[] = [];
        let count = 0;
        functions.forEach( ( fn, idx ) => {
            fn()
                .then( ( data ) => {
                    ret[idx] = data;
                    if ( ++count === functions.length ) {
                        resolve( ret );
                    }
                } )
                .catch( ( e ) => {
                    reject( e );
                } );
        } );
    } );
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

describe( 'Execute Asynchronous Functions in Parallel', () => {
    it( 'case 1', async () => {
        const ret = await promiseAll( [
            () => new Promise( ( resolve ) => setTimeout( () => resolve( 5 ), 200 ) ),
        ] );

        expect( ret ).toEqual( [5] );
    } );

    it( 'case 2', async () => {
        const func = [
            () => new Promise( ( resolve ) => setTimeout( () => resolve( 1 ), 200 ) ),
            () =>
                new Promise( ( resolve, reject ) =>
                    setTimeout( () => reject( 'Error' ), 100 ),
                ),
        ];
        try {
            await promiseAll( func );
        } catch ( e ) {
            expect( e ).toEqual( 'Error' );
        }
    } );

    it( 'case 3', async () => {
        const functions = [
            () => new Promise( ( resolve ) => setTimeout( () => resolve( 4 ), 50 ) ),
            () => new Promise( ( resolve ) => setTimeout( () => resolve( 10 ), 150 ) ),
            () => new Promise( ( resolve ) => setTimeout( () => resolve( 16 ), 100 ) ),
        ];

        const ret = await promiseAll( functions );
        expect( ret ).toStrictEqual( [4, 10, 16] );
    } );
} );

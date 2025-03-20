/* eslint-disable @typescript-eslint/no-explicit-any */
export type Fn = ( ...params: any[] ) => Promise<any>;

function timeLimit( fn: Fn, t: number ): Fn {
    return async function ( ...args ) {
        return new Promise( ( resolve, reject ) => {
            const timeout = setTimeout( () => {
                reject( 'Time Limit Exceeded' );
            }, t );

            fn( ...args )
                .then( ( result ) => resolve( result ) )
                .catch( ( err ) => reject( err ) )
                .finally( () => clearTimeout( timeout ) );
        } );
    };
}

describe( '2637. promise-time-limit', () => {
    it.skip( 'case 1', () => {
        const fn = async ( n: number ) => {
            await new Promise( ( res ) => setTimeout( res, 100 ) );
            return n * n;
        };
        try {
            timeLimit( fn, 50 )( 1 );
        } catch ( e ) {
            expect( e ).toBe( 'Time Limit Exceeded' );
        }
    } );

    it( 'case 2', async () => {
        const fn = async ( n: number ) => {
            await new Promise( ( res ) => setTimeout( res, 100 ) );
            return n * n;
        };
        const result = await timeLimit( fn, 150 )( 1 );
        expect( result ).toBe( 1 );
    } );
} );

async function sleep( millis: number ): Promise<void> {
    return new Promise( ( resolve, reject ) => {
        try {
            setTimeout( () => resolve(), millis );
        } catch ( err ) {
            reject( err );
        }
    } );
}

describe( '2621.sleep.test', () => {
    it( 'case 1', async () => {
        /**
         * let t = Date.now()
         * sleep(100).then(() => console.log(Date.now() - t)) // 100
         */
        const t = Date.now();
        sleep( 100 ).then( () => {
            expect( Date.now() - t ).toBeGreaterThanOrEqual( 100 );
        } );
    } );

    it( 'case 2', async () => {
        const t = Date.now();
        await sleep( 150 );
        expect( Date.now() - t ).toBeGreaterThanOrEqual( 150 );
    } );
} );

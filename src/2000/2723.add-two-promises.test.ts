type P = Promise<number>;

async function addTwoPromises( promise1: P, promise2: P ): P {
    const [a, b] = await Promise.all( [promise1, promise2] );
    return a + b;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

describe( '2723. Add Two Promises', () => {
    it( 'should add two promises', async () => {
        expect(
            await addTwoPromises( Promise.resolve( 2 ), Promise.resolve( 2 ) ),
        ).toBe( 4 );
    } );
} );

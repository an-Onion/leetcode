function countTestedDevices( batteryPercentages: number[] ): number {
    let ret = 0;

    for ( let i = 0; i < batteryPercentages.length; i++ ) {
        if ( batteryPercentages[i] > ret ) {
            ret++;
        }
    }

    return ret;
}

describe( '2960. count-tested-devices-after-test-operations', () => {
    it( 'case 1', () => {
        expect( countTestedDevices( [1, 1, 2, 1, 3] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( countTestedDevices( [0, 1, 2] ) ).toBe( 2 );
    } );
} );

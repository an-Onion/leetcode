function theMaximumAchievableX( num: number, t: number ): number {
    return num + 2 * t;
}

describe( '2769.find-the-maximum-achievable-number', () => {
    it( 'case 1', () => {
        expect( theMaximumAchievableX( 4, 1 ) ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect( theMaximumAchievableX( 3, 2 ) ).toBe( 7 );
    } );
} );

function dynamicPassword( password: string, target: number ): string {
    return password.slice( target ) + password.slice( 0, target );
}

describe( 'LCR 183. zuo-xuan-zhuan-zi-fu-chuan-lcof', () => {
    it( 'case 1', () => {
        expect( dynamicPassword( 's3cur1tyC0d3', 4 ) ).toBe( 'r1tyC0d3s3cu' );
    } );

    it( 'case 2', () => {
        expect( dynamicPassword( 'lrloseumgh', 6 ) ).toBe( 'umghlrlose' );
    } );
} );

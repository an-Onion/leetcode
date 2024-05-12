/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function( isBadVersion: ( version: number ) => boolean ) {

    return function( n: number ): number {

        let low = 1, up = n;

        while ( low <= up ) {
            const m = up - ( up-low >> 1 );
            if ( isBadVersion( m ) ) {
                up = m -1;
            } else {
                low = m + 1;
            }
        }
        return low;
    };
};

describe( '278. first bad version', () => {
    it( 'n = 5, bad = 4', () => {
        const isBadVersion = ( n: number ) => n >= 4;
        const s = solution( isBadVersion );
        expect( s( 5 ) ).toBe( 4 );
    } );

    it( 'n = 1, bad = 1', () => {
        const isBadVersion = ( n: number ) => n >= 1;
        const s = solution( isBadVersion );
        expect( s( 1 ) ).toBe( 1 );
    } );
} );
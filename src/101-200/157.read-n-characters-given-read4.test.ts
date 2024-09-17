/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

export const solution = function ( read4: ( arr: string[] ) => number ) {
    return function ( buf: string[], n: number ): number {
        const temp: string[] = [];
        while ( buf.length < n ) {
            const count = read4( temp );
            if ( !count ) {
                break;
            }
            for ( let i = 0; i < count; ++i ) {
                buf.push( temp[i] );
                if ( buf.length >= n ) break;
            }
        }
        return Math.min( buf.length, n );
    };
};

describe( '157. Read N Characters Given Read4', () => {
    it( 'should work', () => {
        const read4 = ( buf4: string[] ) => {
            const file = 'abc';
            buf4.push( ...file.split( '' ) );
            return file.length;
        };
        const result = [];
        expect( solution( read4 )( result, 3 ) ).toBe( 3 );
        expect( result ).toEqual( ['a', 'b', 'c'] );
    } );
} );

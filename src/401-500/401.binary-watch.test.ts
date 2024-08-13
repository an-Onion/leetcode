function readBinaryWatch( turnedOn: number ): string[] {
    const ret: string[] = [];

    for ( let i = 0; i < 12; i++ ) {
        for ( let j = 0; j < 60; j++ ) {
            if ( countBits( i ) + countBits( j ) === turnedOn ) {
                const time = `${i}:` + `${j}`.padStart( 2, '0' );
                ret.push( time );
            }
        }
    }

    return ret;
    function countBits( n: number ): number {
        let count = 0;
        while ( n ) {
            count++;
            n = n & ( n - 1 );
        }
        return count;
    }
}

describe( '401. Binary Watch', () => {
    it( '1', () => {
        expect( readBinaryWatch( 1 ) ).toEqual( [
            '0:01',
            '0:02',
            '0:04',
            '0:08',
            '0:16',
            '0:32',
            '1:00',
            '2:00',
            '4:00',
            '8:00',
        ] );
    } );

    it( '9', () => {
        expect( readBinaryWatch( 9 ) ).toEqual( [] );
    } );
} );

function lengthLongestPath( input: string ): number {

    const lines = input.split( '\n' );

    let ret = 0;
    const pathLengths: number[] = [0];

    for( const line of lines ) {
        const path = line.split( '\t' );
        const depth = path.length - 1;
        if( path.at( -1 ).includes( '.' ) ) {
            // file
            const length = pathLengths[depth] + path.at( -1 ).length;
            ret = Math.max( ret, length );
            continue;
        }
        // folder
        pathLengths[depth + 1] = ( pathLengths[depth] ?? 0 ) + path.at( -1 ).length + 1;
    }

    return ret;

}

describe( '388. Longest Absolute File Path', () => {

    it( 'should return 20', () => {
        expect( lengthLongestPath( 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext' ) ).toBe( 20 );
    } );

    it( 'should return 32', () => {
        expect( lengthLongestPath( 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext' ) ).toBe( 32 );
    } );


    it( 'should return 0', () => {
        expect( lengthLongestPath( 'a' ) ).toBe( 0 );
    } );

    it( 'without folders', () => {
        expect( lengthLongestPath( 'file1.txt\nfile2.txt\nlongfile.txt' ) ).toBe( 12 );
    } );
} );
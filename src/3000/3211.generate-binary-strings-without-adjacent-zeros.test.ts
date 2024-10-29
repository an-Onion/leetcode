function validStrings( n: number ): string[] {
    const ret: string[] = [];

    DFS( [] );

    return ret;

    function DFS( arr: number[] ) {
        if ( arr.length === n ) {
            ret.push( arr.join( '' ) );
            return;
        }
        if ( arr.length === 0 || arr.at( -1 ) === 1 ) {
            arr.push( 0 );
            DFS( arr );
            arr.pop();
        }
        arr.push( 1 );
        DFS( arr );
        arr.pop();
    }
}

describe( '3211.generate-binary-strings-without-adjacent-zeros', () => {
    it( '3', () => {
        expect( validStrings( 3 ) ).toEqual( ['010', '011', '101', '110', '111'] );
    } );

    it( '1', () => {
        expect( validStrings( 1 ) ).toEqual( ['0', '1'] );
    } );
} );

function isValidSerialization( preOrder: string ): boolean {
    let degree = 1;

    const nodes = preOrder.split( ',' );

    for ( const node of nodes ) {
        if ( degree <= 0 ) return false;
        node === '#' ? degree-- : degree++;
    }

    return degree === 0;
}

describe( '331. verify-preorder-serialization-of-a-binary-tree', () => {
    it( '9,3,4,#,#,1,#,#,2,#,6,#,#', () => {
        expect( isValidSerialization( '9,3,4,#,#,1,#,#,2,#,6,#,#' ) ).toBeTruthy();
    } );

    it( '1,#', () => {
        expect( isValidSerialization( '1,#' ) ).toBeFalsy();
    } );

    it( '9,#,#,1', () => {
        expect( isValidSerialization( '9,#,#,1' ) ).toBeFalsy();
    } );
} );

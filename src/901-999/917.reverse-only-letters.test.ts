function reverseOnlyLetters( s: string ): string {
    const isLetter = ( c: string ) => c.match( /[a-zA-Z]/ );

    const arr = s.split( '' );
    let l = 0,
        r = arr.length - 1;
    while ( l < r ) {
        while ( l < r && !isLetter( arr[l] ) ) {
            l++;
        }
        while ( l < r && !isLetter( arr[r] ) ) {
            r--;
        }
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++, r--;
    }
    return arr.join( '' );
}

describe( '917. reverseOnlyLetters', () => {
    it( 'case 1', () => {
        expect( reverseOnlyLetters( 'ab-cd' ) ).toBe( 'dc-ba' );
    } );

    it( 'case 2', () => {
        expect( reverseOnlyLetters( 'a-bC-dEf-ghIj' ) ).toBe( 'j-Ih-gfE-dCba' );
    } );
    it( 'case 3', () => {
        expect( reverseOnlyLetters( 'Test1ng-Leet=code-Q!' ) ).toBe(
            'Qedo1ct-eeLg=ntse-T!',
        );
    } );
} );

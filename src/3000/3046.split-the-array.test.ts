function isPossibleToSplit( nums: number[] ): boolean {
    const map = new Map<number, number>();
    for ( const num of nums ) {
        const count = map.get( num ) || 0;
        if ( count >= 2 ) return false;
        map.set( num, count + 1 );
    }

    return true;
}

describe( '3046. Split the Array', () => {
    test( 'Case 1', () => {
        const nums = [1, 1, 2, 2, 3, 4];
        expect( isPossibleToSplit( nums ) ).toBeTruthy();
    } );
    test( 'Case 2', () => {
        const nums = [1, 1, 1, 1];
        expect( isPossibleToSplit( nums ) ).toBeFalsy();
    } );
} );

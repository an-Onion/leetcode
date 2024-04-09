function twoSum( numbers: number[], target: number ): number[] {
    let [l, r] = [0, numbers.length - 1];

    while( l < r ) {
        const sum = numbers[l] + numbers[r];
        if( sum === target ) return [l + 1, r + 1];
        if( sum < target ) l++;
        else r--;
    }
    return [];
}

describe( '167. two-sum-ii-input-array-is-sorted', () => {
    it( 'numbers = [2,7,11,15], target = 9', () => {
        const numbers = [2,7,11,15], target = 9;
        expect( twoSum( numbers, target ) ).toEqual( [1,2] );
    } );

    it( 'numbers = [2,3,4], target = 6', () => {
        const numbers = [2,3,4], target = 6;
        expect( twoSum( numbers, target ) ).toEqual( [1,3] );
    } );

    it( 'numbers = [-1,0], target = -1', () => {
        const numbers = [-1,0], target = -1;
        expect( twoSum( numbers, target ) ).toEqual( [1,2] );
    } );

} );
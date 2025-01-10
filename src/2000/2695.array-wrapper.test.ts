class ArrayWrapper {
    nums: number[];
    constructor( nums: number[] ) {
        this.nums = nums;
    }

    valueOf(): number {
        return this.nums.reduce( ( acc, cur ) => acc + cur, 0 );
    }

    toString(): string {
        return `[${this.nums}]`;
    }
}

describe( '2695. Array Wrapper', () => {
    it( 'case 1', () => {
        const obj1 = new ArrayWrapper( [1, 2] );
        const obj2 = new ArrayWrapper( [3, 4] );
        expect( +obj1 ).toBe( 3 );
        expect( +obj2 + +obj1 ).toBe( 10 );
        expect( String( obj1 ) ).toBe( '[1,2]' );
        expect( String( obj2 ) ).toBe( '[3,4]' );
    } );
} );

export {}; // This makes the file an external module

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function () {
    const len = this.length;
    return len === 0 ? -1 : this[len - 1];
};

describe( '2619.array-prototype-last', () => {
    it( 'case 1', () => {
        expect( [1, 2, 3].last() ).toEqual( 3 );
    } );
    it( 'case 2', () => {
        expect( [].last() ).toEqual( -1 );
    } );
} );

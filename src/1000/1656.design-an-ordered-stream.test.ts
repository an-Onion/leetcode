class OrderedStream {
    buffer: string[];
    ptr: number;
    constructor( n: number ) {
        this.buffer = new Array( n + 1 );
        this.ptr = 1;
    }

    insert( idKey: number, value: string ): string[] {
        this.buffer[idKey] = value;
        const start = this.ptr;
        while ( this.buffer[this.ptr] ) {
            this.ptr++;
        }
        return this.buffer.slice( start, this.ptr );
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

describe( '1656.design-an-ordered-stream', () => {
    it( 'case 1', () => {
        const os = new OrderedStream( 5 );
        expect( os.insert( 3, 'ccccc' ) ).toEqual( [] );
        expect( os.insert( 1, 'aaaaa' ) ).toEqual( ['aaaaa'] );
        expect( os.insert( 2, 'bbbbb' ) ).toEqual( ['bbbbb', 'ccccc'] );
        expect( os.insert( 5, 'eeeee' ) ).toEqual( [] );
        expect( os.insert( 4, 'ddddd' ) ).toEqual( ['ddddd', 'eeeee'] );
    } );
} );

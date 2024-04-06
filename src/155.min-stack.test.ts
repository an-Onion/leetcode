class MinStack {
    stack : number[];
    mono : number[];
    constructor() {
        this.stack = [];
        this.mono = [];
    }

    push( val: number ): void {
        this.stack.push( val );
        if( val > this.mono.at( -1 ) ) return;
        this.mono.push( val );
    }

    pop(): void {
        const top = this.stack.pop();
        if( top === this.mono.at( -1 ) ) 
            this.mono.pop();
    }

    top(): number {
        return this.stack.at( -1 );
    }

    getMin(): number {
        return this.mono.at( -1 );
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

describe( '155. min stack', () => {
    it( 'Example 1', () => {
        const ops = ['MinStack', 'push','push','push','getMin','pop','top','getMin'];
        const values = [[], [-2],[0],[-3],[],[],[],[]];
        const stack = new MinStack();
        const ret = ops.map( ( op, idx ) => {
            if( op === 'push' ) {
                stack.push( values[idx][0] );
                return null;
            }
            if( op === 'getMin' ) {
                return stack.getMin();
            }
            if( op === 'pop' ) {
                stack.pop();
                return null;
            }
            if( op === 'top' ) {
                return stack.top();
            }
            return null;
        } );
        expect( ret ).toStrictEqual( [null, null,null,null,-3,null,0,-2] );
    } );
} );
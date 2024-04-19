class MyStack {

    Q: number[];

    constructor() {
        this.Q = [];
    }

    push( x: number ): void {
        let len = this.Q.length;
        this.Q.push( x );
        while( len-- ){
            this.Q.push( this.Q.shift()! );
        }
    }

    pop(): number {
        return this.Q.shift();
    }

    top(): number {
        return this.Q[0];
    }

    empty(): boolean {
        return this.Q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

describe( '225. implement-stack-using-queues', () => {
    it( 'case 1', () => {
        const obj = new MyStack();
        obj.push( 1 );
        obj.push( 2 );
        expect( obj.pop() ).toBe( 2 );
        expect( obj.top() ).toBe( 1 );
        expect( obj.empty() ).toBeFalsy();
    } );
} );
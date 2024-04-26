class MyQueue {
    
    inStack: number[];
    outStack: number[];

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push( x: number ): void {
        this.inStack.push( x );
    }

    pop(): number {
        if( this.outStack.length ){
            return this.outStack.pop();
        }

        while( this.inStack.length ){
            this.outStack.push( this.inStack.pop() );
        }
        return this.outStack.pop();
    }

    peek(): number {
        return this.outStack.at( -1 ) ?? this.inStack.at( 0 );
    }

    empty(): boolean {
        return !this.outStack.length && !this.inStack.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

describe( '232. Implement Queue using Stacks', () => {
    it( '232. Implement Queue using Stacks', () => {
        const queue = new MyQueue();
        queue.push( 1 );
        queue.push( 2 );
        expect( queue.peek() ).toBe( 1 );
        expect( queue.pop() ).toBe( 1 );
        expect( queue.empty() ).toBe( false );
    } );
} );
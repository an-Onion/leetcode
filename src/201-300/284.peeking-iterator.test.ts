/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator<T> {
    iterator: Iterator<T>;
    nextElement: number;
    hasNextElement: boolean;

    constructor( iterator: Iterator<T> ) {
        this.iterator = iterator;
        const { value, done } = this.iterator.next();
        this.nextElement = value;
        this.hasNextElement = !done;
    }

    peek(): number {
        return this.nextElement;
    }

    next(): number {
        const temp = this.nextElement;
        const { value, done } = this.iterator.next();
        this.nextElement =  value;
        this.hasNextElement = !done;
        return temp;
    }

    hasNext(): boolean {
        return this.hasNextElement;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

describe( '284. peeking-iterator', () => {

    it( 'case 1', () => {

        const arr = [1,2,3];
        const iterator = arr.values();

        const it = new PeekingIterator( iterator );
        expect( it.next() ).toBe( 1 );
        expect( it.peek() ).toBe( 2 );
        expect( it.next() ).toBe( 2  );
        expect( it.next() ).toBe( 3  );
        expect( it.hasNext() ).toBe( false );
    } );

} );
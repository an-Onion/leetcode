import { MinPriorityQueue } from '@datastructures-js/priority-queue';

class NumberContainers {
    private nums: Map<number, number>;
    private heaps: Map<number, MinPriorityQueue<number>>;

    constructor() {
        this.nums = new Map<number, number>();
        this.heaps = new Map<number, MinPriorityQueue<number>>();
    }

    change( index: number, number: number ): void {
        this.nums.set( index, number );
        if ( !this.heaps.has( number ) ) {
            this.heaps.set( number, new MinPriorityQueue<number>() );
        }
        this.heaps.get( number )!.enqueue( index );
    }

    find( number: number ): number {
        if ( !this.heaps.has( number ) ) {
            return -1;
        }

        const heap = this.heaps.get( number )!;
        while ( !heap.isEmpty() && this.nums.get( heap.front()! ) !== number ) {
            heap.dequeue();
        }
        return heap.isEmpty() ? -1 : heap.front()!;
    }
}

describe( '2349. Design a Number Container System', () => {
    it( 'case 1', () => {
        const numberContainers = new NumberContainers();
        expect( numberContainers.find( 10 ) ).toBe( -1 );
        numberContainers.change( 2, 10 );
        numberContainers.change( 1, 10 );
        numberContainers.change( 3, 10 );
        numberContainers.change( 5, 10 );
        expect( numberContainers.find( 10 ) ).toBe( 1 );
        numberContainers.change( 1, 20 );
        expect( numberContainers.find( 10 ) ).toBe( 2 );
    } );
} );

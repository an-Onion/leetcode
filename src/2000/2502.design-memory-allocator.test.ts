class Allocator {
    memory: number[];
    constructor( n: number ) {
        this.memory = Array( n ).fill( 0 );
    }

    allocate( size: number, mID: number ): number {
        let cnt = 0;
        for ( let i = 0; i < this.memory.length; i++ ) {
            if ( this.memory[i] ) {
                cnt = 0;
                continue;
            }
            if ( ++cnt === size ) {
                const start = i - size + 1;
                for ( let j = start; j <= i; j++ ) {
                    this.memory[j] = mID;
                }
                return start;
            }
        }
        return -1;
    }

    freeMemory( mID: number ): number {
        let cnt = 0;
        for ( let i = 0; i < this.memory.length; i++ ) {
            if ( this.memory[i] === mID ) {
                this.memory[i] = 0;
                cnt++;
            }
        }
        return cnt;
    }
}

describe( '2502. Design Memory Allocator', () => {
    it( 'case 1', () => {
        const allocator = new Allocator( 10 ); // Initialize a memory array of size 10. All memory units are initially free.
        expect( allocator.allocate( 1, 1 ) ).toBe( 0 ); // The leftmost block's first index is 0. The memory array becomes [1,_,_,_,_,_,_,_,_,_]. We return 0.
        expect( allocator.allocate( 1, 2 ) ).toBe( 1 ); // The leftmost block's first index is 1. The memory array becomes [1,2,_,_,_,_,_,_,_,_]. We return 1.
        expect( allocator.allocate( 1, 3 ) ).toBe( 2 ); // The leftmost block's first index is 2. The memory array becomes [1,2,3,_,_,_,_,_,_,_].
        expect( allocator.freeMemory( 2 ) ).toBe( 1 ); // Free all memory units with mID 2. The memory array becomes [1,_, 3,_,_,_,_,_,_,_]. We return 1 since there is only 1 unit with mID 2.
        expect( allocator.allocate( 3, 4 ) ).toBe( 3 ); // The left
        expect( allocator.allocate( 1, 1 ) ).toBe( 1 ); // The leftmost block's first index is 1. The memory array becomes [1,1,3,4,_,_,_,_,_,_]. We return 1.
        expect( allocator.allocate( 1, 1 ) ).toBe( 6 ); // The leftmost block's first index is 6. The memory array becomes [1,1,3,4,_,_,1,_,_,_]. We return 6.
        expect( allocator.freeMemory( 1 ) ).toBe( 3 ); // Free all memory units with mID 1. The memory array becomes [_,_,3,4,_,_,1,_,_,_]. We return 3 since there are 3 units with mID 1.
        expect( allocator.allocate( 10, 2 ) ).toBe( -1 ); // We can not find any free block with 10 consecutive free memory units, so we return -1.
        expect( allocator.freeMemory( 7 ) ).toBe( 0 ); // Free all memory units with mID 7. The memory array remains the same since there is no memory unit with mID 7.
    } );
} );

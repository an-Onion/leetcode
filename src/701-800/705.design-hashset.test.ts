class MyHashSet {
    BASE: number = 769;
    data: number[][];
    constructor() {
        this.data = Array.from( { length: this.BASE }, () => [] );
    }

    hash( key: number ): number {
        return key % this.BASE;
    }

    add( key: number ): void {
        const h = this.hash( key );

        for ( const element of this.data[h] ) {
            if ( element === key ) {
                return;
            }
        }

        this.data[h].push( key );
    }

    remove( key: number ): void {
        const h = this.hash( key );

        for ( let i = 0; i < this.data[h].length; i++ ) {
            if ( this.data[h][i] === key ) {
                this.data[h][i] = this.data[h].at( -1 );
                this.data[h].pop();
                return;
            }
        }
    }

    contains( key: number ): boolean {
        const h = this.hash( key );

        for ( const element of this.data[h] ) {
            if ( element === key ) {
                return true;
            }
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

describe( '705.design-hashset', () => {
    it( 'case 1', () => {
        const obj = new MyHashSet();

        obj.add( 1 );
        obj.add( 2 );
        expect( obj.contains( 1 ) ).toBe( true );
        expect( obj.contains( 3 ) ).toBe( false );
        obj.add( 2 );
        expect( obj.contains( 2 ) ).toBe( true );
        obj.remove( 2 );
        expect( obj.contains( 2 ) ).toBe( false );
    } );
} );

class NestedInteger {
    value: number;
    list: NestedInteger[];

    constructor( value?: number ) {
        this.value = value;
        this.list = [];
    }

    isInteger() {
        return this.value !== undefined;
    }

    getInteger() {
        return this.value;
    }

    add( ni: NestedInteger ) {
        this.list.push( ni );
    }
    getList(): NestedInteger[] {
        const ret = [];

        for ( const item of this.list ) {
            if ( item.isInteger() ) {
                ret.push( item.getInteger() );
            } else {
                ret.push( item.getList() );
            }
        }
        return ret;
    }
}

function deserialize( s: string ): NestedInteger {
    if ( !s.startsWith( '[' ) ) {
        return new NestedInteger( parseInt( s ) );
    }

    const stack: NestedInteger[] = [];

    let num = '';

    for ( let i = 0; i < s.length; ++i ) {
        const c = s[i];
        if ( !['[', ',', ']'].includes( c ) ) {
            num = num + c;
            continue;
        }

        if ( c === ',' ) {
            if ( num ) {
                stack.at( -1 ).add( new NestedInteger( parseInt( num ) ) );
                num = '';
            }
            continue;
        }

        if ( c === ']' ) {
            if ( num ) {
                stack.at( -1 ).add( new NestedInteger( parseInt( num ) ) );
                num = '';
            }
            if ( stack.length > 1 ) {
                const top = stack.pop();
                stack.at( -1 ).add( top );
            }
            continue;
        }

        if ( c === '[' ) {
            stack.push( new NestedInteger() );
            continue;
        }
    }
    return stack.pop();
}

describe( '385. Mini Parser', () => {
    it( '324', () => {
        expect( deserialize( '324' ).getInteger() ).toEqual( 324 );
    } );

    it( '[123,[456,[789]]]', () => {
        expect( deserialize( '[123,[456,[789]]]' ).getList() ).toEqual( [
            123,
            [456, [789]],
        ] );
    } );

    it( '[[],[]]', () => {
        expect( deserialize( '[[],[]]' ).getList() ).toEqual( [[], []] );
    } );
} );

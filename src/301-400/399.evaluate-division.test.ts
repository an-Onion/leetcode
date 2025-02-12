function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][],
): number[] {
    const ds = new DisjointSet();

    for ( let i = 0; i < equations.length; i++ ) {
        const [x, y] = equations[i];
        ds.join( x, y, values[i] );
    }

    const ret: number[] = [];

    for ( const [x, y] of queries ) {
        if ( !ds.has( x ) || !ds.has( y ) ) {
            ret.push( -1 );
            continue;
        }
        const [xParent, xRatio] = ds.find( x );
        const [yParent, yRatio] = ds.find( y );
        if ( xParent[0] !== yParent[0] ) {
            ret.push( -1 );
            continue;
        }

        ret.push( xRatio / yRatio );
    }

    return ret;
}

class DisjointSet {
    parent: Map<string, [string, number]>;
    constructor() {
        this.parent = new Map();
    }

    has( x: string ) {
        return this.parent.has( x );
    }

    find( x: string ) {
        if ( !this.parent.has( x ) ) {
            this.parent.set( x, [x, 1] );
        }
        let y = x,
            val = 1;

        while ( y !== this.parent.get( y )[0] ) {
            const [parent, ratio] = this.parent.get( y );
            y = parent;
            val *= ratio;
        }
        this.parent.set( x, [y, val] );
        return this.parent.get( x );
    }

    join( x: string, y: string, ratio: number ) {
        const [xParent, xRatio] = this.find( x );
        const [yParent, yRatio] = this.find( y );

        if ( xParent === yParent ) return;

        this.parent.set( xParent, [yParent, ( ratio * yRatio ) / xRatio] );
    }
}

describe( '399. Evaluate Division', () => {
    it( 'example', () => {
        expect(
            calcEquation(
                [
                    ['a', 'b'],
                    ['b', 'c'],
                ],
                [2.0, 3.0],
                [
                    ['a', 'c'],
                    ['b', 'a'],
                    ['a', 'e'],
                    ['a', 'a'],
                    ['x', 'x'],
                ],
            ),
        ).toEqual( [6.0, 0.5, -1.0, 1.0, -1.0] );
        expect(
            calcEquation(
                [
                    ['a', 'b'],
                    ['b', 'c'],
                    ['bc', 'cd'],
                ],
                [1.5, 2.5, 5.0],
                [
                    ['a', 'c'],
                    ['c', 'b'],
                    ['bc', 'cd'],
                    ['cd', 'bc'],
                ],
            ),
        ).toEqual( [3.75, 0.4, 5.0, 0.2] );
        expect(
            calcEquation(
                [['a', 'b']],
                [0.5],
                [
                    ['a', 'b'],
                    ['b', 'a'],
                    ['a', 'c'],
                    ['x', 'y'],
                ],
            ),
        ).toEqual( [0.5, 2.0, -1.0, -1.0] );
    } );
} );

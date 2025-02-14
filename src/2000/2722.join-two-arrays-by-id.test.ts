type ArrayType = { id: number } & Record<string, JSONValue>;

function join( arr1: ArrayType[], arr2: ArrayType[] ): ArrayType[] {
    arr1.sort( ( a, b ) => a.id - b.id );
    arr2.sort( ( a, b ) => a.id - b.id );

    const ret: ArrayType[] = [];

    let i = 0,
        j = 0;

    while ( i < arr1.length || j < arr2.length ) {
        if ( i >= arr1.length || arr1[i].id > arr2[j]?.id ) {
            ret.push( arr2[j++] );
            continue;
        }

        if ( j >= arr2.length || arr1[i]?.id < arr2[j].id ) {
            ret.push( arr1[i++] );
            continue;
        }
        ret.push( { ...arr1[i++], ...arr2[j++] } );
    }

    return ret;
}

describe( '2722.join-two-arrays-by-id', () => {
    it( 'case 1', () => {
        const arr1 = [
                { id: 1, x: 1 },
                { id: 2, x: 9 },
            ],
            arr2 = [{ id: 3, x: 5 }];
        expect( join( arr1, arr2 ) ).toEqual( [
            { id: 1, x: 1 },
            { id: 2, x: 9 },
            { id: 3, x: 5 },
        ] );
    } );

    it( 'case 2', () => {
        const arr1 = [
                { id: 1, x: 2, y: 3 },
                { id: 2, x: 3, y: 6 },
            ],
            arr2 = [
                { id: 2, x: 10, y: 20 },
                { id: 3, x: 0, y: 0 },
            ];
        expect( join( arr1, arr2 ) ).toEqual( [
            { id: 1, x: 2, y: 3 },
            { id: 2, x: 10, y: 20 },
            { id: 3, x: 0, y: 0 },
        ] );
    } );

    it( 'case 3', () => {
        const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
            arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
        expect( join( arr1, arr2 ) ).toEqual( [
            { id: 1, b: { c: 84 }, v: [1, 3], y: 48 },
        ] );
    } );

    it( 'case 4', () => {
        const arr1 = [
                { id: 1, r: 67, h: 83, d: 2 },
                { id: 2, f: 84, o: 46, l: 7 },
            ],
            arr2 = [{ id: 1, c: 70, w: 1 }];
        expect( join( arr1, arr2 ) ).toEqual( [
            { id: 1, r: 67, h: 83, d: 2, c: 70, w: 1 },
            { id: 2, f: 84, o: 46, l: 7 },
        ] );
    } );
} );

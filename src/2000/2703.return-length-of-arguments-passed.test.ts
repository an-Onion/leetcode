export type JSONValue =
    | null
    | boolean
    | number
    | string
    | JSONValue[]
    | { [key: string]: JSONValue };

function argumentsLength( ...args: JSONValue[] ): number {
    return args.length;
}

describe( '2703. return length of arguments passed', () => {
    it( 'case 1', () => {
        expect( argumentsLength( 5 ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( argumentsLength( {}, null, '3' ) ).toBe( 3 );
    } );
} );

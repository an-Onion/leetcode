/* eslint-disable @typescript-eslint/no-explicit-any */
type ToBeOrNotToBe = {
    toBe: ( val: any ) => boolean;
    notToBe: ( val: any ) => boolean;
};

const Problem = {
    expect: function ( val: any ): ToBeOrNotToBe {
        return {
            toBe: ( target: any ) => {
                if ( target === val ) return true;
                throw 'Not Equal';
            },
            notToBe: ( target: any ) => {
                if ( target !== val ) return true;
                throw 'Equal';
            },
        };
    },
};

describe( '2704. to-be-or-not-to-be', () => {
    it( 'case 1', () => {
        expect( Problem.expect( 5 ).toBe( 5 ) ).toBeTruthy(); // true
        expect( Problem.expect( 5 ).notToBe( 6 ) ).toBeTruthy();
    } );

    it( 'case 2', () => {
        try {
            Problem.expect( 5 ).notToBe( 5 );
        } catch ( e ) {
            expect( e ).toBe( 'Equal' );
        }
    } );

    it( 'case 3', () => {
        // expect( ).toThrow( 'Not Equal' );
        try {
            Problem.expect( 5 ).toBe( 6 );
        } catch ( e ) {
            expect( e ).toBe( 'Not Equal' );
        }
    } );
} );

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

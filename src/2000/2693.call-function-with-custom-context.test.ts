/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
    interface Function {
        callPolyfill( context: Record<any, any>, ...args: any[] ): any;
    }
}

Function.prototype.callPolyfill = function ( context, ...args ): JSONValue {
    const key = Symbol( 'key' ) as any;
    context.__proto__[key] = this;
    const res = context[key]( ...args );
    delete context.__proto__[key];
    return res;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

describe( '2693.call-function-with-custom-context', () => {
    it( 'case 1', () => {
        const fn = function add( b ) {
            return this.a + b;
        };
        expect( fn.callPolyfill( { a: 5 }, 7 ) ).toBe( 12 );
    } );

    it( 'case 2', () => {
        const fn = function tax( price, taxRate ) {
            return `The cost of the ${this.item} is ${price * taxRate}`;
        };
        expect( fn.callPolyfill( { item: 'burger' }, 10, 1.1 ) ).toBe(
            'The cost of the burger is 11',
        );
    } );
} );

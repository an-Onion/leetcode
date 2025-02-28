/* eslint-disable @typescript-eslint/no-explicit-any */
type Callback = ( ...args: any[] ) => any;
type Subscription = {
    unsubscribe: () => void;
};

class EventEmitter {
    events: Map<string, Set<Callback>>;

    constructor() {
        this.events = new Map();
    }

    subscribe( eventName: string, callback: Callback ): Subscription {
        if ( !this.events.has( eventName ) ) {
            this.events.set( eventName, new Set() );
        }
        this.events.get( eventName )?.add( callback );

        return {
            unsubscribe: () => {
                this.events.get( eventName )?.delete( callback );
            },
        };
    }

    emit( eventName: string, args: any[] = [] ): any[] {
        if ( !this.events.has( eventName ) ) {
            return [];
        }
        const callbacks = this.events.get( eventName );
        const result = [];
        for ( const callback of callbacks ) {
            result.push( callback( ...args ) );
        }
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

describe( '2694. Event emitter', () => {
    it( 'case 1', () => {
        const emitter = new EventEmitter();
        expect( emitter.emit( 'firstEvent' ) ).toEqual( [] );
        emitter.subscribe( 'firstEvent', function cb1() {
            return 5;
        } );
        expect( emitter.emit( 'firstEvent' ) ).toStrictEqual( [5] );
        emitter.subscribe( 'firstEvent', function cb1() {
            return 6;
        } );
        expect( emitter.emit( 'firstEvent' ) ).toStrictEqual( [5, 6] );
    } );

    it( 'case 2', () => {
        const emitter = new EventEmitter();
        emitter.subscribe( 'firstEvent', ( ...args ) => args.join( ',' ) );
        expect( emitter.emit( 'firstEvent', [1, 2, 3] ) ).toStrictEqual( ['1,2,3'] );
        expect( emitter.emit( 'firstEvent', [3, 4, 6] ) ).toStrictEqual( ['3,4,6'] );
    } );

    it( 'case 3', () => {
        const emitter = new EventEmitter();
        const sub = emitter.subscribe( 'firstEvent', ( ...args ) =>
            args.join( ',' ),
        );
        expect( emitter.emit( 'firstEvent', [1, 2, 3] ) ).toStrictEqual( ['1,2,3'] );
        sub.unsubscribe(); // undefined
        expect( emitter.emit( 'firstEvent', [4, 5, 6] ) ).toStrictEqual( [] );
    } );

    it( 'case 4', () => {
        const emitter = new EventEmitter();
        const sub1 = emitter.subscribe( 'firstEvent', ( x ) => x + 1 );
        emitter.subscribe( 'firstEvent', ( x ) => x + 2 );
        sub1.unsubscribe();
        expect( emitter.emit( 'firstEvent', [5] ) ).toStrictEqual( [7] );
    } );
} );

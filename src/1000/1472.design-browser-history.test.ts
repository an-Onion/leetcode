class BrowserHistory {
    history: string[];
    index: number;
    constructor( homepage: string ) {
        this.history = [homepage];
        this.index = 0;
    }

    visit( url: string ): void {
        this.history.splice( this.index + 1 );
        this.history.push( url );
        this.index = this.history.length - 1;
    }

    back( steps: number ): string {
        this.index = Math.max( 0, this.index - steps );
        return this.history[this.index];
    }

    forward( steps: number ): string {
        this.index = Math.min( this.history.length - 1, this.index + steps );
        return this.history[this.index];
    }
}

describe( '1472.design-browser-history', () => {
    it( 'case 1', () => {
        const browserHistory = new BrowserHistory( 'leetcode.com' );
        browserHistory.visit( 'google.com' );
        browserHistory.visit( 'facebook.com' );
        browserHistory.visit( 'youtube.com' );
        expect( browserHistory.back( 1 ) ).toBe( 'facebook.com' );
        expect( browserHistory.back( 1 ) ).toBe( 'google.com' );
        expect( browserHistory.forward( 1 ) ).toBe( 'facebook.com' );
        browserHistory.visit( 'linkedin.com' );
        expect( browserHistory.forward( 2 ) ).toBe( 'linkedin.com' );
        expect( browserHistory.back( 2 ) ).toBe( 'google.com' );
        expect( browserHistory.back( 7 ) ).toBe( 'leetcode.com' );
    } );
} );

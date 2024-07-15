class UnionFind {
    parents: number[];
    constructor( size: number ) {
        this.parents = Array( size ).fill( -1 );
    }

    find( idx: number ): number {
        if ( this.parents[idx] === -1 ) {
            return idx;
        }
        return this.find( this.parents[idx] );
    }

    union( x: number, y: number ) {
        const root1 = this.find( x );
        const root2 = this.find( y );
        if ( root1 !== root2 ) {
            this.parents[root1] = root2;
        }
    }
}

function accountsMerge( accounts: string[][] ): string[][] {
    const emailToIdx = new Map<string, number>();

    for ( let i = 0; i < accounts.length; i++ ) {
        const [, ...emails] = accounts[i];
        for ( const email of emails ) {
            emailToIdx.set( email, i );
        }
    }

    const uf = new UnionFind( accounts.length );

    for ( const [, ...emails] of accounts ) {
        for ( let i = 1; i < emails.length; i++ ) {
            uf.union(
                emailToIdx.get( emails[i - 1] )!,
                emailToIdx.get( emails[i] )!,
            );
        }
    }

    const idxToEmails = new Map<number, string[]>();
    for ( const [email, idx] of emailToIdx.entries() ) {
        const root = uf.find( idx );

        if ( !idxToEmails.has( root ) ) {
            idxToEmails.set( root, [] );
        }
        idxToEmails.get( root )!.push( email );
    }

    const ret = [];
    for ( const [idx, emails] of idxToEmails.entries() ) {
        ret.push( [accounts[idx][0], ...emails.sort()] );
    }

    return ret;
}

describe( '721. Accounts Merge', () => {
    it( 'e.g. 1', () => {
        const accounts = [
            ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
            ['John', 'johnsmith@mail.com', 'john00@mail.com'],
            ['Mary', 'mary@mail.com'],
            ['John', 'johnnybravo@mail.com'],
        ];
        const output = [
            [
                'John',
                'john00@mail.com',
                'john_newyork@mail.com',
                'johnsmith@mail.com',
            ],
            ['Mary', 'mary@mail.com'],
            ['John', 'johnnybravo@mail.com'],
        ];
        expect( accountsMerge( accounts ).sort() ).toEqual( output.sort() );
    } );

    it( 'e.g. 2', () => {
        const accounts = [
            ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
            ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
            ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
            ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
            ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
        ];
        const output = [
            ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
            ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
            ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
            ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
            ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
        ];
        expect( accountsMerge( accounts ).sort() ).toEqual( output.sort() );
    } );
} );

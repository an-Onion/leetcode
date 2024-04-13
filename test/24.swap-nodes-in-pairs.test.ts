import { swapPairs } from '../src/1-100/24.swap-nodes-in-pairs';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Swap Nodes in Pairs', () => {
  it( '[1,2,3,4]', () => {
    const input = ListNode.of( [1,2,3,4] );
    const output: number[] = ListNode.toArray( swapPairs( input ) );
    expect( output ).toStrictEqual( [2,1,4,3] );
  } );

  it( '[]', () => {
    const input = ListNode.of( [] );
    const output: number[] = ListNode.toArray( swapPairs( input ) );
    expect( output ).toStrictEqual( [] );
  } );

  it( '[1,2,3,4]', () => {
    const input = ListNode.of( [1] );
    const output: number[] = ListNode.toArray( swapPairs( input ) );
    expect( output ).toStrictEqual( [1] );
  } );
} );

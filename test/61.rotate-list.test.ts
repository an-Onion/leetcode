import { rotateRight } from '../src/1-100/61.rotate-list';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Rotate List', () => {

  it( '[1,2,3,4,5], 2', () => {
    const head = ListNode.of( [1,2,3,4,5] );
    const output = ListNode.toArray( rotateRight( head, 2 ) );
    expect( output )
    .toStrictEqual( [4,5,1,2,3] );
  } );

  it( '[0,1,2], 4', () => {
    const head = ListNode.of( [0,1,2] );
    const output = ListNode.toArray( rotateRight( head, 4 ) );
    expect( output )
    .toStrictEqual( [2,0,1] );
  } );

  it( '[1], 4', () => {
    const head = ListNode.of( [1] );
    const output = ListNode.toArray( rotateRight( head, 4 ) );
    expect( output )
    .toStrictEqual( [1] );
  } );
} );

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor( val?: number, next?: ListNode | null ) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static of( array: number[] ): ListNode | null {
    const header = new ListNode( -1 );
    let tail = header;

    for ( const a of array ) {
      tail.next = new ListNode( a );
      tail = tail.next;
    }

    return header.next;
  }

  static toArray( list: ListNode | null ): number[] {
    if( !list ) return [];
    return list.toArray();
  }

  static getTail( list: ListNode | null ): ListNode {
    while( list?.next ) list = list.next;
    return list;
  }

  toArray(): number[] {

    const array: number[] = [this.val];
    let link = this.next;

    while ( link ) {
      array.push( link.val );
      link = link.next;
    }

    return array;
  }
}

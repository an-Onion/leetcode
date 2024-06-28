import { topKFrequent } from '../src/601-700/692.top-k-frequent-words';

describe( 'Top K Frequent Words', () => {
  it( 'e.g. 1', () => {
    const words = ['i','love','leetcode','i','love','coding'], k = 2;
    expect( topKFrequent( words, k ) ).toStrictEqual( ['i','love'] );
  } );

  it( 'e.g. 2', () => {
    const words = ['the','day','is','sunny','the','the','the','sunny','is','is'], k = 4;
    expect( topKFrequent( words, k ) ).toStrictEqual( ['the','is','sunny','day'] );
  } );
} );

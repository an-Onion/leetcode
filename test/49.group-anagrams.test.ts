import { groupAnagrams } from '../src/49.group-anagrams';

describe( 'Group Anagrams', () => {

  it( '[""]', () => {
    expect( groupAnagrams( [''] ) ).toStrictEqual(
      [['']]
    );
  } );

  it( '["a"]', () => {
    expect( groupAnagrams( ['a'] ) ).toStrictEqual(
      [['a']]
    );
  } );

  it( '["eat","tea","tan","ate","nat","bat"]', () => {
    expect( groupAnagrams( ['eat','tea','tan','ate','nat','bat'] ).sort() ).toStrictEqual(
      [['bat'],['tan','nat'],['eat','tea','ate']].sort()
    );
  } );

  it( '["bdddddddddd", "bbbbbbbbbbc"]', () => {
    expect( groupAnagrams( ['bdddddddddd', 'bbbbbbbbbbc'] ).sort() ).toStrictEqual(
      [['bbbbbbbbbbc'],['bdddddddddd']].sort()
    );
  } );
} );

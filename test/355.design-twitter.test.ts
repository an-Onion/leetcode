import { Twitter } from '../src/355.design-twitter';

function initTwitter( commands: string[], values: number[][] ): ( number[] | null )[]{

  const twitter = new Twitter();
  const output: ( number[] | null )[] = [null];
  for( let i = 1; i < commands.length; i++ ){

    const res = twitter[commands[i]]( ...values[i] );
    output.push( res || null );
  }
  return output;
}

describe( 'Design Twitter', () => {

  it( 'e.g. 1', () => {
    const commands = ['Twitter', 'postTweet', 'getNewsFeed', 'follow', 'postTweet', 'getNewsFeed', 'unfollow', 'getNewsFeed'];
    const values = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]];
    expect( initTwitter( commands, values ) ).toStrictEqual( [null, null, [5], null, null, [6, 5], null, [5]] );
  } );

} );

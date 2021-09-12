import { checkSubarraySum } from '../src/523.continuous-subarray-sum';

describe( 'Continuous Subarray Sum', () => {

  it( 'e.g. 1', () => {
    const nums = [23,2,4,6,7], k = 6;
    expect( checkSubarraySum( nums, k ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const nums = [23,2,6,4,7], k = 6;
    expect( checkSubarraySum( nums, k ) ).toBeTruthy();
  } );

  it( 'e.g. 3', () => {
    const nums = [23,2,6,4,7], k = 13;
    expect( checkSubarraySum( nums, k ) ).toBeFalsy();
  } );

  it( 'e.g. 4', () => {
    const nums = [5,0,0,0], k = 3;
    expect( checkSubarraySum( nums, k ) ).toBeTruthy();
  } );

  it( 'e.g. 5', () => {
    const nums = [1,2,3], k = 5;
    expect( checkSubarraySum( nums, k ) ).toBeTruthy();
  } );
} );

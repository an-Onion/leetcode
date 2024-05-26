export const heapify = ( arr: number[], n: number, parent: number ) => {

    const left = 2 * parent + 1, right = 2 * parent + 2;
    let max = parent;

    if ( left < n && arr[left] > arr[max] ) {
        max = left;
    }

    if ( right < n && arr[right] > arr[max] ) {
        max = right;
    }

    if ( max === parent ) return;

    [arr[parent], arr[max]] = [arr[max], arr[parent]];
    heapify( arr, n, max );
};

export const heapSort = ( arr: number[] ) => {
    const n = arr.length;

    for ( let i = Math.floor( n / 2 ) - 1; i >= 0; i-- ) {
        heapify( arr, n, i );
    }

    for ( let i = n - 1; i > 0; i-- ) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify( arr, i, 0 );
    }

    return arr;
};
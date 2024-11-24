export class _Node {
    val: number;
    children: _Node[];

    constructor( val?: number, children?: _Node[] ) {
        this.val = val === undefined ? 0 : val;
        this.children = children === undefined ? [] : children;
    }
}

function maxArea(height: number[]): number {
    let [l, r] = [0, height.length - 1];

    let sofar = 0;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        sofar = Math.max(sofar, area);
        if (height[l] < height[r]) l++;
        else if (height[l] === height[r]) (r--, l++);
        else r--;
    }

    return sofar;
}

describe('11. Container With Most Water', () => {
    it('[1,1]', () => {
        expect(maxArea([1, 1])).toBe(1);
    });

    it('[4,3,2,1,4]', () => {
        expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });
});

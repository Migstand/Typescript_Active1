import {square, squareEach} from "./square";


test('Quadrado dos elementos da lista', () =>{
    expect(
        square([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
    expect(
    square([3, 5, 7, 3, 8, 9, 1])
).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

// 
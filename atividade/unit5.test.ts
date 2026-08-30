import { pares } from "./sopar";

test('Coletar apenas os pares da lista de números',() => {
    expect(
        pares([8, 3, 9, 5, 6, 12])
    ).toEqual([8, 6, 12]);
})
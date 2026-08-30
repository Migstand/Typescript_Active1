import { decrescente } from "./decrecent";

test('Testas se ordena de as strings em ordem decrescente', () =>{
    expect(
        decrescente(['carro', 'boneco', 'ave', 'lapis'])
    ).toEqual(['lapis', 'carro', 'boneco', 'ave']);
})
let arrstr: string[] = ['carro', 'boneco', 'ave', 'lapis'];

let descres: string[] = arrstr.sort((str1: string, str2: string) => str1 < str2? 1:-1);

console.log(descres);
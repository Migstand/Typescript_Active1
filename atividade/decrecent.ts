export const decrescente = (x:string[]): string[] =>{
    return x.sort((str1: string, str2: string) => str1 < str2? 1:-1);
} 

let arrstr: string[] = ['carro', 'boneco', 'ave', 'lapis', 'avi'];

let descres: string[] = arrstr.sort((str1: string, str2: string) => str1 < str2? 1:-1);

console.log(descres);
console.log(decrescente(arrstr));
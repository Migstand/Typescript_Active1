export const square = (x:number[]) :number[] => 
    {   let i;
        for (i = 0; i < x.length; i++){
            x[i] = x[i] * x[i];
        }
        return x;
    }
export const squareEach = (x:number[]) :number[] => 
    {   
        x.forEach( (element, ind, arr) => arr[ind] = element * element);
        return x;
    }

// let lis = [3, 5, 7, 3, 8, 9, 1]
// console.log(squareEach(lis));
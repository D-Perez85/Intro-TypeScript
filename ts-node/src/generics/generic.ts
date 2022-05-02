export const printObject = (args: any) =>{
    console.log(args);
    
}

export function genericFn <T> (args: T){
    return args;
}

export const genericArrowFn = <T> (args: T) =>{
    return args; 
    
}
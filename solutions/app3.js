const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny'];

/*Mentsd el külön `a`, `b` és `c` nevű változókba az alábbi tömb első, harmadik és ötödik indexű elemét!*/

/*let a= names[0]
let b= names[2]
let c= names[4]*/
let [,a,,b,,c]=names

export {
    a,
    b,
    c,
  };

console.log(a,b,c)
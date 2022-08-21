const user = {
  firstName: 'John',
  lastName: 'Doe',
};
/*Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!*/

/*let l = user.lastName
let f = user.firstName
let j = user.job*/

let {firstName:f="unknown",lastName:l="unknown",job:j="unknown"}=user;
console.log(l,f,j)

export {
  l,
  f,
  j,
};


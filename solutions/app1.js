const user = {
  firstName: 'John',
  lastName: 'Doe',
};

let {firstName="unknown",lastName="unknown",job="unknown"}=user;

//
console.log(firstName,lastName)

 export {
   firstName,
   lastName,
   job,
 };

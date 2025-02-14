const accountId = 145321
let accountEmail ="shail@jsd.com"
var accountPassword = "65432"
accountCity = "gorakhpur"
let accountStatus;

//accountId = 2

accountEmail = "shailpk@gmail.com"
accountPassword = "97531"
accountCity = "mumbai"

console.log(accountId);
/* prefer not to use var 
because of issue in block scope and fuctional scope */

console.table([accountId, accountEmail, accountCity, accountStatus])

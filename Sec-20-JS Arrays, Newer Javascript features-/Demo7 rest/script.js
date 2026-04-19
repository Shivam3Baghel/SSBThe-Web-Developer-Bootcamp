function sum(){
    console.log(arguments);//arguments object automatically collects all arguments
    // console.log(arguments.reduce((total,el)=>total+el));//will not work bcz
    // arguments is not a regular array
}
sum();
sum(7,8,9);
// function sum(x,y,z){
//     console.log(arguments);//arguments object automatically collects all arguments
    // console.log(arguments.reduce((total,el)=>total+el));//will not work bcz
    // // arguments is not a regular array
// }
sum(1,2,3);
// nums=[];
// nums0=[0,1,2,3];
// function sum(...nums){
//     console.log(nums);
//     console.log(nums.reduce((total,el)=>total+el));
// }

function sum2(...nums){
    return (nums.reduce((total,el)=>total+el));
};
console.log(sum2(7,8,9,10));
function raceResults(gold,silver,...everyoneElse){
    console.log(`Gold medal goes to ${gold}`);
    console.log(`Silver medal goes to ${silver}`);
    console.log(`Thanks to everyone else ${everyoneElse}`);
}
raceResults("SSB","SC","SK","VT")
//O/P-
// [Arguments] {}
// [Arguments] { '0': 7, '1': 8, '2': 9 }
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 34
// Gold medal goes to SSB
// Silver medal goes to SC
// Thanks to everyone else SK,VT
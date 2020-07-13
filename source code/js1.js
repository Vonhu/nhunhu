var person1 = {
    firstname: 'nhu',
    lastname: 'vo',
    age: 20,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

person1["firstname"] = "alo";
person1["lastname"] = "nhuday";
console.log(person1.fullname());
console.log(person1.age + " " + person1.lastname);

var person2 = new Object();
person2.firstname = "hello";
person2.lastname = "me again";
person2.fullname = function(){
    return this.firstname + " " + this.lastname;
}
console.log(person2.fullname());
//---------------check property has exited or not---------
if(person2.hasOwnProperty('age')){
console.log(person2.age);
}else{
console.log("this property is not exited!");
}


//-----------show all property in person2 object------------
for(var key in person2){
    
    console.log(key); 
}

//--------------dang tham chieu----------------
function changereference(person2){
    person2.firstname = "hello cai quan";
}
changereference(person2);
console.log(person2.firstname);
//--------------object in object (nested object)----------------
// person2.firstname = {
//     phone: "089090",
//     add: "leu leu",
//     meo: "year yaer"
// }
// console.log(person2);
console.log(alert("leueu"));
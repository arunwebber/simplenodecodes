function human(firstname,lastname){
  this.firstname=firstname;
  this.lastname=lastname;
  this.fullname= function(){
    return this.firstname + "" +this.lastname;
  }
}

var person1= new human("arun","webber");
console.log(human.prototype);
var person2 =new human("Sachin","Tendulkar");
console.log(person2);

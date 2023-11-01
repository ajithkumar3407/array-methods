// 1.Write a JavaScript program to display the values 
// (i.e. display book name, author name and reading status) of the following books.
// If the reading status  is true

var library = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true 
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }]; 
function books(){
	library.forEach(function(book){
		if(book.readingStatus){
			console.log("Book title" +book.title);
			console.log("Author" +book.author);
			console.log("Reading Status : Currently Reading");
			console.log("\n");
		}
	});
}
books();

//////------///////

///--------2.Write a code to replace the value 6 in the following object with 606, ------------/////

let obj = { 

foo: { a: "hello", b: "world" }, 

bar: ["example", "mem", null, { xyz: 6 }, 88], 

qux: [4, 8, 12] 

}; 

 function replaceValue(obj, oldValue, newValue){
	for ( key in obj){
		if(typeof obj[key]==='object'){
			replaceValue(obj[key],oldValue,newValue);
		}
		else if(obj[key]===oldValue){
			obj[key]=newValue;
		}
	}
} 

 replaceValue(obj,6,606);
 console.log(obj);
 
 ///-----------------////
 
 
 ////--------3.Using Map method -------//////
 
 const user= [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan',

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee', 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte', 
	
  } 

]; 
const fullname= user.map(user=>` ${user.first_name} ${user.last_name}`);

 console.log(fullname);
 
 //////------------/////
 
/////---4.Using Map method -------------/////
 
const users = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan', 

    age: 30 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee', 

    age: 45 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte', 

    age: 25 

  } 

]; 
const fullnames= users.map(users=>`${users.last_name}`);

 console.log(fullnames);
 
 /////--------------/////
 



//---------5.Using Map method ---////

const userss = [ 

  { 

    first_name: 'Mike', 

    location: 'London' 

  }, 

  { 

    first_name: 'Tim', 

    location: 'US' 

  }, 

  { 

    first_name: 'John', 

    location: 'Australia' 

  } 

]; 

const locat= userss.map(userss=>` ${userss.first_name} live is location ${userss.location}`);

 console.log(locat);

//////-----------//////


// /-----------6.Using filter method --------///

const employees = [ 

  { name: 'David Carlson', age: 30 }, 

  { name: 'John Cena', age: 34 }, 

  { name: 'Mike Sheridan', age: 25 }, 

  { name: 'John Carte', age: 50 } 

]; 
 
const move= employees.filter((word)=> word.age > 31) 

console.log(move);

/////-------//////

////--------7.Using filter method ------------////

let usersss = [ 

    { name: 'John', age: 25, occupation: 'gardener' }, 

    { name: 'Lenny', age: 51, occupation: 'programmer' }, 

    { name: 'Andrew', age: 43, occupation: 'teacher' }, 

    { name: 'Peter', age: 81, occupation: 'teacher' }, 

    { name: 'Anna', age: 47, occupation: 'programmer' }, 

    { name: 'Albert', age: 76, occupation: 'programmer' }, 

] ;

const results = usersss.filter((word) => word.occupation ==='programmer');

console.log(results);

//////-----------////

//----------8.Using filter method ------///

const students = [ 

  { name: 'Quincy', grade: 96 }, 

  { name: 'Jason', grade: 84 }, 

  { name: 'Alexis', grade: 100 }, 

  { name: 'Sam', grade: 65 }, 

  { name: 'Katie', grade: 90 } 

]; 

  
const result=students.filter((word)=> word.grade >89);
console.log(result);
 
 ///-------------/////
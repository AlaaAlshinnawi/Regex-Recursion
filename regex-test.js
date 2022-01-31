'use strict';


function capitalA(s) {
    let a=/^[a-zA-Z\s]+A$/;
        return a.test(s);
  
}

console.log(capitalA("Hello world A"));


/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */


/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email){
    let validation= /^[a-zA-Z\b]+@[a-zA-Z]+\.io$/;
    return validation.test(email);
    
} 
console.log(ioEmail("alaa@alaa.io"));
/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 
required extention are jpg, jpeg and png.
*/

function imagesSearcher(text){
    let arr = [];

    return arr;
}
console.log(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));



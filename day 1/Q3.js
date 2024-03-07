/*
Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase.*/
var personName = "Hina Azhar";
//lowercase
console.log(personName.toLocaleLowerCase());
//uppercase
console.log(personName.toLocaleUpperCase());
//titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetters;
console.log(titlecase);

"use strict";

const subject1 = ["Moon", "Earch", "Ocean"];
const subject2 = ["Moon", "Earch", "Ocean"];
const subject3 = subject1;

console.log("Compare subject1 to subject3 arrays where subject3 assigned to subject1");
if (subject1 === subject3) {
   console.log("Equal");
   console.log("subject1", subject1)
   console.log("subject3", subject3)
} else {
   console.log("Not Equal");
}

console.log("Compare subject1 and subject2, created with the same looking elements");
if (subject2 === subject1) {
   console.log("Equal");
} else {
   console.log("Not equal");
}

console.log("Compare subject1 and subject2 individual elements");
if (subject2[0] === subject1[0]) {
   console.log("Equal");
} else {
   console.log("Not equal");
}

console.log("Compare two objects with the same looking data");
const book1 = {
   author: "Thanh",
   title: "Book1",
   ISBN: "001-222-2255",
}

const book2 = {
   author: "Thanh",
   title: "Book1",
   ISBN: "001-222-2255",
}

const book3 = book1;

console.log("Compare book1 and book2 object created with the same looking data");
if (book1 === book2) {
   console.log("book1 and book2 are equal");
} else {
   console.log("book1 and book2 are not equal");
}

console.log("Compare book1 and book3 with book3 assign to book1");
if (book1 === book3) {
   console.log("Book1 and book3 are equal");
} else {
   console.log("Book1 adn book3 are not equal");
}

console.log("Compare book1 and book2 data fields");
if (book1.author === book2.author) {
   console.log("They are equal");
}else {
   console.log("They are not equal");
} 


class library {
    constructor(author, title, readingStatus) {
        this.author = author;
        this.title = title;
        this.readingStatus = readingStatus;
    };
}

let b1 = new library("Bill Gates", "The Road Ahead", true);
console.log(b1.author);
console.log(b1.title);
console.log(b1.readingStatus);

let b2 = new library("Steve Jobs", "Walter Isaacson", true);
console.log(b2.author);
console.log(b2.title);
console.log(b2.readingStatus);

let b3 = new library("Suzanne Collins", "Mockingjay: The Final Book of The Hunger Games", false);
console.log(b3.author);
console.log(b3.title);
console.log(b3.readingStatus);
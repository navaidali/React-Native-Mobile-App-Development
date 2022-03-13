class Student {
    constructor(name1, sclass, rollno) {
        this.name1 = name1;
        this.sclass = sclass;
        this.rollno = rollno;
    }
}

let s1 = new Student("Navaid", "6A", "90");
console.log(s1);

delete s1.name1;
console.log(s1);
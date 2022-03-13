class Student {
    constructor(name1, sclass, rollno) {
        this.name1 = name1;
        this.sclass = sclass;
        this.rollno = rollno;
    }
    getName() {
        return this.name1;
    };
    getClass() {
        return this.sclass;
    };
    getRollno() {
        return this.rollno;
    };
}

let s1 = new Student("Navaid", "6A", "90");
console.log(s1);
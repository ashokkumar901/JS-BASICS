function Student() {
    this.name = 'ashok';
    this.age = 22;
}

Student.prototype.hi = () => {
    console.log('hiiii');
};

const student2 = new Student();

student2.toString();

console.log(typeof student2);



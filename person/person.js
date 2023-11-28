class person {
    constructor (name,age,place,motherToung,mobile,email,qualification,hobby,bank,accountNumber) {
        this.n = name;
        this.a = age;
        this.p = place;
        this.mt = motherToung;
        this.mbl = mobile;
        this.em = email;
        this.qul = qualification;
        this.hby = hobby;
        this.bnk = bank;
        this.acc = accountNumber;
    };
    printDetails () {
        return `
        Name : ${this.n}
        Age : ${this.a }
        Place : ${this.p}
        MotherToung : ${this.mt}
        Mobile : ${this.mbl}
        E-mail : ${this.em}
        Qualification : ${this.qul}
        Hobby : ${this.hby}
        Bank : ${this.bnk}
        Account Number : ${this.acc}
        `
    };
};

const person1 =  new person ("Karthi",25,"Trichy","Tamil",123456780,"karthi@email.com","Engineer","Cricket","ABC bank",9800007654321);

console.log(person1.printDetails());


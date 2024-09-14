class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }    

    addCourse(){
        console.log(`A new course was added by ${this.username} of email : ${this.email}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "213")

chai.logMe()

const masalaChai = new User("masalaChai")
// masalaChai.addCourse()
masalaChai.logMe()

console.log(masalaChai instanceof Teacher);

class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const chai = new User("Harsh")
// console.log(chai.createID());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Raju", "Raju@gmail.com")
console.log(iphone.createID());

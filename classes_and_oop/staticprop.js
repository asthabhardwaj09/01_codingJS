class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const astha= new User("astha")
// console.log(astha.createId())


class teacher extends User{
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const iphone= new teacher("iphone","i@phone.com")
console.log(iphone.createId());
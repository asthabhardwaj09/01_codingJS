const User={
    _email:"a@astha.com",
    _password:"abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }

}

const tea= Object.create(User)
console.log(tea.email);




//we use getter and setter when we do not want to show smething to everyone


//race == over flow of stack
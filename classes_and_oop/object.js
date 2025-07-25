function multiply5(num){
    return num*5
}

multiply5.power=2
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

function creatUser(username, score){
    this.username= username
    this.score=score
}

creatUser.prototype.increment = function() {
    this.score++;
    const usingnew = this.score;
    // console.log(usingnew);
}

creatUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}
const chai= new creatUser("chai",25)

// console.log(score);
const tea= new creatUser("tea",250)
tea.increment()
tea.printMe()
// console.log(score);

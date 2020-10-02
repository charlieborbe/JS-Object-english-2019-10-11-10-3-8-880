// Create an object fruit with attributes (apple, pear, peach, totalNumberOfFruits (function))
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10,
    get totalNumberOfFruits(){ // Calculate how many pieces of fruit are there in the fruit object (apple + pear + peach)
        return(this.apple + this.pear + this.peach);
    }
};
console.log(fruit.totalNumberOfFruits);
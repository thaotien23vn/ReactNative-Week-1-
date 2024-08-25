// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables
//data 1
let data1 ={
    mark:{weight:78, height:1.69},
    john:{weight:92, height:1.95},
};

//data 2
let data2= {
    mark:{weight:95, height:1.88},
    john:{weight:85, height:1.76},
};
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
 function calculateBMI(weight, height){
    return weight/(height * height);
 }
 //BMI DATA1
 let markBMI1= calculateBMI(data1.mark.weight, data1.mark.height);
 let johnBMI1= calculateBMI(data1.john.weight, data1.john.height);

//BMI DATA2
 let markBMI2= calculateBMI(data2.mark.weight, data2.mark.height);
 let johnBMI2= calculateBMI(data2.john.weight, data2.john.height);
//  Create a Boolean variable 'markHigherBMI' containing information about
//  whether Mark has a higher BMI than John.
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Does Mark have a higher BMI than John?", markHigherBMI1);

console.log("Data 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Does Mark have a higher BMI than John?", markHigherBMI2);


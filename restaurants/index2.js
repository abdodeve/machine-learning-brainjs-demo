const trainingData = [
    {
        input: {["Inside Chi's nursery"]: 1},
        output: { kardashian: 1 }
    },{
        input: {["Why I dyed my hair pink"]: 1},
        output: { kardashian: 1 }
    },{
        input: {["Feeling Blue (wearing @kkwbeauty powder contour in medium & dark contour kit as eye shadow, & a new lip coming soon)"]: 1},
        output: { kardashian: 1 }
    },{
        input: {["I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M. Enjoy!"]: 1},
        output: { trump: 1 }
    },{
        input: {["Dem Memo: FBI did not disclose who the clients were - the Clinton Campaign and the DNC. Wow!"]: 1},
        output: { trump: 1 }
    },{
        input: {["Thank you to the great men and women of the United States @SecretService for a job well done!"]: 1},
        output: { trump: 1 }
    }
 ];

console.log(trainingData);

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);
const arg = {["Inside Chi's nursery"]: 1} ;
const result = net.run( arg );

console.log(result);

// function restaurantForDay(dayOfWeek) {
//     const result = net.run({ [dayOfWeek]: 1 });
//     let highestValue = 0;
//     let highestRestaurantName = '';
//     for (let restuarantName in result) {
//         if (result[restuarantName] > highestValue) {
//             highestValue = result[restuarantName];
//             highestRestaurantName = restuarantName;
//         }
//     }
    
//     return highestRestaurantName;
// }

// console.log(restaurantForDay('Monday'));
// console.log(restaurantForDay('Tuesday'));
// console.log(restaurantForDay('Wednesday'));
// console.log(restaurantForDay('Thursday'));
// console.log(restaurantForDay('Friday'));
// console.log(restaurantForDay('Saturday'));
// console.log(restaurantForDay('Sunday'));

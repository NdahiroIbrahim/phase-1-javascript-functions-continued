// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork('work from home'));



function wrapAdjective(flair = "*") {
    
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage:
const encouragingPromptFunction = wrapAdjective("!!!");

console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("awesome")); 
console.log(wrapAdjective()()); 
console.log(wrapAdjective()('nice')) 
console.log(wrapAdjective("???")("flawless"));


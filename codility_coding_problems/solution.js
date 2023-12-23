// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    let dayOfweek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    // The days of the week  runs from "Mon" to "Sun" that is to say from index 0 to 6 thus 
    if (dayOfweek.indexOf(S) + K >= dayOfweek.length) {
        return dayOfweek[(dayOfweek.indexOf(S) + K) % dayOfweek.length];
    }
    else if (dayOfweek.indexOf(S) + K < dayOfweek.length) {
        return dayOfweek[(dayOfweek.indexOf(S) + K)];
    }


}
console.log(solution("Wed", 25));
// Output: Fri
console.log(solution("Sat", 23));
// Output: Mon
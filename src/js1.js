let sum = 1 + 2 + 3 + 4 + 5;
console.log("Simple sum: " + sum);

let sum_with_loop = 0;
for (let i = 1; i < 6; i++) {
    sum_with_loop += i;
}
console.log("Sum with loop: " + sum_with_loop);

let multi_with_loop = 1;
for (let i = 1; i < 6; i++) {
    multi_with_loop *= i;
}
console.log("Multi with loop: " + multi_with_loop);
console.log("multi/sum: " + multi_with_loop / sum_with_loop);

let participant_1 = 2;
let participant_2 = 4;
let participant_3 = 3;
let Participants = [participant_1, participant_2, participant_3];

console.log("Score of Participant 1: " + participant_1);
console.log("Score of Participant 2: " + participant_2);
console.log("Score of Participant 3: " + participant_3);
console.log("Average Score of Participants: " + Participants.reduce((a, b) => a + b, 0) / Participants.length );
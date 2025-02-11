let students = [{subject: 'math', score:90}, {subject: 'physics', score:93}, {subject: 'chemistry', score:85},  {subject: 'comp-sc', score:95}]

totalScore = 0
for (let {score} of students){
    totalScore += score
}
console.log(`Total Score = ${totalScore}`)
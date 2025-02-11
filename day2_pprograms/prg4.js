let trainer2 = {trainerName: 'Nithin', subject: 'MERN', address:{doorNum: 501, city:'Mysuru', pin: 570011} }
console.log(trainer2)

let {trainerName, subject, address} = trainer2
console.log(trainerName)
console.log(subject)
console.log(address)
let {doorNum, city, pin} = trainer2.address
console.log(doorNum)
console.log(city)
console.log(pin)
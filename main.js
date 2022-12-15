const btn = document.querySelector('button');
const div = document.querySelector('div');

// index          0        1        2           3           4           5           6       7
const names = ["Sarah", "Maria", "Antonia", "Elizabeth", "Victoria", "Monica", "Rachel", "Mila"];

const prefixs = ["I think", "I am sure", "To be honest", "I have no doubts", "I am certain", "I am certain"];

// console.log(names[index]);
// console.log(MAth.random() * 7 - as we have index 0-7)
// MATH RANDOM - will give random 0-1 , it will be multiyply by number of names, full number will stay thanks to math flooor

const nameGenerator = () => {
 const indexGirlName = Math.floor(Math.random() * names.length);

 div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]} that the best name for your daughter is ${names[indexGirlName]}!`
}

// 
btn.addEventListener('click', nameGenerator)


const btn1 = document.querySelector('button.boy');
const div1 = document.querySelector('div.message');

const name = ["Mark", "Peter", "Joshua", "Harry", "Tim", "Simon", "Henry", "George"];

const prefix = ["I think", "I am sure", "To be honest", "I have no doubts", "I am certain", "I am certain"];

const nameGenerators = () => {
    const indexBoylName = Math.floor(Math.random() * names.length);
   
    div1.textContent = `${prefix[Math.floor(Math.random() * prefix.length)]} that the best name for your daughter is ${name[indexBoylName]}!`
   }
   
   btn1.addEventListener('click', nameGenerators)
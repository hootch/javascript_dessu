// import "./styles.css";




if ('') console.log("트루야?!1")
if ('true') console.log("트루야?!2")
if (!'') console.log("트루야?!3")



let elem = {result:123};

let val = elem?.value;
console.log(val)


let str = '';

var length = str?.length;
console.log(length)



const haha = "haaha";
document.getElementById("app").innerHTML = haha;

document.getElementById("increase").addEventListener("click", () => {
  const number = document.getElementById("number");
  number.innerHTML = parseInt(number.innerHTML) + 1;
});

document.getElementById("decrease").addEventListener("click", () => {
  const number = document.getElementById("number");
  number.innerHTML = parseInt(number.innerHTML) - 1;
});

const fix = document.getElementById("fix");
fix.addEventListener("click", () => {
  const fixed = document.getElementById("fixed");
  fixed.innerHTML = parseInt(fixed.innerHTML) + 1;
});

const open = document.getElementById("openModal");
const close = document.getElementById("close");
const modal = document.getElementsByClassName("modal")[0];

open.onclick = () => {
  modal.style.display = "flex";
}

close.onclick = () => {
  modal.style.display = "none";
};

let value = 1;

// console.log(value);
value = 100000;
// console.log(value);
console.log(haha);

const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

const animal = {
  name: "멍멍이",
  type: "개",
  age: 11,
};

const { name: nickname, age: dog_age } = animal;
console.log(dog_age);
console.log(nickname);

function max(...rest) {
  let max = rest.reduce((acc, current) => (acc >= current ? acc : current));
  return max;
}

const result = max(29, 2, 3, 4, 10, 5, 6, 7, 11, 22, 4, 23, 31);
console.log(result);



function work(callback) {
  setTimeout(() => {
  const start = Date.now();
  for (let i = 0; i < 10000; i++) {}
  const end = Date.now();
  callback(end - start + 'ms');
  }, 0);
}
  
console.log('작업 시작!');
work((endTime) => {
console.log(endTime+"이게무엇?");
console.log('작업이 끝났어요');
});
console.log('다음 작업')




const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("이게 실패값이야?");
    resolve(1);
    
  }, 1000);
});


function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(n => {
    return increaseAndPrint(n);
  })

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  await sleep(3000)
  console.log("첫번째")
  await sleep(1000)
  console.log("두번째")
  return 3
}

process().then((n) => {
  console.log(n + " 세번째")
});


async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function example() {
  try {
    await makeError();
  } catch (error) {
    console.error("에러가 발생했습니다:", error);
  }
}

example();




const getDog2 = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
}



const getDog = async () => {
  await sleep(600);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(30000);
  return '거북이';
};

const getCat = async () => {
  await sleep(700);
  return '고양이';
};

const getSalamander = async () => {
  await sleep(900);
  return '도마뱀';
};

await sleep(3000)
async function process2() {
  const results = await Promise.all([ getTurtle(),getRabbit(),getDog()]);
  console.log(results);
}
console.log("야호")
process2();
console.log("야호")

async function process3() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

console.log("야호")
// process3();


await sleep(1000)



const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));


async function process4() {
  const timeoutDuration = 2000; // 2초 타임아웃
  const tasks = [
    { task: getTurtle, name: 'turtle' },
    { task: getCat, name: 'cat' },
    { task: getSalamander, name: 'liazard' },
    { task: getDog, name: 'dog' },
    { task: getRabbit, name: 'rabbit' },

  ];

  const results = [];
  const promises = tasks.map(({ task, name }) => {
    return Promise.race([
      task().then(result => ({ name, result })),
      timeout(timeoutDuration)
    ]).then(
      value => results.push(value),
      error => console.log(`${name} timed out`)
    );
  });

  await Promise.allSettled(promises);

  console.log(results);
}

process4();
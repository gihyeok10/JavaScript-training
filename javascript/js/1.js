//연습장.

const a = "나는";
const age = 15;
const bb = a + age + "살" + "입니다";
console.log(typeof bb);

//type of  "변수의 타입을 보여줌"
//Nan 숫자가 아님.

//alert 얄러줌
//prompt 입력받음
//confirm 확인 받음

// const name = prompt("이름을 입력하세요","이름:");
// alert(`환영합니다${name} 님`) //취소하면 null 값 입력

//확인 이면 true  취소면 false

// const maScore =  prompt("수학몇점?")   //prompt는 무저건 문자열
// const siScore = prompt("영어 몇점?")
// const result = (Number(siScore)+Number(maScore))/2;
// console.log(result)

// == 과 === 의 차이 ===는 타입 까지 확인해준다 => 일치 연산자

const gender = "f";
const name = "jane";
const isAdult = true;

if (gender === "m" && (name === "mike" || isAdult)) {
  console.log("통과");
} else {
  console.log("돌아가");
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log("짝수:", i);
}

let fruit = prompt("어떤 과일을 사고 시나요");
switch (fruit) {
  case "사과":
    console.log("100원입니다.");
    break;
  case "바나나":
    console.log("500d원빕니다.");
    break;
  case "멜론":
  case "수박":
    console.log("1000원입니다");
    break;
  default:
    console.log("뭐라는거야");
}

const sayhello = (name = '야나기') => {
  let msg = "hello";
  if (name) {
    msg += name;
  }
  console.log(msg);
};

const add = (num1,num2) =>{
sum = num1+num2
console.log(sum)
return sum;
}
//msg는 지역변수  (함수 안이기 때문)
console.log(add(1,2)+5)
sayhello();


const superman = {
    name:"clark",
    age:30,
    fly:function(){
        console.log("날아 갑신다!")
    }

}
console.log(superman.fly())

superman.hairColor = 'black'
superman.hobby = "football"
delete superman.age;
console.log(superman)
console.log(superman.name)


const makeObject = (name,age) => {
    return{
        name:name,
        age:age,
        hobby:"football"
    }

}



const sAdult = (user) => {
    if(('age' in user) && user.name === "mike"){
        return false;
    }else{
        return true;
    }
}

const ZMike={
    name:"mike",
    age:30

}

for (x in ZMike){
    console.log(ZMike[x])
}

console.log(sAdult(ZMike))


const jane ={
    name:"click",
    age: 40
}

let boy = {
    name:"mike",
    showName: function(){
        console.log(this.name);
    }
}

let man = boy;
man.showName();


const student = ['철수','영희','감롯','테일러']

student.map((item)=> {
    console.log(item)
    })
console.log(student[0])


//배열 추가 shift unshift



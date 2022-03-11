const children = ["철수","영희","훈이"]
// undefined
for(let i = 0; i < 3; i++){
    console.log(children[i] + "입니다")
}
// 677-07d069a322d4d0596686.js:1 철수입니다
// 677-07d069a322d4d0596686.js:1 영희입니다
// 677-07d069a322d4d0596686.js:1 훈이입니다
// undefined
let students = ["철수", "영희", "훈이", "짱구", "유리"]
// undefined
for(let i = 0; i < students.length; i++){
    console.log(students[i] + "님 안녕하세요?")
}
// 677-07d069a322d4d0596686.js:1 철수님 안녕하세요?
// 677-07d069a322d4d0596686.js:1 영희님 안녕하세요?
// 677-07d069a322d4d0596686.js:1 훈이님 안녕하세요?
// 677-07d069a322d4d0596686.js:1 짱구님 안녕하세요?
// 677-07d069a322d4d0596686.js:1 유리님 안녕하세요?
// undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined
for(let k = 0; k < persons.length; k++){
    if(persons[k].age >= 18){
        console.log(persons[k].name + "님은 성인입니다")
    }else{
        console.log(persons[k].name + "님은 미성년자입니다")
    }
}
// 677-07d069a322d4d0596686.js:1 철수님은 성인입니다
// 677-07d069a322d4d0596686.js:1 영희님은 성인입니다
// 677-07d069a322d4d0596686.js:1 도우너님은 미성년자입니다
// 677-07d069a322d4d0596686.js:1 말포이님은 미성년자입니다
// 677-07d069a322d4d0596686.js:1 도비님은 미성년자입니다
// undefined

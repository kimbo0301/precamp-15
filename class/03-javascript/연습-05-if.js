if(1+1 === 2) {
    console.log("정답")
}else{
    console.log("오답")
}
// VM369:2 정답
// undefined
if(1+2 === 2) {
    console.log("정답")
}else{
    console.log("오답")
}
// VM386:4 오답
// undefined
if(true) {
    console.log("정답")
}else{
    console.log("오답")
}
// VM442:2 정답
// undefined
if(0) {
    console.log("정답")
}else{
    console.log("오답")
}
// VM458:4 오답
// undefined
const pw1 = "123"
// undefined
const pw2 = "123"
// undefined
if(pw1 === pw2) {
    alert("비밀번호가 일치합니다")
}else{
    alert("비밀번호가 다릅니다")
}
// undefined
/////////
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if(profile.age >= 20){
    console.log("성인입니다")
}else if(profile.age >= 8){
    console.log("학생입니다")
}else if(profile.age >= 1){
    console.log("어린이입니다")
}else{
    console.log("나이가 잘못 입력되었습니다")
}
// VM1745:4 학생입니다
// undefined
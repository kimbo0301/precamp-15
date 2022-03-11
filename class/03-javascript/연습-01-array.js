const classmates = ["장여진","최병집","고재형"]
// undefined
classmates
// (3) ['장여진', '최병집', '고재형']
classmates[0]
// '장여진'
classmates[1]
// '최병집'
classmates[2]
// '고재형'
classmates[3]
// undefined
classmates.includes["말포이"]
// undefined
classmates.includes("말포이")
// false
classmates.push("말포이")
// 4
classmates.includes("말포이")
// true
classmates.includes("말포이")
// true
classmates.pop()
// '말포이'
classmates
// (3) ['장여진', '최병집', '고재형']
// 0: "장여진"
// 1: "최병집"
// 2: "고재형"
// length: 3
// [[Prototype]]: Array(0)
let developer //
// undefined
developer = [인내,끈기,자기관리,창의성,호기심]
// VM1677:1 Uncaught ReferenceError: 인내 is not defined
    // at <anonymous>:1:14
// (anonymous) @ VM1677:1
let developer = [인내,끈기,자기관리,창의성,호기심]
// VM1694:1 Uncaught ReferenceError: 인내 is not defined
    // at <anonymous>:1:18
// (anonymous) @ VM1694:1
let developer = ["인내","끈기","자기관리","창의성","호기심"]
// undefined
developer[2]
// '자기관리'
let dream = ["커리어점프","성공","할수있다"]
// undefined
developer.concat(dream)
// (8) ['인내', '끈기', '자기관리', '창의성', '호기심', '커리어점프', '성공', '할수있다']
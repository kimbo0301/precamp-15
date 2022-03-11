setTimeout(function(){
    console.log("3초가 지났습니다")
},3000)
4170
// proxyConsoleLog.js:12 3초가 지났습니다
setInterval(function(){
    console.log("1초가 지났습니다")
},1000)
4316
// 58proxyConsoleLog.js:12 1초가 지났습니다

let time = 10
// undefined
setInterval(function(){
    if(time >= 0){
        console.log(time)
        time = time - 1;
    }
},1000)
// 68
// proxyConsoleLog.js:12 10
// proxyConsoleLog.js:12 9
// proxyConsoleLog.js:12 8
// proxyConsoleLog.js:12 7
// proxyConsoleLog.js:12 6
// proxyConsoleLog.js:12 5
// proxyConsoleLog.js:12 4
// proxyConsoleLog.js:12 3
// proxyConsoleLog.js:12 2
// proxyConsoleLog.js:12 1
// proxyConsoleLog.js:12 0

let time2 = 180
// undefined
setInterval(function(){
    if(time >= 0){

        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time - 1
        
    }
},1000)
// 174
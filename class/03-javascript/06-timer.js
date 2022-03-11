let isStarted = false

let randomToken = () => {

    if(isStarted === false){
        // 타이머가 작동중이 아닐 경우
        isStarted = true;
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("auth").style.color = "#" + token
        document.getElementById("auth").innerText = token
        
        let time = 5;
        let timer = null;

        timer = setInterval(function(){

            if(time >= 0){
            
                document.getElementById("timer").innerText = time
                time = time - 1;
            }else{
                document.getElementById("btn").disabled = true
                isStarted = false;
                clearInterval(timer)
            }
            
        },1000)

    }else{
        // 타이머가 작동중일 경우
        alert("타이머가 이미 작동중입니다")
    }

    }


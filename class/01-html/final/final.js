let change = () => {
    let input1 = document.getElementById("phone__text__input1").value
    let input2 = document.getElementById("phone__text__input2").value
    
    if(input1.length+1 > 3){
        document.getElementById("phone__text__input2").focus()
    }
    
    if(input2.length+1 > 4){
        document.getElementById("phone__text__input3").focus()
    }
    
}

let activate = () => {
    let input3 = document.getElementById("phone__text__input3").value
    
    if(input3.length === 4){
       document.getElementById("authsubmit__submit").disabled = false;
        
    }
}
let isStarted = false
let submit = () => {
    if(isStarted === false){
        // 타이머가 작동중이 아닐 경우
        isStarted = true;
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("authsubmit2").style.color = "#" + token
        document.getElementById("authsubmit2").innerText = token
        
        let time = 10;
        let timer = null;

        timer = setInterval(function(){

            if(time >= 0){
                if(time >= 0){

                    const min = String(Math.floor(time/60)).padStart(2,"0")
                    const sec = String(time % 60).padStart(2,"0")
                    document.getElementById("authcheck2").innerText = min + ":" + sec
                    
                    time = time - 1
                    
                }
               
            }else{
                document.getElementById("authsubmit__submit").disabled = true
                isStarted = false;
                clearInterval(timer)
            }
            
        },1000)

    }else{
        // 타이머가 작동중일 경우
        alert("타이머가 이미 작동중입니다")
    }

}
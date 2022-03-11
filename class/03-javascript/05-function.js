let randomToken = () => {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("auth").style.color = "#" + token
        document.getElementById("auth").innerText = token
    }
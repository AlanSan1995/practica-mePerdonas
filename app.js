// const answerYes = document.getElementById("answerYes")

// document.addEventListener('DOMContentLoaded',()=>{
    


    
// })
const answerNo = document.getElementById("answerNo")

answerNo.onmouseover=()=>{

    const maxX = window.innerWidth - answerNo.offsetWidth - 200
    const maxY = window.innerHeight - answerNo.offsetHeight - 200

    const newX = Math.random() * maxX
    const newY = Math.random() * maxY 

    answerNo.style.position = 'absolute'
    answerNo.style.left = newX + 'px'
    answerNo.style.top = newY + 'px'
}




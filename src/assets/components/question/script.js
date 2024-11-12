let btnHidShow = document.querySelectorAll(".hideshow")
let arrayBtnHidShow = Array.from(btnHidShow)
arrayBtnHidShow.map((item, index)=>{
    item.addEventListener("click",()=>{                
        let para = document.querySelectorAll(".mypara")
        let arrayPara = Array.from(para)
        if(arrayPara[index].style.display = "none"){
            arrayPara[index].style.display = "block"
        }
    })
})
const careers = document.getElementById('careers')
const mousAnimation = (elm, mousX, mousY) =>{
    elm.style.transform = `translate(${mousX}px, ${mousY}px)`
}

const hidePage = document.getElementsByClassName('hideingPage')[0]

var careersChildren = []
for(i = 0; i < careers.children.length; i = i + 1){
    var career = document.getElementById(`career${i}`)
    careersChildren.push(career)
}
console.log(careersChildren)


hidePage.onclick = () =>{
    hidePage.style.display = 'none'
    for(j = 0; j < hidePage.children.length; j = j + 1){
        var careerChildren = document.getElementById(`careerContetId${j}`)
        careerChildren.style.display = 'none'
    }
}
careersChildren.map((elm, index) =>{
    elm.onmousemove = (event) =>{
        console.log(event.layerX)
        if(event.layerX < 150){
            mousAnimation(elm, event.layerX / 5 - 30, event.layerY / 10)
        } else if (event.layerY < 100){
            mousAnimation(elm, event.layerX / 10, event.layerY / 5 - 20)
        } else if (event.layerY < 100 && event.layerX < 150){
            mousAnimation(elm, event.layerX / 5 - 30, event.layerY - 200)
        } else {
            mousAnimation(elm, event.layerX / 10, event.layerY / 10)
        }
        
    }
    elm.onmouseleave = () => elm.style.transform = 'translate(0px, 0px)'
    elm.onclick = () =>{
        hidePage.style.width = window.innerWidth + 'px'
        hidePage.style.height = window.innerHeight + 'px'
        hidePage.style.display = 'block'
        hidePage.children[index].style.display = 'block'
    }
})





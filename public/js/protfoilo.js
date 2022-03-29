const protoElm = document.getElementsByClassName('protoElm')[0]
const protoType = document.getElementsByClassName('protoType')[0]
const page = document.getElementsByClassName('page')[0]
const protoElmChildrens = []
const protoTypeChildrens = []
const protoImage = []

for(j = 0; j < protoElm.children.length; j = j + 1){
    var lolo = document.getElementsByClassName('protoImage')[j]
    protoImage.push(lolo)
}

for(z = 0; z < protoType.children.length; z = z + 1){
    protoTypeChildrens.push(protoType.children[z])
}

//         elm.children[z].onclick = () =>{
//             console.log(index)
//             console.log(elm.children[index])
//         }
//         // elm[z].onclick = ()=>{
//         //     console.log(index)
//         //     // document.location = 'http://google.com'
//         // }
//         // elm[z].onmouseover = () =>{
//         //     elm.children[0].style.transform = 'scale(1, 1)'
//         // }
//         // elm[z].onmouseout = () =>{
//         //     elm.children[0].style.transform = 'scale(0, 0)'
//         // }

protoImage.map((elm, index)=>{
    elm.onclick = ()=>{
        console.log(index)
        document.location = 'http://google.com'
    }
    elm.onmouseover = () =>{
        elm.children[1].children[0].style.transform = 'scale(1, 1)'
        elm.children[1].style.background = 'rgba(255, 255, 255, 0.328)'
    }
    elm.onmouseout = () =>{
        elm.children[1].children[0].style.transform = 'scale(0, 0)'
        elm.children[1].style.background = 'rgba(0,0,0,0)'
    }
})

const elms = () =>{
    if(window.innerWidth < 1000){
        protoTypeChildrens.map((elm)=>{
            elm.style.display = 'none'
        })
    } else if(window.innerWidth > 1000) {
        
        protoTypeChildrens.map(
            (elm, index)=>{4
                elm.style.display = 'block'
                elm.onclick = () =>{
                    for(l = 0; l < protoTypeChildrens.length; l = l + 1) {
                        protoTypeChildrens[l].style.color = '#FFF'
                    }
                    
                    for(i = 0; i < protoElm.children.length; i = i + 1){
                        if(elm.textContent == 'Web' && !protoImage[i].classList.toString().includes('web')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(0, 0)'
                            page.style.height = window.innerHeight - 350 +  'px'
                            console.log(page.style.height)
                        }
                        else if(elm.textContent == 'Apps' && !protoImage[i].classList.toString().includes('app')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(0, 0)'
                            page.style.height = window.innerHeight - 350 +  'px'
                        }
                        else if(elm.textContent == 'Animation' && !protoImage[i].classList.toString().includes('animation')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(0, 0)'
                            page.style.height = window.innerHeight - 350 +  'px'
                        } else if(elm.textContent == 'All') {
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(1, 1)'
                            page.style.height = ''
                        }
        
        
                        if(elm.textContent == 'Web' && protoImage[i].classList.toString().includes('web')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(1, 1)'
                        }
                        else if(elm.textContent == 'Apps' && protoImage[i].classList.toString().includes('app')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(1, 1) translateY(-300px)'
                            
                        }
                        else if(elm.textContent == 'Animation' && protoImage[i].classList.toString().includes('animation')){
                            //your work here with this element => protoImage[i]
                            protoImage[i].style.transform = 'scale(1, 1) translateY(-600px)'
                        }
                    }
                    
                    elm.style.color = 'rgb(229, 236, 128)'
                }
            }
        )
    }
}

elms()

window.onresize = () =>{
    counter = 0
    windowSize()
    for(i = 0; i < protoElm.children.length; i = i + 1){
        protoImage[i].style.transform = 'scale(1, 1)'
        page.style.height = ''
    }
    elms()
}




// var counter = 0
// protoTypeChildrens.map((elm, index)=>{
//     // console.log(index)
//     elm.onclick = () =>{
//         for(l = 0; l < protoTypeChildrens.length; l = l + 1) {
//             protoTypeChildrens[l].style.color = '#FFF'
//         }
//         if(counter == 1){
            
//         } else if(counter == 0) {
//             page.style.height = ''
//         }
//         for(w = 0; w < pageElms.length; w = w + 1){
//                 if(protoTypeChildrens[index].textContent == 'Web' && !pageElms[w].classList.toString().includes('weptype')){
//                     //hide the pageElms

//                 } else if (protoTypeChildrens[index].textContent == 'Apps' && !pageElms[w].classList.toString().includes('apptype')) {
//                     //hide the pageElms

//                 } else if (protoTypeChildrens[index].textContent == 'Animation' && !pageElms[w].classList.toString().includes('animationtype')){
//                     //hide the pageElms

//                 } else if (protoTypeChildrens[index].textContent == 'All'){
//                     console.log(pageElms[w])
                    
//                 }

//                 if(protoTypeChildrens[index].textContent == 'Web' && pageElms[w].classList.toString().includes('weptype')){
//                     //show the pageElms
                    
//                 } else if (protoTypeChildrens[index].textContent == 'Apps' && pageElms[w].classList.toString().includes('apptype')) {
//                     //show the pageElms
                    
//                 } else if (protoTypeChildrens[index].textContent == 'Animation' && pageElms[w].classList.toString().includes('animationtype')){
//                     //show the pageElms
                    
//                 }
                
//         }
//         elm.style.color = 'rgb(229, 236, 128)'
//     }
// })
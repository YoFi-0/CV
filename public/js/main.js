body = document.body

body.style.minHeight = window.innerHeight + 'px'

// get by id
const myinfo =  document.getElementById('myInfo')
const infos = document.getElementById('infos')
const myImage = document.getElementById('myImage')
const social = document.getElementById('social')
const arLink = document.getElementById('arabicLang')
const enLink = document.getElementById('englishLang')


//get by class
const hr = document.getElementsByClassName('hrBig')[0]
const showContent = document.getElementsByClassName('showContent')[0]
const pageContet = document.getElementsByClassName('page')[0]
const moveAround =  document.getElementsByClassName('moveAround')[0]
//unset

//creating elems
const loadePage = document.createElement('div')
loadePage.id = 'loadePage'
loadePage.style.width = window.innerWidth + 'px'
loadePage.style.minHeight = window.innerHeight + 'px'
loadePage.style.background = `#121212`
loadePage.style.position = 'fixed'
loadePage.style.top = 0
loadePage.style.left = 0
document.body.appendChild(loadePage)

const windowSize = () =>{
    if(window.innerWidth < 1000){
        myinfo.style.maxHeight = ''
        myinfo.classList.remove('p-5')
        myImage.classList.remove('w-75')
        myImage.classList.add('w-25')
        myImage.classList.remove('mt3')
        showContent.style.display = 'block'
        pageContet.style.transform = 'translate(15px, 60px)'
        myinfo.style.transform = 'translate(17px, 30px)'
        infos.style.display = 'none'
        myImage.style.float = 'right'
        social.style.display = 'none'
        hr.classList.remove('hrBig')
        console.log(`wondow is les then 1000`)
    } else if (window.innerWidth < 768) {
        console.log(`wondow is les then 768`)
    } else if (window.innerWidth < 575){
        console.log(`wondow is les then 575`)
    }else {
        myinfo.style.maxHeight = 850 + 'px'
        myinfo.style.maxHeight = 850 + 'px'
        myinfo.classList.add('p-5')
        myImage.classList.remove('w-25')
        myImage.classList.add('w-75')
        showContent.style.display = 'none'
        pageContet.style.transform = 'translate(30px, 0)'
        myinfo.style.transform = 'translate(0, 0)'
        infos.style.display = 'block'
        myImage.style.float = 'none'
        social.style.display = 'block'
        hr.classList.add('hrBig')
        console.log(`wondow is bigger then 1000`)
    }
}

var counter = 0
window.onload =  ()=>{
    counter = 0
    if(document.location.pathname == '/work' || document.location.pathname == '/ar/work'){
        document.getElementById('portfolio').style.color = '#ffbf00'
    } else {
        if(document.location.pathname.includes('/ar/')){
            document.getElementById(document.location.pathname.replace('/ar/', '')).style.color = '#ffbf00'
            enLink.href = document.location.pathname.replace('/ar', '')
            arLink.href = document.location.pathname
        } else {
            document.getElementById(document.location.pathname.replace('/', '')).style.color = '#ffbf00'
            enLink.href = document.location.pathname
            arLink.href = `/ar${document.location.pathname}`
        }
    }
    windowSize()
    loadePage.style.display = 'none'
}
window.onresize = () =>{
    counter = 0
    windowSize()
}

window.onscroll = (event) =>{
    scrollPositionY = window.scrollY
    if(scrollPositionY > 100 && window.innerWidth > 1000){
        myinfo.style.transform = `translateY(${scrollPositionY - 100}px)`
    } else {
        if(window.innerWidth < 1000){
            myinfo.style.transform = `translate(17px, 30px)`
        } else {
            console.log('lala')
            myinfo.style.transform = `translateY(0px)`
        }
        
    }
}

showContent.onclick = () =>{
    if(counter == 1) {
        myinfo.classList.remove('p-5')
        myImage.classList.remove('w-75')
        myImage.classList.add('w-25')
        myImage.classList.remove('mt3')
        infos.style.display = 'none'
        myImage.style.float = 'right'
        social.style.display = 'none'
        hr.classList.remove('hrBig')
        counter = 0
    } else {
        myinfo.style.height = ''
        myinfo.classList.add('p-5')
        myImage.classList.remove('w-25')
        myImage.classList.add('w-75')
        showContent.style.display = 'block'
        infos.style.display = 'block'
        myImage.style.float = 'none'
        social.style.display = 'block'
        hr.classList.add('hrBig')
        counter = 1
    }
}


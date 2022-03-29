// const React = require('react')




// const porto = [
//     {key: 0, imgeSrc:'proto1.PNG', type:'wep'},
//     {key: 1, imgeSrc:'proto1.PNG', type:'wep'},
//     {key: 2, imgeSrc:'proto1.PNG', type:'app'},
//     {key: 3, imgeSrc:'proto1.PNG', type:'app'},
//     {key: 4, imgeSrc:'proto1.PNG', type:'animation'},
//     {key: 5, imgeSrc:'proto1.PNG', type:'animation'},
// ]
// class Porto extends React.Component {
//     render(){
//         return(
//             <div className={`backPorto mt-5 ${this.props.type}type`}>
//                 <img className='w-100 h-100 backPortoImg' src={`/images/${this.props.imgeSrc}`}/>
//                 <div className='w-100 proto h-100 porto d-flex justify-content-center'>
//                     <div className='protoIcon'>
//                         <i className="fa-regular fa-eye yellowColor"></i>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }




// class PortoElms extends React.Component {
//     render(){
//         return(
//             <div className='protoElm mt-5 d-flex flex-wrap justify-content-around'>
//                 {porto.map((elm)=>{
//                     return <Porto key={elm.key} imgeSrc={elm.imgeSrc} type={elm.type}/>
//                 })}
//             </div>
//         )
//     }
// }

// const portoType = [
//     {key:0, type:"All"},
//     {key:1, type:"Web"},
//     {key:2, type:"Apps"},
//     {key:2, type:"Animation"}
// ]

// class PortoText extends React.Component {
//     render(){
//         return(
//             <p className='portoText'>{this.props.type}</p>
//         )
//     }
// }

// class PortoType extends React.Component {
//     render(){
//         return(
//             <div className='protoType pt-4 d-flex justify-content-between'>
//                 {portoType.map((elm)=>{
//                    return <PortoText key={elm.key} type={elm.type}/>
//                 })}
//             </div>
//         )
//     }
// }

// const portoComponenets = {
//     PortoElms: PortoElms,
//     PortoType:PortoType
// }

// module.exports = portoComponenets

// /*
// if(!protoElmChildrens[w].classList.toString().includes('weptype')){
//     protoElmChildrens[w].style.transform = 'scale(0, 0)'
// } else if (!protoElmChildrens[w].classList.toString().includes('weptype')) {
//     protoElmChildrens[w].style.transform = 'scale(0, 0)'
// } else if (!protoElmChildrens[w].classList.toString().includes('weptype')){
//     protoElmChildrens[w].style.transform = 'scale(0, 0)'
// } else {
//     protoElmChildrens[w].style.transform = 'scale(1, 1)'
// }
// if(protoElmChildrens[w].classList.toString().includes('weptype')){
//     protoElmChildrens[w].style.transform = 'scale(1, 1)'
// } else if (protoElmChildrens[w].classList.toString().includes('weptype')) {
//     protoElmChildrens[w].style.transform = 'scale(1, 1)'
// } else if (protoElmChildrens[w].classList.toString().includes('weptype')){
//     protoElmChildrens[w].style.transform = 'scale(1, 1)'
// } else {
//     protoElmChildrens[w].style.transform = 'scale(0, 0)'
// }
// */

// const protoElm = document.getElementsByClassName('protoElm')[0]
// const protoType = document.getElementsByClassName('protoType')[0]
// const page = document.getElementsByClassName('page')[0]
// const protoElmChildrens = []
// const protoTypeChildrens = []
// const pageElms = []

// for(i = 0; i < protoElm.children.length; i = i + 1){
//     var porto = document.getElementsByClassName('proto')[i]
//     protoElmChildrens.push(porto)
// }
// for(z = 0; z < protoElm.children.length; z = z + 1){
//     var pageElm = document.getElementsByClassName('backPorto')[z]
//     pageElms.push(pageElm)
// }
// for(j = 0; j < protoType.children.length; j = j + 1){
//     protoTypeChildrens.push(protoType.children[j])
// }
// // console.log(protoElmChildrens)
// protoElmChildrens.map((elm)=>{
//     elm.onclick = ()=>{
//         document.location = 'http://google.com'
//     }
//     elm.onmouseover = () =>{
//         elm.children[0].style.transform = 'scale(1, 1)'
//     }
//     elm.onmouseout = () =>{
//         elm.children[0].style.transform = 'scale(0, 0)'
//     }
// })
// var counter = 0
// protoTypeChildrens.map((elm, index)=>{
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
//                     lola = pageElms[w]
//                     pageElms[w].style.width = '0px'
//                     pageElms[w].style.height = '0px'
//                     protoElm.style.flexWrap = 'nowrap'
//                     setTimeout(()=>{
//                         lola.style.style.display = 'none'
//                     }, 500)
//                 } else if (protoTypeChildrens[index].textContent == 'Apps' && !pageElms[w].classList.toString().includes('apptype')) {
//                     //hide the pageElms
//                     lola = pageElms[w]
//                     pageElms[w].style.width = '0px'
//                     pageElms[w].style.height = '0px'
//                     protoElm.style.flexWrap = 'nowrap'
//                     setTimeout(()=>{
//                         lola.style.style.display = 'none'
//                     }, 500)
//                 } else if (protoTypeChildrens[index].textContent == 'Animation' && !pageElms[w].classList.toString().includes('animationtype')){
//                     //hide the pageElms
//                     lola = pageElms[w]
//                     pageElms[w].style.width = '0px'
//                     pageElms[w].style.height = '0px'
//                     protoElm.style.flexWrap = 'nowrap'
//                     setTimeout(()=>{
//                         lola.style.style.display = 'none'
//                     }, 500)
//                 } else if (protoTypeChildrens[index].textContent == 'All'){
//                     console.log(pageElms[w])
                    
//                     pageElms[w].style.width = '300px'
//                     pageElms[w].style.height = '250px'
//                     pageElms[w].style.position = 'relative'
//                     protoElm.style.flexWrap = 'wrap'
//                 }

//                 if(protoTypeChildrens[index].textContent == 'Web' && pageElms[w].classList.toString().includes('weptype')){
//                     //show the pageElms
//                     pageElms[w].style.width = '300px'
//                     pageElms[w].style.height = '250px'
//                     pageElms[w].style.transform = 'translate(0px, 0)'
//                     pageElms[w].style.position = 'relative'
//                 } else if (protoTypeChildrens[index].textContent == 'Apps' && pageElms[w].classList.toString().includes('apptype')) {
//                     //show the pageElms
//                     pageElms[w].style.width = '300px'
//                     pageElms[w].style.height = '250px'
//                     pageElms[w].style.transform = 'translate(0px, 0)'
//                     pageElms[w].style.position = 'relative'
//                 } else if (protoTypeChildrens[index].textContent == 'Animation' && pageElms[w].classList.toString().includes('animationtype')){
//                     //show the pageElms
//                     pageElms[w].style.width = '300px'
//                     pageElms[w].style.height = '250px'
//                     pageElms[w].style.transform = 'translate(0px, 0)'
//                     pageElms[w].style.position = 'relative'
//                 }
                
//         }
//         elm.style.color = 'rgb(229, 236, 128)'
//     }
// })

// .baba{
//     width:100%;
// }
// .protoElm{
//     width:75%;
//     margin: auto;
// }
// .backPorto{
//     width: 300px;
//     height: 250px;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.3s;
// }
// /*d-flex flex-wrap justify-content-around*/
// .backPortoImg{
//     border-radius: 20px;
// }
// .porto:hover{
//     background: rgba(0, 0, 0, 0.342);
// }
// .porto{
//     cursor: pointer;
//     transition: all 0.2s;
//     border-radius: 20px;
//     background: rgba(0, 0, 0, 0);
//     position: absolute;
//     top:0;
//     left: 0;
// }
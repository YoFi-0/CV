const React = require('react')




const porto = [
    {key: 0, imgeSrc:'proto1.PNG', type:'web', l7l7: 'l7l7WEb'},
    {key: 2, imgeSrc:'proto1.PNG', type:'web', l7l7: 'l7l7APP'},
    {key: 3, imgeSrc:'proto1.PNG', type:'app', l7l7: 'l7l7ANIM'},
    {key: 4, imgeSrc:'proto1.PNG', type:'app', l7l7: 'l7l7WEb'},
    {key: 5, imgeSrc:'proto1.PNG', type:'animation', l7l7: 'l7l7APP'},
    {key: 6, imgeSrc:'proto1.PNG', type:'animation', l7l7: 'l7l7ANIM'},
]
class Porto extends React.Component {
    render(){
        return(
            <div className={`${this.props.type} protoImage mt-5 mx-2 ${this.props.l7l7}`}>
                <img src={`/images/${this.props.imgeSrc}`} className="w-100 theimage"/>
                <div className='backgroundBlur'>
                    <i className="fa-regular fa-eye yellowColor protoIcon"></i>
                </div>
            </div>
        )
    }
}




class PortoElms extends React.Component {
    render(){
        return(
            <div className='protoElm mt-5 d-flex flex-wrap justify-content-around'>
                {porto.map((elm)=>{
                    return <Porto key={elm.key} imgeSrc={elm.imgeSrc} type={elm.type} l7l7={elm.l7l7}/>
                })}
            </div>
        )
    }
}

const portoType = [
    {key:0, type:"All"},
    {key:1, type:"Web"},
    {key:2, type:"Apps"},
    {key:2, type:"Animation"}
]

class PortoText extends React.Component {
    render(){
        return(
            <p className='portoText'>{this.props.type}</p>
        )
    }
}

class PortoType extends React.Component {
    render(){
        return(
            <div className='protoType pt-4 d-flex justify-content-between'>
                {portoType.map((elm)=>{
                   return <PortoText key={elm.key} type={elm.type}/>
                })}
            </div>
        )
    }
}

const portoComponenets = {
    PortoElms: PortoElms,
    PortoType:PortoType
}

module.exports = portoComponenets

/*
if(!protoElmChildrens[w].classList.toString().includes('weptype')){
    protoElmChildrens[w].style.transform = 'scale(0, 0)'
} else if (!protoElmChildrens[w].classList.toString().includes('weptype')) {
    protoElmChildrens[w].style.transform = 'scale(0, 0)'
} else if (!protoElmChildrens[w].classList.toString().includes('weptype')){
    protoElmChildrens[w].style.transform = 'scale(0, 0)'
} else {
    protoElmChildrens[w].style.transform = 'scale(1, 1)'
}
if(protoElmChildrens[w].classList.toString().includes('weptype')){
    protoElmChildrens[w].style.transform = 'scale(1, 1)'
} else if (protoElmChildrens[w].classList.toString().includes('weptype')) {
    protoElmChildrens[w].style.transform = 'scale(1, 1)'
} else if (protoElmChildrens[w].classList.toString().includes('weptype')){
    protoElmChildrens[w].style.transform = 'scale(1, 1)'
} else {
    protoElmChildrens[w].style.transform = 'scale(0, 0)'
}
*/
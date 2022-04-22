const React = require('react');


class Lang extends React.Component {
    render(){
        return(
            <div className='langBack'>
                <div className='lang'>
                    <a className='langText' id="arabicLang">العربيه</a>
                    <a className='langText' id="englishLang">english</a>
                </div>
            </div>
        )
    }
}

const infos = [
    {key: 0, iconClass: 'far fa-envelope', infoTitle: 'EMAIL', info: 'yofi.6767@gmail.com',  id:"infoItme0"},
    {key: 1, iconClass: 'fa-brands fa-whatsapp', infoTitle: 'PHONE', info: '+966500000000', id:"infoItme1"},
    {key: 2, iconClass: 'fas fa-birthday-cake', infoTitle: 'BIRTHDAY', info: 'March 29, 2000', id:"infoItme2"},
    {key: 3, iconClass: 'fas fa-globe-americas', infoTitle: 'LOCATION', info: 'SAUDI ARABIA , MAKKAH ,JEDDAH',id:"infoItme3"}
];
const social = [
    {key: 0, iconClass: 'fa-brands fa-twitter', link:'http://google.com'},
    {key: 1, iconClass: 'fa-brands fa-instagram', link:'http://google.com'},
    {key: 2, iconClass: 'fa-brands fa-linkedin', link:'http://google.com'},
]
class Social extends React.Component {
    render(){
        return(
            <a href={this.props.link}>
                 <i className={`${this.props.iconClass} mt-5 mx-3 grayColor beggerText_1_5`}></i>
            </a>
        )
    }
}

class InfoList extends React.Component {
    render(){
        return(
            <div className='d-flex infoItme mt-3' id={this.props.id}>
                <div className='infoIcon'>
                    <i className={`${this.props.iconClass}  yellowColor`}></i>
                </div>
                <div>
                    <p className='infiTitle ms-2 marginZero'>{this.props.infoTitle}</p>
                    <p className='info ms-2 mt-1 marginZero'>{this.props.info}</p>
                </div>
            </div>
        )
    }
}

class MyInfo extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='myInfo col-xl-3 col-lg-3 col-md-12 col-sm-11 p-5 col-11' id="myInfo">
                <button className='showContent'>
                    <p className='showContentText'>
                        showContent
                    </p>
                </button>
                <img className='myImage w-75 mt-2 mb-2' src='/images/E20kWiWVEAAO80Y.png' id="myImage"/>
                <div className="mt-5">
                    <p className='myName'>Yousuf Ibrahim</p>
                    <span className='myWork px-3 py-1'>Front-End DEV</span>
                </div>
                <div className='hrBig transition mt-4'></div>
                <div className='mt-4' id="infos">
                    {infos.map((elm)=>{
                        return <InfoList key={elm.key} iconClass={elm.iconClass} infoTitle={elm.infoTitle} info={elm.info} id={elm.id}/>
                    })}
                </div>
                <div id="social">
                    {social.map((elm)=>{
                        return <Social key={elm.key} iconClass={elm.iconClass} link={elm.link}/>
                    })}
                </div>
            </div>
        )
    }
}



// page start

const moveAroundElm = [
    {key: 0, pageName: 'About', link:'/aboutMe', id:"aboutMe"},
    {key: 1, pageName: 'skills', link:'/skills', id:"skills"},
]

class MoveAroundElm extends React.Component {
    render(){
        return(
            <button className='pageName'>
                <a href={this.props.link} id={this.props.id} className="pageNameText">
                    {this.props.pageName}
                </a>
            </button>
        )
    }
}

class MoveAround extends React.Component{
    render(){
        return(
            <div className='moveAround'>
                {moveAroundElm.map((elm)=>{
                    return <MoveAroundElm key={elm.key} id={elm.id} pageName={elm.pageName} link={elm.link}/>
                })}
            </div>
        )
    }
}

// arabic start----

const infosAr = [
    {key: 0, iconClass: 'far fa-envelope', infoTitle: 'إيميل', info: 'yofi.6767@gmail.com',  id:"infoItme0"},
    {key: 1, iconClass: 'fa-brands fa-whatsapp', infoTitle: 'رقم الجوال', info: '+966500000000', id:"infoItme1"},
    {key: 2, iconClass: 'fas fa-birthday-cake', infoTitle: 'تاريخ الميلاد', info: '2000/29/مارس', id:"infoItme2"},
    {key: 3, iconClass: 'fas fa-globe-americas', infoTitle: 'الموقع', info: 'السعودية , مكة , جدة',id:"infoItme3"}
];
class MyInfoAr extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='myInfo col-xl-3 col-lg-3 col-md-12 col-sm-11 p-5 col-11' id="myInfo">
                <button className='showContent'>
                    <p className='showContentText'>
                        اضهار المحتوى
                    </p>
                </button>
                <img className='myImage w-75 mt-2 mb-2' src='/images/E20kWiWVEAAO80Y.png' id="myImage"/>
                <div className="mt-5">
                    <p className='myName'>يوسف إبراهيم</p>
                    <span className='myWork px-3 py-1'>مصمم واجهات</span>
                </div>
                <div className='hrBig transition mt-4'></div>
                <div className='mt-4' id="infos">
                    {infosAr.map((elm)=>{
                        return <InfoList key={elm.key} iconClass={elm.iconClass} infoTitle={elm.infoTitle} info={elm.info} id={elm.id}/>
                    })}
                </div>
                <div id="social">
                    {social.map((elm)=>{
                        return <Social key={elm.key} iconClass={elm.iconClass} link={elm.link}/>
                    })}
                </div>
            </div>
        )
    }
}


const moveAroundElmAr = [
    {key: 0, pageName: 'نبذة عني', link:'/ar/aboutMe', id:"aboutMe"},
    {key: 1, pageName: 'خبراتي', link:'/ar/skills', id:"skills"},
]

class MoveAroundElmAr extends React.Component {
    render(){
        return(
            <button className='pageName'>
                <a href={this.props.link} id={this.props.id} className="pageNameText">
                    {this.props.pageName}
                </a>
            </button>
        )
    }
}

class MoveAroundAr extends React.Component{
    render(){
        return(
            <div className='moveAround'>
                {moveAroundElmAr.map((elm)=>{
                    return <MoveAroundElmAr key={elm.key} id={elm.id} pageName={elm.pageName} link={elm.link}/>
                })}
            </div>
        )
    }
}
// arabic end----

// page end
const all = {
    Lang:Lang,
    MyInfo: MyInfo,
    MyInfoAr: MyInfoAr,
    MoveAroundAr: MoveAroundAr,
    MoveAround: MoveAround
}
module.exports = all
const React = require('react')

// about me text satrt----

const myCareer = [
    {key: 0, icon:'fa-solid fa-window-maximize', title: 'Web Design', textOne: 'Responsive design with', textTow: 'great javascript animation', id:"0",content:'controling DOM of the HTML using javaScript with some css animation it give a glitter touch to the website',},
    {key: 1, icon:'fa-brands fa-app-store', title: 'Mobile Apps', textOne: 'Using flutter', textTow:'decent design but small animation', id:"1",content:'i dont have the skills that gives the app a realistic animation like javascript ther is some limit on flutter that make the design with a little bit of animation',},
    {key: 1, icon:'fa-solid fa-code', title: 'Problem Solving', textOne: 'data data structure', textTow:'or understanding algorithms', id:"2",content:'or catching a bug, it not take to long when i searching for a bug but it take time for writing a clean code with specific algorithm',}
]
class MyCareer extends React.Component {
    render(){
        return(
            <div className="light careerBack mt-5 transition" id={`career${this.props.id}`}>
                <div className='career d-flex p-4'>
                    <i className={`${this.props.icon} careerIcon yellowColor`}></i>
                    <div className=' mx-3'>
                        <h3 className='careerTitle'>{this.props.title}</h3>
                        <p className='careerText'>{this.props.textOne}</p>
                        <p className='careerText'>{this.props.textTow}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class AboutMeContent extends React.Component {
    render(){
        return(
            <div className='AboutMeText'>
                <h1 className='aboutMeTitle'>About Me</h1>
                <div className='hrYellow'></div>
                <div className='mt-4'>
                    <p className='aboutMeText'>my skills on <span className="boldText">front end</span> is better then back end</p>
                    <p className='aboutMeText'>hi there am a web designer</p>
                    <p className='aboutMeText'>my name is Yousuf</p>
                    <p className='aboutMeText'>am 22 years old .</p>
                    <p className='aboutMeText oneText'>i am from pakistan but i live in saudi arabia from when i was a kid.</p>
                    <p className='aboutMeText oneText'>my original language is the <span className="boldText">arabic</span> .</p>
                    <p className='aboutMeText oneText'>my second language is english.</p>
                    <br/>
                    <p className='aboutMeText oneText'>my skills: (javascript, react js, api, bootstrab, sql, flutter,  html,  css, express js, python).</p>
                    <br/>
                    <p className='aboutMeText' >i start coding from 2020, i leared the web designe first then i start to understand coding step by step, i start coding python but i did not dive in it like javascript, so my best language is javascript .</p>
                    <p className='aboutMeText'>my skills on front end is better then the back end becose there is some things about security and http protocol that i did not learn it yet, l, so my best gool here is to be a front end developer . </p>
                </div>
                <h1 className='aboutMeTitle mt-5'>What is my career</h1>
                <div className='hrLongYellow'></div>
                <div className='d-flex flex-wrap justify-content-center' id="careers">
                    {myCareer.map((elm)=>{
                        return <MyCareer key={elm.key} icon={elm.icon} title={elm.title} textOne={elm.textOne} textTow={elm.textTow} id={elm.id}/>
                    })}
                </div>
            </div>
        )
    }
}

// about me text end----



// hide page content end----
class CareerContent extends React.Component {
    render(){
        return(
            <div className='hidePageContentBack col-xl-3 col-lg-5 col-md-6 col-sm-10 col-11' id={`careerContetId${this.props.id}`}>
                <div className='hidePageContent p-5 d-flex align-items-center flex-column'>
                    <i className={`${this.props.icon} careerContentIcon yellowColor`}></i>
                    <div className='carerContent'>
                        <p className='careerText'>{this.props.textOne}</p>
                        <p className='careerText'>{this.props.textTow}</p>
                        <p className='careerText'>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}


class HidePageContent extends React.Component {
    render(){
        return(
            myCareer.map((elm)=>{
                return <CareerContent icon={elm.icon} id={elm.id} textOne={elm.textOne} textTow={elm.textTow} content={elm.content}/>
            })
        )
    }
}

// hide page content end---


// arabic components-- start----
const myCareerAr = [
    {key: 0, icon:'fa-solid fa-window-maximize', title: 'تصميم المواقع', textOne: 'تصميم متناسق مع الشاشات', textTow: 'مع انميشن مرن بإستخدام الجافاسكربت', id:"0",content:'التحكم ب جميع عناصر الصفحة الخاصة بالموقع, مع فهم كامل لجميع خواص العناصر بالصفحة',},
    {key: 1, icon:'fa-brands fa-app-store', title: 'تصميم تطبيقات الهاتف', textOne: 'بإستخدام فلاتر', textTow:'يمكن عمل تصميم انيق مع القليل من الانيميشن', id:"1",content:'ليس لدي الخبرة الكافية لإنشاء انميشن واقعي لأن خبرتي في الفلاتر ليست كبيرة كالجافاسكربت',},
    {key: 1, icon:'fa-solid fa-code', title: 'حل المشاكل البرمجية', textOne: 'التعامل مع البرمجيات', textTow:'او تحليل الخوارزميات', id:"2",content:'او اكتشاف الاخطاء, يستغرقني القليل من الوقت لإكتشاف الأخطاء البرمجية لكنني استغرق وقت اكثر في كتابة خوارزمية سهلة القرائة',}
]
class MyCareerAr extends React.Component {
    render(){
        return(
            <div className="light careerBack mt-5 transition" id={`career${this.props.id}`}>
                <div className='career d-flex p-4'>
                    <i className={`${this.props.icon} careerIcon yellowColor`}></i>
                    <div className=' mx-3'>
                        <h3 className='careerTitle'>{this.props.title}</h3>
                        <p className='careerText'>{this.props.textOne}</p>
                        <p className='careerText'>{this.props.textTow}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class AboutMeContentAr extends React.Component {
    render(){
        return(
            <div className='AboutMeText'>
                <h1 className='aboutMeTitle'>نبذة عني</h1>
                <div className='hrYellow'></div>
                <div className=' mt-4'>
                    <p className='aboutMeText'>خبرتي <span className="boldText">تكون في تصميم المشاريع البرمجية</span> اكثر من تنظيم المشروع من ناحية السرفرات</p>
                    <p className='aboutMeText'>اهلاَ بك انا مصمم مواقع و تطبيقات الهاتف</p>
                    <p className='aboutMeText'>اسمي هو يوسف</p>
                    <p className='aboutMeText'>عمري هو 22 سنه</p>
                    <p className='aboutMeText oneText'>انا من باكستان لكنني عشت حياتي كلها في المملكة العربية السعودية</p>
                    <p className='aboutMeText oneText'>لغتي الأساسية هي <span className="boldText">العربية</span></p>
                    <p className='aboutMeText oneText'>لغتي الثانوية هي الانجليزية</p>
                    <br/>
                    <p className='aboutMeText oneText'>(python, express js, api, flutter, sql, bootstrap, react js ,html,  css, javascript) :خبراتي </p>
                    <br/>
                    <p className='aboutMeText' >بدأت تعلم البرمجة من عام 2020, تعلمت تصميم المواقع اولاَ ثم اصبحت افهم البرمجيات خطوة بخطوة, دخلت عالم البايثون لكنني لم اتعمق فيه مثل الجافاسكربت, لذا افضل لغة برمجية بالنسبة لي هي الجافاسكربت .</p>
                    <p className='aboutMeText oneText'> http خبرتي تكون في تصميم المشاريع البرمجية اكثر من تنظيم المشروع من ناحية السرفرات لأن هنالك معلومات تخص الامن و بروتوكل</p>
                    <p className='aboutMeText'>لم اتعلمها بعد لذا هدفي الحالي هو ان اكون مصمم مشاريع برمجيه</p>
                </div>
                <h1 className='aboutMeTitle mt-5'>ما هي مهنتي</h1>
                <div className='hrLongYellow'></div>
                <div className='d-flex flex-wrap justify-content-center' id="careers">
                    {myCareerAr.map((elm)=>{
                        return <MyCareerAr key={elm.key} icon={elm.icon} title={elm.title} textOne={elm.textOne} textTow={elm.textTow} id={elm.id}/>
                    })}
                </div>
            </div>
        )
    }
}

class CareerContentAr extends React.Component {
    render(){
        return(
            <div className='hidePageContentBack col-xl-3 col-lg-5 col-md-6 col-sm-10 col-11' id={`careerContetId${this.props.id}`}>
                <div className='hidePageContent p-5 d-flex align-items-center flex-column'>
                    <i className={`${this.props.icon} careerContentIcon yellowColor`}></i>
                    <div className='carerContent'>
                        <p className='careerText'>{this.props.textOne}</p>
                        <p className='careerText'>{this.props.textTow}</p>
                        <p className='careerText'>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}


class HidePageContentAr extends React.Component {
    render(){
        return(
            myCareerAr.map((elm)=>{
                return <CareerContentAr icon={elm.icon} id={elm.id} textOne={elm.textOne} textTow={elm.textTow} content={elm.content}/>
            })
        )
    }
}

// arabic components-- end

const aboutMe = {
    AboutMeContent: AboutMeContent,
    AboutMeContentAr: AboutMeContentAr,
    HidePageContent:HidePageContent,
    HidePageContentAr:HidePageContentAr
}
module.exports = aboutMe
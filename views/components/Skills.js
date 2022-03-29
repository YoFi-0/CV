const React = require('react')


const digramText = [
    {key: 0, skillname:'HTML', icon: 'fa-brands fa-html5', chartIndex:'0'},
    {key: 1, skillname:'CSS', icon: 'fa-brands fa-css3-alt', chartIndex:'1'},
    {key: 2, skillname:'JavaScript', icon: 'fa-brands fa-js-square', chartIndex:'2'},
    {key: 3, skillname:'React JS', icon: 'fa-brands fa-react', chartIndex:'3'},
    {key: 4, skillname:'API', icon: 'fa-solid fa-file-import', chartIndex:'4'},
    {key: 5, skillname:'BootsTrap', icon: 'fa-brands fa-bootstrap', chartIndex:'5'},
    {key: 6, skillname:'SQL', icon: 'fa-solid fa-database', chartIndex:'6'},
    {key: 7, skillname:'Flutter', icon: 'fa-solid fa-mobile-screen-button', chartIndex:'7'},
    {key: 8, skillname:'Express JS', icon: 'fa-brands fa-node-js', chartIndex:'8'},
    {key: 9, skillname:'Python', icon: 'fa-brands fa-python', chartIndex:'9'},
    {key: 10, skillname:'TypeScript', icon: 'fa-solid fa-file-code', chartIndex:'10'},
]
class DigramText extends React.Component {
    render(){
        return(
            <div className='skill'>
                <div className='pt-2 d-flex align-items-center flex-column mb-2'>
                    <i className={`${this.props.icon} beggerText_1_5  yellowColor`}></i>
                    <p className='skillName'>{this.props.skillName}</p>
                </div>
                <div>
                    <div className='skillChartBack' id={`skillChart${this.props.chartIndex}`}>
                        <div className='skillChart'></div>
                        <p className='skillChartValue'></p>
                    </div>
                </div>
                
            </div>
        )
    }
}


class SkillsContent extends React.Component {
    render(){
        return(
            <div className='digramBack light mt-5'>
                <div className='digram'>
                    {digramText.map((elm)=>{
                        return <DigramText key={elm.key} skillName={elm.skillname} icon={elm.icon} chartIndex={elm.chartIndex}/>
                    })}
                </div>
            </div>
        )
    }
}


const skillsComp = {
    SkillsContent: SkillsContent,
}

module.exports = skillsComp
const chartsElms = []
const skillChartBackground=[]
const digram = document.getElementsByClassName('digram')[0]
const page = document.getElementsByClassName('page')[0]


for(i = 0; i < digram.children.length; i = i + 1){
    var chartElm = document.getElementById(`skillChart${i}`)
    var  digramBack = document.getElementsByClassName('skillChartBack')[i]
    chartsElms.push(chartElm)
    skillChartBackground.push(digramBack)
}

const lightAnimation = (randomIndex) =>{
        chartsElms[randomIndex].children[1].style.textShadow = 'rgba(0,0,0,0) 0 0 0'
        chartsElms[randomIndex].children[1].style.color = 'rgba(0,0,0,0)'
        skillChartBackground[randomIndex].style.background = '#333'
        setTimeout(()=>{
            chartsElms[randomIndex].children[1].style.textShadow = 'rgb(255, 217, 0) 0 0 20px'
            chartsElms[randomIndex].children[1].style.color = 'rgb(195, 255, 0)'
            skillChartBackground[randomIndex].style.background = 'linear-gradient(90deg , #333, #333 ,rgb(206, 176, 9))'
        },300)
        setTimeout(()=>{
            chartsElms[randomIndex].children[1].style.textShadow = 'rgba(0,0,0,0) 0 0 0'
            chartsElms[randomIndex].children[1].style.color = 'rgba(0,0,0,0)'
            skillChartBackground[randomIndex].style.background = '#333'
        },600)
        setTimeout(()=>{
            chartsElms[randomIndex].children[1].style.textShadow = 'rgb(255, 217, 0) 0 0 20px'
            chartsElms[randomIndex].children[1].style.color = 'rgb(195, 255, 0)'
            skillChartBackground[randomIndex].style.background = 'linear-gradient(90deg , #333, #333 ,rgb(206, 176, 9))'
        },900)

}

// const chartValue = [95, 85, 90, 85, 80, 70, 55, 60, 65, 45, 70, 0, 0, 0, 0]
// const chartName = ['html', 'css', 'javascript', 'reactJs', 'api', 'boostrap', 'sql', 'flutter', 'expressjs', 'python', 'TypeScript', 'SASS', 'React native', 'Sqlight', 'pug js']
// const chartText = ['95%', '85%', '90%', '85%', '80%', '70%', '50%', '60%', '65%', '30%', '70%', '0%', '0%', '0%', '0%']
const chartSkills = [
    {name: 'html', value: 95},
    {name: 'css', value: 85},
    {name: 'javascript', value: 90},
    {name: 'reactJs', value: 85},
    {name: 'api', value: 80},
    {name: 'boostrap', value: 70},
    {name: 'sql', value: 55},
    {name: 'flutter', value: 60},
    {name: 'expressjs', value: 65},
    {name: 'python', value: 35},
    {name: 'TypeScript', value: 70},
    {name: 'SASS', value: 0},
    {name: 'React native', value: 0},
    {name: 'Sqlight', value: 0},
    {name: 'pug js', value: 0},
]
setTimeout(()=>{
    chartsElms.forEach((elm, index)=>{
        console.log(page.clientWidth)
        elm.style.width =  chartSkills[index].value - 10 + '%'
        elm.children[1].textContent = `${chartSkills[index].value}%`
    })
    var random = () => {
        return Math.trunc(Math.random() * chartsElms.length)
    }
    setInterval(()=>{
        lightAnimation(random())
    }, 4000)
    setInterval(()=>{
        lightAnimation(random())
    }, 8500)
    setInterval(()=>{
        lightAnimation(random())
    }, 12300)
}, 1000)



require('dotenv').config()
const port = process.env.PORT


const express = require('express')
const expressReact = require('express-react-views');
const exp = express()
const helmet = require('helmet')

const arRoute = require('./routes/ar');

exp.use(helmet())

exp.use(express.static('public'))
exp.set('views', './views')
exp.engine('jsx', expressReact.createEngine());
exp.set('view engine', 'jsx')

exp.use('/ar', arRoute)

exp.get('/', (req, res)=>{
    res.redirect('/aboutMe')
})


const lolo = (req, res, next) =>{
    // res.removeHeader('Refresh')
    // res.removeHeader('X-Frame-Options')
    next()
}

exp.get('/aboutMe', lolo, (req, res)=>{
    res.set('X-Frame-Options', 'DENY')
    res.render('AboutMe', {Apage:'/ar/aboutMe', Epage:'/aboutMe', arabic:'arabic', englis:'english'})
})
exp.get('/skills', (req, res)=>{
    res.render('Skills')
})

///images/funny-sunshine-quotes.jp
//"/videos/lala.mp4"
exp.get('/work', (req, res)=>{
    res.render('Work', {pragraph: 'lalalalalalalalalalalal'})
})

exp.listen(port, ()=>{
    console.log(`server is on on port ==> ${port}`)
})
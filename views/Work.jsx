const React = require('react')
const CssJs = require('./components/CssJs')
const All = require('./components/All')
const WorkComp = require('./components/Work')

let Work = (props) => {
        return(
            <html>
                <head>
                    <CssJs.BootsTrapLinkCss/>
                    <CssJs.FontAwsom/>
                    <CssJs.FileCss fileName="main.css"/>
                    <CssJs.FileCss fileName="work.css"/>
                    <title>work</title>
                </head>
                <body>
                    <All.Lang/>
                    <div className="container startBage">
                        <div className="row d-flex">
                            <All.MyInfo/>
                            <div className='page col-xl-9 col-lg-9 col-md-12 col-sm-11 p-5 col-11' >
                                <div className=''>
                                    <All.MoveAround/>
                                    <WorkComp.WorkContent pragraph={props.pragraph}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CssJs.BootsTrapScriptJs/>
                    <CssJs.FileJs fileName="main.js"/>
                    <CssJs.FileJs fileName="work.js"/>
                </body>
            </html>
        )
}
module.exports = Work


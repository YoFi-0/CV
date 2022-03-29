const React = require('react')
const CssJs = require('./components/CssJs')
const All = require('./components/All')
const PortoComp = require('./components/Portfolio')

class Portfolio extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <html>
                <head>
                    <CssJs.BootsTrapLinkCss/>
                    <CssJs.FontAwsom/>
                    <CssJs.FileCss fileName="main.css"/>
                    <CssJs.FileCss fileName="protfoilo.css"/>
                    <title>portfolio</title>
                </head>
                <body>
                    <All.Lang/>
                    <div className="container startBage">
                        <div className="row d-flex">
                            <All.MyInfo/>
                            <div className='page col-xl-9 col-lg-9 col-md-12 col-sm-11 p-5 col-11' >
                                <div className='baba'>
                                    <All.MoveAround/>
                                    <PortoComp.PortoType/>
                                    <PortoComp.PortoElms/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CssJs.BootsTrapScriptJs/>
                    <CssJs.FileJs fileName="main.js"/>
                    <CssJs.FileJs fileName="protfoilo.js"/>
                </body>
            </html>
        )
    }
}
module.exports = Portfolio


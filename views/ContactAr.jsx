const React = require('react')
const CssJs = require('./components/CssJs')
const All = require('./components/All')
const ContactComp = require('./components/Contact')

class ContactAR extends React.Component {
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
                    <CssJs.FileCss fileName="contact.css"/>
                    <title>contact</title>
                </head>
                <body>
                    <All.Lang/>
                    <div className="container startBage">
                        <div className="row d-flex">
                            <All.MyInfoAr/>
                            <div className='page col-xl-9 col-lg-9 col-md-12 col-sm-11 p-5 col-11' >
                                <div className='d-flex flex-column-reverse'>
                                    <All.MoveAroundAr/>
                                    <ContactComp.FormsAr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CssJs.BootsTrapScriptJs/>
                    <CssJs.FileJs fileName="main.js"/>
                    <CssJs.FileJs fileName="contact.js"/>
                </body>
            </html>
        )
    }
}
module.exports = ContactAR


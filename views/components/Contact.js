const React = require('react')

class Forms extends React.Component {
    render(){
        return(
            <div className='forms' method="POST" action="/contact">
                <form id="forms">
                    <input id="lala" className='text' type='text' name='username' placeholder='Your Name'/>
                    <input type='text' className='text' name='email' placeholder='E-mail'/>
                    <input type='number' className='number'  name='phone' placeholder='phone Number'/>
                    <textarea defaultValue="massge" className='msge' name="msge"></textarea>
                    <div className='buttonS'>
                        <div className='submitBack'>
                            <input className='submit' type='submit' defaultValue='send'/>
                        </div>
                    </div>
                
                </form>
            </div>
        )
    }
}

class FormsAr extends React.Component {
    render(){
        return(
            <div className='forms' method="POST" action="/contact">
                <form>
                    <input className='text' type='text' name='username' placeholder='الإسم'/>
                    <input type='text' className='text' name='email' placeholder='الايميل'/>
                    <div className='bettwenForms'>
                        <input type='number' className='number'  name='phone' placeholder='رقم الجوال'/>
                    </div>
                    <textarea defaultValue="الرسالة" className='msge' name="msge"></textarea>
                    <div className='buttonS'>
                        <div className='submitBack'>
                            <input className='submit' type='submit' defaultValue='ارسل'/>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}


const contactComp = {
    Forms:Forms,
    FormsAr:FormsAr
}

module.exports = contactComp
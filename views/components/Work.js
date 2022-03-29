const React = require('react')


const WorkContent = (props) => {
        return(
            <div className='WorkContent'>
                <h1 className='title'>title</h1>
                <div className='w-100 mt-5 imgaeBack'>
                    <img className="image w-100" src='/images/funny-sunshine-quotes.jpg'/>
                </div>
                <div className='mt-5 d-flex justify-content-around'>
                    <div className='d-flex flexDir'>
                        <div className='backIcon mx-3'>
                            <i className="fa-solid fa-image icon yellowColor"></i>
                        </div>
                        <p className='mt-2 text'>text text</p>
                    </div>
                    <div className='d-flex flexDir'>
                        <div className='backIcon mx-3'>
                            <i className="fa-solid fa-image icon yellowColor"></i>
                        </div>
                        <p className='mt-2 text'>text text</p>
                    </div>
                    <div className='d-flex flexDir'>
                        <div className='backIcon mx-3'>
                            <i className="fa-solid fa-image icon yellowColor"></i>
                        </div>
                        <p className='mt-2 text'>text text</p>
                    </div>
                </div>
                <div className='backVideo mt-5 w-75'>
                    <video className='w-100 video' controls>
                        <source src={props.video} type="video/mp4"/>
                    </video>
                </div>
                <div className='textContent mt-5'>
                    <p>{props.pragraph}</p>
                </div>
            </div>
        )

}



const workComp = {
    WorkContent:WorkContent,
    // WorkContentAr:WorkContentAr
}

module.exports = workComp
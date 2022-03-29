const React = require('react');

// bootstrab link element
class BootsTrapLinkCss extends React.Component {
    render(){
        return(
            <link 
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
        )
    }
}
//link for any css file
class FileCss extends React.Component {
    render(){
        return(
            <link rel="stylesheet" href={`/css/${this.props.fileName}`}/>
        )
    }
}
//script bootstrab elemnts
class BootsTrapScriptJs extends React.Component {
    render(){
        return(
            <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossOrigin="anonymous">
            </script>
        )
    }
}
//link font Awsom Css
class FontAwsom extends React.Component {
    render(){
        return(
            <link rel="stylesheet" href='/css/fontAwsom/css/all.min.css'/>
        )
    }
}
//script for any js file
class FileJs extends React.Component {
    render(){
        return(
        <script src={`/js/${this.props.fileName}`}></script>
        )
    }
}

const CssJSFile = {
    BootsTrapLinkCss: BootsTrapLinkCss,
    FileCss: FileCss,
    FontAwsom:FontAwsom,
    BootsTrapScriptJs: BootsTrapScriptJs,
    FileJs: FileJs
}

module.exports = CssJSFile;

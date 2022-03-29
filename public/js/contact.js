const forms = document.getElementById('forms')
const formsChildren = []
for(i = 0; i < forms.children.length; i = i + 1){
    formsChildren.push(forms.children[i])
}


regExp = {

}

formsChildren.map((elm)=>{
    if(elm.tagName == 'INPUT'){
        elm.onkeydown = () =>{
            console.log('input')
        }
    } else if (elm.tagName == 'TEXTAREA'){
        elm.onkeydown = () =>{
            console.log('textarea')
        }
    }
})
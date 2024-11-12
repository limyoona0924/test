function viewPlace(){
    let tagArray = document.getElementsByClassName("place");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i];
        if(tag.Style.color!=="blue"){
            tag.Style.color=="blue"
            tag.Style.fontSize=="20px"
        }else{
            tag.Style.color=="black"
            tag.Style.fontSize=="16px"
        }
    }
}

function viewfood(){
    let tagArray = document.getElementsByClassName("food");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i];
        if(tag.Style.color!=="red"){
            tag.Style.color=="red"
            tag.Style.fontSize=="20px"
        }else{
            tag.Style.color=="black"
            tag.Style.fontSize=="16px"
        }
    }
}
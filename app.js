const contentBox = document.getElementsByClassName('contentBox');
console.log(contentBox)

for(let i=0; i<contentBox.length; i++){
    contentBox[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('btn')){
            console.log("button");
            e.target.classList.toggle('active');
            e.currentTarget.classList.toggle('active');
        } else if(e.target.tagName == "H2"){
            const button = e.target.nextElementSibling
            button.classList.toggle('active');
            e.currentTarget.classList.toggle('active');
        }
    })
}
function imgDrop(e){
    e.preventDefault();
    var img = e.dataTransfer.getData('text');
    console.log(e.dataTransfer);
    // console.log(e.target);
    // console.log(img);
    // console.log(document.getElementById(img));
    e.target.appendChild(document.getElementById(img));
}
function imgDragover(e){
    e.preventDefault();
}
function dragStart(e){
    let x = e.dataTransfer.setData("text",e.target.id)
}


// function appendChildTest(){
//     let li = document.createElement('li');
//     console.log(li);
//     let text = document.createTextNode('Tanvir');
//     li.appendChild(text);
//     console.log(text);
// }
// appendChildTest();
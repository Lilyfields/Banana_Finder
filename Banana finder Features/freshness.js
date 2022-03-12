var main = document.querySelector('.bananas');
var bananasUL = createElements(main,'ul','bananas');
var output =document.createElement (main,'div','output');
for(var i=0; i<5; i++){
    const 
}

function createElements(parent,elType,myClass){
    var el = document.createElement (elType);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}
var offcanvas = document.getElementById('offcanvasWithBothOptions');
offcanvas.addEventListener('show.bs.offcanvas', function(){
    savedData.innerHTML ='';
    let div = document.createElement('div');
    
    for(var i = 0; i < 3; i++){
        let span = document.createElement("span");
        let data = localStorage.getItem(i);

        if(data === null){
            break;
        }
        else{        
            span.setAttribute('class', 'unitOffcanvas');
            span.innerHTML = data;
            div.appendChild(span);
        }
    }
    savedData.appendChild(div);
})
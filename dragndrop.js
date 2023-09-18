//드래그앤드롭구현
//단위요소를 박스안에 넣기 구현

//dragstart
function putinBox(e){
    e.target.classList.add('dragging');

    //dragend
    e.currentTarget.addEventListener('dragend', () => {
        e.target.classList.remove('dragging');
    })

    let unitContainers1 = Array.from(document.querySelectorAll('.unit1'));
    let unitContainers2 = Array.from(document.querySelectorAll('.unit2'));
    let unitContainers = unitContainers1.concat(unitContainers2);

    //dragover
    unitContainers.forEach(unitContainer => {
        unitContainer.addEventListener('dragover', e => {
            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            draggable.style.position = 'relative';
            
            if(unitContainer.innerHTML.length === 0)
            {
                unitContainer.style.width = draggable.offsetWidth + 'px';
                unitContainer.appendChild(draggable);
            }
            // else{
            //     let first = unitContainer.innerHTML;
            //     let second = draggable.textContent;
            //     console.log(first);
            //     console.log(second);
            //     let temp = first;

            //     // first.textContent = second;
            //     // second.textContent = temp;

            //     //console.log(first);
            //     console.log(draggable);

            // }
        });
    });
}

//원하는 위치에 놓기 구현
// function dragNdrop(e) {
//     //dragstart
//     e.target.classList.add('dragging1');

//     //dragover
//     container.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         e.target.classList.remove('dragging1');
        
//     })

//     //drop
//     container.addEventListener('drop', (e) => {
//         const relativeX = e.pageX - container.offsetLeft;
//         const relativeY = e.pageY - container.offsetTop;
//         e.preventDefault();
        
//         console.log('drop', e);
//         const draggable = document.querySelector('.dragging1');

//         draggable.style.left = relativeX + 'px';
//         draggable.style.top = relativeY + 'px';


//     })

// }

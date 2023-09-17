function makeComponentBox(){
    let componentBox = document.createElement('span');
    let num1 = document.createElement('input');
    let unit1 = document.createElement('div');
    let btnConvert = document.createElement('button');
    let num2 = document.createElement('input');
    let unit2 = document.createElement('div');

    componentBox.setAttribute('class', 'componentBox');
    componentBox.setAttribute('draggable', 'true');
    componentBox.setAttribute('ondragstart', 'dragNdrop(event)');
    num1.setAttribute('class', 'num1');
    unit1.setAttribute('class', 'unit1');
    btnConvert.setAttribute('class', 'btnConvert');
    btnConvert.setAttribute('onclick', 'btnConvert(event)');
    btnConvert.innerHTML = '=>';
    num2.setAttribute('class', 'num2');
    unit2.setAttribute('class', 'unit2');

    componentBox.appendChild(num1);
    componentBox.appendChild(unit1);
    componentBox.appendChild(btnConvert);
    componentBox.appendChild(num2);
    componentBox.appendChild(unit2);

    document.getElementById('container').innerHTML += componentBox.outerHTML;
}
class Unit{
    constructor(name){
        this.name = name;
        this.initialize();
    }

    initialize(){
        const unitBox = document.getElementById('unitBox');
        let div = document.createElement("span");
        div.setAttribute('class', 'unitOffcanvas');
        div.innerHTML = this.name;

        unitBox.appendChild(div);
    }
}

//speed, angle, length, data, weight, area, energy, force, pressure, time, torque, volume
class Speed extends Unit{
    constructor(name){
        super(name);
    }
}
class Angle extends Unit{
    constructor(name){
        super(name);
    }
}
class Length extends Unit {
    constructor(name) {
        super(name);
    }
}
class Data extends Unit {
    constructor(name) {
        super(name);
    }
}
class Weight extends Unit {
    constructor(name) {
        super(name);
    }
}
class Area extends Unit {
    constructor(name) {
        super(name);
    }
}
class Energy extends Unit {
    constructor(name) {
        super(name);
    }
}
class Force extends Unit {
    constructor(name) {
        super(name);
    }
}
class Pressure extends Unit {
    constructor(name) {
        super(name);
    }
}
class Time extends Unit {
    constructor(name) {
        super(name);
    }
}
class Torque extends Unit {
    constructor(name) {
        super(name);
    }
}
class Volume extends Unit {
    constructor(name) {
        super(name);
    }
}

//Temperature, speed, angle, length, data, weight, area, energy, force, pressure, time, torque, volume

const speed = document.getElementById("speed");
const angle = document.getElementById("angle");
const length = document.getElementById("length");
const data = document.getElementById("data");
const weight = document.getElementById("weight");
const area = document.getElementById("area");
const energy = document.getElementById("energy");
const force = document.getElementById("force");
const pressure = document.getElementById("pressure");
const time = document.getElementById("time");
const volume = document.getElementById("volume");




speed.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const kmh = new Speed('km/h');
    const mph = new Speed('mile/h');

    placeOnContainer('speed');
})
angle.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const degree = new Angle('도');
    const radian = new Angle('라디안');

    placeOnContainer('angle');
})
length.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const km = new Length('km');
    const m = new Length('m');
    const mm = new Length('mm');
    const cm = new Length('cm');
    const mile = new Length('mile');
    const inch = new Length('inch');
    const ft = new Length('ft');

    placeOnContainer('length');
})
data.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const byte = new Data('byte');
    const bit = new Data('bit');
    const kilobyte = new Data('KB');
    const megabyte = new Data('MB');
    const gigabyte = new Data('GB');

    placeOnContainer('data');
})
weight.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const kg = new Weight('kg');
    const g = new Weight('g');
    const oz = new Weight('온스');
    const lb = new Weight('파운드');
    const ton = new Weight('톤');

    placeOnContainer('weight');
})
area.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const metersquare = new Area('제곱미터');
    const ftsquare = new Area('제곱피트');
    const Acre = new Area('에이커');
    const Lsqure = new Area('평');

    placeOnContainer('area');
})
energy.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const J = new Energy('J');
    const kcal = new Energy('kcal');
    const Nm = new Energy('N*m');

    placeOnContainer('energy');
})
force.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const N = new Force('N');
    const jm = new Force('J/m');

    placeOnContainer('force');
})
pressure.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const MPa = new Pressure('MPa');
    const bar = new Pressure('bar');

    placeOnContainer('pressure');
})
time.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const year = new Time('년');
    const month = new Time('개월');
    const week = new Time('주');
    const day = new Time('일');
    const hour = new Time('시간');
    const minute = new Time('분');

    placeOnContainer('time');
})
volume.addEventListener('click', function () {
    unitBox.innerHTML = "";
    const l = new Volume('L');
    const ml = new Volume('mL');
    const oz = new Volume('온스');
    const pint = new Volume('파인트');
    const qt = new Volume('쿼트');
    const gal = new Volume('갤런');

    placeOnContainer('volume');
})

function placeOnContainer(className){
    let elements = document.querySelectorAll('.unitOffcanvas');
    
    elements.forEach(element => {
        element.addEventListener('click', function () {
            let node = element.cloneNode(true);
            node.setAttribute('class', 'unit');
            node.classList.add(className);
            node.setAttribute('draggable', true);
            node.setAttribute('ondragstart', 'putinBox(event)');
            container.appendChild(node);
            
            //locatlStorage에 저장
            saveData(node);
            
        })
    })
}
var i = 0;
function saveData(node) {
    let data = node.textContent;
    //let keys = Object.keys(localStorage);

    localStorage.setItem(i, data);
    i++;
    if (i > 2) {
        i = 0;
    }


    
    // if (keys.length <= 3){
    //     localStorage.setItem(data, 0);
    // }
    // else{
    //     let oldestKey = keys[0];
    //     localStorage.setItem(data, 0);
    //     localStorage.removeItem(oldestKey);
    // }

    // localStorage.setItem(data, 0);
}


function btnConvert(e) {
    let parentComponent = e.currentTarget.parentElement;
    let unit1 = parentComponent.children[1].firstChild;
    let unit2 = parentComponent.children[4].firstChild;
    let num1 = parentComponent.children[0].value;
    let num2 = parentComponent.children[3].value;

    if (unit1.className === unit2.className) {

        //speed, angle, length, data, weight, area, energy, force, pressure, time, torque, volume
        switch (unit1.className) {
            case 'unit length':
                num2 = length2(unit2.innerHTML, length1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit speed':
                num2 = speed2(unit2.innerHTML, speed1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit angle':
                num2 = angle2(unit2.innerHTML, angle1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit data':
                num2 = data2(unit2.innerHTML, data1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit weight':
                num2 = weight2(unit2.innerHTML, weight1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit area':
                num2 = area2(unit2.innerHTML, area1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit energy':
                num2 = energy2(unit2.innerHTML, energy1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit force':
                num2 = force2(unit2.innerHTML, force1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit pressure':
                num2 = pressure2(unit2.innerHTML, pressure1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit time':
                num2 = time2(unit2.innerHTML, time1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit torque':
                num2 = torque2(unit2.innerHTML, torque1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
            case 'unit volume':
                num2 = volume2(unit2.innerHTML, volume1(unit1.innerHTML, num1));
                e.currentTarget.nextElementSibling.value = num2;
                break;
        }
    }
    else {
        alert('변환할 수 없는 단위입니다.');
    }

    function length1(unit, num) {
        let temp;
        switch (unit) {
            case 'm':
                temp = num;
                break;
            case 'km':
                temp = num * 1000;
                break;
            case 'mm':
                temp = num * 0.001;
                break;
            case 'cm':
                temp = num * 0.01;
                break;
            case 'mile':
                temp = num * 1609.34;
                break;
            case 'inch':
                temp = num * 0.0254;
                break;
            case 'ft':
                temp = num * 3.2808;
                break;
        }
        return temp;
    }
    function length2(unit, num) {
        let temp;
        switch (unit) {
            case 'm':
                temp = num;
                break;
            case 'km':
                temp = num / 1000;
                break;
            case 'mm':
                temp = num / 0.001;
                break;
            case 'cm':
                temp = num / 0.01;
                break;
            case 'mile':
                temp = num / 1609.34;
                break;
            case 'inch':
                temp = num / 0.0254;
                break;
            case 'ft':
                temp = num / 3.2808;
                break;
        }
        return temp;
    }

    function speed1(unit, num) {
        let temp;
        switch (unit) {
            case 'km/h':
                temp = num;
                break;
            case 'mile/h':
                temp = num * 1.6093;
                break;
        }
        return temp;
    }
    function speed2(unit, num) {
        let temp;
        switch (unit) {
            case 'km/h':
                temp = num;
                break;
            case 'mile/h':
                temp = num / 1.6093;
                break;
        }
        return temp;
    }

    function angle1(unit, num) {
        let temp;
        switch (unit) {
            case '도':
                temp = num;
                break;
            case '라디안':
                temp = num * 57.2958;
                break;
        }
        return temp;
    }
    function angle2(unit, num) {
        let temp;
        switch (unit) {
            case '도':
                temp = num;
                break;
            case '라디안':
                temp = num / 57.2958;
                break;
        }
        return temp;
    }

    function data1(unit, num) {
        let temp;
        switch (unit) {
            case 'byte':
                temp = num;
                break;
            case 'bit':
                temp = num / 8;
                break;
            case 'KB':
                temp = num * 1024;
                break;
            case 'MB':
                temp = num * 1048576;
                break;
            case 'GB':
                temp = num * 1073741824;
                break;
        }
        return temp;
    }
    function data2(unit, num) {
        let temp;
        switch (unit) {
            case 'byte':
                temp = num;
                break;
            case 'bit':
                temp = num * 8;
                break;
            case 'KB':
                temp = num / 1024;
                break;
            case 'MB':
                temp = num / 1048576;
                break;
            case 'GB':
                temp = num / 1073741824;
                break;
        }
        return temp;
    }

    function weight1(unit, num) {
        let temp;
        switch (unit) {
            case 'kg':
                temp = num;
                break;
            case 'g':
                temp = num * 0.001;
                break;
            case '온스':
                temp = num * 0.02835;
                break;
            case '파운드':
                temp = num * 0.453592;
                break;
            case '톤':
                temp = num * 1000;
                break;
        }
        return temp;
    }
    function weight2(unit, num) {
        let temp;
        switch (unit) {
            case 'kg':
                temp = num;
                break;
            case 'g':
                temp = num / 0.001;
                break;
            case '온스':
                temp = num / 0.02835;
                break;
            case '파운드':
                temp = num / 0.453592;
                break;
            case '톤':
                temp = num / 1000;
                break;
        }
        return temp;
    }

    function area1(unit, num) {
        let temp;
        switch (unit) {
            case '제곱미터':
                temp = num;
                break;
            case '제곱피트':
                temp = num * 0.092903;
                break;
            case '에이커':
                temp = num * 4046.85;
                break;
            case '평':
                temp = num * 3.30579;
                break;
        }
        return temp;
    }
    function area2(unit, num) {
        let temp;
        switch (unit) {
            case '제곱미터':
                temp = num;
                break;
            case '제곱피트':
                temp = num / 0.092903;
                break;
            case '에이커':
                temp = num / 4046.85;
                break;
            case '평':
                temp = num / 3.30579;
                break;
        }
        return temp;
    }

    function energy1(unit, num) {
        let temp;
        switch (unit) {
            case 'J':
                temp = num;
                break;
            case 'kcal':
                temp = num * 4186.8;
                break;
            case 'N*m':
                temp = num;
                break;
        }
        return temp;
    }
    function energy2(unit, num) {
        let temp;
        switch (unit) {
            case 'J':
                temp = num;
                break;
            case 'kcal':
                temp = num / 4186.8;
                break;
            case 'N*m':
                temp = num;
                break;
        }
        return temp;
    }

    function force1(unit, num) {
        let temp;
        switch (unit) {
            case 'N':
                temp = num;
                break;
            case 'J/m':
                temp = num;
                break;
        }
        return temp;
    }
    function force2(unit, num) {
        let temp;
        switch (unit) {
            case 'N':
                temp = num;
                break;
            case 'J/m':
                temp = num;
                break;
        }
        return temp;
    }

    function pressure1(unit, num) {
        let temp;
        switch (unit) {
            case 'MPa':
                temp = num;
                break;
            case 'bar':
                temp = num * 0.1;
                break;
        }
        return temp;
    }
    function pressure2(unit, num) {
        let temp;
        switch (unit) {
            case 'MPa':
                temp = num;
                break;
            case 'bar':
                temp = num / 0.1;
                break;
        }
        return temp;
    }

    function time1(unit, num) {
        let temp;
        switch (unit) {
            case '일':
                temp = num;
                break;
            case '시간':
                temp = num / 24;
                break;
            case '분':
                temp = num / 1440;
                break;
            case '주':
                temp = num * 7;
                break;
            case '개월':
                temp = num * 30.4375;
                break;
            case '년':
                temp = num * 365;
                break;
        }
        return temp;
    }
    function time2(unit, num) {
        let temp;
        switch (unit) {
            case '일':
                temp = num;
                break;
            case '시간':
                temp = num * 24;
                break;
            case '분':
                temp = num * 1440;
                break;
            case '주':
                temp = num / 7;
                break;
            case '개월':
                temp = num / 30.4375;
                break;
            case '년':
                temp = num / 365;
                break;
        }
        return temp;
    }
    
    function volume1(unit, num) {
        let temp;
        switch (unit) {
            case 'L':
                temp = num;
                break;
            case 'mL':
                temp = num / 1000;
                break;
            case '온스':
                temp = num / 33.814;
                break;
            case '파인트':
                temp = num * 0.473177;
                break;
            case '쿼트':
                temp = num * 0.946353;
                break;
            case '갤런':
                temp = num * 3.7854;
                break;
        }
        return temp;
    }
    function volume2(unit, num) {
        let temp;
        switch (unit) {
            case 'L':
                temp = num;
                break;
            case 'mL':
                temp = num * 1000;
                break;
            case '온스':
                temp = num * 33.814;
                break;
            case '파인트':
                temp = num / 0.473177;
                break;
            case '쿼트':
                temp = num / 0.946353;
                break;
            case '갤런':
                temp = num / 3.7854;
                break;
        }
        return temp;
    }




}
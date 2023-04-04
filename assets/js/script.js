const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (height % 100 > 5.99) {
        height = height / 100
    }
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso'
        value.classList.remove('normal')
        value.classList.remove('attention')
        value.classList.add('hard');
    }
    else if (bmi >=18.5 && bmi <=24.9 ) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.remove('hard');
        value.classList.add('normal');
    }
    else if (bmi >=25 && bmi <=29.9 ) {
        description = "Cuidado! Você está com sobrepeso!";
        value.classList.remove('hard');
        value.classList.remove('normal');
        value.classList.add('attention');
    }
    else if (bmi >=30 && bmi <=34.9 ) {
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.remove('hard');
        value.classList.remove('normal');
        value.classList.add('attention');
    }
    else if (bmi >=35 && bmi <=39.9 ) {
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.remove('hard');
        value.classList.remove('normal');
        value.classList.add('attention');
    }
    else {
        description = "Cuidado! Você está com obesidade morbida!";
        value.classList.remove('attention');
        value.classList.remove('normal');
        value.classList.add('hard');
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description
});
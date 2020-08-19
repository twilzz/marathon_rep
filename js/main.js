const firstTask = document.querySelector('#task_1'),
      secondTask = document.querySelector('#task_2')
      firstDiv = document.querySelector('.welcome')
    let sent_1 = '', 
        sent_2='',
        counter_1 = 0,
        counter_2 = 0;

firstTask.addEventListener('click', () => {
    sent_1 = prompt('Первое предложение', 'Мама мыла раму'),
    sent_2 = prompt('Второе предложение', 'Папа ржал как конь');   
    getRow(sent_1,sent_2); 
    let sentDiv = document.createElement('p');
    sentDiv.innerHTML = `<p>${sent_1} - ${counter_1}</p>
                          <p>${sent_2} - ${counter_2}</p>`
    firstDiv.append(sentDiv);
    let winnerDiv = document.createElement('div');
if (counter_1 > counter_2) {
    winnerDiv.innerHTML = `<div>${sent_1}</div>`
} else if (counter_2 > counter_1) {
    winnerDiv.innerHTML = `<div>${sent_2}</div>`
} else if (counter_1 !== 0 && counter_2 !== 0 && counter_1 === counter_2) {
    winnerDiv.innerHTML = `<div>В предложениях равное число букв "а"</div>`
}
firstDiv.append(winnerDiv);
});
function getRow(a, b){
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) === 'а') {
            counter_1 ++
            console.log('ALARM! Sent 1');
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (b.charAt(i) === 'а') {
            counter_2 ++
            console.log('ALARM! Sent 2');
        }
    }
    return counter_1, counter_2;
};

let phoneNum = '';
secondTask.addEventListener('click', ()=> {
 phoneNum = prompt("Введите номер телефона", '+71234567890')
  let winnerDiv = document.createElement('div');
    winnerDiv.innerHTML = `<div>${formatPhone(phoneNum)}</div>`
    firstDiv.append(winnerDiv);
});
function formatPhone(tel) {
    console.log(tel.length);
    let newNum = ''
    for (let i = 0; i <tel.length; i++) {
        switch(i) {
            case 2: newNum = newNum + " (" + tel[i];
            break;
            case 5: newNum = newNum + ") " + tel[i];
            break;
            case 8:
            case 10: newNum = newNum + "-" + tel[i];
            break;
            default: newNum += tel[i];
        }
    }
    return newNum;
}
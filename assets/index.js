const buttonCalcular = document.getElementById('calcular')

document.getElementById('calcular').addEventListener("click", function(event) {
        start()
        event.preventDefault();
    }, false)



function start(){
    const allResults = document.getElementById('result');
    const totalCorrectAnswers = Number(document.getElementById('totalCorrectAnswers').value)
    const finalCalification = Number(document.getElementById('finalCalification').value)
    const correctAnswers = Number(document.getElementById('correctAnswers').value)

    console.log(correctAnswers)

    allResults.innerHTML = `
        <tr>
            <th>Puntaje</th>
            <th>Calificación</th>
        </tr>
    `

    for (let i = 0; i <= totalCorrectAnswers; i++){
        const tableItem = document.createElement('tr');

        let result = {
            points: i,
            calification: Number((i * finalCalification / totalCorrectAnswers).toFixed(1))

        }

        if(!(correctAnswers === 0) && (correctAnswers === i)){
            tableItem.innerHTML = `<td class="specific"> ${result.points} </td>  <td class="specific"> ${result.calification} </td> `
        } else {
            tableItem.innerHTML = `<td> ${result.points} </td>  <td> ${result.calification} </td> `
        }
            /*tableItem.innerHTML = `<td class="specific"> ${result.points} </td>  <td class="specific"> ${result.calification} </td> `*/

        allResults.appendChild(tableItem)
    }
}

function checkform()
{
    let f = document.forms["theform"].elements;
    let cansubmit = true;

    for (let i = 0; i < f.length; i++) {
        if (f[i].value.length === 0){
            console.log(f[i].value.length)
            buttonCalcular.disabled = !cansubmit;
            console.log()
        }
    }
    cansubmit
        ? buttonCalcular.disabled = false
        : buttonCalcular.disabled = 'disabled'
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message)
    })
}


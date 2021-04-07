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

    allResults.innerHTML = `
        <thead>
            <tr>
                <th>Puntaje</th>
                <th>Calificación</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `

    for (let i = 0; i <= totalCorrectAnswers; i++){
        const tableItem = document.createElement('tr');

        let result = {
            points: i,
            calification: Number((i * finalCalification / totalCorrectAnswers).toFixed(1))

        }

        if(!(correctAnswers === 0) && (correctAnswers === i)){
            tableItem.innerHTML = `<td> <span class="animate__animated animate__infinite animate__flash animate__slow specific">${result.points}</span></td> <td> <span class="animate__animated animate__infinite animate__flash animate__slow specific">${result.calification}</span> </td> `
        } else {
            tableItem.innerHTML = `<td> ${result.points} </td>  <td> ${result.calification} </td> `
        }

        allResults
            .children[1]
            .appendChild(tableItem)
    }

    if (document.querySelector('.specific')){
        document.querySelector('.specific').scrollIntoView()
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message)
    })
}


const result = document.getElementById('calc');

function getResult() {
    const rate = document.getElementById('rate').value;
    const sold = document.getElementById('sold').value;
    const profit = document.getElementById('profit').value;
    const change = document.getElementById('change').value;

    // console.log(rate);
    // console.log(sold);
    // console.log(profit);
    // console.log(change);
    let i = 0;
    while (i <= 1000) {

        // 2 столбец
        let sum = 0;
        sum += Number(rate);

        // 3 столбец
        let umnog = rate * sold;

        // 4 столбец
        let ourProfit = umnog - sum;



        


    document.getElementById('resultjs').innerHTML = `
    <tr>
        <td>${rate}</td>
        <td>${sum.toFixed(8)}</td>
        <td>${umnog.toFixed(8)}</td>
        <td>${ourProfit.toFixed(8)}</td>
    </tr>
    `;
    i++;
    }


}

result.onclick = getResult;

const result = document.getElementById('calc');

function getResult() {
    let rate = document.getElementById('rate').value;
    const sold = document.getElementById('sold').value;
    const profit = document.getElementById('profit').value;
    const change = document.getElementById('change').value;

    rate = Number(rate);
    let i = 0;
    let sum = 0;

    document.write(`
    <style>
        #result, #resultjs {
            width: 100%;
            text-align: center;
        }

        th {
            font-size: 24px;
        }
    </style>
    `);
    document.write("<table id='result' border='1'>");
    document.write(`
    <thead>
    <tr>
        <th>Ставка</th>
        <th>Потрачено</th>
        <th>Умножение</th>
        <th>Профит</th>
    </tr>
    </thead>
    `);
    document.write('<tbody id="resultjs">');
    while (i <= 20) {
        if(i) {
            rate += Number(rate);
        }
            for(let j = 0; j < change; j++) {
            // 2 столбец
            sum += Number(rate);
        // 3 столбец
            let umnog = rate * sold;
            // 4 столбец
            let ourProfit = umnog - sum;

            document.write(`
            <tr>
                <td>${rate.toFixed(8)}</td>
                <td>${sum.toFixed(8)}</td>
                <td>${umnog.toFixed(8)}</td>
                <td>${ourProfit.toFixed(8)}</td>
            </tr>               
            `);

        }

        i++;
    }
    document.write("</table>")
}

result.onclick = getResult;

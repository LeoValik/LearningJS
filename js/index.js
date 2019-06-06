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

    document.getElementById('result').innerHTML = `
    <tr>
        <th>Ставка</th>
        <th>Потрачено</th>
        <th>Умножение</th>
        <th>Профит</th>
    </tr>
    `;
}

result.onclick = getResult;

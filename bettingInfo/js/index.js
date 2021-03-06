const result = document.getElementById('calc');

function getResult() {
    // Вводимые переменные
    let rate = document.getElementById('rate').value;
    const sold = document.getElementById('sold').value;
    const profit = document.getElementById('profit').value;
    const change = document.getElementById('change').value;

    // Начальные значения
    rate = Number(rate);
    let i = 0;
    let sum = 0;

    // Переменные файла
    let file;
    let data = [];

    // Вставка данных в файл 
    data.push("№ | Ставка | Потрачено | Умножение | Профит\r\n");

    // Стили для таблицы
    document.write(`
    <style>
        #result, #resultjs {
            width: 100%;
            text-align: center;
        }

        th {
            font-size: 24px;
        }

        #link {
            font-size: 24px;
            text-align: center;
            display: block;
            text-decoration: none;
            color: #000;
            font-weight: 700;
        }
        body {
            background: #c7b39b url(images/bg.jpg); /* Цвет фона и путь к файлу */
            color: #000; /* Цвет текста */
           }
    </style>
    `);

    document.write(`<a id="link" target="_blank" download="result.txt">Скачать файл</a>`);
    document.write('<br>');
    //Таблица
    document.write("<table id='result' border='1'>");
    document.write(`
    <thead>
    <tr>
        <th>№</th>
        <th>Ставка</th>
        <th>Потрачено</th>
        <th>Умножение</th>
        <th>Профит</th>
    </tr>
    </thead>
    `);
    document.write('<tbody id="resultjs">');
    index = 1;
    // Логика всего проекта
    while (i <= 1000) {

        if(i) {
            // rate += Number(rate);
            rate = Number(rate) * Number(profit);
        }
            for(let j = 0; j < change; j++) {
            // 2 столбец
            sum += Number(rate);
            // 3 столбец
            let umnog = rate * sold;
            // 4 столбец
            let ourProfit = umnog - sum;

            // Вывод таблицы
            document.write(`
            <tr>
                <td>${index++}</td>
                <td>${rate.toFixed(8)}</td>
                <td>${sum.toFixed(8)}</td>
                <td>${umnog.toFixed(8)}</td>
                <td>${ourProfit.toFixed(8)}</td>
            </tr>               
            `);
            // Вывод в файл
            data.push(`${index} | ${rate.toFixed(8)} | ${sum.toFixed(8)} | ${umnog.toFixed(8)} | ${ourProfit.toFixed(8)}\r\n`);
        }
        if ( ((i * Number(change)) + Number(change)) == 1000 ) {
            break;
        }
        //console.log(i * Number(change));
        i++;
    }
    document.write("</table>")

    // Работа с файлом
    
    let properties = {type: 'text/plain'}; // Specify the file mime-type.
    try {
    // Specify the filename using the File constructor, but ...
    file = new File(data, "result.txt", properties);
    } catch (e) {
    // ... fall back to the Blob constructor if that isn't supported.
    file = new Blob(data, properties);
    }
    let url = URL.createObjectURL(file);
    document.getElementById('link').href = url;
}

result.onclick = getResult;

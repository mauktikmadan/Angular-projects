var arrHead = new Array();
arrHead = ['', 'Student Name', 'Roll No.', 'Semester', 'Marks'];

function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');

    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);
}

function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;
    var tr = empTab.insertRow(rowCnt);
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);

        if (c == 0) {
            var button = document.createElement('input');

            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        } else {
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit() {
    var myTab = document.getElementById('empTable');
    var values = new Array();

    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 0; c < myTab.rows[row].cells.length; c++) {

            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                values.push("'" + element.childNodes[0].value + "'");
            }
        }
    }

    console.log(values);
}
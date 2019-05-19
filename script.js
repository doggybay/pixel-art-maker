let mainContainer = document.querySelector('#container');



// let row = document.createElement('div');
// row.classList.add('row');

// let col = document.createElement('div');
// col.classList.add('col-1');
// col.innerText = 'some text';
// row.appendChild(col);


// mainContainer.appendChild(row);

createGrid(15, 12);



function createGrid(numOfRows, numOfCols) {
    for (let i = 0; i < numOfRows; i++) {

        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numOfCols; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.innerText = 'some text';
            col.classList.add('border');
            col.onclick = function () {
                col.style.backgroundColor = 'red';
            };
            row.appendChild(col);
        }
        mainContainer.appendChild(row);
    }
}

// function createGrid(numOfRows, numOfCols) {
//     // create the rows
//     for (var i = 0; i < numOfRows; i++) {
//         let row = document.createElement('div')
//         row.classList.add('row')

//         // create the columns
//         for (var j = 0; j < numOfCols; j++) {
//             let col = document.createElement('div')
//             col.classList.add('col')
//             col.innerText = 'a'
//             col.classList.add('border')
//             col.onclick = function () {
//                 col.style.backgroundColor = selectedColor
//             }
//             row.appendChild(col)
//         }
//         mainContainer.appendChild(row)
//     }
// }
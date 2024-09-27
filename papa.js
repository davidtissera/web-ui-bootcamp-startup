const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,1,2,3],
    [4,5,6,7]
];

const newTable = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(newTable);
newTable.style.width = "50%";
newTable.style.height = "50%";
newTable.style.color = "black";
newTable.style.borderSpacing = "5px";

const newFunction = (matrix) => {
    matrix.forEach(element => {
        let newNode = document.createTextNode(element);
        let newTr = document.createElement('tr');
        let newTh = document.createElement('th');
        newTable.appendChild(newTr);
        newTr.appendChild(newTh);
        newTh.textContent = newNode.textContent;
    });
}

newFunction(matrix);
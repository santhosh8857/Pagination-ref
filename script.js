const listItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22"
];

const listElements = document.getElementById('list');
const paginationElements = document.getElementById('pagination');

// current
let currentPage = 1;

// Number of rows to be displayed
let rows = 5;

function displayList (items, wrapper, rowsPerPage, page) {
    // everytime making the list empty
    wrapper.innerHtml = "";
    page--;

    // start of the items
    let start = rowsPerPage * page;

    // end off the items
    let end = start + rowsPerPage;

    // slicing the array 
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerText = item;

        wrapper.appendChild(itemElement);
    }
}

function Pagination (items, wrapper, rowsPerPage) {
    wrapper.innerHtml = "";

    let pageCount = Math.ceil(items.length / rowsPerPage);

    for (let i = 1; i < pageCount + 1; i++) {
        let button = PaginationBtn(i, items);
        wrapper.appendChild(button);
    }
}

function PaginationBtn (page, items) {
    let btn = document.createElement('button');

    btn.innerText = page;

    if(currentPage == page) {
        btn.classList.add('active');
    }

    btn.addEventListener('click', function() {
        currentPage = page;
        displayList(items, listElements, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.active');
        currentBtn.classList.remove('active');

        btn.classList.add('active');
    });

    return btn;
}

displayList(listItems, listElements, rows, currentPage);
Pagination(listItems, paginationElements, rows);
// Data
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

// List
const listElements = document.getElementById('list');

// Pagenumber
const paginationElements = document.getElementById('pagination');

// current
let currentPage = 1;

// Number of rows to be displayed
let rows = 5;

function displayList (items, wrapper, rowsPerPage, page) {
   // everytime making the list empty
   wrapper.innerHTML= "";
   page--;

   // ex: take page 2

   // start of the items 
   
   // We have start from item 6.
   // rowsPerPage (5) * page (1) = 5 items[5] = item 6.

   let start = rowsPerPage * page;

   // end off the items
   // start (5) + rowsPerpage (5) = 10 items[10] is the last 

   let end = start + rowsPerPage;

   // slicing the array  indexes -> [5,6,7,8,9]
   let paginatedItems = items.slice(start, end);

   // looping through the sliced array to get the items
   for (let i = 0; i < paginatedItems.length; i++) {
      
      // To wrap into the list storing items to variable
      let item = paginatedItems[i];

      // creating div element and adding item class and text node
      let itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerText = item;
      
      // append to listElement(div)
      wrapper.appendChild(itemElement);
   }
}

function Pagination (items, wrapper, rowsPerPage) {
   wrapper.innerHTML = "";

   // getting the total page counts ==> we have 22 items so the totals pages should be 5 
   // rounding up the next largest number ex: Math.ceil(22/5) => 5
   let pageCount = Math.ceil(items.length / rowsPerPage);

   // creating buttons wrt pagecounts
   for (let i = 1; i <= pageCount; i++) {
      let button = PaginationBtn(i, items);

      // append to the listElement(div)
      wrapper.appendChild(button);
   }
}

function PaginationBtn (page, items) {

   // ex creating for page 1
   let btn = document.createElement('button');

   // page = 1 
   btn.innerText = page;

   // currentPage (1) == page (1)
   if(currentPage == page) {
      btn.classList.add('active');
   }

   // Event - click 
   btn.addEventListener('click', function() {

      // ex: if we choose page 2 the current page will be changed to 2
      currentPage = page;

      // displays the page 2
      displayList(items, listElements, rows, currentPage);

      // making current button active 
      let currentBtn = document.querySelector('.pagenumbers button.active');
      currentBtn.classList.remove('active');

      btn.classList.add('active');
   });

   return btn;
}

displayList(listItems, listElements, rows, currentPage);
Pagination(listItems, paginationElements, rows);

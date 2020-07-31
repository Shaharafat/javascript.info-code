let table = document.getElementById("bagua-table");

/* your code */

let countTD = table.querySelectorAll("td");
let temp = countTD.length; // optional
table.addEventListener("click", function (event) {
  let isTd = event.target.closest("td");

  if (temp != table.querySelectorAll('td').length) {
    return;
  }

  if (!isTd) {
    return;
  }

  // create textarea and replace
  let area = textarea(isTd);

  let ok = createButtons("ok", area);
  let cancel = createButtons("Cancel", area);
  cancel.style.left =
    table.offsetLeft + isTd.offsetLeft + ok.offsetWidth + "px";
});


function textarea(elem) {
  let textarea = document.createElement("textarea");
  textarea.value = elem.innerHTML;
  textarea.style.cssText = `
    width: 150px;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
  `;
  textarea.style.height = elem.clientHeight + 'px';
  // textarea.style.width = ele
  elem.replaceWith(textarea);

  return textarea;
}


function createButtons(value, elem) {
  let button = document.createElement("button");
  button.innerHTML = value;
  button.style.cssText = `
   z-index:9999;
   background-color:#f2f2f2;
   border:1px solid rgba(0,0,0,.5);
   padding:.2rem .8rem;
   box-shadow:none;
   font-weight:bold;
   position:absolute;
  `;

  button.style.top =
    table.offsetTop + elem.offsetTop + elem.offsetHeight + "px";
  button.style.left = table.offsetLeft + elem.offsetLeft + "px";

  elem.append(button);
  return button;
}

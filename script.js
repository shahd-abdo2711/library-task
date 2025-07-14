const addBtn = document.getElementById('btn-add');
const dialog = document.getElementById('dialog');
const overlay = document.getElementById('overlay');
const subBtn = document.getElementById('subBtn');
const bookInp = document.getElementById('bookInp');
const authorInp = document.getElementById('authorInp');
const numberInp = document.getElementById('numberInp');
const check = document.getElementById('check');
const booksContainer = document.getElementById('booksContainer');

addBtn.onclick = () => {
  dialog.classList.remove("hidden");
  overlay.style.display = "block";
  bookInp.value = "";
  authorInp.value = "";
  numberInp.value = "";
  check.checked = false;
};

subBtn.onclick = (e) => {
  e.preventDefault();

  const template = document.getElementById("bookTemplate");
  const clone = template.cloneNode(true);
  clone.classList.remove("hidden");

  clone.querySelector(".book-name").innerText = bookInp.value;
  clone.querySelector(".author-name").innerText = authorInp.value;
  clone.querySelector(".page-numbers").innerText = numberInp.value;

  const readCheck = clone.querySelector(".read-check");
  if (check.checked) {
    readCheck.innerText = "Read";
    readCheck.style.backgroundColor = "#9fff9c";
  } else {
    readCheck.innerText = "Not Read";
    readCheck.style.backgroundColor = "#ff9c9c";
  }

  const removeBtn = clone.querySelector(".delete");
  removeBtn.onclick = () => clone.remove();

  booksContainer.appendChild(clone);

  dialog.classList.add("hidden");
  overlay.style.display = "none";
};

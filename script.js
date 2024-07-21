const addButton = document.getElementById("add-button");
const inputItem = document.getElementById("input-item");
const listContainer = document.querySelector(".list-container ul");

const addItem = () => {
  if (inputItem.value.trim() !== "") {
    const listItem = document.createElement("li");

    const circleButton = document.createElement("button");
    circleButton.classList.add("circle");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete");

    const todoText = document.createElement("span");
    todoText.classList.add("todo-item");
    todoText.textContent = inputItem.value;

    listItem.appendChild(circleButton);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);

    inputItem.value = "";

    listItem.addEventListener("click", () => {
      if (circleButton.innerHTML === "") {
        circleButton.innerHTML = "&#10003";
        todoText.style.textDecoration = "line-through";
      } else {
        circleButton.innerHTML = "";
        todoText.style.textDecoration = "none";
      }
    });

    deleteButton.addEventListener("click", (e) => {
      listItem.remove();
    });
  }
};

addButton.addEventListener("click", addItem);

inputItem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

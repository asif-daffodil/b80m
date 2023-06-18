const ashFrom = document.getElementById("ashFrom");
const orders = document.querySelector("#orders");

ashFrom.addEventListener("submit", e => {
    e.preventDefault();
    const aeo = document.getElementById("aeo").value;
    if (aeo) {
        const div = document.createElement("div");
        const button = document.createElement("button");
        button.classList = "btn btn-danger btn-sm ms-auto delBtn";
        button.innerText = "x";
        div.textContent = aeo;
        div.appendChild(button);
        div.classList = "text-danger fst-italic d-flex border border-danger p-2 my-2 rounded";
        orders.appendChild(div);
        delFunc();
        document.getElementById("aeo").value = null;
    }
});

const delFunc = () => {
    const delBtns = document.querySelectorAll(".delBtn");
    delBtns.forEach(delBtn => {
        delBtn.addEventListener("click", () => {
            const parentDiv = delBtn.closest("div");
            parentDiv.remove();
        });
    });
};

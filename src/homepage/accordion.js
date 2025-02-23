const list = document.querySelector("#accordionReasons");

const accordionHandler = (event) => {
    const isItem = event.target.closest("[data-accordion-item]");
    if (isItem) {
        isItem.classList.toggle("active");
    }
};

list.addEventListener("click", (event) => accordionHandler(event));

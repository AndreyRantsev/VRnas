const header = document.querySelector("#header");

const handlerEvent = (event) => {
    const isBtn = event.target.closest("[data-sublist-button]");
    if (isBtn) {
        const menuItem = isBtn.closest("[data-menu-item]");
        const isActive = menuItem.classList.contains("active");

        const openedSublist = header.querySelectorAll(".active");
        openedSublist.forEach((item) => {
            item.classList.remove("active");
        });

        if (!isActive) {
            menuItem.classList.add("active");
        }
    }
};

header.addEventListener("click", handlerEvent);

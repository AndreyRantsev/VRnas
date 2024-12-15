const header = document.querySelector("#header");

const handlerEvent = (event) => {
    const isBtn = event.target.closest("[data-sublist-button]");
    const isBurger = event.target.closest("#burger");

    if (isBurger) {
        isBurger.classList.toggle("active");
    }

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

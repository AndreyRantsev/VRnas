const testimonial = document.querySelector("#testimonial");

const clickHandler = (event) => {
    const isBtn = event.target.closest("[data-testimonial-btn]");
    if (!isBtn) return; // Если клик не по кнопке, выходим

    const buttons = testimonial.querySelectorAll("[data-testimonial-btn]");

    // Если кнопка уже активна — просто убираем active и выходим
    if (isBtn.classList.contains("active")) {
        isBtn.classList.remove("active");
        return;
    }

    // Убираем active со всех кнопок
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Переключаем active у нажатой кнопки
    isBtn.classList.toggle("active");
};

testimonial.addEventListener("click", clickHandler);

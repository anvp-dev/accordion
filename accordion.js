const accordion = () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("accordion__button")) {
        const accordionItems = Array.from(
          e.target.closest(".accordion").children
        );
        const accordionActive = e.target.closest(".accordion__item");

        function showOneSlide() {
          accordionItems.forEach((item) => {
            item.classList.remove("is-active");
          });
          accordionActive.classList.add("is-active");
        }

        function toggleSlide() {
          accordionActive.classList.toggle("is-active");
        }

        showOneSlide();
        // toggleSlide()
      }
    });
  });
};

export default accordion;

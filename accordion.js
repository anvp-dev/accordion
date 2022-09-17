const accordion = (selector) => {
  const btn = document.querySelectorAll(`${selector} .accordion-btn`);
  const content = document.querySelectorAll(`${selector} .accordion-content`);

  btn.forEach((item, index) =>
    item.addEventListener("click", () => {
      item.classList.toggle("acc-btn-active");
      content[index].classList.toggle("acc-content-active");
    })
  );
};

accordion(".acc");

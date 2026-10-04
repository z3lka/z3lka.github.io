const widget = document.querySelector(".github-month");

if (widget) {
  const months = [...widget.querySelectorAll("[data-github-month]")];
  const label = widget.querySelector("[data-github-month-label]");
  const total = widget.querySelector("[data-github-month-total]");
  const previous = widget.querySelector("[data-github-previous]");
  const next = widget.querySelector("[data-github-next]");
  let activeMonth = months.length - 1;

  function showMonth(index) {
    months[activeMonth].hidden = true;
    activeMonth = index;
    months[activeMonth].hidden = false;
    label.textContent = months[activeMonth].dataset.monthLabel;
    total.textContent = `${months[activeMonth].dataset.monthTotal} contributions`;
    previous.disabled = activeMonth === 0;
    next.disabled = activeMonth === months.length - 1;
  }

  previous.addEventListener("click", () => showMonth(activeMonth - 1));
  next.addEventListener("click", () => showMonth(activeMonth + 1));
  showMonth(activeMonth);
}

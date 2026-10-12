document.querySelector("[data-year]").textContent = new Date().getFullYear();

for (const button of document.querySelectorAll("[data-copy]")) {
  if (!navigator.clipboard) continue;
  button.hidden = false;
  let reset;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
    } catch {
      return;
    }
    button.textContent = "Copied";
    clearTimeout(reset);
    reset = setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  });
}

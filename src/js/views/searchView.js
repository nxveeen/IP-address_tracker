class SearchView {
  _parentEl = document.querySelector(".input__label");

  getquery() {
    const inputField = this._parentEl.querySelector(".input__ipAdd");
    const query = inputField.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".input__ipAdd").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".btn");
      if (!btn) return;

      // console.log(btn);
      handler();
    });
  }
}

export default new SearchView();

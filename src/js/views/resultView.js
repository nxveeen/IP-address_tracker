import View from "./view.js";

class ResultView extends View {
  _parentEl = document.querySelector(".details");

  _clear() {
    this._parentEl.innerHTML = "";
  }

  _generateMarkup() {
    console.log(this._data);
    this._parentEl.classList.remove("dn");
    const htmlEl = `
        <div class="sub">
        <p class="desc">IP Address</p>
        <h4 class="value">${this._data.ip}</h4>
        </div>
        <div class="sub">
        <p class="desc">Location</p>
        <h4 class="value">${this._data.city}, ${this._data.country_code}</h4>
        </div>
        <div class="sub">
        <p class="desc">Timezone</p>
        <h4 class="value">${this._data.timezone}</h4>
        </div>
        <div class="sub">
        <p class="desc">ISP</p>
        <h4 class="value">${this._data.isp.slice(0, 20)}</h4>
        </div>
      `;
    return htmlEl;
  }
}

export default new ResultView();

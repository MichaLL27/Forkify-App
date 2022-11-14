import View from './view';

class SearchView extends View {
  _parenElement = document.querySelector('.search');

  getQuery() {
    const query = this._parenElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parenElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parenElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

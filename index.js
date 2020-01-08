'use strict';

function addItem() {
  $('#js-shopping-list-form').submit((event) => {
    event.preventDefault();
    const item = $(event.currentTarget).find('input');
    $(event.currentTarget).siblings('ul').append(`<li>
    <span class="shopping-item">${item.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    item.val('');
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    event.preventDefault();
  });
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
    event.preventDefault();
  });
}

function main() {
  addItem();
  checkItem();
  deleteItem();
}

$(main);
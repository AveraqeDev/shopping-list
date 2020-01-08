'use strict';

function addItem() {
  $('.js-shopping-list-form').on('submit', '.submit', (event) => {
      console.log('Submit button clicked');
  });
}

function checkItem() {
  $('.shopping-item-controls').on('click', '.shopping-item-toggle', event => {
    console.log('check button clicked');
    $(this).closest('span').toggleClass('shopping-item__checked');
  });
}

function main() {
  addItem();
  checkItem();
}

$(main);
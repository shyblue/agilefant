/*
 * Autocomplete classes for creating dialoged and non dialoged
 * search boxes.
 */

var AutocompleteVars = {
    cssClasses: {
      autocompleteElement: 'autocomplete',
      searchParent: 'autocomplete-searchBoxContainer',
      selectedParent: 'autocomplete-selectedBoxContainer',
      suggestionList: 'autocomplete-suggestionList'
    },
    keyCodes: {
      enter: 13,
      esc:   27,
      down:  40,
      up:    38
    },
    inputWaitTime: 500
};

var Autocomplete = function(element) {
  this.parent = element;
  this.items = null;
  this.searchBoxContainer = $('<div/>');
  this.selectedBoxContainer = $('<div/>');
  this.selectedBox = new AutocompleteSelected();
  this.searchBox = new AutocompleteSearch(this.selectedBox);
};

jQuery.fn.autocomplete = function(options) {
  var autocomplete = new Autocomplete(this);
  autocomplete.items = options.items;
  autocomplete.initialize();
};


Autocomplete.prototype.initialize = function() {
  this.element = $('<div/>').addClass(AutocompleteVars.cssClasses.autocompleteElement)
    .appendTo(this.parent);
  
  this.searchBoxContainer.appendTo(this.element);
  this.selectedBoxContainer.appendTo(this.element);
  
  this.searchBox.setItems(this.items);
  
  this.searchBox.initialize(this.searchBoxContainer);
  this.selectedBox.initialize(this.selectedBoxContainer);
};

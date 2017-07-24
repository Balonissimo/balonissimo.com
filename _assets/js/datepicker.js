//= require js/plugins/flatpickr.min.js
//= require js/plugins/flatpickr-l10ns/nl.js
//= require js/plugins/flatpickr-l10ns/pt.js

flatpickr('input[data-datepicker]',{
  dateFormat: 'd-m-Y',
  locale: document.documentElement.lang
});

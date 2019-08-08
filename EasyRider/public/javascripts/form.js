var addSection = $('#addItem:last').clone();
var itemId = 0;

$('#addButton').click(function() {
  itemId++;
  var newDiv = $('#addItem').clone().appendTo('#addedSection');

  newDiv.find('input').val('');
});

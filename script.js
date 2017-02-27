var names = ["Sam", "Peter", "Jacob", "Annabelle", "Lucinda"];

$(document).ready(function(){

  var todoArray = [];

  $('button#submitButton').on('click', function(event) {
    var userInput = $('input#newTodoText').val();
    todoArray.push(userInput);
    $('#todoList').append('<li>'+ userInput +'</li>')
    $('input#newTodoText').val('');

  })

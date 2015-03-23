

$('#answer').click(function(){

    $.ajax({
   
      url: 'http://localhost:7777/play/rock', 
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      //dataType: 'jsonp',
      success: function(data) {
         $('#info').empty();
         var $outcome = $('<p>').text(data.outcome);
         var $wins = $('<p>').text(data.wins);
         var $losses = $('<p>').text(data.losses);
         var $ties = $('<p>').text(data.ties);

         $('#info')
         .append($outcome)
         .append($wins)
         .append($losses)
         .append($ties);


      },
      type: 'GET'
   });
    
});

$('#answer2').click(function(){

    $.ajax({
   
      url: 'http://localhost:7777/play/paper', 
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      //dataType: 'jsonp',
      success: function(data) {
         $('#info').empty();
         var $outcome = $('<p>').text(data.outcome);
         var $wins = $('<p>').text(data.wins);
         var $losses = $('<p>').text(data.losses);
         var $ties = $('<p>').text(data.ties);

         $('#info')
         .append($outcome)
         .append($wins)
         .append($losses)
         .append($ties);


      },
      type: 'GET'
   });
    
});

$('#answer3').click(function(){

    $.ajax({
   
      url: 'http://localhost:7777/play/scissors', 
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      //dataType: 'jsonp',
      success: function(data) {
         $('#info').empty();
         var $outcome = $('<p>').text(data.outcome);
         var $wins = $('<p>').text(data.wins);
         var $losses = $('<p>').text(data.losses);
         var $ties = $('<p>').text(data.ties);

         $('#info')
         .append($outcome)
         .append($wins)
         .append($losses)
         .append($ties);


      },
      type: 'GET'
   });
    
});

$('#answer4').click(function(){

    $.ajax({
   
      url: 'http://localhost:7777/play/lizard', 
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      //dataType: 'jsonp',
      success: function(data) {
         $('#info').empty();
         var $outcome = $('<p>').text(data.outcome);
         var $wins = $('<p>').text(data.wins);
         var $losses = $('<p>').text(data.losses);
         var $ties = $('<p>').text(data.ties);

         $('#info')
         .append($outcome)
         .append($wins)
         .append($losses)
         .append($ties);


      },
      type: 'GET'
   });
    
});

$('#answer5').click(function(){
    
    $.ajax({
   
      url: 'http://localhost:7777/play/spock', 
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      //dataType: 'jsonp',
      success: function(data) {
         $('#info').empty();
         var $outcome = $('<p>').text(data.outcome);
         var $wins = $('<p>').text(data.wins);
         var $losses = $('<p>').text(data.losses);
         var $ties = $('<p>').text(data.ties);

         $('#info')
         .append($outcome)
         .append($wins)
         .append($losses)
         .append($ties);

      },
      type: 'GET'

   });
    
});

$('#button').on('click', function(){
  $('li').remove()
  var apiURL='https://data.nasa.gov/resource/gvk9-iz74.json';


  $.ajax({
    url: apiURL,
    success:function(res){
      // executes a function once for each element
      res.forEach(function(arr){

        // makes sure values aren't repeated
        if(arr.center !== $("body > .center > li:last-child").text()){
          // pulls values for center,country,location,city,state,&zipcode
          var city= arr.city;
          var country= arr.country;
          var apiKEY = "f7878dfd80e0ae390a5f6efab3c857bb";
          var apiURL2 = "http://api.openweathermap.org/data/2.5/weather?q="+ encodeURI(city) +"," + country +"&appID="+ apiKEY +"&units=imperial";
          // console.log(apiURL2)
          $.ajax({
            url: apiURL2,
            success: function(sti){
              console.log(sti)
              if ( typeof sti !== 'undefined' ){
                $('.weather').append('<li> ' + sti.main.temp + ' </li>' )
              } else {
                $('.weather').append('<li> </li>' )
              }
            },
            error: function(err){
              console.log(err)
            }
          })
          $('.center').append('<li>'+ arr.center + '</li>')
          $('.country').append('<li>'+ arr.country + '</li>')
          $('.location').append('<li>'+ arr.location.longitude +' '+ arr.location.latitude + '</li>')
          $('.city').append('<li>'+ arr.city + '</li>')
          $('.state').append('<li>'+ arr.state + '</li>')
          $('.zipcode').append('<li>'+ arr.zipcode + '</li>')

        };

      });
    },
    error:function(err){
      console.log(err)
    }

  })


});

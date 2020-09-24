function statusChangeCallback(response) { 
    console.log('statusChangeCallback');
    console.log(response);                   
    if (response.status === 'connected') {   
      testAPI();  
    } else {                                
      document.getElementById('status').innerHTML ="";
    }
  }


  function checkLoginState() {               
    FB.getLoginStatus(function(response) {   
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '167806018263025',
      cookie     : true,                    
      xfbml      : true,                     
      version    : 'v8.0'           
    });


    FB.getLoginStatus(function(response) {   
      statusChangeCallback(response);        
    });
  };
 
  function testAPI() {                      
    console.log('Welcome!  Processing the information ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
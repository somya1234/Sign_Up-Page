var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
      client_id: '880966960369-erkmntph4d01jvos65dqfokt7rl28vuq.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}
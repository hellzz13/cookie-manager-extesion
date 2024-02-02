
var button = document.getElementById("getCookiesButton");
button.addEventListener('click', function() {
  let cookieName = document.getElementById('cookieNameInput').value;

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Obtém os cookies da guia ativa
    chrome.cookies.getAll({ url: tabs[0].url }, function(cookies) {
      // fazer aparecer no HTML
      var cookieList = document.createElement('ul');
      cookies.forEach(function(cookie) {
      if(cookieName !== cookie.name) return
        var listItem = document.createElement('li');
        listItem.textContent = cookie.name + ': ' + cookie.value;
        cookieList.appendChild(listItem);
      });
      
      document.body.appendChild(cookieList);
    });
  });
});
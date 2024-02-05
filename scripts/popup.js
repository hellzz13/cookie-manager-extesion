
const button = document.getElementById("getCookiesButton");
button.addEventListener('click', function() {
  const cookieName = document.getElementById('cookieNameInput').value;

  console.log(cookieName)

  chrome.tabs.query({}, function(tabs) {
    // Obtém os cookies da guia ativa
    tabs.map(({url}) => chrome.cookies.getAll({ url: url }, function(cookies) {
        const cookieList = document.createElement('ul');
        cookies.forEach(function(cookie) {
        if(cookieName !== cookie.name) return
          const listItem = document.createElement('li');
          listItem.textContent = cookie.name + ': ' + cookie.value;
          cookieList.appendChild(listItem);
  
        });
        document.body.appendChild(cookieList);
        chrome.cookies.set({url:"http://localhost:3000/",path:"/", name: "TudoAzul2" ,value: "hsiauhas", domain:"localhost", expirationDate: new Date().getDate() + 365 }, (value)=> console.log(value))
      })
      )
  });
});


var userNameFromChromeStorage = '';

chrome.storage.sync.get('MyPaymoUsersName', function(data) {
	userNameFromChromeStorage = data.MyPaymoUsersName;
});

(function() {
   'use strict';
   window.setInterval(function () {
       const box = document.querySelector('input[name~=user_id');
       const background = document.querySelector('.x6-window-header');
       const button = document.querySelector('a.x6-btn-green-small');
       if (box && background) {
           if (box.value === userNameFromChromeStorage) {
               box.style.backgroundColor = 'green';
               background.style.backgroundColor = 'green';
               button.style.display = 'block';
           } else {
               box.style.backgroundColor = 'red';
               background.style.backgroundColor = 'red';
               button.style.display = 'none';
           }
       }
   }, 500);
})();
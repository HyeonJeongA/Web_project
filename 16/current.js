setInterval(displayNow, 1000); 

    function displayNow() {  
      var now = new Date();      
      var currentTime = now.toLocaleTimeString(); 

      document.querySelector(".current").innerHTML = currentTime; 
    }
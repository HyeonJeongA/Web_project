document.getElementById('btnn').onclick = nowTime;

    function nowTime(){        
      var left = (screen.availWidth - 400) / 2;  
      var top = (screen.availHeight - 200) / 2;  
      var opt = "left=" + left + ",top=" + top + ",width=" + 400 + ",height=" + 200;
      window.open("current.html", "", opt);
    }
function loadURL(url){
    window.creator.location = url;  // 부모 창(creator)의 location에 url을 넘겨줍니다.
    window.close();  
  }
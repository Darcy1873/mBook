
function reurl(){
  url = location.href;
  var times = url.split("?");
  if(times[1] != 1){
    url += "?1";
    self.location.replace(url);
  }
}

var getClientHeight = function (){
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

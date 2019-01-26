
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content { text-align: center; height: 100%; margin-top: ",[0,200],"; }\nwx-navigator { height: ",[0,100],"; background-color: gray; margin: auto ",[0,200],"; }\nwx-text {text-align: center; padding: auto auto; line-height: 3em; }\n",],undefined,{path:"./pages/tabbar/tabbar-1/tabbar-1.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabbar/tabbar-1/tabbar-1.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      

      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body, wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\nbody { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; min-height: 100%; background-color: #EFEFEF; }\nwx-template { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"btn-row { margin-top: ",[0,50],"; padding: ",[0,20],"; }\n.",[1],"_button.",[1],"primary { background-color: #0faeff; }\n",],undefined,{path:"./pages/center/center.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/center/center.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
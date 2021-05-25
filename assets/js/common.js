var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a5a79f21b082f7febc9a4b4a7c08bf97";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

(function(){
    //var cnzz='<div style="display:none;"><script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1278997025&web_id=1278997025"></script></div>';
    //var cnzz='<script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1278997025&web_id=1278997025"></script>';
    window.onload=function(){
        var div = document.createElement("div");
        div.style.display='none';
        var cnz=document.createElement("script");
        cnz.src="https://s4.cnzz.com/z_stat.php?id=1278997025&web_id=1278997025";
        div.appendChild(cnz);
        document.body.appendChild(div);
    }; 
})();

(function(){
    var gm=document.createElement("script");
    gm.src="https://www.googletagmanager.com/gtag/js?id=G-5C1BSPWEWE";
    gm.async=true;
    var script = document.getElementsByTagName("script")[0]; 
    script.parentNode.insertBefore(gm, script); 
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5C1BSPWEWE'); 
})();

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
   bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else{
  bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})(); 
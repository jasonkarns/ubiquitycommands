// generated by create bookmarklet command
CmdUtils.makeBookmarkletCommand({
  name: "radbox",
  icon: "http://radbox.me/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  description: "Save to Radbox",
  url: "javascript:function%20addvid(){var%20d=document,%20z=d.createElement(%27scr%27+%27ipt%27),%20b=d.body;try%20{if(!b)%20throw(0);r=Math.floor(Math.random()*100+1);z.setAttribute(%27src%27,%20%27http://radbox.me/init/static/add.js?r=%27+r.toString());b.appendChild(z);}%20catch(e)%20{alert(%27Please%20wait%20until%20the%20page%20has%20loaded.%27);}}if(window.location.hostname.search(%27radbox%27)%20==%20-1)%20{addvid();}%20else%20{alert(%27You%20cannot%20use%20this%20bookmarklet%20in%20Radbox.%27);}void(0);"
});

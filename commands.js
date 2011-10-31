﻿CmdUtils.CreateCommand({ 
  name: ["claim", "claimid", "send to claimid", "add to claimid"],
  icon: "http://claimid.com/images/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  license: "GPL",
  description: "Post to ClaimID",
  help: "Highlight some text to be used as a title and ClaimID will do the rest!",
  'arguments': [
    {role: 'alias', nountype: noun_arb_text, label: 'Title'}
  ],
  preview: function(pblock, args) {
    var data = {
      "title": (args.alias && args.alias.text)? args.alias.text : context.focusedWindow.document.title,
      "link": context.focusedWindow.document.location
    };
    var template = 
    "<p>Post item to ClaimID.</p>" +
    "<dl><dt>Title:</dt><dd>${title}</dd>" +
    "<dt>Link:</dt><dd>${link}</dd></dl>";
    pblock.innerHTML = CmdUtils.renderTemplate(template, data);
  },
  execute: function(args) {
    var href = context.focusedWindow.document.location;
    var title = (args.alias && args.alias.text)? args.alias.text : context.focusedWindow.document.title;
    var url = 'http://claimid.com/post/?url='
      + encodeURIComponent(href)
      + '&title='
      + encodeURIComponent(title);
    Utils.openUrlInBrowser(url);
  }
});

// generated by create bookmarklet command
CmdUtils.makeBookmarkletCommand({
  name: "cuethat",
  icon: "http://cuethat.com/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  description: "Add  movies to your Netflix queue",
  url: "javascript:var%20d=document,z=d.createElement('scr'+'ipt'),b=d.body;try{if(!b)throw(0);d.title='(Posting...)%20'+d.title;z.setAttribute('src','http://cuethat.com/bookmarklet');b.appendChild(z);}catch(e){alert('Please%20wait%20until%20the%20page%20has%20loaded.');}void(0)"
});

// generated by create bookmarklet command
CmdUtils.makeBookmarkletCommand({
  name: "pinboard",
  icon: "http://pinboard.in/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  description: "Save to Pinboard",
  url: "javascript:if(document.getSelection){s=document.getSelection();}else{s='';};document.location='https://pinboard.in/add?next=same&url='+encodeURIComponent(location.href)+'&description='+encodeURIComponent(s)+'&title='+encodeURIComponent(document.title)",
});

// generated by create bookmarklet command
CmdUtils.makeBookmarkletCommand({
  name: "radbox",
  icon: "http://radbox.me/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  description: "Save to Radbox",
  url: "javascript:function%20addvid(){var%20d=document,%20z=d.createElement(%27scr%27+%27ipt%27),%20b=d.body;try%20{if(!b)%20throw(0);r=Math.floor(Math.random()*100+1);z.setAttribute(%27src%27,%20%27http://radbox.me/init/static/add.js?r=%27+r.toString());b.appendChild(z);}%20catch(e)%20{alert(%27Please%20wait%20until%20the%20page%20has%20loaded.%27);}}if(window.location.hostname.search(%27radbox%27)%20==%20-1)%20{addvid();}%20else%20{alert(%27You%20cannot%20use%20this%20bookmarklet%20in%20Radbox.%27);}void(0);"
});

CmdUtils.CreateCommand({ 
  name: ["wishlist", "wishlistr", "add to wishlistr"],
  icon: "http://www.wishlistr.com/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns" },
  license: "GPL",
  description: "Add an item to your Wishlistr wishlist.",
  help: "Highlight some text to be used as a title and Wishlistr will do the rest!",
  'arguments': [
    {role: 'alias', nountype: noun_arb_text, label: 'Title'}
  ],
  preview: function(pblock, args) {
    var data = {
      "title": (args.alias && args.alias.text)? args.alias.text : context.focusedWindow.document.title,
      "link": context.focusedWindow.document.location
    };
    var template = 
    "<p>Add item to your Wishlist.</p>" +
    "<dl><dt>Title:</dt><dd>${title}</dd>" +
    "<dt>Link:</dt><dd>${link}</dd></dl>";
    pblock.innerHTML = CmdUtils.renderTemplate(template, data);
  },
  execute: function(args) {
    var href = context.focusedWindow.document.location;
    var title = (args.alias && args.alias.text)? args.alias.text : context.focusedWindow.document.title;
    var url = 'http://www.wishlistr.com/tools/bookmarklet.php?v=1&u='
      + encodeURIComponent(href)
   	  + '&t='
      + encodeURIComponent(title);
    Utils.openUrlInBrowser(url);
  }
});

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

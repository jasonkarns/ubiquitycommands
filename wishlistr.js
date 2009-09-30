CmdUtils.CreateCommand({ 
  name: "wishlistr",
  icon: "http://www.wishlistr.com/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns", email: "jason@karns.name"},
  license: "GPL",
  description: "Add an item to your Wishlistr wishlist.",
  help: "Highlight some text to be used as a title and Wishlistr will do the rest!",
  takes: {"item title": noun_arb_text},
  preview: function( pblock, input ) {
    var template = 
		"<p>Add item to your Wishlist.</p>" +
		"<dl><dt>Title:</dt><dd>${title}</dd>" +
		"<dt>Link:</dt><dd>${link}</dd></dl>";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {
		"title": input.text || context.focusedWindow.document.title,
		"link": context.focusedWindow.document.location
	});
  },
  execute: function(input) {
    var href = context.focusedWindow.document.location;
    var url = 'http://www.wishlistr.com/tools/bookmarklet.php?v=1&u='
		+ encodeURIComponent(href)
		+ '&t='
		+ encodeURIComponent(input.text || context.focusedWindow.document.title);
    Utils.openUrlInBrowser( url );
  }
});

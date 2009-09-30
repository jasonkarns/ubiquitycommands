CmdUtils.CreateCommand({ 
  name: "claimid",
  icon: "http://claimid.com/images/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns", email: "jason@karns.name"},
  license: "GPL",
  description: "Post to ClaimID",
  help: "Highlight some text to be used as a title and ClaimID will do the rest!",
  takes: {"item title": noun_arb_text},
  preview: function( pblock, input ) {
    var template = 
		"<p>Post item to ClaimID.</p>" +
		"<dl><dt>Title:</dt><dd>${title}</dd>" +
		"<dt>Link:</dt><dd>${link}</dd></dl>";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {
		"title": input.text || context.focusedWindow.document.title,
		"link": context.focusedWindow.document.location
    });
  },
  execute: function(input) {
    var href = context.focusedWindow.document.location;
    var url = 'http://claimid.com/post/?url='
        + encodeURIComponent(href)
        + '&title='
        + encodeURIComponent(input.text || context.focusedWindow.document.title);
    Utils.openUrlInBrowser( url );
  }
});

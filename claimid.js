CmdUtils.CreateCommand({ 
  name: ["claim", "claimid", "send to claimid", "add to claimid"],
  icon: "http://claimid.com/images/favicon.ico",
  homepage: "http://jason.karns.name/",
  author: { name: "Jason Karns", email: "jason@karns.name"},
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
    Utils.openUrlInBrowser( url );
  }
});

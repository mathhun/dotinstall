chrome.contextMenus.create({
    "title": '"Search Twitter with "%s"',
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
	var url = 'https://twitter.com/search?q=' + encodeURIComponent(info.selectionText);
	chrome.tabs.create({
	    url: url
	});
    }
});

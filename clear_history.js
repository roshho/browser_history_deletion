// Gets data from chrome storage
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get({
        sites: 'supersecretsite.com',
        popup: false
    }, deleteBySites); // when clicked, links from options will be loaded and passed to deleteBySites 
});

// Splits sites by newline and itr sites over deleteBySite
var numSites = 0;
function deleteBySites(storage) {
    var allSites = storage.sites.split("\n"); // splits site values by newline
    numSites = allSites.length; // for later
    for (var i = 0; i < allSites.length; i++) { // for each site, this loop is called
        deleteBySite(allSites[i], storage.popup);
    }
}

// Searches browser history for URLs and deletes. If popup = true, calls siteDeleted
function deleteBySite(site, popup) { 
    chrome.history.search({
            text: site,
            startTime: 0,
            maxResults: 999999
        },
        function(results) {
            var itemsDeleted = 0; // counting how many is deleted
            for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) { // 
                chrome.history.deleteUrl({
                    url: results[itemsDeleted].url
                });
            }
            if (popup) {
                siteDeleted(site, itemsDeleted); 
            }
        });
}

// increments amoutns of sites processed. after all is processed, provides an alert indicating completion.
var sitesProcessed = 0; 
var siteString = "Scrub complete:\n";
function siteDeleted(site, count) {
    sitesProcessed++; 
    siteString += (count + "x " + site + "\n");
    if (sitesProcessed >= numSites) { // checking if site processed = numSites, needs to be equals or more, i.e. complete. Pushes alert here
        alert(siteString);
        sitesProcessed = 0;
        siteString = "Scrub complete:\n";
    }
}


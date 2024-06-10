// contains JS for options html page - saving preference & loading preferences

document.getElementById('save').addEventListener('click', save); // event listner for when save button is clicked

// Gets list of sites from text area and asks "display scubr summary?"
function save() {
    var sitesToSave = document.getElementById('sites').value; // retrives from input element ID sites
    var displayPopup = document.getElementById('popup').checked;
    chrome.storage.sync.set({ // save data
        sites: sitesToSave,
        popup: displayPopup // 
    }, displaySavedMessage);
}

function displaySavedMessage() {
    var status = document.getElementById('status');
    status.textContent = 'Sites saved.'; // status message
    setTimeout(function() {
        status.textContent = '';
    }, 2000); // clear status message after 2000ms ~= 2s
}


document.addEventListener('DOMContentLoaded', load); 

function load() { // brings up previously saved data up into option's textbox
    chrome.storage.sync.get({
        sites: 'supersecretsite.com', // pull from chrome storage
        popup: false
    }, function(items) {
        document.getElementById('sites').value = items.sites;
        document.getElementById('popup').checked = items.popup;
    });
}

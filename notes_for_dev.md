# Notes
## ``manifest.json``
- ``manifest.json`` must adhere to specfic format, hence comments are noted here
``` JSON
{
    // contains meta data":
    "name": "My extension",
    "version": "1.0.0",
    "description": "My extension doesn't do anything yet!",
    "manifest_version": 3,
    "permissions": ["history", "storage"],

    // operation will take place in background
    "background": {
        "service_worker": "js/clear_history.js"
    },
    // points users to html page for further options config
    "options_ui": {
        "page": "options.html",
        "chrome_style": true
    },
    "icons": {
        "48": "images/icon_48.png",
        "96": "images/icon_96.png"
    },
    "action": {
        "default_icon": "images/icon_96.png"
    }
}
```

# Tutorials:
## intro tutorial:
- https://blog.jakelee.co.uk/creating-a-history-clearing-chrome-extension/

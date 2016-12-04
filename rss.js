


// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

function makeCorsRequest() {
    var url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.pinboard.in%2Frss%2Fu%3Asonniesedge%2Ft%3Aweb';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        console.log('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        renderItems(xhr.responseText);
    };

    xhr.onerror = function() {
        console.log('Whoops, there was an error making the request.');
    };

    xhr.send();
}

function renderItems(items) {
    var jsonitems = JSON.parse(items).items;

    var appendTo = document.getElementById('feed-entries');

    if (appendTo) {

        for (item of jsonitems) {


            var feedEntry = document.createElement("li");
            var feedEntryDescription = document.createElement("p");
            var feedEntryLink = document.createElement("a");
            // var feedEntryDate = document.createElement("div");

            // Add link
            feedEntryLink.classList.add("test");
            feedEntryLink.href=`${item.link}`;
            feedEntryLink.innerHTML=`${item.title}`;
            feedEntry.appendChild(feedEntryLink);

            // Add description, if available
            if (item.description) {
                feedEntryDescription.innerHTML=`${item.description}`;
                feedEntry.appendChild(feedEntryDescription);
            }

            appendTo.appendChild(feedEntry);

        }
    }


}

makeCorsRequest();

// https://feeds.pinboard.in/rss/u:sonniesedge/t:web

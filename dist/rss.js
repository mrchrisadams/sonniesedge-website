'use strict';

var url = 'https://feeds.pinboard.in/rss/u:sonniesedge/t:web';
var feedEntries = document.getElementById('feed-entries');
feednami.setPublicApiKey('3dd6c709fbc3b22b8e730a84aca101767772c623b64ed5b202058fe0c0878ac6');
feednami.load(url).then(function (feed) {
  console.log(feed);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = feed.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var feedEntry = document.createElement("li");
      var feedEntryDescription = document.createElement("p");
      var feedEntryLink = document.createElement("a");
      var feedEntryDate = document.createElement("div");

      // Add link
      feedEntryLink.classList.add("test");
      feedEntryLink.href = '' + entry.link;
      feedEntryLink.innerHTML = '' + entry.title;
      feedEntry.appendChild(feedEntryLink);

      // Add description, if available
      if (entry.description) {
        feedEntryDescription.classList.add("test");
        feedEntryDescription.innerHTML = '' + entry.description;
        feedEntry.appendChild(feedEntryDescription);
      }

      // Add dates
      // TODO: Add these back in better format once LoomCSS is integrated
      // feedEntryDate.classList.add("text-meta");
      // let entrydate = new Date(entry.date_ms);
      // feedEntryDate.innerHTML = entrydate;
      // feedEntry.appendChild(feedEntryDate);

      // Append completed entry to list of feeds
      feedEntries.appendChild(feedEntry);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
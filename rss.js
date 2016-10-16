  const url = 'https://feeds.pinboard.in/rss/u:sonniesedge/t:web';
  const feedEntries = document.getElementById('feed-entries');
  feednami.setPublicApiKey('3dd6c709fbc3b22b8e730a84aca101767772c623b64ed5b202058fe0c0878ac6');
  feednami.load(url)
    .then(feed => {
      console.log(feed);
      for(let entry of feed.entries){
        let feedEntry = document.createElement("li");
        let feedEntryDescription = document.createElement("p");
        let feedEntryLink = document.createElement("a");
        let feedEntryDate = document.createElement("div");

        // Add link
        feedEntryLink.classList.add("test");
        feedEntryLink.href=`${entry.link}`;
        feedEntryLink.innerHTML=`${entry.title}`;
        feedEntry.appendChild(feedEntryLink);

        // Add description, if available
        if (entry.description) {
          feedEntryDescription.classList.add("test");
          feedEntryDescription.innerHTML=`${entry.description}`;
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
    })

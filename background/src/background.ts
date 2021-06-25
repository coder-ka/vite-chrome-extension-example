chrome.runtime.onInstalled.addListener(() => {
  chrome.commands.onCommand.addListener(function (command) {
    if (command === "open-new-tab-next") {
      chrome.tabs
        .query({ active: true, currentWindow: true })
        .then((selected) => {
          if (selected.length !== 0) {
            chrome.tabs.create({
              index: selected[0].index + 1,
            });
          }
        });
    }
  });
});

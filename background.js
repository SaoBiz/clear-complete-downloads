chrome.downloads.onChanged.addListener(function (downloadDelta) {
    if (downloadDelta.state && downloadDelta.state.current === 'complete') {
        setTimeout(() => chrome.downloads.erase({ id: downloadDelta.id }, () => { }), 5000);
    }
});
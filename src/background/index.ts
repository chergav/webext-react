chrome.runtime.onInstalled.addListener(details => {
	switch (details.reason) {
		case chrome.runtime.OnInstalledReason.INSTALL:
			console.log('Extension installed');
			break;
	// case chrome.runtime.OnInstalledReason.UPDATE:
	// break;
	// case chrome.runtime.OnInstalledReason.CHROME_UPDATE:
	// break;
	// case chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE:
	// break;
	}
});

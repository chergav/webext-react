export const storageGet = (keys: string | string[] | object) => chrome.storage.local.get(keys);

export const storageSet = (data: object) => {
	chrome.storage.local.set(data);
};

export const storageListener = (callback: (_changes: { [index: string]: chrome.storage.StorageChange }) => void) => {
	chrome.storage.onChanged.addListener(changes => {
		callback(changes);
	});
};

export const getURL = (path: string) => chrome.runtime.getURL(path);

export const getI18nMessage = (msg: string) => {
	try {
		return chrome.i18n.getMessage(msg);
	} catch {
		// no console error
	}
};

export const openOptionsPage = () => {
	chrome.runtime.openOptionsPage();
};

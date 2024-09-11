chrome.runtime.onInstalled.addListener(() => {
	console.log("Extension installed");
});

chrome.action.onClicked.addListener(async (tab) => {
	await chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => {
			document.body.style.backgroundColor = "red";
			alert("Hello from background.js");
		},
	});
});

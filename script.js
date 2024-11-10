// register PWA service worker for shared text receiving
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./pwa-share-target.js').then(
        (registration) => {
            console.log("Service worker registration succeeded:", registration);
        },
        (error) => {
            console.error(`Service worker registration failed: ${error}`);
        },
    )
} else {
    console.error("Service workers are not supported.");
}

// thanks to ChatGPT
function isRunningInChromeExtension() {
    return (
        typeof chrome !== 'undefined' &&
        typeof chrome.runtime !== 'undefined' &&
        typeof chrome.runtime.id !== 'undefined'
    );
}

// main part

// Set min size for Chrome extension window
if (isRunningInChromeExtension()) document.documentElement.classList.add('extension-styles');

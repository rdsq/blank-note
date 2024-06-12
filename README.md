# Blank

This thing allows you to write some text in your browser, like prompts, without saving, in your browser page at [blank-note.pages.dev](https://blank-note.pages.dev/)

## Features

### PWA

You can install this app on your system to access it from the Home Screen, offline and access the next feature

### Share

You can send some text in your OS to Blank (when PWA is installed), and edit your text here!

## Running

These are the steps to run this Web App, depending on the way you want to run it

### Web

To run this app on the web, you have these options:

#### Website

To run it as a website, available globally, visit [blank-note.pages.dev](https://blank-note.pages.dev/)

You can also install the PWA to access it offline

#### File

You can run this web app from file, however it will be limited, but has everything you would need. Here is how you can do it:

1. Download the [index.html](./index.html) file
2. Open it in your browser

#### Local Host

If you want to run it locally, with all the features available, do these steps:

1. Download some hosting software, like the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension for VS Code
2. Run this directory with this software
3. Visit it on the URL it will give you, for example http://127.0.0.1:3000/

In this case you will also be able to install the PWA

### Chrome Extension

You can install this Web App as an extension for any Chromium browser, like Chrome, Opera, Arc and more

Here is how to do it:

1. Download this project to your computer
2. Open `<your browser name>://extensions/` page in your browser
3. Enable Developer Mode with the switcher on top of the page
4. Click `Install Unpacked Extension` and choose the directory of this project you downloaded

That's all. Now you can click on the extension's icon and do all that writing stuff

## Project Structure

This app uses two manifests. [One for PWA](./manifest-web.json), [one for Chrome Extension](./manifest.json)

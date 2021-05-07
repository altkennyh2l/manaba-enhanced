"use strict"

chrome.runtime.onInstalled.addListener((details) => {
  if (["install", "update"].includes(details.reason)) {
    const query = new URLSearchParams({
      event: details.reason,
    })

    chrome.tabs.create({
      url: `${chrome.runtime.getURL("options.html")}?${query.toString()}`,
    })
  }

  ;[
    "features-assignments-coloring",
    "features-autosave-reports",
    "features-deadline-highlighting",
    "features-remove-confirmation",
  ].map((key) => {
    chrome.storage.sync.get([key], (result) => {
      if (result[key] === undefined) {
        chrome.storage.sync.set({ [key]: true })
      }
    })
  })
})

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "openOptionsPage") {
    chrome.runtime.openOptionsPage()
  }
})

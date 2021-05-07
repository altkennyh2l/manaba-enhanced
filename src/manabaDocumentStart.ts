"use strict"

import createLinkToOptions from "./methods/createLinkToOptions"
import removeLinkBalloon from "./methods/removeLinkBalloon"
import checkPagePubDeadline from "./methods/checkPagePubDeadline"
import checkAssignmentDeadline from "./methods/checkAssignmentDeadline"

let storageSync: { [key: string]: string }
chrome.storage.sync.get((result) => {
  storageSync = result
})

window.addEventListener("DOMContentLoaded", () => {
  createLinkToOptions()

  if (storageSync["features-remove-confirmation"]) {
    removeLinkBalloon()
  }

  if (storageSync["features-deadline-highlighting"]) {
    const pageLimitView = document.getElementsByClassName(
      "pagelimitview"
    )[0] as HTMLElement
    if (pageLimitView) {
      checkPagePubDeadline(pageLimitView)
    }

    const stdlist = document.getElementsByClassName("stdlist")[0]
    if (stdlist) {
      checkAssignmentDeadline()
    }
  }
})

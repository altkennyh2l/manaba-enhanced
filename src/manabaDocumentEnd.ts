"use strict"

import colorizeDeadline from "./methods/colorizeDeadline"
import { syncReportText, clearStorage } from "./methods/syncReportText"

import "./style/colorizeDeadline.sass"

let storageSync: { [key: string]: string }
chrome.storage.sync.get((result) => {
  storageSync = result
})

window.onload = () => {
  const url = window.location.href

  if (storageSync["features-assignments-coloring"]) {
    if (url.includes("home_library_query")) {
      colorizeDeadline({})
    } else if (
      url.endsWith("query") ||
      url.endsWith("survey") ||
      url.endsWith("report")
    ) {
      colorizeDeadline({ checkStatus: true })
    }
  }

  if (storageSync["features-autosave-reports"]) {
    if (url.includes("report")) {
      const submitBtn = document.querySelector(
        "input[name='action_ReportStudent_submitdone']"
      )
      if (submitBtn) {
        syncReportText()

        chrome.storage.local.getBytesInUse((bytesInUse) => {
          if (bytesInUse > 4500000) {
            clearStorage()
          }
        })
      }
    }
  }
}

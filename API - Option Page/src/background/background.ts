// TODO: background script
import { setStoredCities, setStoredOptions } from "../utils/storage"


chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
  setStoredCities([])
  // 중요
  // set storedCites in empty array. so we don't have to use a callback
  // because we don't have to worry about things happening right after storage operation occurs

  setStoredOptions({
    tempScale:"metric",
    homeCity:"" // 고향 설정 기본은 빈칸
  })

  // 중요 
  // temp 표시할 단위는 항상 정의 되어야 함

})

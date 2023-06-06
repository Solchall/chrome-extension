import {LocalStorageUser} from "../typings";


// https://velog.io/@devjuun_s/Chrome.storage-%EC%A0%95%EB%A6%AC


export function setStoredOptions(
  { idToken, email, refreshToken }: LocalStorageUser): Promise<void> {
  const options = {auth:{ idToken, email, refreshToken }};
  return new Promise((resolve) => {
    chrome.storage.local.set(options, () => {
      resolve();
    });
  });
}


// get
// chrome.storage.local.get(["auth"],function(result){console.log(result.auth)})
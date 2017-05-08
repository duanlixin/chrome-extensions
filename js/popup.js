/*
* @Author: lixinduan
* @Date:   2017-05-08 08:04:40
* @Last Modified by:   lixinduan
* @Last Modified time: 2017-05-08 18:14:25
*/
var flag = false
console.log(flag)
if (flag === false) {
    chrome.tabs.executeScript({
        file: 'js/contentScript.js'
    });
}
flag = true;

document.querySelector('#set-json').addEventListener('click', e => {
    chrome.extension.getBackgroundPage().goOns();

}, false);

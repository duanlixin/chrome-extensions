/*
* @Author: lixinduan
* @Date:   2017-05-08 08:04:40
* @Last Modified by:   lixinduan
* @Last Modified time: 2017-05-08 15:54:11
*/
var obj = {};
chrome.runtime.onMessage.addListener(function(req){
    console.log('background:  ', req);
    obj = req;
});

function goOns() {
    chrome.tabs.create({
        url: obj.url
    }, function(tab) {
        var text = JSON.stringify(obj.data);
        chrome.tabs.executeScript({
            code: "document.querySelector('#batch-adding').value= " + "'" + text + "'"
        });
    });
}
/*
* @Author: lixinduan
* @Date:   2017-04-19 15:09:19
* @Last Modified by:   lixinduan
* @Last Modified time: 2017-05-08 18:33:42
*/

window.addEventListener('message',function(e){
    if (e.source != window) {
        return;
    }
    // 接收页面 的数据
    if (e.data.type && e.data.type == 'SEND_DATA_FROM_PAGE') {
        console.log("页面单条数据：", JSON.stringify(e.data, null, 4));

        if ($('#editorWarpper').length == 0) {
            $('body').append(
                '<div id="editorWarpper">' +
                    '<span>浮层数据</span>' +
                    '<textarea id="editor"></textarea>' +
                    '<button id="editData">修改数据</button>'+
                '</div>'
            );

        } else {
            $('#editorWarpper').show();
            $('#editor').val('');
        }
        $('#editor').val(JSON.stringify(e.data.data.data, null, 4))
    }
     // 接收页面 的整体数据
    if (e.data.type && e.data.type == 'SEND_ALL_DATA_FROM_PAGE') {
        console.log("页面整体数据：", JSON.stringify(e.data, null, 4));
    }
    // 给background发送数据
    chrome.runtime.sendMessage(e.data.data);

},false);

// 修改数据
$('body').off('click', '#editData');
$('body').on('click', '#editData', function() {

    var textObj = JSON.parse($('#editor').val());

    console.log("页面修改数据：", JSON.stringify(textObj, null, 4));

    // 给页面发送修改后的数据
    window.postMessage({
        type: 'RECEIVE_DATA_FROM_EXT', 
        data: textObj
    }, '*');

    $('#editorWarpper').hide();
});
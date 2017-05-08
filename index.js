/*
* @Author: lixinduan
* @Date:   2017-05-08 07:58:48
* @Last Modified by:   lixinduan
* @Last Modified time: 2017-05-08 13:21:10
*/

(function function_name() {
    'use strict';
    $('#editData').click(function() {
        window.postMessage({
            type: 'GET_DATA_FROM_PAGE', 
            data: {
                test: 1
            }
        }, '*');
    });
})();
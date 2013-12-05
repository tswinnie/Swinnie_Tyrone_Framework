/**
 * Created with JetBrains WebStorm.
 * User: tyroneswinnie
 * Date: 12/3/13
 * Time: 11:19 PM
 * To change this template use File | Settings | File Templates.
 */

(function (window, $) {
    'use strict';

    window.TodoApp = Sammy('#todoapp').use('Template');

    TodoApp.notFound = function () {
        this.runRoute('get', '#/');
    };

    $(function () {
        TodoApp.run('#/');
    });
})(window, jQuery);
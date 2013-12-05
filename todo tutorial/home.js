/**
 * Created with JetBrains WebStorm.
 * User: tyroneswinnie
 * Date: 12/5/13
 * Time: 11:34 AM
 * To change this template use File | Settings | File Templates.
 */



(function () {
    'use strict';

    TodoApp.route('get', '#/', function () {
        TodoApp.trigger('fetchTodos');
    });
})();
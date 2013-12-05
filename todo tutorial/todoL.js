/**
 * Created with JetBrains WebStorm.
 * User: tyroneswinnie
 * Date: 12/5/13
 * Time: 11:43 AM
 * To change this template use File | Settings | File Templates.
 */

(function ($) {
    'use strict';

    var ENTER_KEY = 13;

    var TodoList = {
        // `effectCause`
        // i.e. "newKeydown" = "a keydown event to create a new Todo"

        newKeydown: function (e) {
            var name = $.trim($(this).val());

            if (e.keyCode !== ENTER_KEY || !name) {
                return;
            }

            TodoApp.trigger('saveTodo', {
                name: name,
                completed: false
            });

            $(this).val('');
        },

        toggleAllClick: (function () {
            var flags = ['active', 'completed'];
            var count = 1;

            return function () {
                TodoApp.trigger('toggleAllTodosCompleted', flags[count++ % 2]);
            };
        })(),

        removeCompletedClick: function () {
            TodoApp.trigger('removeCompletedTodos');
        },

        init: function () {
            // The TodoApp has launched, let's bind our events.

            $('#new-todo').on('keydown', TodoList.newKeydown);
            $('#toggle-all').on('click', TodoList.toggleAllClick);
            $('#footer').on('click', '#clear-completed', TodoList.removeCompletedClick);
        }
    };

    TodoApp.bind('todoListRendered', TodoList.init);
})(jQuery);
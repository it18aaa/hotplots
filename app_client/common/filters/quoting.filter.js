(function () {
    angular
        .module('hotplots')
        .filter('quoting', quoting);

    function quoting() {
        return function (input) {            
            
            if (!input) {
                return input;
            }

            var begin = function() {
                return '<div class="border bg-light m-1 p-3">';
            }
            var finish = function() {
                return '</div>';
            }

            var str = input.replace(/\[QUOTE\]/gi, begin())
            var str = str.replace(/\[\/QUOTE\]/gi, finish())
            
            return str;

        }
    }
    }) (); 
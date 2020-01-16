(function () {
    angular
        .module('hotplots')
        .filter('linebreaks', linebreaks);

    function linebreaks() {
        return function (input) {
            var output;
            if(input) {
                return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
            } else {
                return input;
            }            
        }
    }
})(); 
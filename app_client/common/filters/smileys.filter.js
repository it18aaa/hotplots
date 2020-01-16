(function () {
    angular
        .module('hotplots')
        .filter('smileys', smileys);

    function smileys() {
        return function (input) {            
            
            var img = function(file) {
                return '<img src="/img/smileys/'+file+'.gif" />';
            }
                        

            if (!input) {
                return input;
            }

            var str = input.replace(":happy:", img('happy'))
            var str = str.replace(":sad:", img('sad'))
            var str = str.replace(":lol:", img('laugh'))
            var str = str.replace(":mowing:", img('mowing'))

            return str;

        }
    }
    }) (); 
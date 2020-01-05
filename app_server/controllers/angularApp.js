// barebone controller to render the angular app layout
// from Getting MEAN / Simon Holmes

module.exports.angularApp = function(req, res) {
    res.render('layout', {title: 'hotplots'});
}
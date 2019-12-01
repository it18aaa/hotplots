const index = (req, res) => {
    res.render('index', {title: 'Hot Plots!'});
};

module.exports = {
    index
};
/*
 * GET users listing.
 */

exports.display = function(req, res){
res.render('daily', { title: 'daily report' });
};
exports.home = function home(req, res) {
    //res.setHeader("Content-Type", "text/html");
    //res.send('<html>' +
    //    '<head>' +
    //    '<title>home</title>' +
    //    '</head>' +
    //    '<body>' +
    //    '<h1>Start</h1>' +
    //    '<img src="img/rafalAsia.png"/>' +
    //        //+ '<p><form action="/login" method="POST"><label for="username">Username</label><input id="username" type="text" ' +
    //        //'name="username"><button type="submit">Start ye adventures!</button></form></p>' +
    //    '<div><a href="/adventure">Go to Adventure</a></div>' +
    //    '</body>' +
    //    '</html>');
    if (req.user) {
        console.log(req.user);
    }
    else {
        console.log('no user');
    }
    res.render("home/home");
};

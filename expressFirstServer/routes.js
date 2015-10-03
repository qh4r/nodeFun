module.exports = function (app, handlers, helpers) {
    app.get("/", handlers.home);

    app.post('/login', handlers.login);

    app.get('/read', handlers.readError);

    app.all("*", helpers.checkAuthentication);
//app.get("/", checkAuthentication);

    app.get("/adventure", handlers.getAdventure);
//app.get("/adventure", checkAuthentication, getAdventure);

    app.post("/adventure", handlers.postAdventure);

    app.put('/adventure/:id', handlers.updateAdventure);

    app.get('/loot/:id', handlers.showLoot);
}
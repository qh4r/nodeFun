var passport = require('passport');

module.exports = function (app, routeHandlers, auth) {
    app.get("/", routeHandlers.homeRoutes.home);

    app.get('/signUp', routeHandlers.usersRoutes.newUser);

    app.post('/signUp', routeHandlers.usersRoutes.createUser);

    app.get('/signIn', routeHandlers.usersRoutes.loginForm);

    app.post('/signIn', passport.authenticate('local',
        {
            successRedirect: "/", failureRedirect: "/signIn",
            successFlash: "Succesfuly logged in",
            failureFlash: "Wrong username or password"
        }));
    app.get('/signout', routeHandlers.usersRoutes.logout);

    //najlepiej jednak zrobic podsekcje ktora bedzie chroniona
    app.all(/^\/[^s][^i][^g][^n]/, App.helpers('ensureAuthentication'));

    app.get("/adventure", routeHandlers.adventureRoutes.getAdventure);

    app.post("/adventure", routeHandlers.adventureRoutes.postAdventure);

    app.put('/adventure/:id', routeHandlers.adventureRoutes.updateAdventure);

    app.get('/loot', routeHandlers.lootRoutes.index);

    app.get('/loot/:id', routeHandlers.lootRoutes.showLoot);

    app.get('/addMonster', routeHandlers.monstersRoutes.addMonster);

    app.post('/saveMonster', routeHandlers.monstersRoutes.saveMonster);

    app.post('/updateMonster', routeHandlers.monstersRoutes.updateMonster);

    app.get('/addMonster/:error', routeHandlers.monstersRoutes.addMonster);

    app.get('/showMonster/:id', routeHandlers.monstersRoutes.showMonster)

    app.get('/showMonster', routeHandlers.monstersRoutes.showMonster)

    app.get('/deleteMonster/:id', routeHandlers.monstersRoutes.deleteMonster)

    app.get('/editMonster/:id', routeHandlers.monstersRoutes.editMonster)

    app.get('/monsters', routeHandlers.monstersRoutes.showMonsters)

}
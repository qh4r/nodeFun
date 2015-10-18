var passport = require('passport');

module.exports = function (express, routeHandlers, auth) {
    var router = express.Router();


    router.use(App.protection)
    router.use(App.helpers('attachCsrfToken'));
    router.get("/", routeHandlers.homeRoutes.home);

    router.route('/signUp')
        .get(routeHandlers.usersRoutes.newUser)
        .post(routeHandlers.usersRoutes.createUser);

    router.route('/signIn')
        .get(routeHandlers.usersRoutes.loginForm)
        .post(passport.authenticate('local',
        {
            successRedirect: "/", failureRedirect: "/signIn",
            successFlash: "Succesfuly logged in",
            failureFlash: "Wrong username or password"
        }));
    router.get('/signout', routeHandlers.usersRoutes.logout);

    //najlepiej jednak zrobic podsekcje ktora bedzie chroniona
    router.all(/^\/[^s][^i][^g][^n]/, App.helpers('ensureAuthentication'));

    router.get("/adventure", routeHandlers.adventureRoutes.getAdventure);

    router.post("/adventure", routeHandlers.adventureRoutes.postAdventure);

    router.put('/adventure/:id', routeHandlers.adventureRoutes.updateAdventure);

    router.get('/loot', routeHandlers.lootRoutes.index);

    router.get('/loot/:id', routeHandlers.lootRoutes.showLoot);

    router.get('/addMonster', routeHandlers.monstersRoutes.addMonster);

    router.post('/saveMonster', routeHandlers.monstersRoutes.saveMonster);

    router.post('/updateMonster', routeHandlers.monstersRoutes.updateMonster);

    router.get('/addMonster/:error', routeHandlers.monstersRoutes.addMonster);

    router.get('/showMonster/:id', routeHandlers.monstersRoutes.showMonster)

    router.get('/showMonster', routeHandlers.monstersRoutes.showMonster)

    router.get('/deleteMonster/:id', routeHandlers.monstersRoutes.deleteMonster)

    router.get('/editMonster/:id', routeHandlers.monstersRoutes.editMonster)

    router.get('/monsters', routeHandlers.monstersRoutes.showMonsters)

    App.app.use('/', router);

    router.use(App.helpers('invalidCsrfToken'));

}
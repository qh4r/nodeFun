module.exports = function (app, routeHandlers) {
    app.get("/", routeHandlers.homeRoutes.home);

    app.get("/adventure", routeHandlers.adventureRoutes.getAdventure);

    app.post("/adventure", routeHandlers.adventureRoutes.postAdventure);

    app.put('/adventure/:id', routeHandlers.adventureRoutes.updateAdventure);

    app.get('/loot/:id', routeHandlers.lootRoutes.showLoot);

    app.get('/monsters/:count', routeHandlers.monstersRoutes.showMonsters)
}
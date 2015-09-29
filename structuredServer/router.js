function route(handle, pathname, response, request) {
    console.log("routing - > " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        handle['404'](response);
        console.log("no such routing implemented");
    }
}

exports.route = route;
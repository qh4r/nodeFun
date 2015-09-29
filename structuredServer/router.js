function route(handle, pathname, response, postData) {
    console.log("routing - > " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        handle['404'](response);
        console.log("no such routing implemented");
    }
}

exports.route = route;
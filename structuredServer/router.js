function route(handle, pathname) {
    console.log("routing - > " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("no such routing implemented");
    }
}

exports.route = route;
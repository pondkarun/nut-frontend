'use strict'
//demo
app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "app/login/template/login.html",
            controller: "loginController"
        })
        .when("/demo/:id", {
            templateUrl: "app/demoFormInput/template/input-form.html",
            controller: "appController"
        })
        .otherwise({ redirectTo: '/login' });
});



var checkPermission = function (authService) {
    authService.checkPermission();
}


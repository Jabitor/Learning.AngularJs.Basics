// Always define your code inside a module, to avoid conflicting with the global namespace
module Learning.AngularJs.Basics {
    // Defining our angular module
    // First parameter: The name of our module
    // Second parameter: An array of dependency names, that needs to be loaded before the module will work properly.
    // In this case, we are loading pascalprecht.translat and ui.router. 
    //  pascalprecht.translat: A translations module (https://github.com/angular-translate/angular-translate)
    //  ui.router: A routing module developed by the angular ui community (https://angular-ui.github.io) (this is recommended over the original ngRoute, that was originally shipped with angular)
    var module = angular.module('angularJsBasics', ['pascalprecht.translate', 'ui.router']);
    
    // Setup the module configuration
    // Config is used for routing, translations, etc. that should be done before the app is bootstrapped
    // Note that config can only be set once(!) and only providers can be used, as services might not be fully configured at this point
    module.config(Config);

    // Controllers
    module.controller('homeCtrl', Controllers.HomeCtrl);
}
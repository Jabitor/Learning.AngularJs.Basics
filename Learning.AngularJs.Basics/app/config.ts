module Learning.AngularJs.Basics {
    export class Config {
        public static $inject = [
            '$stateProvider',
            '$urlRouterProvider',
            '$translateProvider'
        ];

        constructor(
            private $stateProvider: ng.ui.IStateProvider,
            private $urlRouterProvider: ng.ui.IUrlRouterProvider,
            private $translateProvider: ng.translate.ITranslateProvider
        ) {
            // Could also be declared inside this config file
            // But I prefer keeping these separate, to give the developer a better overview
            Configuration.Routing.setRoutes($stateProvider, $urlRouterProvider);
            Configuration.Translation.setTranslations($translateProvider);
        }
    }
}
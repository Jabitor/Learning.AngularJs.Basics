module Learning.AngularJs.Basics.Configuration {
    export class Routing {
        public static setRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: Controllers.HomeCtrl,
                    templateUrl: '/app/views/home/homeView.html'
                }
                );

            $urlRouterProvider.otherwise('/');
        }
    }
}
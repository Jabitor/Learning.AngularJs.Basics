module Learning.AngularJs.Basics.Controllers {
    export class HomeCtrl {
        // Unfortunatly angular cannot guess which constructor variables we want.
        // Therefore we can use the static $inject variable, to push in the correct parameters.
        // This is also due to the fact, that minifying programs will minify/shorten parameter names.
        public static $inject = [
            '$scope',
            '$http'
        ];

        // By making the constructor variables private or public, 
        // they will automaticly be available on the "this" object.
        // It's the same as doing: 
        // private scope: IHomeCtrlScope;
        // constructor($scope: Interfaces.HomeCtrlScope) { this.scope = $scope; }
        constructor(private $scope: Interfaces.HomeCtrlScope, private $http: ng.IHttpService) {
            // Some prefer using "$scope.vm = this;" here
            // That approach will save you the explicit binding of each function called from the UI 
            // I prefer setting it up explicitly, thus also not exposing the entire class
            this.$scope.addName = this.addName;

            this.init();
        }

        private init = () => {
            this.$scope.vm = new Models.HomeModel();
            this.$scope.vm.names = [
                'John',
                'Jane'
            ];
        }

        private addName = () => {
            this.$scope.vm.names.push('Some name');
        }

        // Hooks up the different $scope events/functions/variables
        private setupScope = () => {
            this.$http.get('/api/PeopleApi').then((response) => {
                console.dir(response);
            });
        }
    }
}
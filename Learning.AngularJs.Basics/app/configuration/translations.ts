module Learning.AngularJs.Basics.Configuration {
    export class Translation {
        public static setTranslations($translateProvider: ng.translate.ITranslateProvider): void {
            // Note that this could also be stored as seperate files, and called async
            // But for simplicity, the files will be included into the minified version of the script
            // When using the async method, I'd recommend enabling localStorage ($translateProvider.useLocalStorage();)
            $translateProvider.translations(this.supportedLanguages.english, Resources.english);
            $translateProvider.translations(this.supportedLanguages.danish, Resources.danish);

            var preferredLanguage = this.getPreferredLanguage(this.supportedLanguages.english);
            // Set the preferred language to use in this app
            $translateProvider.preferredLanguage(preferredLanguage);
        }

        // Returns the preferred language of this app
        // We could convert this method to get the SharePoint installation language or w/e the need might be
        private static getPreferredLanguage(defaultLanguage: string) {
            var preferredLanguage = window.navigator.userLanguage || window.navigator.language; // Browser language
            // If we don't have a translation set up for the current culture, let's use default
            var hasLanguage = false;
            for (var lang in this.supportedLanguages) {
                if (this.supportedLanguages[lang] != preferredLanguage) {
                    continue;
                }

                // Stop the loop, if our language is found
                hasLanguage = true;
                break;
            }

            if (!hasLanguage) {
                preferredLanguage = defaultLanguage;
            }

            return preferredLanguage;
        }

        private static supportedLanguages = {
            danish: 'da',
            english: 'en'
        }
    }
}
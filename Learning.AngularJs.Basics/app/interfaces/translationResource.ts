module Learning.AngularJs.Basics.Interfaces {
    // It can be a good idea, to share a common interface among resources
    // to ensure all properties are filled
    export interface TranslationResource extends ng.translate.ITranslationTable {
        frontpage_welcome: string;
    }
}
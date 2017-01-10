export class Translator
{
    // @todo place them in Translator/Languages
    public en: any = {
        "lemonade-shop": "Lemonade Shop",
        "newspaper-shop": "Newspaper Shop",
        "car-shop": "Car Shop",
        "pizza-shop": "Pizza Shop",
        "donut-shop": "Donut Shop",
        "shrimp-shop": "Shrimp Shop",
        "hockey-shop": "Hockey Shop",
        "movie-shop": "Movie Shop",
        "bank-shop": "Bank Shop",
        "oil-shop": "Oil Shop",
        "profit": "Profit: $%s",
        "time": "Time: %s seconds",
        "level": "Level: %s",
        "status": "Status: %s",
        "price": "Price: $%s",
        "buy": "Buy",
        "not-purchased": "Not purchased"
    };

    public selectedLanguage: string = "en";
    public readonly missingKey: string = "KEY-MISSING";

    constructor() {

    }

    translate(key: string, replace?: string) {
        if (this.en.hasOwnProperty(key) === true) {
            // @todo support named bindings like welcome :username
            return this.en[key].replace("%s", replace);
        }

        return this.missingKey;
    }
}

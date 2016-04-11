class Translator
{
    constructor() {
        this.en = {
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

        this.selectedLanguage = "en";
    }

    translate(key, replace = null) {
        if (this.en.hasOwnProperty(key) === true) {
            return this.en[key].replace("%s", replace);
        }

        return "NO-KEY";
    }
}
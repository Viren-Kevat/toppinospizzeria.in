/* ============================================
   TOPPINO'S PIZZERIA  SITE DATA
   Single source of truth for business info + menu.
   Edit this file to update contact details, hours,
   or any menu item/price  no HTML changes needed.
   ============================================ */

const SITE = {
    name: "Toppino's Pizzeria",
    tagline: "Italian-Led Neapolitana Pizzeria",
    domain: "toppinospizzeria.in",
    address: {
        line1: "Near Ornet Park, 3, Sindhu Bhavan Marg",
        line2: "PRL Colony, Thaltej, Ahmedabad, Gujarat 380059",
        full: "Near Ornet Park, 3, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059, India"
    },
    // PLACEHOLDER  replace with the real number before launch (brief: phone/WhatsApp still being finalized)
    phoneDisplay: "+91 90000 00000",
    phoneTel: "+919000000000",
    whatsappNumber: "919000000000",
    // PLACEHOLDER  brief recommends hello@toppinospizzeria.in as the primary address
    email: "hello@toppinospizzeria.in",
    // PLACEHOLDER  Instagram account is still being prepared per brief
    instagramHandle: "@toppinospizzeria",
    instagramUrl: "https://instagram.com/toppinospizzeria",
    googleReviewUrl: "https://www.google.com/search?q=Toppino%27s+Pizzeria+Thaltej+Ahmedabad",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Toppino's Pizzeria, Near Ornet Park, 3, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059"),
    mapsEmbedQuery: encodeURIComponent("Near Ornet Park, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059"),
    // PLACEHOLDER  final opening hours still being confirmed per brief
    hours: [
        { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
        { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" }
    ],
    hoursNote: "Hours shown are provisional and will be confirmed closer to launch."
};

function waLink(prefill) {
    return "https://wa.me/" + SITE.whatsappNumber + (prefill ? "?text=" + encodeURIComponent(prefill) : "");
}

/* ============================================
   MENU DATA
   ============================================ */
const MENU = [
    {
        id: "salads",
        title: "Salads",
        icon: "leaf",
        items: [
            { name: "Greek Salad", desc: "Cucumber, Tomato, Bell Pepper, Black Olives, Red Onion, Feta", price: 349, img: "img/menu/salad-greek-style.jpg" },
            { name: "Burrata Caprese", desc: "Cherry Tomato, Fresh Basil, Burrata, Balsamic Glaze", price: 499, img: "img/new image/Burrata Caprese.jpg" },
            { name: "Toppino's Energy Bowl (180g)", desc: "Lettuce, Quinoa, Orange, Walnut, Dry Cranberry, Carrot, Pomegranate, Mix Seeds, Crushed Almond, Orange Dressing", price: 425, img: "img/new image/Toppino's Energy Bowl.jpg" },
            { name: "Caesar Salad (120g)", desc: "Lettuce, Olives, Pesto Croutons, Cherry Tomato, Parmesan Cheese", price: 325, img: "img/menu/salad-rocket-parmesan.jpg" },
            { name: "No Myth Greek Salad (150g)", desc: "Cucumber, Bellpepper, Onion, Tomato, Feta, Olive, Cherry Tomato, French Vinaigrette", price: 350, img: "img/new image/No Myth Greek Salad.jpg" },
            { name: "Hippie High Protein Salad (180g)", desc: "Lettuce, Quinoa, Tofu, Sundried Tomato, Sweet Corn, Cherry Tomato, Onion, Bell Pepper, Pomegranate, Jalapeno, Hummus, Tomato Basil Vinaigrette, Mix Seeds", price: 395, img: "img/new image/Hippie High Protein Salad.jpg" },
            { name: "Chilli Corn Avocado Salad (150g)", desc: "Avocado, Onion, Bellpepper, Lettuce, Olives, Chilli Lime Mayo Dressing, Pomegranate, Cherry Tomato, Mixed Seeds", price: 450, img: "img/new image/Chilli Corn Avocado Salad.jpg" }
        ],
        footerQuote: {
            text: "You better cut the pizza in four pieces because I'm not hungry enough to eat six.",
            author: "Yogi Berra"
        }
    },
    {
        id: "soups",
        title: "Soups",
        icon: "soup",
        items: [
            { name: "Cream of Mushroom", desc: "Mushroom, Garlic, Thyme, Black Pepper", price: 249, img: "img/new image/Cream of Mushroom.webp" },
            { name: "Roasted Tomato Basil", desc: "Roasted Tomato, Basil, Garlic, Parmesan", price: 249, img: "img/new image/Roasted Tomato Basil.jpg" },
            { name: "Broccoli Parmesan", desc: "Broccoli, Garlic, Cream, Parmesan", price: 249, img: "img/new image/Broccoli Parmesan.jpg" },
            { name: "Italian Minestrone", desc: "Zucchini, Carrot, Beans, Celery, Pasta, Parmesan, Basil", price: 299, img: "img/new image/Italian Minestrone.jpg" },
            { name: "Mexican Soup", desc: "Sweet Corn, Black Beans, Kidney Beans, Tomato, Bell Pepper, Jalapeño, Mexican Herbs, Coriander, Lime", price: 249, img: "img/new image/Mexican Soup.jpg" }
        ]
    },
    {
        id: "starters",
        title: "Starters",
        icon: "mezze",
        items: [
            { name: "Classic French Fries (170g)", desc: "Potato, Salt", price: 265, img: "img/new image/Classic French Fries.jpg" },
            { name: "Peri Peri French Fries (170g)", desc: "Potato, Peri Peri Seasoning, Salt", price: 325, img: "img/new image/Peri Peri French Fries.jpg" },
            { name: "Butter Garlic French Fries (170g)", desc: "Potato, Garlic Butter, Parsley", price: 325, img: "img/new image/Butter Garlic French Fries.webp" },
            { name: "Cheese Garlic French Fries (200g)", desc: "Potato, Melted Cheese, Garlic, Parsley", price: 385, img: "img/new image/Cheese Garlic French Fries.jpg" },
            { name: "Truffle Oil Parmesan Fries (170g)", desc: "Potato, Truffle Oil, Parmesan, Parsley", price: 410, img: "img/new image/Truffle Oil Parmesan Fries.jpg" },
            { name: "Mushroom Crostini", desc: "Toasted Bread, Sautéed Mushroom, Garlic, Cheese, Herbs", price: 410, img: "img/new image/Mushroom Crostini.jpg" },
            { name: "Mushroom Bruschetta", desc: "Toasted Bread, Mushroom, Tomato, Garlic, Basil, Olive Oil", price: 410, img: "img/new image/Mushroom Bruschetta.jpg" }
        ]
    },
    {
        id: "italian-toast",
        title: "Italian Toast",
        icon: "bread",
        items: [
            { name: "Avocado & Ricotta pesto toast", desc: "sourdough bread, butter, ricotta cheese, guacamole, Garnish-Mixed seeds, microgreens, truffle oil pomegranate", price: 449, img: "img/new image/Avocado & Ricotta pesto toast.jpg" },
            { name: "Mushroom Thyme & Mascarpone toast", desc: "sourdough bread,butter,mascarpone cheese,mushroom,white sauce", price: 399, img: "img/new image/Mushroom Thyme & Mascarpone toast.jpg" },
            { name: "Mushroom Melt", desc: "Butter Clozo Bread, Butter, mushroom, white sauce, Garnish-microgreen", price: 349, img: "img/new image/Mushroom Melt.jpg" },
            { name: "Earthy Mushroom toast", desc: "Sourdough Bread, Butter, Schezwan sauce, mushroom, Dip-chilli garlic", price: 329, img: "img/new image/Earthy Mushroom toast.jpg" },
            { name: "Sautéed vegetable", desc: "English & Indian veggies, Paneer, Butter, salt, Pepper, Small aromatic powder", price: 299, img: "img/new image/Sautéed vegetable.jpg" }
        ],
        footerQuote: {
            text: "Ideas are like pizza dough, made to be tossed around.",
            author: "Anna Quindlen's"
        }
    },
    {
        id: "neapolitan-pizzas",
        title: "Pizzas - Neapolitan Style",
        icon: "flame",
        items: [
            { name: "Margherita Napoletana", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 499, img: "img/menu/pizza-margherita.jpg" },
            { name: "Pesto Burrata", desc: "Basil Pesto, Cherry Tomato, Fior di Latte, Burrata, Basil, Pine Nuts", price: 649, img: "img/menu/pizza-pesto.jpg" },
            { name: "Funghi Tartufo", desc: "Mushroom, Roasted Garlic, Fior di Latte, Parmesan, Thyme, Truffle Oil", price: 599, img: "img/menu/pizza-mushroom-truffle.jpg" },
            { name: "Quattro Formaggi", desc: "Fior di Latte, Gorgonzola, Taleggio, Parmesan, Black Pepper", price: 599, img: "img/menu/pizza-four-cheese-white.jpg" },
            { name: "Diavola Veg", desc: "Bell Pepper, Jalapeño, Black Olives, Green Chilli, Fior di Latte, Chilli Oil", price: 549, img: "img/menu/pizza-veg-supreme.jpg" },
            { name: "Classic Margherita", desc: "Tomato Sauce, Fresh Mozzarella, Fresh Basil, Extra Virgin Olive Oil, Salt", price: 399, img: "img/menu/pizza-margherita.jpg" },
            { name: "Pesto Pomodorini", desc: "Basil Pesto, Mozzarella, Cherry Tomato, Parmesan, Fresh Basil, Olive Oil", price: 499, img: "img/new image/Pesto Pomodorini.jpg" },
            { name: "Truffle Mushroom", desc: "Truffle Cream, Mushroom, Mozzarella, Parmesan, Truffle Oil, Fresh Thyme", price: 699, img: "img/new image/Truffle Mushroom.jpg" },
            { name: "Bianca", desc: "Garlic Cream, Mozzarella, Parmesan, Ricotta, Fresh Basil, Olive Oil", price: 449, img: "img/new image/Bianca.jpg" },
            { name: "Pizza Ortolana", desc: "Tomato Sauce, Mozzarella, Bell Pepper, Onion, Mushroom, Black Olives, Sweet Corn, Jalapeño, Basil, Olive Oil", price: 499, img: "img/menu/pizza-mediterranean-olive-feta.jpg" }
        ]
    },
    {
        id: "pasta",
        title: "Pasta",
        icon: "pasta",
        items: [
            { name: "Penne Arrabbiata", desc: "Tomato, Garlic, Basil, Chilli Flakes, Parmesan", price: 349, img: "img/new image/Penne Arrabbiata.jpg" },
            { name: "Fettuccine Alfredo", desc: "Mushroom, Garlic, Parsley, Parmesan", price: 399, img: "img/menu/pasta-alfredo.jpg" },
            { name: "Spaghetti Aglio e Olio", desc: "Garlic, Parsley, Chilli Flakes, Parmesan, Lemon Zest", price: 349, img: "img/menu/pasta-aglio-olio.jpg" },
            { name: "Penne Basil Pesto", desc: "Cherry Tomato, Black Olives, Bell Pepper, Parmesan, Pine Nuts", price: 399, img: "img/menu/pasta-pesto-penne.jpg" },
            { name: "Pink Sauce Burrata Pasta", desc: "Tomato, Basil, Parmesan, Burrata", price: 499, img: "img/new image/Pink Sauce Burrata Pasta.jpg" },
            { name: "Creamy Mushroom Pasta", desc: "Mushroom, Creamy Sauce, Parmesan, Garlic, Black Pepper, Parsley", price: 399, img: "img/new image/Creamy Mushroom Pasta.jpg" },
            { name: "Sun-Dried Tomato Pasta", desc: "Sun-Dried Tomato, Creamy Sauce, Parmesan, Garlic, Basil, Cherry Tomato", price: 429, img: "img/new image/Sun-Dried Tomato Pasta.jpg" }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        icon: "dessert",
        items: [
            { name: "Classic Tiramisu", desc: "Mascarpone, Espresso, Cocoa", price: 349, img: "img/menu/dessert-tiramisu.jpg" },
            { name: "Vanilla Panna Cotta", desc: "Vanilla, Berry Compote", price: 299, img: "img/menu/dessert-panna-cotta.jpg" },
            { name: "Italian Chocolate Brownie", desc: "Warm Brownie, Vanilla Gelato, Chocolate Sauce", price: 299, img: "img/new image/Italian Chocolate Brownie.jpg" },
            {
                name: "Ice Creams",
                img: "img/new image/Ice Creams.jpg",
                variants: [
                    { name: "Vanilla", price: 135, img: "img/new image/Vanilla Ice Creams.jpg" },
                    { name: "Chocolate", price: 145, img: "img/new image/Chocolate ice cream.jpg" },
                    { name: "Butterscotch", price: 155, img: "img/new image/Butterscotch Ice Creams.jpg" },
                    { name: "American Nuts", price: 165, img: "img/new image/American  nuts ice cream.jpg" },
                    { name: "Chocolate Brownie", price: 175, img: "img/new image/Chocolate Brownie ice cream.jpg" }
                ]
            },
            { name: "Chocolate Brownie with Ice Cream", price: 195, img: "img/new image/Chocolate Brownie with Ice Cream.jpg" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        icon: "cold",
        items: [
            { name: "Turkish Pomegranate Fizz", desc: "Turkish Pomegranate Fizz", price: 279, img: "img/new image/Turkish Pomegranate Fizz.jpg" },
            { name: "Istanbul Blue", desc: "Blue Curaçao, Lemon, Mint, Soda", price: 279, img: "img/new image/Istanbul Blue.jpg" },
            { name: "Mediterranean Sunset", desc: "Orange, Cranberry, Grenadine, Lemon", price: 279, img: "img/new image/Mediterranean Sunset.jpg" },
            { name: "Berry Basil Smash", desc: "Mixed Berries, Basil, Lemon, Soda", price: 299, img: "img/new image/Berry Basil Smash.jpg" },
            { name: "Passionfruit Mojito", desc: "Passionfruit, Mint, Lime, Soda", price: 299, img: "img/new image/Passionfruit Mojito.jpg" }
        ]
    },
    {
        id: "carbonated",
        title: "Carbonated",
        icon: "cold",
        items: [
            { name: "Sprite", price: 99, img: "img/new image/Sprite.jpg" },
            { name: "Fanta", price: 99, img: "img/new image/Fanta.jpg" },
            { name: "Coke", price: 99, img: "img/new image/Coke.jpg" },
            { name: "Zero Coke", price: 99, img: "img/new image/Zero Coke.jpg" },
            { name: "Thums Up", price: 129, img: "img/new image/Thums Up.jpg" },
            { name: "Tonic Water", price: 199, img: "img/new image/Tonic Water.jpg" },
            { name: "Ginger Ale", price: 60, img: "img/new image/Ginger Ale.jpg" },
            { name: "Red Bull Energy", price: 125, img: "img/new image/Red Bull Energy.jpg" }
        ]
    }
];

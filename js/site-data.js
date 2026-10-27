/* ============================================
   TOPPINO'S NEAPOLITANA PIZZERIA  SITE DATA
   Single source of truth for business info + menu.
   Edit this file to update contact details, hours,
   or any menu item/price  no HTML changes needed.
   ============================================ */

const SITE = {
    name: "Toppino's Neapolitana Pizzeria",
    domain: "toppinospizzeria.in",
    address: {
        // used where the content calls for the short form (Home, Contact, FAQ)
        short: "Near Ornet Park, 3, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad 380059",
        full: "Near Ornet Park, 3, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059"
    },

    /* ---- CONTACT DETAILS: to be provided after domain purchase ----
       Leave as null until confirmed. Every Call / WhatsApp / Email button,
       the contact cards, the enquiry form and the franchise "Register Your
       Interest" button stay hidden while these are null, and appear
       everywhere automatically once filled in. */
    phoneDisplay: null,     // e.g. "+91 98765 43210"
    phoneTel: null,         // e.g. "+919876543210"
    whatsappNumber: null,   // e.g. "919876543210" (country code, no +)
    email: null,            // e.g. "hello@toppinospizzeria.in"

    /* ---- GOOGLE REVIEW LINK: will be provided separately ----
       Leave as null until given. The "Leave a Google Review" buttons and the
       footer Google icon stay hidden while this is null. */
    googleReviewUrl: null,

    instagramHandle: "@toppinospizzariaofficial",
    instagramUrl: "https://www.instagram.com/toppinospizzariaofficial/",
    facebookName: "Toppino's Neapolitana Pizzeria",
    facebookUrl: "https://www.facebook.com/profile.php?id=61593201459772",

    directionsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Toppino's Neapolitana Pizzeria, Near Ornet Park, 3, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059"),

    hours: [
        { days: "Monday to Sunday", time: "5:00 PM to 2:00 AM" }
    ],
    hoursNote: "Open all 7 days a week."
};

function waLink(prefill) {
    return "https://wa.me/" + SITE.whatsappNumber + (prefill ? "?text=" + encodeURIComponent(prefill) : "");
}

/* ============================================
   MENU DATA
   title   = tab label
   heading = category H2 on the menu page
   intro   = line under the H2
   unit    = singular/plural used in the About page item count
   cover   = photo for the category card on the Home page
   showOnHome = category appears in "Menu at a Glance"
   ============================================ */
const MENU = [
    {
        id: "pizzas",
        title: "Pizzas",
        heading: "Neapolitan Pizzas in Ahmedabad",
        intro: "Hand-stretched dough, baked in our live brick oven. Pizzas from ₹399.",
        unit: ["pizza", "pizzas"],
        icon: "flame",
        cover: "img/dishes/pizza-margherita-napoletana.webp",
        showOnHome: true,
        items: [
            { name: "Margherita Napoletana", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 499, img: "img/dishes/pizza-margherita-napoletana.webp" },
            { name: "Pesto Burrata", desc: "Basil Pesto, Cherry Tomato, Fior di Latte, Burrata, Basil, Pine Nuts", price: 649, img: "img/dishes/pizza-pesto-burrata.webp" },
            { name: "Funghi Tartufo", desc: "Mushroom, Roasted Garlic, Fior di Latte, Parmesan, Thyme, Truffle Oil", price: 599, img: "img/dishes/pizza-funghi-tartufo.webp" },
            { name: "Quattro Formaggi", desc: "Fior di Latte, Gorgonzola, Taleggio, Parmesan, Black Pepper", price: 599, img: "img/dishes/pizza-quattro-formaggi.webp" },
            { name: "Diavola Veg", desc: "Bell Pepper, Jalapeño, Black Olives, Green Chilli, Fior di Latte, Chilli Oil", price: 549, img: "img/dishes/pizza-diavola-veg.webp" },
            { name: "Classic Margherita", desc: "Tomato Sauce, Fresh Mozzarella, Fresh Basil, Extra Virgin Olive Oil, Salt", price: 399, img: "img/dishes/pizza-classic-margherita.webp" },
            { name: "Pesto Pomodorini", desc: "Basil Pesto, Mozzarella, Cherry Tomato, Parmesan, Fresh Basil, Olive Oil", price: 499, img: "img/dishes/pizza-pesto-pomodorini.webp" },
            { name: "Truffle Mushroom", desc: "Truffle Cream, Mushroom, Mozzarella, Parmesan, Truffle Oil, Fresh Thyme", price: 699, img: "img/dishes/pizza-truffle-mushroom.webp" },
            { name: "Bianca", desc: "Garlic Cream, Mozzarella, Parmesan, Ricotta, Fresh Basil, Olive Oil", price: 449, img: "img/dishes/pizza-bianca.webp" },
            { name: "Pizza Ortolana", desc: "Tomato Sauce, Mozzarella, Bell Pepper, Onion, Mushroom, Black Olives, Sweet Corn, Jalapeño, Basil, Olive Oil", price: 499, img: "img/dishes/pizza-ortolana.webp" }
        ]
    },
    {
        id: "pasta",
        title: "Pasta",
        heading: "Fresh Italian Pasta",
        intro: "Classic Italian sauces, from Arrabbiata to Pink Sauce Burrata.",
        unit: ["pasta", "pastas"],
        icon: "pasta",
        cover: "img/dishes/pasta-penne-arrabbiata.webp",
        showOnHome: true,
        items: [
            { name: "Penne Arrabbiata", desc: "Tomato, Garlic, Basil, Chilli Flakes, Parmesan", price: 349, img: "img/dishes/pasta-penne-arrabbiata.webp" },
            { name: "Fettuccine Alfredo", desc: "Mushroom, Garlic, Parsley, Parmesan", price: 399, img: "img/dishes/pasta-fettuccine-alfredo.webp" },
            { name: "Spaghetti Aglio e Olio", desc: "Garlic, Parsley, Chilli Flakes, Parmesan, Lemon Zest", price: 349, img: "img/dishes/pasta-spaghetti-aglio-e-olio.webp" },
            { name: "Penne Basil Pesto", desc: "Cherry Tomato, Black Olives, Bell Pepper, Parmesan, Pine Nuts", price: 399, img: "img/dishes/pasta-penne-basil-pesto.webp" },
            { name: "Pink Sauce Burrata Pasta", desc: "Tomato, Basil, Parmesan, Burrata", price: 499, img: "img/dishes/pasta-pink-sauce-burrata-pasta.webp" },
            { name: "Creamy Mushroom Pasta", desc: "Mushroom, Creamy Sauce, Parmesan, Garlic, Black Pepper, Parsley", price: 399, img: "img/dishes/pasta-creamy-mushroom-pasta.webp" },
            { name: "Sun-Dried Tomato Pasta", desc: "Sun-Dried Tomato, Creamy Sauce, Parmesan, Garlic, Basil, Cherry Tomato", price: 429, img: "img/dishes/pasta-sun-dried-tomato-pasta.webp" }
        ]
    },
    {
        id: "starters",
        title: "Starters",
        heading: "Fries and Bruschetta Starters",
        intro: "Perfect to share while your pizza is in the oven.",
        unit: ["starter", "starters"],
        icon: "mezze",
        cover: "img/dishes/starter-truffle-oil-parmesan-fries.webp",
        showOnHome: true,
        items: [
            { name: "Classic French Fries (170g)", desc: "Potato, Salt", price: 265, img: "img/dishes/starter-classic-french-fries.webp" },
            { name: "Peri Peri French Fries (170g)", desc: "Potato, Peri Peri Seasoning, Salt", price: 325, img: "img/dishes/starter-peri-peri-french-fries.webp" },
            { name: "Butter Garlic French Fries (170g)", desc: "Potato, Garlic Butter, Parsley", price: 325, img: "img/dishes/starter-butter-garlic-french-fries.webp" },
            { name: "Cheese Garlic French Fries (200g)", desc: "Potato, Melted Cheese, Garlic, Parsley", price: 385, img: "img/dishes/starter-cheese-garlic-french-fries.webp" },
            { name: "Truffle Oil Parmesan Fries (170g)", desc: "Potato, Truffle Oil, Parmesan, Parsley", price: 410, img: "img/dishes/starter-truffle-oil-parmesan-fries.webp" },
            { name: "Mushroom Crostini", desc: "Toasted Bread, Sautéed Mushroom, Garlic, Cheese, Herbs", price: 410, img: "img/dishes/starter-mushroom-crostini.webp" },
            { name: "Mushroom Bruschetta", desc: "Toasted Bread, Mushroom, Tomato, Garlic, Basil, Olive Oil", price: 410, img: "img/dishes/starter-mushroom-bruschetta.webp" }
        ]
    },
    {
        id: "italian-toast",
        title: "Italian Toast",
        heading: "Italian Toasts on Sourdough",
        intro: "Sourdough toasts with mushroom, avocado, ricotta and more.",
        unit: ["Italian toast", "Italian toasts"],
        icon: "bread",
        cover: "img/dishes/toast-avocado-and-ricotta-pesto-toast.webp",
        showOnHome: true,
        items: [
            { name: "Avocado & Ricotta pesto toast", desc: "sourdough bread, butter, ricotta cheese, guacamole, Garnish-Mixed seeds, microgreens, truffle oil pomegranate", price: 449, img: "img/dishes/toast-avocado-and-ricotta-pesto-toast.webp" },
            { name: "Mushroom Thyme & Mascarpone toast", desc: "sourdough bread,butter,mascarpone cheese,mushroom,white sauce", price: 399, img: "img/dishes/toast-mushroom-thyme-and-mascarpone-toast.webp" },
            { name: "Mushroom Melt", desc: "Butter Clozo Bread, Butter, mushroom, white sauce, Garnish-microgreen", price: 349, img: "img/dishes/toast-mushroom-melt.webp" },
            { name: "Earthy Mushroom toast", desc: "Sourdough Bread, Butter, Schezwan sauce, mushroom, Dip-chilli garlic", price: 329, img: "img/dishes/toast-earthy-mushroom-toast.webp" },
            { name: "Sautéed vegetable", desc: "English & Indian veggies, Paneer, Butter, salt, Pepper, Small aromatic powder", price: 299, img: "img/dishes/toast-sauteed-vegetable.webp" }
        ],
        footerQuote: {
            text: "Ideas are like pizza dough, made to be tossed around.",
            author: "Anna Quindlen"
        }
    },
    {
        id: "salads",
        title: "Salads",
        heading: "Fresh Salads and Grain Bowls",
        intro: "Light, bright and made fresh.",
        unit: ["salad", "salads"],
        icon: "leaf",
        cover: "img/dishes/salad-burrata-caprese.webp",
        showOnHome: true,
        items: [
            { name: "Greek Salad", desc: "Cucumber, Tomato, Bell Pepper, Black Olives, Red Onion, Feta", price: 349, img: "img/dishes/salad-greek-salad.webp" },
            { name: "Burrata Caprese", desc: "Cherry Tomato, Fresh Basil, Burrata, Balsamic Glaze", price: 499, img: "img/dishes/salad-burrata-caprese.webp" },
            { name: "Toppino's Energy Bowl (180g)", desc: "Lettuce, Quinoa, Orange, Walnut, Dry Cranberry, Carrot, Pomegranate, Mix Seeds, Crushed Almond, Orange Dressing", price: 425, img: "img/dishes/salad-toppinos-energy-bowl.webp" },
            { name: "Caesar Salad (120g)", desc: "Lettuce, Olives, Pesto Croutons, Cherry Tomato, Parmesan Cheese", price: 325, img: "img/dishes/salad-caesar-salad.webp" },
            { name: "No Myth Greek Salad (150g)", desc: "Cucumber, Bellpepper, Onion, Tomato, Feta, Olive, Cherry Tomato, French Vinaigrette", price: 350, img: "img/dishes/salad-no-myth-greek-salad.webp" },
            { name: "Hippie High Protein Salad (180g)", desc: "Lettuce, Quinoa, Tofu, Sundried Tomato, Sweet Corn, Cherry Tomato, Onion, Bell Pepper, Pomegranate, Jalapeno, Hummus, Tomato Basil Vinaigrette, Mix Seeds", price: 395, img: "img/dishes/salad-hippie-high-protein-salad.webp" },
            { name: "Chilli Corn Avocado Salad (150g)", desc: "Avocado, Onion, Bellpepper, Lettuce, Olives, Chilli Lime Mayo Dressing, Pomegranate, Cherry Tomato, Mixed Seeds", price: 450, img: "img/dishes/salad-chilli-corn-avocado-salad.webp" }
        ],
        footerQuote: {
            text: "You better cut the pizza in four pieces because I'm not hungry enough to eat six.",
            author: "Yogi Berra"
        }
    },
    {
        id: "soups",
        title: "Soups",
        heading: "Comforting Soups",
        intro: "Warm bowls, from Roasted Tomato Basil to Italian Minestrone.",
        unit: ["soup", "soups"],
        icon: "soup",
        cover: "img/dishes/soup-roasted-tomato-basil.webp",
        showOnHome: true,
        items: [
            { name: "Cream of Mushroom", desc: "Mushroom, Garlic, Thyme, Black Pepper", price: 249, img: "img/dishes/soup-cream-of-mushroom.webp" },
            { name: "Roasted Tomato Basil", desc: "Roasted Tomato, Basil, Garlic, Parmesan", price: 249, img: "img/dishes/soup-roasted-tomato-basil.webp" },
            { name: "Broccoli Parmesan", desc: "Broccoli, Garlic, Cream, Parmesan", price: 249, img: "img/dishes/soup-broccoli-parmesan.webp" },
            { name: "Italian Minestrone", desc: "Zucchini, Carrot, Beans, Celery, Pasta, Parmesan, Basil", price: 299, img: "img/dishes/soup-italian-minestrone.webp" },
            { name: "Mexican Soup", desc: "Sweet Corn, Black Beans, Kidney Beans, Tomato, Bell Pepper, Jalapeño, Mexican Herbs, Coriander, Lime", price: 249, img: "img/dishes/soup-mexican-soup.webp" }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        heading: "Desserts and Ice Creams",
        intro: "Finish with Tiramisu, Panna Cotta or a warm brownie.",
        unit: ["dessert or ice cream", "desserts and ice creams"],
        icon: "dessert",
        cover: "img/dishes/dessert-italian-chocolate-brownie.webp",
        showOnHome: true,
        items: [
            { name: "Classic Tiramisu", desc: "Mascarpone, Espresso, Cocoa", price: 349, img: "img/dishes/dessert-classic-tiramisu.webp" },
            { name: "Vanilla Panna Cotta", desc: "Vanilla, Berry Compote", price: 299, img: "img/dishes/dessert-vanilla-panna-cotta.webp" },
            { name: "Italian Chocolate Brownie", desc: "Warm Brownie, Vanilla Gelato, Chocolate Sauce", price: 299, img: "img/dishes/dessert-italian-chocolate-brownie.webp" },
            {
                name: "Ice Creams",
                img: "img/dishes/dessert-ice-creams.webp",
                variants: [
                    { name: "Vanilla", price: 135, img: "img/dishes/dessert-ice-cream-vanilla.webp" },
                    { name: "Chocolate", price: 145, img: "img/dishes/dessert-ice-cream-chocolate.webp" },
                    { name: "Butterscotch", price: 155, img: "img/dishes/dessert-ice-cream-butterscotch.webp" },
                    { name: "American Nuts", price: 165, img: "img/dishes/dessert-ice-cream-american-nuts.webp" },
                    { name: "Chocolate Brownie", price: 175, img: "img/dishes/dessert-ice-cream-chocolate-brownie.webp" }
                ]
            },
            { name: "Chocolate Brownie with Ice Cream", price: 195, img: "img/dishes/dessert-chocolate-brownie-with-ice-cream.webp" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        heading: "Refreshing Mocktails",
        intro: "Fruity, minty and fizzy.",
        unit: ["mocktail", "mocktails"],
        icon: "cold",
        cover: "img/dishes/mocktail-passionfruit-mojito.webp",
        showOnHome: true,
        items: [
            { name: "Turkish Pomegranate Fizz", desc: "Turkish Pomegranate Fizz", price: 279, img: "img/dishes/mocktail-turkish-pomegranate-fizz.webp" },
            { name: "Istanbul Blue", desc: "Blue Curaçao, Lemon, Mint, Soda", price: 279, img: "img/dishes/mocktail-istanbul-blue.webp" },
            { name: "Mediterranean Sunset", desc: "Orange, Cranberry, Grenadine, Lemon", price: 279, img: "img/dishes/mocktail-mediterranean-sunset.webp" },
            { name: "Berry Basil Smash", desc: "Mixed Berries, Basil, Lemon, Soda", price: 299, img: "img/dishes/mocktail-berry-basil-smash.webp" },
            { name: "Passionfruit Mojito", desc: "Passionfruit, Mint, Lime, Soda", price: 299, img: "img/dishes/mocktail-passionfruit-mojito.webp" }
        ]
    },
    /*
    {
        // No photos yet  add img: "img/dishes/cold-coffee-<name>.webp" to each item (and a cover) once supplied
        id: "cold-coffee",
        title: "Cold Coffee",
        heading: "Cold Coffee",
        intro: "Four chilled espresso coffees, from Classic to Hazelnut.",
        unit: ["cold coffee", "cold coffees"],
        icon: "coffee",
        showOnHome: true,
        items: [
            { name: "Classic Cold Coffee", desc: "Espresso, Chilled Milk, Ice", price: 229 },
            { name: "Mocha Cold Coffee", desc: "Espresso, Chocolate, Milk, Ice", price: 269 },
            { name: "Hazelnut Cold Coffee", desc: "Espresso, Hazelnut, Milk, Ice", price: 299 },
            { name: "Vanilla Cream Cold Coffee", desc: "Espresso, Vanilla, Milk, Cream", price: 299 }
        ]
    },
    */
    {
        id: "carbonated",
        title: "Carbonated",
        heading: "Cold Drinks",
        intro: "Soft drinks, tonic water and energy drink.",
        unit: ["cold drink", "cold drinks"],
        icon: "cold",
        showOnHome: false,
        items: [
            { name: "Sprite", price: 99, img: "img/dishes/drink-sprite.webp" },
            { name: "Fanta", price: 99, img: "img/dishes/drink-fanta.webp" },
            { name: "Coke", price: 99, img: "img/dishes/drink-coke.webp" },
            { name: "Zero Coke", price: 99, img: "img/dishes/drink-zero-coke.webp" },
            { name: "Thums Up", price: 129, img: "img/dishes/drink-thums-up.webp" },
            { name: "Tonic Water", price: 199, img: "img/dishes/drink-tonic-water.webp" },
            { name: "Ginger Ale", price: 60, img: "img/dishes/drink-ginger-ale.webp" },
            { name: "Red Bull Energy", price: 125, img: "img/dishes/drink-red-bull-energy.webp" }
        ]
    }
];

/* Pizzas shown in "Our Most Loved Neapolitan Pizzas" on the Home page (names must match items above) */
const POPULAR_PIZZAS = ["Margherita Napoletana", "Pesto Burrata", "Funghi Tartufo", "Quattro Formaggi"];

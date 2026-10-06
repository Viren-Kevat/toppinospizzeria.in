/* ============================================
   TOPPINO'S PIZZERIA  SITE DATA
   Single source of truth for business info + menu.
   Edit this file to update contact details, hours,
   or any menu item/price  no HTML changes needed.
   ============================================ */

const SITE = {
    name: "Toppino's Pizzeria",
    tagline: "Neapolitana Pizzeria & Turkish Kitchen",
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
   Menu data sourced from Toppinos_Menu.xlsx.
   Item names, descriptions and prices are taken
   verbatim from that spreadsheet.
   Dish photos under img/menu/ are representative
   stock photography used as placeholders until
   professional photography is available.
   ============================================ */
const MENU = [
    {
        id: "salads",
        title: "Salads",
        subtitle: "Crisp, bright, garden to bowl",
        icon: "leaf",
        items: [
            { name: "Greek Salad", desc: "Cucumber, Tomato, Bell Pepper, Black Olives, Red Onion, Feta", price: 349, img: "img/menu/salad-greek-style.jpg" },
            { name: "Turkish Çoban Salad", desc: "Tomato, Cucumber, Onion, Bell Pepper, Parsley, Sumac", price: 299, img: "img/menu/salad-coban-salatasi.jpg" },
            { name: "Burrata Caprese", desc: "Cherry Tomato, Fresh Basil, Burrata, Balsamic Glaze", price: 499, img: "img/menu/salad-caprese.jpg" }
        ]
    },
    {
        id: "soups",
        title: "Soups",
        subtitle: "Warm starts, ladled fresh",
        icon: "soup",
        items: [
            { name: "Cream of Mushroom", desc: "Mushroom, Garlic, Thyme, Black Pepper", price: 249, img: "img/menu/soup-cream-of-mushroom.jpg" },
            { name: "Roasted Tomato Basil", desc: "Roasted Tomato, Basil, Garlic, Parmesan", price: 249, img: "img/menu/soup-tomato-basil.jpg" },
            { name: "Broccoli Parmesan", desc: "Broccoli, Garlic, Cream, Parmesan", price: 249, img: "img/menu/soup-cream-of-mushroom.jpg" },
            { name: "Italian Minestrone", desc: "Zucchini, Carrot, Beans, Celery, Pasta, Parmesan, Basil", price: 299, img: "img/menu/soup-minestrone.jpg" },
            { name: "Turkish Lentil Soup", desc: "Red Lentils, Carrot, Onion, Cumin, Paprika, Lemon", price: 249, img: "img/menu/soup-mercimek-corbasi.jpg" }
        ]
    },
    {
        id: "garlic-bread",
        title: "Garlic Bread & Turkish Bread",
        subtitle: "Warm breads, fresh from the oven",
        icon: "bread",
        items: [
            { name: "Turkish Simit", desc: "Sesame, Turkish White Cheese", price: 179, img: "img/menu/starter-cheese-garlic-bread.jpg" },
            { name: "Bazlama", desc: "Garlic Butter, Parsley", price: 199, img: "img/menu/starter-bruschetta.jpg" },
            { name: "Garlic Herb Turkish Bread", desc: "Roasted Garlic, Parsley, Oregano, Mozzarella", price: 249, img: "img/menu/starter-cheese-garlic-bread.jpg" },
            { name: "Za'atar Turkish Bread", desc: "Za'atar, Sesame, EVOO", price: 249, img: "img/menu/starter-bruschetta.jpg" },
            { name: "Cheese & Chilli Turkish Bread", desc: "Mozzarella, Turkish White Cheese, Green Chilli, Parsley", price: 299, img: "img/menu/starter-cheese-garlic-bread.jpg" }
        ]
    },
    {
        id: "turkish-pide",
        title: "Turkish Pide",
        subtitle: "Boat-shaped, baked to perfection",
        icon: "bread",
        items: [
            { name: "Classic Cheese Pide", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 399, img: "img/menu/pide-peynirli.jpg" },
            { name: "Spinach & Cheese Pide", desc: "Spinach, Garlic, Mozzarella, Turkish White Cheese", price: 399, img: "img/menu/pide-spinach.jpg" },
            { name: "Mushroom & Cheese Pide", desc: "Mushroom, Onion, Garlic, Mozzarella, Turkish White Cheese", price: 449, img: "img/menu/pide-cheese.jpg" },
            { name: "Tandoori Paneer Pide", desc: "Tandoori Paneer, Onion, Bell Pepper, Jalapeño, Mozzarella", price: 449, img: "img/menu/pide-paneer.jpg" },
            { name: "Mediterranean Pide", desc: "Basil Pesto, Sundried Tomato, Black Olives, Baby Corn, Jalapeño, Mozzarella, Turkish White Cheese", price: 499, img: "img/menu/pide-vegetable.jpg" }
        ]
    },
    {
        id: "pasta",
        title: "Pasta",
        subtitle: "Italian classics, made to order",
        icon: "pasta",
        items: [
            { name: "Penne Arrabbiata", desc: "Tomato, Garlic, Basil, Chilli Flakes, Parmesan", price: 349, img: "img/menu/pasta-arrabbiata.jpg" },
            { name: "Fettuccine Alfredo", desc: "Mushroom, Garlic, Parsley, Parmesan", price: 399, img: "img/menu/pasta-alfredo.jpg" },
            { name: "Spaghetti Aglio e Olio", desc: "Garlic, Parsley, Chilli Flakes, Parmesan, Lemon Zest", price: 349, img: "img/menu/pasta-aglio-olio.jpg" },
            { name: "Penne Basil Pesto", desc: "Cherry Tomato, Black Olives, Bell Pepper, Parmesan, Pine Nuts", price: 399, img: "img/menu/pasta-pesto-penne.jpg" },
            { name: "Pink Sauce Burrata Pasta", desc: "Tomato, Basil, Parmesan, Burrata", price: 499, img: "img/menu/pasta-ravioli.jpg" }
        ]
    },
    {
        id: "neapolitan-pizzas",
        title: "Italian Neapolitan Pizzas",
        subtitle: "Wood-fired, Napoli style",
        icon: "flame",
        items: [
            { name: "Margherita Napoletana", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 499, img: "img/menu/pizza-margherita.jpg" },
            { name: "Pesto Burrata", desc: "Basil Pesto, Cherry Tomato, Fior di Latte, Burrata, Basil, Pine Nuts", price: 649, img: "img/menu/pizza-pesto.jpg" },
            { name: "Funghi Tartufo", desc: "Mushroom, Roasted Garlic, Fior di Latte, Parmesan, Thyme, Truffle Oil", price: 599, img: "img/menu/pizza-mushroom-truffle.jpg" },
            { name: "Quattro Formaggi", desc: "Fior di Latte, Gorgonzola, Taleggio, Parmesan, Black Pepper", price: 599, img: "img/menu/pizza-four-cheese-white.jpg" },
            { name: "Diavola Veg", desc: "Bell Pepper, Jalapeño, Black Olives, Green Chilli, Fior di Latte, Chilli Oil", price: 549, img: "img/menu/pizza-veggie-delight.jpg" }
        ]
    },
    {
        id: "turkish-pizza",
        title: "Turkish Pizza / Lahmacun",
        subtitle: "Thin, crispy, loaded with flavour",
        icon: "flame",
        items: [
            { name: "Classic Veg Lahmacun", desc: "Mushroom, Tomato, Onion, Bell Pepper, Parsley, Garlic, Turkish Spices", price: 349, img: "img/menu/pizza-marinara.jpg" },
            { name: "Cheese & Vegetable Lahmacun", desc: "Tomato, Onion, Bell Pepper, Mushroom, Mozzarella, Turkish White Cheese, Parsley", price: 399, img: "img/menu/pizza-mediterranean-olive-feta.jpg" },
            { name: "Mediterranean Lahmacun", desc: "Sundried Tomato, Roasted Bell Pepper, Black Olives, Mushroom, Turkish White Cheese, Parsley", price: 449, img: "img/menu/pizza-sundried-tomato-feta.jpg" },
            { name: "Tandoori Turkish Pizza", desc: "Tandoori Paneer, Onion, Bell Pepper, Jalapeño, Mozzarella, Coriander", price: 449, img: "img/menu/pizza-tandoori-paneer.jpg" },
            { name: "Pesto Turkish Pizza", desc: "Basil Pesto, Sundried Tomato, Black Olives, Jalapeño, Baby Corn, Mozzarella, Turkish White Cheese", price: 499, img: "img/menu/pizza-pesto.jpg" }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        subtitle: "A sweet finish",
        icon: "dessert",
        items: [
            { name: "Classic Tiramisu", desc: "Mascarpone, Espresso, Cocoa", price: 349, img: "img/menu/dessert-tiramisu.jpg" },
            { name: "Vanilla Panna Cotta", desc: "Vanilla, Berry Compote", price: 299, img: "img/menu/dessert-panna-cotta.jpg" },
            { name: "Italian Chocolate Brownie", desc: "Warm Brownie, Vanilla Gelato, Chocolate Sauce", price: 299, img: "img/menu/dessert-kunefe.jpg" },
            { name: "Chocolate Brownie with Ice Cream", desc: "", price: 195, img: "img/menu/dessert-sutlac.jpg" },
            { name: "Ice Cream - Vanilla", desc: "", price: 135, img: "img/menu/dessert-panna-cotta.jpg" },
            { name: "Ice Cream - Chocolate", desc: "", price: 145, img: "img/menu/dessert-tiramisu.jpg" },
            { name: "Ice Cream - Butterscotch", desc: "", price: 155, img: "img/menu/dessert-kunefe.jpg" },
            { name: "Ice Cream - American Nuts", desc: "", price: 165, img: "img/menu/dessert-baklava.jpg" },
            { name: "Ice Cream - Chocolate Brownie", desc: "", price: 175, img: "img/menu/dessert-sutlac.jpg" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        subtitle: "Refreshing handcrafted drinks",
        icon: "cold",
        items: [
            { name: "Turkish Pomegranate Fizz", desc: "", price: 279, img: "img/menu/coldbev-mocktails.jpg" },
            { name: "Istanbul Blue", desc: "Blue Curaçao, Lemon, Mint, Soda", price: 279, img: "img/menu/coldbev-mocktails.jpg" },
            { name: "Mediterranean Sunset", desc: "Orange, Cranberry, Grenadine, Lemon", price: 279, img: "img/menu/coldbev-mocktails.jpg" },
            { name: "Berry Basil Smash", desc: "Mixed Berries, Basil, Lemon, Soda", price: 299, img: "img/menu/coldbev-mocktails.jpg" },
            { name: "Passionfruit Mojito", desc: "Passionfruit, Mint, Lime, Soda", price: 299, img: "img/menu/coldbev-mocktails.jpg" }
        ]
    },
    {
        id: "carbonated",
        title: "Carbonated",
        subtitle: "Classic fizzy drinks",
        icon: "cold",
        items: [
            { name: "Sprite", desc: "", price: 99, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Fanta", desc: "", price: 99, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Coke", desc: "", price: 99, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Zero Coke", desc: "", price: 99, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Thums Up", desc: "", price: 129, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Tonic Water", desc: "", price: 199, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Ginger Ale", desc: "", price: 60, img: "img/menu/coldbev-ayran.jpg" },
            { name: "RedBull Energy", desc: "", price: 125, img: "img/menu/coldbev-ayran.jpg" }
        ]
    },
    {
        id: "cold-coffee",
        title: "Cold Coffee",
        subtitle: "Chilled coffee creations",
        icon: "cold",
        items: [
            { name: "Classic Cold Coffee", desc: "Espresso, Chilled Milk, Ice", price: 229, img: "img/menu/coldbev-italian-cold-coffee.jpg" },
            { name: "Mocha Cold Coffee", desc: "Espresso, Chocolate, Milk, Ice", price: 269, img: "img/menu/coldbev-italian-cold-coffee.jpg" },
            { name: "Hazelnut Cold Coffee", desc: "Espresso, Hazelnut, Milk, Ice", price: 299, img: "img/menu/coldbev-italian-cold-coffee.jpg" },
            { name: "Vanilla Cream Cold Coffee", desc: "Espresso, Vanilla, Milk, Cream", price: 299, img: "img/menu/coldbev-italian-cold-coffee.jpg" }
        ]
    },
    {
        id: "turkish-coffee",
        title: "Angara / Turkish Coffee",
        subtitle: "Traditional Turkish brews",
        icon: "cup",
        items: [
            { name: "Angara Turkish Coffee", desc: "Turkish Delight", price: 199, img: "img/menu/hotbev-angara-coffee.jpg" },
            { name: "Turkish Cold Coffee", desc: "Turkish Coffee, Milk, Ice", price: 299, img: "img/menu/hotbev-turkish-coffee.jpg" }
        ]
    }
];

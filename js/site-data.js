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
            { name: "Greek Salad", desc: "Cucumber, Tomato, Bell Pepper, Black Olives, Red Onion, Feta", price: 349, img: "img/menu/salad-greek.jpg" },
            { name: "Turkish Çoban Salad", desc: "Tomato, Cucumber, Onion, Bell Pepper, Parsley, Sumac", price: 299, img: "img/menu/salad-coban.jpg" },
            { name: "Burrata Caprese", desc: "Cherry Tomato, Fresh Basil, Burrata, Balsamic Glaze", price: 499, img: "img/menu/salad-burrata-caprese.jpg" }
        ]
    },
    {
        id: "soups",
        title: "Soups",
        subtitle: "Warm starts, ladled fresh",
        icon: "soup",
        items: [
            { name: "Cream of Mushroom", desc: "Mushroom, Garlic, Thyme, Black Pepper", price: 249, img: "img/menu/soup-cream-of-mushroom.jpg" },
            { name: "Roasted Tomato Basil", desc: "Roasted Tomato, Basil, Garlic, Parmesan", price: 249, img: "img/menu/soup-roasted-tomato-basil.jpg" },
            { name: "Broccoli Parmesan", desc: "Broccoli, Garlic, Cream, Parmesan", price: 249, img: "img/menu/soup-broccoli-parmesan.jpg" },
            { name: "Italian Minestrone", desc: "Zucchini, Carrot, Beans, Celery, Pasta, Parmesan, Basil", price: 299, img: "img/menu/soup-italian-minestrone.jpg" },
            { name: "Turkish Lentil Soup", desc: "Red Lentils, Carrot, Onion, Cumin, Paprika, Lemon", price: 249, img: "img/menu/soup-turkish-lentil.jpg" }
        ]
    },
    {
        id: "garlic-bread",
        title: "Garlic Bread & Turkish Bread",
        subtitle: "Warm breads, fresh from the oven",
        icon: "bread",
        items: [
            { name: "Turkish Simit", desc: "Sesame, Turkish White Cheese", price: 179, img: "img/menu/bread-turkish-simit.jpg" },
            { name: "Bazlama", desc: "Garlic Butter, Parsley", price: 199, img: "img/menu/bread-bazlama.jpg" },
            { name: "Garlic Herb Turkish Bread", desc: "Roasted Garlic, Parsley, Oregano, Mozzarella", price: 249, img: "img/menu/bread-garlic-herb.jpg" },
            { name: "Za'atar Turkish Bread", desc: "Za'atar, Sesame, EVOO", price: 249, img: "img/menu/bread-zaatar.jpg" },
            { name: "Cheese & Chilli Turkish Bread", desc: "Mozzarella, Turkish White Cheese, Green Chilli, Parsley", price: 299, img: "img/menu/bread-cheese-chilli.jpg" }
        ]
    },
    {
        id: "turkish-pide",
        title: "Turkish Pide",
        subtitle: "Boat-shaped, baked to perfection",
        icon: "bread",
        items: [
            { name: "Classic Cheese Pide", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 399, img: "img/menu/pide-classic-cheese.jpg" },
            { name: "Spinach & Cheese Pide", desc: "Spinach, Garlic, Mozzarella, Turkish White Cheese", price: 399, img: "img/menu/pide-spinach-cheese.jpg" },
            { name: "Mushroom & Cheese Pide", desc: "Mushroom, Onion, Garlic, Mozzarella, Turkish White Cheese", price: 449, img: "img/menu/pide-mushroom-cheese.jpg" },
            { name: "Tandoori Paneer Pide", desc: "Tandoori Paneer, Onion, Bell Pepper, Jalapeño, Mozzarella", price: 449, img: "img/menu/pide-tandoori-paneer.jpg" },
            { name: "Mediterranean Pide", desc: "Basil Pesto, Sundried Tomato, Black Olives, Baby Corn, Jalapeño, Mozzarella, Turkish White Cheese", price: 499, img: "img/menu/pide-mediterranean.jpg" }
        ]
    },
    {
        id: "pasta",
        title: "Pasta",
        subtitle: "Italian classics, made to order",
        icon: "pasta",
        items: [
            { name: "Penne Arrabbiata", desc: "Tomato, Garlic, Basil, Chilli Flakes, Parmesan", price: 349, img: "img/menu/pasta-penne-arrabbiata.jpg" },
            { name: "Fettuccine Alfredo", desc: "Mushroom, Garlic, Parsley, Parmesan", price: 399, img: "img/menu/pasta-fettuccine-alfredo.jpg" },
            { name: "Spaghetti Aglio e Olio", desc: "Garlic, Parsley, Chilli Flakes, Parmesan, Lemon Zest", price: 349, img: "img/menu/pasta-aglio-e-olio.jpg" },
            { name: "Penne Basil Pesto", desc: "Cherry Tomato, Black Olives, Bell Pepper, Parmesan, Pine Nuts", price: 399, img: "img/menu/pasta-penne-basil-pesto.jpg" },
            { name: "Pink Sauce Burrata Pasta", desc: "Tomato, Basil, Parmesan, Burrata", price: 499, img: "img/menu/pasta-pink-sauce-burrata.jpg" }
        ]
    },
    {
        id: "neapolitan-pizzas",
        title: "Italian Neapolitan Pizzas",
        subtitle: "Wood-fired, Napoli style",
        icon: "flame",
        items: [
            { name: "Margherita Napoletana", desc: "Mozzarella, Turkish White Cheese, Parsley", price: 499, img: "img/menu/pizza-margherita-napoletana.jpg" },
            { name: "Pesto Burrata", desc: "Basil Pesto, Cherry Tomato, Fior di Latte, Burrata, Basil, Pine Nuts", price: 649, img: "img/menu/pizza-pesto-burrata.jpg" },
            { name: "Funghi Tartufo", desc: "Mushroom, Roasted Garlic, Fior di Latte, Parmesan, Thyme, Truffle Oil", price: 599, img: "img/menu/pizza-funghi-tartufo.jpg" },
            { name: "Quattro Formaggi", desc: "Fior di Latte, Gorgonzola, Taleggio, Parmesan, Black Pepper", price: 599, img: "img/menu/pizza-quattro-formaggi.jpg" },
            { name: "Diavola Veg", desc: "Bell Pepper, Jalapeño, Black Olives, Green Chilli, Fior di Latte, Chilli Oil", price: 549, img: "img/menu/pizza-diavola-veg.jpg" }
        ]
    },
    {
        id: "turkish-pizza",
        title: "Turkish Pizza / Lahmacun",
        subtitle: "Thin, crispy, loaded with flavour",
        icon: "flame",
        items: [
            { name: "Classic Veg Lahmacun", desc: "Mushroom, Tomato, Onion, Bell Pepper, Parsley, Garlic, Turkish Spices", price: 349, img: "img/menu/lahmacun-classic-veg.jpg" },
            { name: "Cheese & Vegetable Lahmacun", desc: "Tomato, Onion, Bell Pepper, Mushroom, Mozzarella, Turkish White Cheese, Parsley", price: 399, img: "img/menu/lahmacun-cheese-veg.jpg" },
            { name: "Mediterranean Lahmacun", desc: "Sundried Tomato, Roasted Bell Pepper, Black Olives, Mushroom, Turkish White Cheese, Parsley", price: 449, img: "img/menu/lahmacun-mediterranean.jpg" },
            { name: "Tandoori Turkish Pizza", desc: "Tandoori Paneer, Onion, Bell Pepper, Jalapeño, Mozzarella, Coriander", price: 449, img: "img/menu/lahmacun-tandoori.jpg" },
            { name: "Pesto Turkish Pizza", desc: "Basil Pesto, Sundried Tomato, Black Olives, Jalapeño, Baby Corn, Mozzarella, Turkish White Cheese", price: 499, img: "img/menu/lahmacun-pesto.jpg" }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        subtitle: "A sweet finish",
        icon: "dessert",
        items: [
            { name: "Classic Tiramisu", desc: "Mascarpone, Espresso, Cocoa", price: 349, img: "img/menu/dessert-classic-tiramisu.jpg" },
            { name: "Vanilla Panna Cotta", desc: "Vanilla, Berry Compote", price: 299, img: "img/menu/dessert-vanilla-panna-cotta.jpg" },
            { name: "Italian Chocolate Brownie", desc: "Warm Brownie, Vanilla Gelato, Chocolate Sauce", price: 299, img: "img/menu/dessert-italian-chocolate-brownie.jpg" },
            { name: "Chocolate Brownie with Ice Cream", desc: "", price: 195, img: "img/menu/dessert-chocolate-brownie-ice-cream.jpg" },
            { name: "Ice Cream - Vanilla", desc: "", price: 135, img: "img/menu/dessert-ice-cream-vanilla.jpg" },
            { name: "Ice Cream - Chocolate", desc: "", price: 145, img: "img/menu/dessert-ice-cream-chocolate.jpg" },
            { name: "Ice Cream - Butterscotch", desc: "", price: 155, img: "img/menu/dessert-ice-cream-butterscotch.jpg" },
            { name: "Ice Cream - American Nuts", desc: "", price: 165, img: "img/menu/dessert-ice-cream-american-nuts.jpg" },
            { name: "Ice Cream - Chocolate Brownie", desc: "", price: 175, img: "img/menu/dessert-ice-cream-chocolate-brownie.jpg" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        subtitle: "Refreshing handcrafted drinks",
        icon: "cold",
        items: [
            { name: "Turkish Pomegranate Fizz", desc: "", price: 279, img: "img/menu/mocktail-turkish-pomegranate-fizz.jpg" },
            { name: "Istanbul Blue", desc: "Blue Curaçao, Lemon, Mint, Soda", price: 279, img: "img/menu/mocktail-istanbul-blue.jpg" },
            { name: "Mediterranean Sunset", desc: "Orange, Cranberry, Grenadine, Lemon", price: 279, img: "img/menu/mocktail-mediterranean-sunset.jpg" },
            { name: "Berry Basil Smash", desc: "Mixed Berries, Basil, Lemon, Soda", price: 299, img: "img/menu/mocktail-berry-basil-smash.jpg" },
            { name: "Passionfruit Mojito", desc: "Passionfruit, Mint, Lime, Soda", price: 299, img: "img/menu/mocktail-passionfruit-mojito.jpg" }
        ]
    },
    {
        id: "carbonated",
        title: "Carbonated",
        subtitle: "Classic fizzy drinks",
        icon: "cold",
        items: [
            { name: "Sprite", desc: "", price: 99, img: "img/menu/carbonated-sprite.jpg" },
            { name: "Fanta", desc: "", price: 99, img: "img/menu/carbonated-fanta.jpg" },
            { name: "Coke", desc: "", price: 99, img: "img/menu/carbonated-coke.jpg" },
            { name: "Zero Coke", desc: "", price: 99, img: "img/menu/carbonated-zero-coke.jpg" },
            { name: "Thums Up", desc: "", price: 129, img: "img/menu/carbonated-thums-up.jpg" },
            { name: "Tonic Water", desc: "", price: 199, img: "img/menu/carbonated-tonic-water.jpg" },
            { name: "Ginger Ale", desc: "", price: 60, img: "img/menu/carbonated-ginger-ale.jpg" },
            { name: "RedBull Energy", desc: "", price: 125, img: "img/menu/carbonated-redbull.jpg" }
        ]
    },
    {
        id: "cold-coffee",
        title: "Cold Coffee",
        subtitle: "Chilled coffee creations",
        icon: "cold",
        items: [
            { name: "Classic Cold Coffee", desc: "Espresso, Chilled Milk, Ice", price: 229, img: "img/menu/coldcoffee-classic.jpg" },
            { name: "Mocha Cold Coffee", desc: "Espresso, Chocolate, Milk, Ice", price: 269, img: "img/menu/coldcoffee-mocha.jpg" },
            { name: "Hazelnut Cold Coffee", desc: "Espresso, Hazelnut, Milk, Ice", price: 299, img: "img/menu/coldcoffee-hazelnut.jpg" },
            { name: "Vanilla Cream Cold Coffee", desc: "Espresso, Vanilla, Milk, Cream", price: 299, img: "img/menu/coldcoffee-vanilla-cream.jpg" }
        ]
    },
    {
        id: "turkish-coffee",
        title: "Angara / Turkish Coffee",
        subtitle: "Traditional Turkish brews",
        icon: "cup",
        items: [
            { name: "Angara Turkish Coffee", desc: "Turkish Delight", price: 199, img: "img/menu/turkishcoffee-angara.jpg" },
            { name: "Turkish Cold Coffee", desc: "Turkish Coffee, Milk, Ice", price: 299, img: "img/menu/turkishcoffee-cold.jpg" }
        ]
    }
];

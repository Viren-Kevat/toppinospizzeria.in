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
   Real menu supplied by the client (see
   toppinos_menu.html for the original styled
   reference copy). Item names, descriptions and
   prices are taken verbatim from that document.
   Dish photos under img/menu/ are representative
   stock photography (see img/menu/manifest-*.json
   for sourcing/attribution) used as placeholders
   until professional photography is available.
   "jain: true" marks dishes with a Jain option
   available on request.
   ============================================ */
const MENU = [
    {
        id: "soups",
        title: "Soups",
        subtitle: "Warm starts, ladled fresh",
        icon: "soup",
        items: [
            { name: "Sweet Corn Soup", desc: "Corn, vegetable stock, cornstarch, pepper", price: 165, img: "img/menu/soup-sweet-corn.jpg", signature: true, jain: true },
            { name: "Roasted Bell Pepper Soup", desc: "Roasted bell pepper, cream, garlic, herbs", price: 185, img: "img/menu/soup-roasted-bell-pepper.jpg", signature: true, jain: true },
            { name: "Tomato Basil", desc: "Tomato, basil, olive oil, cream", price: 175, img: "img/menu/soup-tomato-basil.jpg", jain: true },
            { name: "Minestrone", desc: "Mixed vegetables, beans, pasta, herbs", price: 195, img: "img/menu/soup-minestrone.jpg" },
            { name: "Cream of Mushroom", desc: "Mushroom, cream, butter, thyme", price: 195, img: "img/menu/soup-cream-of-mushroom.jpg" },
            { name: "Mercimek Corbasi", desc: "Red lentils, cumin, lemon, mint", price: 185, img: "img/menu/soup-mercimek-corbasi.jpg", jain: true },
            { name: "Ezogelin Soup", desc: "Red lentil, mint, sumac, rice", price: 195, img: "img/menu/soup-ezogelin.jpg", jain: true }
        ]
    },
    {
        id: "salads",
        title: "Salads",
        subtitle: "Crisp, bright, garden to bowl",
        icon: "leaf",
        items: [
            { name: "Greek-Style Salad", desc: "Feta, olives, cucumber, tomato, red onion, olive oil", price: 295, img: "img/menu/salad-greek-style.jpg", signature: true, jain: true },
            { name: "Mediterranean Chickpea Salad", desc: "Chickpea, cucumber, tomato, parsley, lemon dressing", price: 275, img: "img/menu/salad-mediterranean-chickpea.jpg", signature: true, jain: true },
            { name: "Caprese", desc: "Mozzarella, tomato, basil, balsamic glaze", price: 315, img: "img/menu/salad-caprese.jpg", jain: true },
            { name: "Rocket & Parmesan", desc: "Arugula, shaved parmesan, walnut, lemon vinaigrette", price: 295, img: "img/menu/salad-rocket-parmesan.jpg", jain: true },
            { name: "Roasted Beetroot & Feta Salad", desc: "Beetroot, feta, walnut, greens", price: 295, img: "img/menu/salad-roasted-beetroot-feta.jpg" },
            { name: "Coban Salatasi", desc: "Cucumber, tomato, onion, parsley, lemon-olive oil", price: 265, img: "img/menu/salad-coban-salatasi.jpg", jain: true },
            { name: "Fattoush", desc: "Crisp greens, radish, toasted pita, sumac dressing", price: 275, img: "img/menu/salad-fattoush.jpg" }
        ]
    },
    {
        id: "starters",
        title: "Starters & Mezze",
        subtitle: "Mezze and shareable bites",
        icon: "mezze",
        items: [
            { name: "Cheese Garlic Bread", desc: "Mozzarella, garlic butter, oregano, chilli flakes", price: 225, img: "img/menu/starter-cheese-garlic-bread.jpg", signature: true, jain: true },
            { name: "Loaded Nachos", desc: "Nachos, cheese sauce, salsa, sour cream, jalapeno", price: 345, img: "img/menu/starter-loaded-nachos.jpg", signature: true },
            { name: "Hummus with Pita", desc: "Chickpea, tahini, olive oil, warm pita", price: 285, img: "img/menu/starter-hummus-pita.jpg", signature: true, jain: true },
            { name: "Bruschetta", desc: "Toasted bread, tomato, basil, garlic, mozzarella", price: 295, img: "img/menu/starter-bruschetta.jpg", jain: true },
            { name: "Falafel Platter", desc: "Falafel, tahini, pickled salad, pita", price: 315, img: "img/menu/starter-falafel-platter.jpg", jain: true },
            { name: "Borek", desc: "Filo pastry, cheese, herbs", price: 295, img: "img/menu/starter-borek.jpg", jain: true },
            { name: "Imam Bayildi", desc: "Baked eggplant, tomato, onion, olive oil", price: 325, img: "img/menu/starter-imam-bayildi.jpg" }
        ]
    },
    {
        id: "pizza-indian",
        title: "Brick Oven Pizzas — Paneer & Indian-Inspired",
        subtitle: "10\" · Fired in our traditional brick oven",
        icon: "flame",
        items: [
            { name: "Paneer Tikka Pizza", desc: "Tikka paneer, onion, capsicum, garlic, fresh chilli, mozzarella", price: 525, img: "img/menu/pizza-paneer-tikka.jpg", signature: true },
            { name: "Makhani Pizza", desc: "Makhani sauce, paneer, tomato, cashew, bell pepper, mozzarella", price: 545, img: "img/menu/pizza-makhani.jpg", signature: true },
            { name: "Peri Peri Paneer", desc: "Paneer, peri peri sauce, onion, capsicum, mozzarella", price: 555, img: "img/menu/pizza-peri-peri-paneer.jpg", signature: true },
            { name: "Tandoori Paneer Pizza", desc: "Tandoori sauce, paneer, red & yellow pepper, onion, mozzarella", price: 525, img: "img/menu/pizza-tandoori-paneer.jpg" }
        ]
    },
    {
        id: "pizza-classic",
        title: "Brick Oven Pizzas — Classic",
        subtitle: "10\" · Fired in our traditional brick oven",
        icon: "flame",
        items: [
            { name: "Five Cheese", desc: "Mozzarella, cheddar, parmesan, feta, processed cheese blend", price: 595, img: "img/menu/pizza-five-cheese.jpg", signature: true, jain: true },
            { name: "Margherita", desc: "Tomato sauce, fresh mozzarella, basil, olive oil", price: 425, img: "img/menu/pizza-margherita.jpg", jain: true },
            { name: "Veg Supreme", desc: "Bell pepper, onion, corn, olives, mozzarella", price: 475, img: "img/menu/pizza-veg-supreme.jpg", jain: true },
            { name: "Veggie Delight", desc: "Corn, olives, bell pepper, sundried tomato, mozzarella", price: 495, img: "img/menu/pizza-veggie-delight.jpg", jain: true },
            { name: "Hawaiian", desc: "Pineapple, corn, onion, tangy pizza sauce", price: 505, img: "img/menu/pizza-hawaiian.jpg", jain: true },
            { name: "Aglio Olio Pizza", desc: "Garlic, olive oil, chilli flakes, parmesan", price: 475, img: "img/menu/pizza-aglio-olio.jpg", jain: true },
            { name: "Pesto Pizza", desc: "Basil pesto, cherry tomato, bocconcini", price: 525, img: "img/menu/pizza-pesto.jpg", jain: true }
        ]
    },
    {
        id: "pizza-white",
        title: "Brick Oven Pizzas — White (Bianca)",
        subtitle: "10\" · Fired in our traditional brick oven",
        icon: "flame",
        items: [
            { name: "Bianca al Funghi", desc: "Bechamel, mushroom, mozzarella, truffle oil", price: 625, img: "img/menu/pizza-bianca-funghi.jpg", signature: true },
            { name: "Four Cheese White Pizza", desc: "Bechamel base, mozzarella, feta, parmesan, cheddar", price: 615, img: "img/menu/pizza-four-cheese-white.jpg", jain: true },
            { name: "Bianca al Spinach", desc: "Bechamel, spinach, corn, mozzarella, chilli flakes", price: 585, img: "img/menu/pizza-bianca-spinach.jpg", jain: true },
            { name: "Mushroom & Truffle", desc: "Sauteed mushroom, truffle oil, mozzarella", price: 665, img: "img/menu/pizza-mushroom-truffle.jpg" }
        ]
    },
    {
        id: "pizza-specialty",
        title: "Brick Oven Pizzas — Specialty",
        subtitle: "10\" · Fired in our traditional brick oven",
        icon: "flame",
        items: [
            { name: "Caprese Pizza", desc: "Mozzarella, roasted zucchini, tomato, bell pepper, balsamic glaze", price: 595, img: "img/menu/pizza-caprese.jpg", jain: true },
            { name: "Spinach & Ricotta Pizza", desc: "Tomato base, mozzarella, spinach, ricotta", price: 595, img: "img/menu/pizza-spinach-ricotta.jpg", jain: true },
            { name: "Pizza Marinara", desc: "Marinara sauce, minced garlic, mozzarella, basil", price: 555, img: "img/menu/pizza-marinara.jpg", jain: true },
            { name: "Mediterranean Olive & Feta Pizza", desc: "Tomato base, mozzarella, black olive, feta, red onion", price: 645, img: "img/menu/pizza-mediterranean-olive-feta.jpg", jain: true },
            { name: "Sun-Dried Tomato & Feta Pizza", desc: "Tomato base, mozzarella, sundried tomato, feta, basil", price: 595, img: "img/menu/pizza-sundried-tomato-feta.jpg", jain: true },
            { name: "Eggplant Parmesan Pizza", desc: "Roasted eggplant, tomato, mozzarella, parmesan", price: 595, img: "img/menu/pizza-eggplant-parmesan.jpg" }
        ]
    },
    {
        id: "calzone",
        title: "Calzone",
        subtitle: "10\" · Folded and fired in our brick oven",
        icon: "calzone",
        items: [
            { name: "Veggie Fiesta", desc: "Black olives, corn, sundried tomato, capsicum, jalapeno, cheese", price: 375, img: "img/menu/calzone-veggie-fiesta.jpg", jain: true },
            { name: "Pesto Perfection", desc: "Basil pesto, bell pepper, cherry tomato, olive, cheese", price: 405, img: "img/menu/calzone-pesto-perfection.jpg", jain: true },
            { name: "Mushroom Madness", desc: "Sauteed mushroom, garlic, thyme, onion, cheese", price: 415, img: "img/menu/calzone-mushroom-madness.jpg" },
            { name: "Mediterranean Mashup", desc: "Red paprika, olive, onion, bell pepper, feta, mozzarella", price: 405, img: "img/menu/calzone-mediterranean-mashup.jpg", jain: true }
        ]
    },
    {
        id: "pide",
        title: "Pide — Turkish Flatbread",
        subtitle: "10\", boat-shaped · Fired in our traditional brick oven",
        icon: "bread",
        items: [
            { name: "Paneer Pide", desc: "Spiced paneer, onion, bell pepper, mozzarella", price: 455, img: "img/menu/pide-paneer.jpg", signature: true },
            { name: "Cheese Pide", desc: "Boat-shaped dough, mozzarella, feta, herbs", price: 425, img: "img/menu/pide-cheese.jpg", signature: true, jain: true },
            { name: "Vegetable Pide", desc: "Mixed vegetables, mozzarella, herbs", price: 435, img: "img/menu/pide-vegetable.jpg", jain: true },
            { name: "Spinach Pide", desc: "Spinach, mozzarella, feta, olive oil", price: 435, img: "img/menu/pide-spinach.jpg", jain: true },
            { name: "Peynirli Pide", desc: "Feta, mozzarella, fresh herbs, chilli flakes", price: 445, img: "img/menu/pide-peynirli.jpg", jain: true },
            { name: "Manti", desc: "Veg-stuffed dumplings, garlic yogurt, tomato butter", price: 465, img: "img/menu/pide-manti.jpg" }
        ]
    },
    {
        id: "pastas",
        title: "Pastas",
        subtitle: "Italian classics, made to order",
        icon: "pasta",
        items: [
            { name: "Alfredo", desc: "Fettuccine, cream, white sauce, vegetables", price: 355, img: "img/menu/pasta-alfredo.jpg", signature: true, jain: true },
            { name: "Arrabbiata", desc: "Penne, spicy tomato sauce, cherry tomato", price: 345, img: "img/menu/pasta-arrabbiata.jpg", jain: true },
            { name: "Aglio Olio", desc: "Spaghetti, garlic, olive oil, chilli flakes", price: 335, img: "img/menu/pasta-aglio-olio.jpg", jain: true },
            { name: "Veg Lasagna", desc: "Layered pasta, vegetables, bechamel, cheese", price: 395, img: "img/menu/pasta-veg-lasagna.jpg", jain: true },
            { name: "Pesto Penne", desc: "Basil pesto, penne, parmesan, pine nuts", price: 375, img: "img/menu/pasta-pesto-penne.jpg", jain: true },
            { name: "Ravioli", desc: "Cheese-stuffed pasta pockets, garlic butter sauce", price: 425, img: "img/menu/pasta-ravioli.jpg" }
        ]
    },
    {
        id: "turkish-mains",
        title: "Turkish Mains",
        subtitle: "From the Turkish kitchen",
        icon: "grill",
        items: [
            { name: "Paneer Adana Skewers", desc: "Spiced paneer skewers, grilled peppers", price: 385, img: "img/menu/turkish-paneer-adana-skewers.jpg" },
            { name: "Falafel Platter", desc: "Falafel, hummus, pickled vegetables, pita", price: 345, img: "img/menu/turkish-falafel-platter.jpg", jain: true },
            { name: "Grilled Halloumi", desc: "Char-grilled halloumi, herb oil, lemon", price: 395, img: "img/menu/turkish-grilled-halloumi.jpg", jain: true },
            { name: "Veg Iskender", desc: "Grilled vegetables, pita, tomato sauce, yogurt", price: 365, img: "img/menu/turkish-veg-iskender.jpg" }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        subtitle: "A sweet finish",
        icon: "dessert",
        items: [
            { name: "Baklava", desc: "Layered filo, nuts, honey syrup", price: 245, img: "img/menu/dessert-baklava.jpg", signature: true, jain: true },
            { name: "Kunefe", desc: "Shredded pastry, cheese, sugar syrup", price: 265, img: "img/menu/dessert-kunefe.jpg", signature: true, jain: true },
            { name: "New York Cheesecake", desc: "Baked cheesecake, berry compote", price: 275, img: "img/menu/dessert-ny-cheesecake.jpg", jain: true },
            { name: "Tiramisu", desc: "Coffee-soaked layers, mascarpone cream", price: 275, img: "img/menu/dessert-tiramisu.jpg" },
            { name: "Sutlac", desc: "Baked rice pudding, cinnamon", price: 195, img: "img/menu/dessert-sutlac.jpg", jain: true },
            { name: "Panna Cotta", desc: "Vanilla-set cream, seasonal fruit coulis", price: 225, img: "img/menu/dessert-panna-cotta.jpg", jain: true }
        ]
    },
    {
        id: "hot-beverages",
        title: "Hot Beverages",
        subtitle: "Coffee & tea, brewed fresh",
        icon: "cup",
        items: [
            { name: "Angara Coffee", desc: "Signature roasted coffee blend", price: 165, img: "img/menu/hotbev-angara-coffee.jpg", signature: true },
            { name: "Turkish Tea (Cay)", desc: "Traditional black tea, tulip glass", price: 120, img: "img/menu/hotbev-turkish-tea.jpg" },
            { name: "Turkish Coffee", desc: "Finely ground coffee, slow brewed", price: 165, img: "img/menu/hotbev-turkish-coffee.jpg" },
            { name: "Herbal Teas", desc: "Chamomile, mint, hibiscus", price: 140, img: "img/menu/hotbev-herbal-teas.jpg" }
        ]
    },
    {
        id: "cold-beverages",
        title: "Cold Beverages",
        subtitle: "Chilled to refresh",
        icon: "cold",
        items: [
            { name: "Mocktails", desc: "Rotating seasonal fruit & herb combinations", price: 195, img: "img/menu/coldbev-mocktails.jpg", signature: true },
            { name: "Ayran", desc: "Chilled salted yogurt drink", price: 145, img: "img/menu/coldbev-ayran.jpg" },
            { name: "Italian Cold Coffee", desc: "Espresso, milk, ice", price: 185, img: "img/menu/coldbev-italian-cold-coffee.jpg" }
        ]
    }
];

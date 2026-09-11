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
   NOTE: This is a realistic placeholder menu.
   Per the design brief, only "wood-fired pizza" and
   "Turkish breads/pide" are confirmed categories 
   exact dishes, descriptions and prices must be
   replaced once the head chef finalizes the real menu.
   ============================================ */
const MENU = [
    {
        id: "pizze",
        title: "Wood-Fired Pizze",
        subtitle: "Neapolitan-style, baked in our brick oven",
        icon: "flame",
        items: [
            {
                name: "Margherita",
                desc: "San Marzano tomato, fior di latte, fresh basil, olive oil",
                price: 399,
                img: "img/pizza-margherita-whole.webp",
                signature: true
            },
            {
                name: "Zucchini & Burrata",
                desc: "Tomato base, creamy burrata, grilled zucchini, basil",
                price: 499,
                img: "img/hero-pizza-oven.webp"
            },
            {
                name: "Rocket & Prosciutto",
                desc: "Cured ham, arugula, cherry tomato, parmesan shavings, chilli",
                price: 549,
                img: "img/pizza-sliced-board.webp"
            },
            {
                name: "Diavola",
                desc: "Tomato, mozzarella, spicy salame, chilli oil",
                price: 449,
                img: "img/pizza-pepperoni.webp"
            },
            {
                name: "Quattro Formaggi",
                desc: "Four-cheese blend, cracked pepper, honey drizzle",
                price: 479,
                img: "img/pizza-margherita-overhead.webp"
            },
            {
                name: "Chef's Slice",
                desc: "Ask your server for today's wood-fired special",
                price: 469,
                img: "img/pizza-slice-moody.webp"
            }
        ]
    },
    {
        id: "pide",
        title: "Turkish Pide & Breads",
        subtitle: "Boat-shaped, hand-stretched, oven-baked to order",
        icon: "bread",
        items: [
            {
                name: "Kıymalı Pide",
                desc: "Minced lamb, peppers, onion, fresh parsley",
                price: 379,
                img: "img/pide-overhead.webp",
                signature: true
            },
            {
                name: "Peynirli Pide",
                desc: "Three-cheese blend, chilli flakes",
                price: 349,
                img: "img/pide-plate.webp"
            },
            {
                name: "Sucuklu Pide",
                desc: "Turkish spiced sausage, mozzarella, egg",
                price: 399,
                img: "img/oven-char-crust.webp"
            },
            {
                name: "Simit Bread Basket",
                desc: "Sesame-crusted flatbread, herbed butter",
                price: 149,
                img: "img/dough-stretch.webp"
            }
        ]
    },
    {
        id: "morning",
        title: "Morning & Salads",
        subtitle: "Lighter plates  timing to be confirmed",
        icon: "leaf",
        items: [
            {
                name: "Garden Salad",
                desc: "Mixed greens, cherry tomato, sumac, herb dressing",
                price: 299,
                img: "img/salad-bowl.webp"
            }
        ]
    },
    {
        id: "coffee",
        title: "Coffee & Something Sweet",
        subtitle: "To finish, or just because",
        icon: "cup",
        items: [
            {
                name: "Cappuccino / Latte",
                desc: "Freshly pulled specialty espresso",
                price: 149,
                img: "img/coffee-latte-pour.webp"
            },
            {
                name: "Baklava (2 pcs)",
                desc: "Pistachio, honey syrup, filo pastry",
                price: 179,
                img: "img/baklava-tray.webp"
            }
        ]
    }
];

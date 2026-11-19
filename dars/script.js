// ==========================================
// 1. MAHSULOTLAR MA'LUMOTLAR BAZASI (18 ta mahsulot)
// ==========================================
const products = [
    // FAST FOOD
    {
        id: 1,
        name: "Hamburger",
        category: "fastfood",
        price: 26000,
        description: "Yumshoq bulochka, 100% mol go'shtidan kotlet, tuzlangan bodring, pomidor va maxsus sous.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 2,
        name: "Cheeseburger",
        category: "fastfood",
        price: 30000,
        description: "Sersuv mol go'shti kotleti, eritilgan Cheddar pishlog'i, yangi sabzavotlar va firmenniy sous.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        bestseller: true
    },
    {
        id: 3,
        name: "Hot Dog",
        category: "fastfood",
        price: 18000,
        description: "Issiq bulochka ichida dudlangan sosiska, xantal, ketchup va mayonez uyg'unligi.",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 4,
        name: "Lavash",
        category: "fastfood",
        price: 32000,
        description: "Yupqa lavash xamiri, mol go'shti, yangi bodring-pomidor, chipslar va sarimsoqli sous.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
        bestseller: true
    },
    {
        id: 5,
        name: "Donar",
        category: "fastfood",
        price: 34000,
        description: "Qarsildoq non ichida mayin to'g'ralgan go'sht, sabzavotlar va maxsus turkcha sous.",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 6,
        name: "Pizza",
        category: "fastfood",
        price: 68000,
        description: "Pepperoni kolbasasi, cho'ziluvchan Mozzarella pishlog'i va italyan tomat sousi (32 sm).",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        bestseller: true
    },
    {
        id: 7,
        name: "Fri kartoshka",
        category: "fastfood",
        price: 16000,
        description: "Oltin rangda qovurilgan, tashqarisi qarsildoq, ichi yumshoq sarxil kartoshka.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 8,
        name: "Nuggets",
        category: "fastfood",
        price: 24000,
        description: "Qarsildoq qobiqda pishirilgan 9 dona mayin tovuq filesi bo'lakchalari.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },

    // ICHIMLIKLAR
    {
        id: 9,
        name: "Coca-Cola",
        category: "drinks",
        price: 10000,
        description: "Muzdek tetiklashtiruvchi klassik Coca-Cola ichimligi (0.5 L).",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 10,
        name: "Pepsi",
        category: "drinks",
        price: 10000,
        description: "Yorqin ta'mli sovutilgan Pepsi gazli ichimligi (0.5 L).",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 11,
        name: "Fanta",
        category: "drinks",
        price: 10000,
        description: "Apelsin ta'mli shirin va gazlangan Fanta ichimligi (0.5 L).",
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 12,
        name: "Sprite",
        category: "drinks",
        price: 10000,
        description: "Limon va laym ta'mli chanqovbosdi Sprite ichimligi (0.5 L).",
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 13,
        name: "Sharbat",
        category: "drinks",
        price: 14000,
        description: "Tabiiy mevalardan tayyorlangan vitaminlarga boy salqin sharbat (1 L).",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 14,
        name: "Suv",
        category: "drinks",
        price: 5000,
        description: "Tozalangan tog' buloqlarining gazlanmagan ichimlik suvi (0.5 L).",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },

    // DESERTLAR
    {
        id: 15,
        name: "Muzqaymoq",
        category: "desserts",
        price: 15000,
        description: "Tabiiy qaymoq va shokolad siropi bilan bezatilgan yumshoq muzqaymoq.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 16,
        name: "Donut",
        category: "desserts",
        price: 14000,
        description: "Qulupnayli glazur va rangli bezaklar bilan qoplangan yumshoq ponchik.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 17,
        name: "Tort",
        category: "desserts",
        price: 25000,
        description: "Shokoladli biskvit va mayin kremli mazali shokoladli tort bo'lagi.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        bestseller: false
    },
    {
        id: 18,
        name: "Cheesecake",
        category: "desserts",
        price: 28000,
        description: "Klassik Nyu-York chizkeyki, tvorogli krem va rezavorli sous bilan.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        bestseller: true
    }
];

// ==========================================
// 2. O'ZGARUVCHILAR VA HOLAT (STATE)
// ==========================================
let cart = JSON.parse(localStorage.getItem("fastbite_cart")) || [];
let cardQuantities = {}; // Har bir kartochkadagi tanlangan son
products.forEach(p => cardQuantities[p.id] = 1);

let currentCategory = "all";
let searchQuery = "";
let activeDiscountPercent = 0;

const PROMO_CODES = {
    "WELCOME10": 10,
    "FASTFOOD20": 20
};

// ==========================================
// 3. YORDAMCHI FUNKSIYALAR
// ==========================================
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

function showToast(message, isError = false) {
    const toastEl = document.getElementById("liveToast");
    const toastBody = document.getElementById("toastMessage");
    toastBody.textContent = message;
    toastEl.classList.remove("bg-dark", "bg-danger");
    toastEl.classList.add(isError ? "bg-danger" : "bg-dark");
    const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
    toast.show();
}

function saveCart() {
    localStorage.setItem("fastbite_cart", JSON.stringify(cart));
    updateCartUI();
}

// ==========================================
// 4. MAHSULOT KARTOCHKASINI YARATISH VA CHIZISH
// ==========================================
function createProductCardHTML(product) {
    const qty = cardQuantities[product.id] || 1;
    return `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card product-card h-100">
                <div class="product-img-box">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.bestseller ? '<span class="bestseller-badge"><i class="bi bi-fire text-danger me-1"></i>XIT TAOM</span>' : ''}
                </div>
                <div class="card-body d-flex flex-column justify-content-between p-3">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-1">
                            <h5 class="card-title fw-bold mb-0">${product.name}</h5>
                        </div>
                        <p class="card-text text-muted small mb-3">${product.description}</p>
                    </div>
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="fw-bolder fs-5 text-primary-custom">${formatPrice(product.price)}</span>
                            <div class="qty-control">
                                <button type="button" class="qty-btn" onclick="changeCardQty(${product.id}, -1)">-</button>
                                <span class="px-2 fw-bold small" id="card-qty-${product.id}">${qty}</span>
                                <button type="button" class="qty-btn" onclick="changeCardQty(${product.id}, 1)">+</button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary-custom w-100 rounded-pill fw-semibold py-2" onclick="addToCart(${product.id})">
                            <i class="bi bi-cart-plus me-1"></i> Savatga qo'shish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderBestsellers() {
    const container = document.getElementById("bestsellersContainer");
    const bestsellers = products.filter(p => p.bestseller);
    container.innerHTML = bestsellers.map(createProductCardHTML).join("");
}

function renderMenu() {
    const container = document.getElementById("menuContainer");
    const emptyMsg = document.getElementById("emptySearchMessage");

    const filtered = products.filter(product => {
        const matchesCategory = currentCategory === "all" || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = "";
        emptyMsg.classList.remove("d-none");
    } else {
        emptyMsg.classList.add("d-none");
        container.innerHTML = filtered.map(createProductCardHTML).join("");
    }
}

// Kartochkadagi sonni o'zgartirish
window.changeCardQty = function(productId, delta) {
    let current = cardQuantities[productId] || 1;
    current += delta;
    if (current < 1) current = 1;
    if (current > 50) current = 50;
    cardQuantities[productId] = current;

    // Sahifadagi barcha mos elementlarni yangilash (bestseller va menyuda bir xil ID bo'lishi mumkin)
    document.querySelectorAll(`#card-qty-${productId}`).forEach(el => {
        el.textContent = current;
    });
};

// ==========================================
// 5. SAVAT (SHOPPING CART) LOGIKASI
// ==========================================
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const quantityToAdd = cardQuantities[productId] || 1;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantityToAdd;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantityToAdd
        });
    }

    // Qo'shilgandan so'ng kartochka sonini 1 ga qaytarish
    cardQuantities[productId] = 1;
    document.querySelectorAll(`#card-qty-${productId}`).forEach(el => {
        el.textContent = 1;
    });

    saveCart();
    showToast(`"${product.name}" (${quantityToAdd} dona) savatga qo'shildi!`);
};

window.updateCartItemQty = function(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    saveCart();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showToast("Mahsulot savatdan o'chirildi.");
};

function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const badge = document.getElementById("cartCountBadge");
    const emptyView = document.getElementById("emptyCartView");
    const itemsContainer = document.getElementById("cartItemsContainer");
    const cartFooter = document.getElementById("cartFooter");
    const totalPriceEl = document.getElementById("cartTotalPrice");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;

    if (cart.length === 0) {
        emptyView.classList.remove("d-none");
        itemsContainer.innerHTML = "";
        cartFooter.classList.add("d-none");
        return;
    }

    emptyView.classList.add("d-none");
    cartFooter.classList.remove("d-none");

    itemsContainer.innerHTML = cart.map(item => `
        <div class="d-flex align-items-center justify-content-between bg-light p-2 rounded-4 mb-3">
            <div class="d-flex align-items-center gap-3">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <h6 class="fw-bold mb-1">${item.name}</h6>
                    <span class="text-primary-custom fw-bold small">${formatPrice(item.price * item.quantity)}</span>
                    <div class="qty-control mt-1">
                        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
                        <span class="px-2 fw-bold small">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-sm text-danger p-2" title="O'chirish" onclick="removeFromCart(${item.id})">
                <i class="bi bi-trash3-fill fs-5"></i>
            </button>
        </div>
    `).join("");

    totalPriceEl.textContent = formatPrice(getCartSubtotal());
}

// ==========================================
// 6. BUYURTMANI RASMIYLASHTIRISH VA PROMO KOD
// ==========================================
function updateCheckoutSummary() {
    const summaryContainer = document.getElementById("checkoutItemsSummary");
    const subtotalEl = document.getElementById("summarySubtotal");
    const discountRow = document.getElementById("discountRow");
    const discountPercentText = document.getElementById("discountPercentText");
    const discountEl = document.getElementById("summaryDiscount");
    const finalTotalEl = document.getElementById("summaryFinalTotal");

    summaryContainer.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between mb-1">
            <span>${item.name} <strong class="text-muted">x${item.quantity}</strong></span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join("");

    const subtotal = getCartSubtotal();
    const discountAmount = Math.round((subtotal * activeDiscountPercent) / 100);
    const finalTotal = subtotal - discountAmount;

    subtotalEl.textContent = formatPrice(subtotal);

    if (activeDiscountPercent > 0) {
        discountRow.style.setProperty("display", "flex", "important");
        discountPercentText.textContent = `${activeDiscountPercent}%`;
        discountEl.textContent = `-${formatPrice(discountAmount)}`;
    } else {
        discountRow.style.setProperty("display", "none", "important");
    }

    finalTotalEl.textContent = formatPrice(finalTotal);
}

// ==========================================
// 7. EVENT LISTENERLAR (TUGMALAR VA FORMALAR)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Preloader yashirish
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hide");
    }, 600);

    // Boshlang'ich render
    renderBestsellers();
    renderMenu();
    updateCartUI();

    // Kategoriya filtrlari
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Qidiruv funksiyasi
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        clearSearchBtn.style.display = searchQuery ? "inline-block" : "none";
        renderMenu();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderMenu();
    });

    // Promo kod nusxalash tugmalari
    document.querySelectorAll(".copy-promo-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.dataset.code;
            navigator.clipboard.writeText(code);
            showToast(`"${code}" promo kodi nusxalandi!`);
        });
    });

    // Checkout modalini ochish
    const checkoutModalEl = document.getElementById("checkoutModal");
    const checkoutModal = new bootstrap.Modal(checkoutModalEl);
    const cartOffcanvasEl = document.getElementById("cartOffcanvas");

    document.getElementById("proceedCheckoutBtn").addEventListener("click", () => {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(cartOffcanvasEl);
        if (offcanvasInstance) offcanvasInstance.hide();

        // Promo kod holatini tozalash
        activeDiscountPercent = 0;
        document.getElementById("promoCodeInput").value = "";
        document.getElementById("promoMessage").innerHTML = "";

        updateCheckoutSummary();
        checkoutModal.show();
    });

    // Promo kodni qo'llash
    document.getElementById("applyPromoBtn").addEventListener("click", () => {
        const inputCode = document.getElementById("promoCodeInput").value.trim().toUpperCase();
        const promoMessage = document.getElementById("promoMessage");

        if (!inputCode) {
            promoMessage.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-circle me-1"></i>Iltimos, promo kodni kiriting!</span>`;
            return;
        }

        if (PROMO_CODES[inputCode]) {
            activeDiscountPercent = PROMO_CODES[inputCode];
            promoMessage.innerHTML = `<span class="text-success fw-semibold"><i class="bi bi-check-circle-fill me-1"></i>Tabriklaymiz! ${activeDiscountPercent}% chegirma qo'llanildi.</span>`;
            updateCheckoutSummary();
        } else {
            activeDiscountPercent = 0;
            promoMessage.innerHTML = `<span class="text-danger"><i class="bi bi-x-circle-fill me-1"></i>Noto'g'ri promo kod kiritildi!</span>`;
            updateCheckoutSummary();
        }
    });

    // Buyurtmani yakunlash (Form Submit)
    const orderSuccessModal = new bootstrap.Modal(document.getElementById("orderSuccessModal"));

    document.getElementById("checkoutForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const address = document.getElementById("customerAddress").value.trim();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        const subtotal = getCartSubtotal();
        const discountAmount = Math.round((subtotal * activeDiscountPercent) / 100);
        const finalTotal = subtotal - discountAmount;

        // Tasodifiy buyurtma raqami yaratish
        const randomOrderNum = "#FB-" + Math.floor(1000 + Math.random() * 9000);

        // Chek ma'lumotlarini to'ldirish
        document.getElementById("receiptOrderId").textContent = randomOrderNum;
        document.getElementById("receiptCustomerName").textContent = `${name} (${phone})`;
        document.getElementById("receiptPaymentMethod").textContent = paymentMethod;
        document.getElementById("receiptTotalAmount").textContent = formatPrice(finalTotal);

        document.getElementById("receiptItemsList").innerHTML = cart.map(item => `
            <div class="d-flex justify-content-between">
                <span>• ${item.name} (${item.quantity} dona)</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join("");

        // Savatni va formani tozalash
        cart = [];
        activeDiscountPercent = 0;
        saveCart();
        e.target.reset();

        // Modallarni almashtirish
        checkoutModal.hide();
        setTimeout(() => {
            orderSuccessModal.show();
        }, 300);
    });
});
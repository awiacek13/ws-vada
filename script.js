document.addEventListener('DOMContentLoaded', function() {
    // Remove any leftover alternate price elements from previous versions
    document.querySelectorAll('.price-alt').forEach(el => el.remove());
    // === i18n: translations and helpers ===
    const translations = {
        en: {
            nav: { home: 'Home', shop: 'Shop', contact: 'Contact' },
            hero: {
                title: 'Custom T-Shirts Made Just For You',
                subtitle: 'T-shirts made with love',
                cta: 'Shop Now'
            },
            featured: { title: 'Bestsellers' },
            currency: { USD: 'US Dollar', EUR: 'Euro', PLN: 'Polish Złoty' },
            product: {
                classic: 'Classic Tee',
                premium: 'Premium Tee',

                music: 'Music Tee',
                metalica: 'Metalica T-shirt',
                olivia: 'T-Shirt Olivia Rodrigo-GUTS',
                minecraft: 'Minecraft kids T-shirt',
                meme: 'Meme Tee',
                basketball: 'Basketball Tee',
                football: 'Football Tee',
                official: 'VADA Official Tee',
                london: 'London T-shirt',
                newyork: 'New York T-shirt',
                alabama: 'Alabama Black edition T-Shirt'
                , metallica_kids: 'Metallica kids T-shirt'
            },
            button: { add: 'Add to Cart' },
            footer: { quick: 'Quick Links', contact: 'Contact Us', rights: '© 2025 VADA. All rights reserved.', tagline: 'Custom t-shirts made with love' },
            shop: { title: 'Shop' },
            filters: {
                button: 'Filters',
                title: 'Filters',
                save: 'Save filters',
                clear: 'Clear filters',
                categories: {
                    official: 'VADA official',
                    meme: 'meme',
                    streetwear: 'streetwear',
                    music: 'music',
                    movie: 'movie',
                    kids: 'kids',
                    sports: 'sports'
                },
                count: '{count} products'
            },
            contact: { title: 'Contact' },
            // Contact page intro
            contact_intro: { text: "Got questions? We'd love to hear from you!" },
            modal: { lowest30: 'Lowest price in 30 days', choose_size: 'Choose size' },
            cart: {
                label: 'cart',
                empty: 'Your cart is empty',
                product: 'Product',
                qty: 'Qty',
                price: 'Price',
                total: 'Total',
                select_all: 'Select all',
                delete_selected: 'Delete selected',
                checkout: 'Checkout',
                paid: 'Thanks! Payment successful (demo)'
            },
            notify: { added: 'added to cart!' }
        },
        pl: {
            nav: { home: 'Start', shop: 'Sklep', contact: 'Kontakt' },
            hero: {
                title: 'Koszulki tworzone specjalnie dla Ciebie',
                subtitle: 'Koszulki tworzone z serca',
                cta: 'Do sklepu'
            },
            featured: { title: 'Bestsellery' },
            currency: { USD: 'Dolar amerykański', EUR: 'Euro', PLN: 'Polski złoty' },
            product: {
                classic: 'Klasyczny T‑shirt',
                premium: 'T‑shirt Premium',
                vneck: 'T‑shirt V‑neck',
                music: 'T‑shirt Muzyka',
                metalica: 'T‑shirt Metalica',
                olivia: 'T‑shirt Olivia Rodrigo – GUTS',
                minecraft: 'Minecraft dziecięcy T‑shirt',
                meme: 'T‑shirt Meme',
                basketball: 'T‑shirt Koszykówka',
                football: 'T‑shirt Piłka nożna',
                official: 'VADA Official T‑shirt',
                london: 'T‑shirt London',
                newyork: 'T‑shirt New York',
                alabama: 'T‑shirt Alabama Black edition'
                , metallica_kids: 'T‑shirt Metallica (dziecięcy)'
            },
            button: { add: 'Dodaj do koszyka' },
            footer: { quick: 'Szybkie linki', contact: 'Kontakt', rights: '© 2025 VADA. Wszelkie prawa zastrzeżone.', tagline: 'Koszulki tworzone z sercem' },
            shop: { title: 'Sklep' },
            filters: {
                button: 'Filtry',
                title: 'Filtry',
                save: 'Zapisz filtry',
                clear: 'Usuń filtry',
                categories: {
                    official: 'VADA official',
                    meme: 'meme',
                    streetwear: 'streetwear',
                    music: 'muzyka',
                    movie: 'film',
                    kids: 'dzieci',
                    sports: 'sport'
                },
                count: '{count} produktów'
            },
            contact: { title: 'Kontakt' },
            // Contact page intro
            contact_intro: { text: 'Masz pytania? Chętnie pomożemy!' },
            modal: { lowest30: 'Najniższa cena z 30 dni', choose_size: 'Wybierz rozmiar' },
            cart: {
                label: 'koszyk',
                empty: 'Twój koszyk jest pusty',
                product: 'Produkt',
                qty: 'Ilość',
                price: 'Cena',
                total: 'Razem',
                select_all: 'Zaznacz wszystko',
                delete_selected: 'Usuń zaznaczone',
                checkout: 'Zapłać',
                paid: 'Dziękujemy! Płatność zakończona (demo)'
            },
            notify: { added: 'dodano do koszyka!' }
        }
    };

    // Build the product catalog once, to reuse across pages
    function buildCatalog(){
        return [
            {
                titleKey: 'product.metalica',
                fallback: 'Metalica T-shirt',
                usd: 17.5,
                pln: 70,
                discount: 10,
                bg: '#f3f6ff',
                cats: ['music'],
                images: [
                    'assets/unisex-heavy-cotton-tee (4).jpg',
                    'assets/unisex-heavy-cotton-tee (5).jpg',
                    'assets/unisex-heavy-cotton-tee (6).jpg',
                    'assets/unisex-heavy-cotton-tee (7).jpg'
                ]
            },
            {
                titleKey: 'product.metallica_kids',
                fallback: 'Metallica kids T-shirt',
                usd: 17.5,
                pln: 70,
                discount: 10,
                bg: '#f3f6ff',
                cats: ['music','kids'],
                images: [
                    'assets/unisex-heavy-cotton-tee (4).jpg',
                    'assets/unisex-heavy-cotton-tee (5).jpg',
                    'assets/unisex-heavy-cotton-tee (6).jpg',
                    'assets/unisex-heavy-cotton-tee (7).jpg'
                ]
            },
            {
                titleKey: 'product.london',
                fallback: 'London T-shirt',
                usd: 17.5,
                pln: 70,
                discount: 10,
                bg: '#ffffff',
                cats: ['streetwear'],
                images: [
                    'assets/london-inspired-unisex-heavy-cotton-tee-travel-gift-city-lover-shirt-london-souvenir-casual-wear (3).jpg',
                    'assets/london-inspired-unisex-heavy-cotton-tee-travel-gift-city-lover-shirt-london-souvenir-casual-wear.jpg',
                    'assets/london-inspired-unisex-heavy-cotton-tee-travel-gift-city-lover-shirt-london-souvenir-casual-wear (1).jpg',
                    'assets/london-inspired-unisex-heavy-cotton-tee-travel-gift-city-lover-shirt-london-souvenir-casual-wear (2).jpg'
                ]
            },
            {
                titleKey: 'product.newyork',
                fallback: 'New York T-shirt',
                usd: 17.5,
                pln: 70,
                discount: 10,
                bg: '#ffffff',
                cats: ['streetwear', 'official'],
                images: [
                    'assets/unisex-heavy-cotton-tee (8).jpg',
                    'assets/unisex-heavy-cotton-tee (9).jpg',
                    'assets/unisex-heavy-cotton-tee (10).jpg',
                    'assets/unisex-heavy-cotton-tee (11).jpg'
                ]
            },
            {
                titleKey: 'product.olivia',
                fallback: 'T-Shirt Olivia Rodrigo-GUTS',
                usd: 17.5, // 70 PLN / 4.0
                pln: 70,
                discount: 10,
                bg: '#ffffff',
                cats: ['music'],
                images: [
                    'assets/unisex-heavy-cotton-tee.jpg',
                    'assets/unisex-heavy-cotton-tee (1).jpg',
                    'assets/unisex-heavy-cotton-tee (2).jpg',
                    'assets/unisex-heavy-cotton-tee (3).jpg'
                ]
            },
            {
                titleKey: 'product.minecraft',
                fallback: 'Minecraft kids T-shirt',
                usd: 13.75, // 55 PLN / 4.0
                pln: 55,
                discount: 10,
                bg: '#eef6ff',
                cats: ['kids'],
                images: [
                    'assets/kids-heavy-cotton-tee (2).jpg',
                    'assets/kids-heavy-cotton-tee (1).jpg',
                    'assets/kids-heavy-cotton-tee.jpg'
                ]
            },
            {
                titleKey: 'product.alabama',
                fallback: 'Alabama Black edition T-Shirt',
                usd: 17.5,
                pln: 70,
                discount: 10,
                bg: '#111111',
                cats: ['streetwear'],
                images: [
                    'assets/copy-of-unisex-heavy-cotton-tee (1).jpg',
                    'assets/copy-of-unisex-heavy-cotton-tee (2).jpg',
                    'assets/copy-of-unisex-heavy-cotton-tee (3).jpg',
                    'assets/copy-of-unisex-heavy-cotton-tee.jpg'
                ]
            }
        ];
    }

// Paginate Shop grid into pages of 8 items
function paginateShopGrid(targetPage = 1, pageSize = 8){
    const grid = document.querySelector('.product-grid');
    const pager = document.getElementById('shopPager');
    if (!grid || !pager) return;
    const items = Array.from(grid.querySelectorAll('.product-card'))
        .filter(el => el.style.display !== 'none'); // only visible (respect filters)
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const page = Math.min(Math.max(1, targetPage), pages);
    // show/hide
    items.forEach((el, idx) => {
        const p = Math.floor(idx / pageSize) + 1;
        el.style.visibility = (p === page) ? 'visible' : 'hidden';
        el.style.position = (p === page) ? '' : 'absolute';
        el.style.pointerEvents = (p === page) ? '' : 'none';
    });
    // Reflow to avoid overlay when hidden absolute
    // Create placeholders to keep grid height stable
    const placeholdersClass = 'pg-ph';
    grid.querySelectorAll(`.${placeholdersClass}`).forEach(ph => ph.remove());
    const visibleCount = items.slice((page-1)*pageSize, page*pageSize).length;
    // If last page has fewer than pageSize, no need to add placeholders because items are hidden absolutely
    // Build pager UI
    pager.innerHTML = '';
    const mkBtn = (label, toPage, disabled=false, active=false) => {
        const b = document.createElement('button');
        b.className = 'pg-btn';
        if (active) b.classList.add('active');
        if (disabled) b.disabled = true;
        b.textContent = label;
        b.addEventListener('click', () => paginateShopGrid(toPage, pageSize));
        return b;
    };
    pager.appendChild(mkBtn('‹', page-1, page<=1));
    // limit to first 5 pages for buttons, but always include current neighborhood
    const maxBtns = 5;
    let start = Math.max(1, page - Math.floor(maxBtns/2));
    let end = Math.min(pages, start + maxBtns - 1);
    if (end - start + 1 < maxBtns){ start = Math.max(1, end - maxBtns + 1); }
    for (let p = start; p <= end; p++){
        pager.appendChild(mkBtn(String(p), p, false, p===page));
    }
    pager.appendChild(mkBtn('›', page+1, page>=pages));
    // Remember current page on pager element
    pager.dataset.page = String(page);
}

// Defensive: fix any legacy image filenames left in DOM (from cached builds)
function fixLegacyImageFilenames(root=document){
    const MAP = {
        'assets/kids-heavy-cotton-tee (3).jpg': 'assets/kids-heavy-cotton-tee.jpg'
    };
    const repl = (url) => {
        if (!url) return url;
        try {
            const unq = url.replace(/"|'/g,'');
            for (const bad in MAP){
                if (unq.includes(bad)) return unq.replace(bad, MAP[bad]);
            }
        } catch {}
        return url;
    };
    // Fix <img src>
    root.querySelectorAll('img[src]').forEach(img => {
        const fixed = repl(img.getAttribute('src'));
        if (fixed && fixed !== img.getAttribute('src')) img.setAttribute('src', fixed);
    });
    // Fix background-image styles on elements
    root.querySelectorAll('*').forEach(el => {
        const bg = el.style && el.style.backgroundImage;
        if (bg && bg.includes('kids-heavy-cotton-tee (3).jpg')){
            const fixed = repl(bg);
            if (fixed) el.style.backgroundImage = fixed.startsWith('url(') ? fixed : `url('${fixed}')`;
        }
    });
}

    // Replace outdated/missing filenames to avoid 404s in older deployments
    function normalizeImageList(arr){
        if (!Array.isArray(arr)) return [];
        return arr.map(src => {
            if (typeof src !== 'string') return src;
            if (src.includes('kids-heavy-cotton-tee (3).jpg')) return 'assets/kids-heavy-cotton-tee.jpg';
            return src;
        });
    }

    // Reusable card renderer
    function renderProductCard(grid, it, dict){
        const card = document.createElement('div');
        card.className = 'product-card';
        if (Array.isArray(it.cats)) card.setAttribute('data-cats', it.cats.join(','));
        if (Array.isArray(it.images)) card.setAttribute('data-images', JSON.stringify(it.images));
        if (it.titleKey) card.setAttribute('data-title-key', it.titleKey);
        card.innerHTML = `
            <div class="product-image" style="${Array.isArray(it.images) && it.images[0] ? `background-color:#f3f6ff;` : `background-color:${it.bg};`}"
            ></div>
            <h3 data-i18n="${it.titleKey}">${getNested(dict, it.titleKey) || it.fallback}</h3>
            <p class="price" data-price-usd="${it.usd}" data-price-pln="${it.pln}" ${it.discount?`data-discount="${it.discount}"`:''}>$${Number(it.usd||0).toFixed(2)}</p>
            <div class="card-size-label" data-i18n="modal.choose_size">${(translations[getCurrentLang()]?.modal?.choose_size) || 'Choose size'}</div>
            <div class="card-sizes">
                <button class="size-btn" data-size="S">S</button>
                <button class="size-btn" data-size="M">M</button>
                <button class="size-btn" data-size="L">L</button>
                <button class="size-btn" data-size="XL">XL</button>
            </div>
            <div class="card-thumbs"></div>
            <button class="add-to-cart" data-i18n="button.add">${getNested(dict,'button.add')||'Add to Cart'}</button>
        `;
        if (it.discount && Number(it.discount) > 0) {
            const badge = document.createElement('div');
            badge.className = 'badge-discount';
            badge.textContent = `-${Number(it.discount)}%`;
            const imgDiv = card.querySelector('.product-image');
            imgDiv.style.position = 'relative';
            badge.style.position = 'absolute';
            badge.style.top = '8px';
            badge.style.left = '8px';
            imgDiv.appendChild(badge);
        }
        grid.appendChild(card);
        // Image loading behavior (first existing) or gradient fallback; also build card thumbnails
        const imgDiv = card.querySelector('.product-image');
        const preload = (src) => new Promise(res=>{ const im=new Image(); im.onload=()=>res(true); im.onerror=()=>res(false); im.src=src; });
        (async () => {
            const imgsNorm = normalizeImageList(it.images);
            if (Array.isArray(imgsNorm) && imgsNorm.length){
                let chosen = null;
                for (const src of imgsNorm){
                    if (await preload(src)) { chosen = src; break; }
                }
                if (chosen){
                    imgDiv.style.backgroundImage = `url('${chosen}')`;
                    imgDiv.style.backgroundSize = 'cover';
                    imgDiv.style.backgroundPosition = 'center';
                } else {
                    imgDiv.style.background = 'linear-gradient(135deg, var(--light-blue), var(--light-pink))';
                }
                // Thumbs
                try {
                    const thumbsWrap = card.querySelector('.card-thumbs');
                    thumbsWrap.innerHTML = '';
                    const loaded = [];
                    for (const src of imgsNorm){ if (await preload(src)) loaded.push(src); }
                    loaded.slice(0,4).forEach(src => {
                        const th = document.createElement('button');
                        th.className = 'thumb';
                        th.type = 'button';
                        th.style.backgroundImage = `url('${src}')`;
                        th.addEventListener('click', (ev)=>{ ev.stopPropagation(); imgDiv.style.backgroundImage = `url('${src}')`; });
                        thumbsWrap.appendChild(th);
                    });
                } catch {}
            }
        })();
        // Optional mini-controls for cycling images on the card
        try {
            const imgs = Array.isArray(it.images) ? normalizeImageList(it.images.slice()) : [];
            if (imgs.length > 1) {
                card.dataset.imgIndex = '0';
                const controls = document.createElement('div');
                controls.className = 'card-img-controls';
                controls.style.position = 'absolute';
                controls.style.top = '8px';
                controls.style.right = '8px';
                controls.style.display = 'flex';
                controls.style.gap = '6px';
                controls.style.zIndex = '2';
                const mkBtn = (cls, txt) => {
                    const b = document.createElement('button');
                    b.className = cls;
                    b.type = 'button';
                    b.textContent = txt;
                    b.style.padding = '2px 6px';
                    b.style.borderRadius = '8px';
                    b.style.border = '1px solid rgba(0,0,0,0.15)';
                    b.style.background = 'rgba(255,255,255,0.8)';
                    b.style.cursor = 'pointer';
                    b.style.fontSize = '12px';
                    b.style.backdropFilter = 'blur(3px)';
                    return b;
                };
                const prev = mkBtn('img-prev','‹');
                const next = mkBtn('img-next','›');
                controls.appendChild(prev);
                controls.appendChild(next);
                imgDiv.style.position = 'relative';
                imgDiv.appendChild(controls);
                function show(idx){
                    const i = ((idx % imgs.length) + imgs.length) % imgs.length;
                    card.dataset.imgIndex = String(i);
                    imgDiv.style.backgroundImage = `url('${imgs[i]}')`;
                    imgDiv.style.backgroundSize = 'cover';
                    imgDiv.style.backgroundPosition = 'center';
                }
                prev.addEventListener('click', (ev)=>{ ev.stopPropagation(); show(Number(card.dataset.imgIndex||'0')-1); });
                next.addEventListener('click', (ev)=>{ ev.stopPropagation(); show(Number(card.dataset.imgIndex||'0')+1); });
            }
        } catch {}
        // Card size selection controls
        (function initCardSizes(){
            const sizes = card.querySelector('.card-sizes');
            if (!sizes) return;
            card.dataset.size = 'M';
            const update = ()=> sizes.querySelectorAll('.size-btn').forEach(b=> b.classList.toggle('active', b.getAttribute('data-size')===card.dataset.size));
            update();
            sizes.addEventListener('click', (ev)=>{
                ev.stopPropagation();
                const btn = ev.target.closest('.size-btn'); if (!btn) return;
                card.dataset.size = btn.getAttribute('data-size') || 'M';
                update();
            });
        })();

        // Make the whole card clickable except the Add to Cart button
        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) return;
            openProductModalFromCard(card);
        });
        return card;
    }

    // Sales tracking in localStorage
    function getSalesMap(){
        try { return JSON.parse(localStorage.getItem('vada_sales') || '{}'); } catch { return {}; }
    }
    function saveSalesMap(map){
        localStorage.setItem('vada_sales', JSON.stringify(map || {}));
    }
    function incrementSalesByKey(titleKey){
        if (!titleKey) return;
        const map = getSalesMap();
        map[titleKey] = (map[titleKey] || 0) + 1;
        saveSalesMap(map);
    }
    function incrementSalesByTitle(title){
        if (!title) return;
        const map = getSalesMap();
        map[title] = (map[title] || 0) + 1;
        saveSalesMap(map);
    }

    // Define: Populate shop page with products if grid exists and is empty (call later)
function initShopProducts(){
    // Only on shop page (filters banner exists only there)
    if (!document.getElementById('filtersBanner')) return;
    const grid = document.querySelector('.product-grid');
    if (!grid) return;
    const items = buildCatalog();
    const lang = getCurrentLang();
    const dict = translations[lang] || translations.en;
    // If grid already has items, append only the missing products (by titleKey)
    const existingKeys = new Set(Array.from(grid.querySelectorAll('.product-card'))
        .map(c => c.getAttribute('data-title-key'))
        .filter(Boolean));
    items.forEach(it => {
        if (!existingKeys.has(it.titleKey)) {
            renderProductCard(grid, it, dict);
        }
    });
    // If grid was empty, existingKeys will be size 0 and everything is rendered
    // Notify others that products are ready (filters, etc.)
    try { window.dispatchEvent(new Event('products-ready')); } catch {}
    // Ensure prices and highlights are correct
    try { updatePrices(getCurrentLang()); highlightPremiumPricesDOM(); } catch {}
    // Refresh pagination after render
    setTimeout(() => paginateShopGrid(1, 8), 0);
}
    

    // Highlight Premium Tee prices on product cards (index/shop) automatically
    function highlightPremiumPricesDOM() {
        try {
            document.querySelectorAll('.product-card').forEach(card => {
                const title = card.querySelector('h3');
                const price = card.querySelector('.price');
                if (!title || !price) return;
                const txt = (title.textContent || '').toLowerCase();
                if (txt.includes('premium')) {
                    price.classList.add('price-premium');
                } else {
                    price.classList.remove('price-premium');
                }
            });
        } catch (e) { /* no-op */ }
    }
    // Run on load
    highlightPremiumPricesDOM();
    // Re-run after language switches (titles may change)
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setTimeout(highlightPremiumPricesDOM, 0)));

    // Shop Filters: toggle, save, apply
    (function initShopFilters(){
        const panel = document.getElementById('filtersPanel');
        const toggleBtn = document.getElementById('toggleFilters');
        if (!panel || !toggleBtn) return; // Only on shop page

        const STORAGE_KEY = 'vada_filters';
        const checkboxes = () => Array.from(panel.querySelectorAll('input.flt[type="checkbox"]'));
        const products = () => Array.from(document.querySelectorAll('.product-grid .product-card'));
        const countEl = panel.querySelector('.match-count');

        function loadFilters(){
            try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
        }
        function saveFilters(vals){
            localStorage.setItem(STORAGE_KEY, JSON.stringify(vals));
        }
        function setMatchCount(n){
            const lang = getCurrentLang();
            const t = translations[lang] || translations.en;
            const pattern = (t.filters && t.filters.count) ? t.filters.count : '{count}';
            if (countEl) countEl.textContent = pattern.replace('{count}', n);
        }
        function setUIFromFilters(vals){
            const set = new Set(vals);
            checkboxes().forEach(cb => { cb.checked = set.has(cb.value); });
        }
        function applyFilters(){
            const vals = loadFilters();
            const active = new Set(vals);
            let shown = 0;
            products().forEach(p => {
                const cats = (p.getAttribute('data-cats') || '').split(',').map(s => s.trim()).filter(Boolean);
                const has = active.size === 0 ? true : cats.some(c => active.has(c));
                p.style.display = has ? '' : 'none';
                if (has) shown++;
            });
            setMatchCount(shown);
        }

        // wire buttons
        const saveBtn = document.getElementById('saveFilters');
        const clearBtn = document.getElementById('clearFilters');
        const quickClearBtn = document.getElementById('quickClear');

        toggleBtn.addEventListener('click', () => {
            panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
            if (quickClearBtn) quickClearBtn.style.display = (panel.style.display === 'block') ? 'block' : 'none';
        });

        if (saveBtn){
            saveBtn.addEventListener('click', () => {
                const selected = checkboxes().filter(cb => cb.checked).map(cb => cb.value);
                saveFilters(selected);
                applyFilters();
                panel.style.display = 'none';
            });
        }
        if (clearBtn){
            clearBtn.addEventListener('click', () => {
                saveFilters([]);
                setUIFromFilters([]);
                applyFilters();
            });
        }

        // Initialize UI
        const initial = loadFilters();
        setUIFromFilters(initial);
        applyFilters();
        // Update count text on language change
        document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setTimeout(() => {
            // recompute with current visible count
            const visible = products().filter(p => p.style.display !== 'none').length;
            setMatchCount(visible);
        }, 0)));
    })();

    function getNested(obj, path) {
        return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
    }

    function getCurrentCurrency() {
        return localStorage.getItem('vada_curr');
    }

    function setCurrentCurrency(curr) {
        localStorage.setItem('vada_curr', curr);
        // update active states
        document.querySelectorAll('.curr-btn[data-curr]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-curr') === curr);
        });
    }

    const CURRENCY_RATES = { USD: 1, PLN: 4.0, EUR: 0.92 };
    function getCurrencyInfo(curr){
        const map = {
            USD: { code: 'USD', locale: 'en-US', rate: CURRENCY_RATES.USD },
            PLN: { code: 'PLN', locale: 'pl-PL', rate: CURRENCY_RATES.PLN },
            EUR: { code: 'EUR', locale: 'de-DE', rate: CURRENCY_RATES.EUR },
        };
        return map[curr] || map.USD;
    }
    function ensureDefaultCurrency(lang) {
        // if no currency saved, default USD for en and PLN for pl
        let curr = getCurrentCurrency();
        if (!curr) {
            curr = (lang === 'pl') ? 'PLN' : 'USD';
            setCurrentCurrency(curr);
        }
        // reflect active state
        document.querySelectorAll('.curr-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-curr') === (curr || 'USD'));
        });
        return curr || ((lang === 'pl') ? 'PLN' : 'USD');
    }

    function updatePrices(lang) {
        // Do NOT change currency here; just read it. Default only if nothing saved.
        const curr = getCurrentCurrency() || (lang === 'pl' ? 'PLN' : 'USD');
        const info = getCurrencyInfo(curr);
        document.querySelectorAll('.price').forEach(el => {
            const usd = parseFloat(el.getAttribute('data-price-usd'));
            // Always compute PLN from USD to keep prices consistent
            const usdVal = isFinite(usd) ? usd : 0;
            const primary = usdVal * info.rate;
            try {
                const formattedMain = new Intl.NumberFormat(info.locale, {
                    style: 'currency',
                    currency: info.code,
                    minimumFractionDigits: 2
                }).format(primary);
                const discount = parseFloat(el.getAttribute('data-discount'));
                // Clear any previous content
                el.innerHTML = '';
                if (isFinite(discount) && discount > 0) {
                    // Show -15% badge on the card once
                    const card = el.closest('.product-card');
                    if (card && !card.querySelector('.badge-discount')) {
                        const badge = document.createElement('div');
                        badge.className = 'badge-discount';
                        badge.textContent = `-${Math.round(discount)}%`;
                        card.appendChild(badge);
                    }
                    // Old price (struck)
                    const oldSpan = document.createElement('span');
                    oldSpan.className = 'price-old';
                    oldSpan.textContent = formattedMain;
                    // New discounted price
                    const newVal = primary * (1 - discount / 100);
                    const formattedNew = new Intl.NumberFormat(info.locale, {
                        style: 'currency',
                        currency: info.code,
                        minimumFractionDigits: 2
                    }).format(newVal);
                    const newSpan = document.createElement('span');
                    newSpan.className = 'price-new';
                    newSpan.textContent = formattedNew;
                    el.appendChild(oldSpan);
                    el.appendChild(newSpan);
                    // Store the lowest price (old price here) for modal
                    el.setAttribute('data-lowest30', formattedMain);
                } else {
                    el.textContent = formattedMain;
                    el.removeAttribute('data-lowest30');
                    const oldAlt = el.parentElement.querySelector('.price-alt');
                    if (oldAlt) oldAlt.remove();
                }
            } catch (e) {
                // Fallback formatting
                const mainText = `${primary.toFixed(2)} ${info.code}`;
                el.textContent = mainText;
                const oldAlt2 = el.parentElement.querySelector('.price-alt');
                if (oldAlt2) oldAlt2.remove();
            }
        });
    }

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = getNested(dict, key);
            if (typeof val === 'string') {
                if (el.tagName === 'INPUT' && el.placeholder) {
                    el.placeholder = val;
                } else {
                    el.textContent = val;
                }
            }
        });
        // Localize currency button tooltips
        document.querySelectorAll('.curr-btn').forEach(btn => {
            const code = btn.getAttribute('data-curr');
            const label = (dict.currency && dict.currency[code]) ? dict.currency[code] : code;
            btn.title = label;
        });
        updatePrices(lang);
        // mark active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.documentElement.setAttribute('lang', lang);
    }

    function getCurrentLang() {
        return localStorage.getItem('vada_lang') || 'en';
    }

    function initLanguage() {
        const saved = localStorage.getItem('vada_lang');
        // Important: ensure correct precedence so we don't treat any truthy `saved` as the condition of `?:`
        const initial = saved ? saved : ((navigator.language || 'en').toLowerCase().startsWith('pl') ? 'pl' : 'en');
        applyTranslations(initial);
        localStorage.setItem('vada_lang', initial);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                localStorage.setItem('vada_lang', lang);
                applyTranslations(lang);
                // Re-render home bestsellers after language switch
                setTimeout(() => initHomeBestsellers(4), 0);
            });
        });
    }

    initLanguage();
    // Ensure default currency selection reflected on load
    ensureDefaultCurrency(getCurrentLang());
    // Build products for Shop page after language/currency are ready
    initShopProducts();
    // Initialize pagination on shop grid (if present)
    setTimeout(() => paginateShopGrid(1, 8), 0);
    // Render bestsellers on Home page (top 4)
    initHomeBestsellers(4);
    // Ensure prices and premium highlighting reflect current settings
    updatePrices(getCurrentLang());
    highlightPremiumPricesDOM();
    // Mobile menu toggle for currency and language switchers
    (function initMobileMenu(){
        const menuBtn = document.querySelector('.menu-toggle');
        const switchers = document.querySelector('.nav-right .switchers');
        if (!menuBtn || !switchers) return;
        function close(){
            switchers.classList.remove('open');
            try { menuBtn.setAttribute('aria-expanded', 'false'); } catch {}
        }
        function open(){
            switchers.classList.add('open');
            try { menuBtn.setAttribute('aria-expanded', 'true'); } catch {}
        }
        function toggle(){
            if (switchers.classList.contains('open')) close(); else open();
        }
        menuBtn.addEventListener('click', (e) => { e.stopPropagation(); toggle(); });
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!switchers.classList.contains('open')) return;
            if (e.target.closest('.switchers') || e.target.closest('.menu-toggle')) return;
            close();
        });
        // Close with Escape
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
        // Close after choosing language or currency
        document.querySelectorAll('.lang-btn, .curr-btn').forEach(btn => btn.addEventListener('click', () => setTimeout(close, 0)));
        // Initialize ARIA state
        try { menuBtn.setAttribute('aria-expanded', 'false'); } catch {}
    })();
    // Ensure a shared modal exists (if not already placed in HTML)
    (function ensureProductModal(){
        if (!document.getElementById('productModal')){
            const wrap = document.createElement('div');
            wrap.id = 'productModal';
            wrap.className = 'modal-backdrop';
            wrap.style.display = 'none';
            wrap.innerHTML = `
                <div class="modal">
                    <button class="modal-close" aria-label="Close">×</button>
                    <div class="modal-body">
                        <div class="modal-image"></div>
                        <div class="modal-info">
                            <h3 class="modal-title">Product</h3>
                            <div class="modal-price"></div>
                            <p class="modal-lowest">Najniższa cena z 30 dni: <span class="lowest-price"></span></p>
                            <div class="modal-size-label" data-i18n="modal.choose_size">Choose size</div>
                            <div class="modal-sizes" style="gap:.4rem; margin:.6rem 0;">
                                <button class="size-btn" data-size="S">S</button>
                                <button class="size-btn" data-size="M">M</button>
                                <button class="size-btn" data-size="L">L</button>
                                <button class="size-btn" data-size="XL">XL</button>
                            </div>
                            <button class="modal-add" type="button" data-i18n="button.add">Add to Cart</button>
                        </div>
                        <div class="modal-thumbs"></div>
                    </div>
                </div>`;
            document.body.appendChild(wrap);
            try { applyTranslations(getCurrentLang()); } catch {}
        }
    })();

    function openProductModalFromCard(card){
        const modal = document.getElementById('productModal');
        if (!modal) return;
        const title = card.querySelector('h3')?.textContent || 'Product';
        const priceEl = card.querySelector('.price');
        const priceHtml = priceEl ? priceEl.innerHTML : '';
        const usdAttr = priceEl ? parseFloat(priceEl.getAttribute('data-price-usd')) : 0;
        const lowest = priceEl?.getAttribute('data-lowest30') || '';
        const img = card.querySelector('.product-image');
        // persist title key for sales tracking
        const key = card.getAttribute('data-title-key') || '';
        modal.dataset.productKey = key;
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-price').innerHTML = priceHtml;
        // translated label
        const lang = getCurrentLang();
        const t = translations[lang] || translations.en;
        const label = (t.modal && t.modal.lowest30) ? t.modal.lowest30 : 'Lowest price in 30 days';
        const lowestP = modal.querySelector('.modal-lowest');
        if (lowestP) lowestP.childNodes[0].nodeValue = label + ': ';
        modal.querySelector('.lowest-price').textContent = lowest || (priceEl ? priceEl.textContent : '');
        // Modal image area
        const mimg = modal.querySelector('.modal-image');
        // Build thumbnails gallery
        let thumbs = modal.querySelector('.modal-thumbs');
        if (!thumbs) {
            thumbs = document.createElement('div');
            thumbs.className = 'modal-thumbs';
            modal.querySelector('.modal-body').appendChild(thumbs);
        }
        thumbs.innerHTML = '';
        // Prefer per-product images from data-images (validate with preload to avoid 404s)
        const images = normalizeImageList((() => { try { return JSON.parse(card.getAttribute('data-images')||'[]'); } catch { return []; } })());
        const validImages = [];
        async function preload(src){
            return new Promise(resolve => {
                const im = new Image();
                im.onload = () => resolve(src);
                im.onerror = () => resolve(null);
                im.src = src;
            });
        }
        (async () => {
            if (Array.isArray(images) && images.length) {
                const loaded = (await Promise.all(images.map(preload))).filter(Boolean);
                if (loaded.length) {
                    const cover = loaded[0] || loaded[1];
                    mimg.style.backgroundImage = `url('${cover}')`;
                    mimg.style.background = '';
                    mimg.style.backgroundSize = 'cover';
                    mimg.style.backgroundPosition = 'center';
                    loaded.forEach(src => {
                        const th = document.createElement('button');
                        th.className = 'thumb';
                        th.type = 'button';
                        th.style.backgroundImage = `url('${src}')`;
                        th.style.backgroundSize = 'cover';
                        th.style.backgroundPosition = 'center';
                        th.addEventListener('click', () => {
                            mimg.style.backgroundImage = `url('${src}')`;
                            mimg.style.background = '';
                        });
                        thumbs.appendChild(th);
                    });
                    return;
                }
            }
            // Fallback: use current card background styles
            const baseColor = img ? (img.style.backgroundColor || '#f3f6ff') : '#f3f6ff';
            mimg.style.background = baseColor;
            const variants = [baseColor, 'linear-gradient(135deg, var(--baby-blue), var(--baby-pink))', '#eef6ff'];
            variants.forEach((bg) => {
                const th = document.createElement('button');
                th.className = 'thumb';
                th.type = 'button';
                if (bg.startsWith('linear-gradient')) th.style.backgroundImage = bg; else th.style.background = bg;
                th.addEventListener('click', () => {
                    if (bg.startsWith('linear-gradient')) { mimg.style.backgroundImage = bg; mimg.style.background = '';} else { mimg.style.background = bg; mimg.style.backgroundImage = ''; }
                });
                thumbs.appendChild(th);
            });
        })();
        // Sizes: clicking cover toggles size chooser; default M
        const sizes = modal.querySelector('.modal-sizes');
        if (sizes) {
            modal.dataset.size = modal.dataset.size || 'M';
            function updateActive(){
                sizes.querySelectorAll('.size-btn').forEach(b=>{
                    b.classList.toggle('active', b.getAttribute('data-size') === modal.dataset.size);
                });
            }
            updateActive();
            sizes.addEventListener('click',(ev)=>{
                const btn = ev.target.closest('.size-btn');
                if (!btn) return;
                modal.dataset.size = btn.getAttribute('data-size') || 'M';
                updateActive();
            });
            const coverEl = modal.querySelector('.modal-image');
            if (coverEl){
                coverEl.addEventListener('click', ()=>{
                    sizes.style.display = sizes.style.display==='none' ? 'flex' : 'none';
                });
            }
        }
        // store for add-to-cart
        modal.dataset.productName = title;
        modal.dataset.productUsd = String(usdAttr || 0);
        modal.style.display = 'flex';
    }

    // Render bestsellers into Home page featured grid (limit 4)
    function initHomeBestsellers(limit = 4){
        const homeFeatured = document.querySelector('#featured .product-grid');
        if (!homeFeatured) return;
        // Ensure we don't accidentally render shop items here twice
        homeFeatured.innerHTML = '';
        const catalog = buildCatalog();
        const sales = getSalesMap();
        // Rank by sales using titleKey if available; fallback to 0
        const ranked = catalog
            .map(it => ({ it, score: (it.titleKey && sales[it.titleKey]) ? sales[it.titleKey] : 0 }))
            .sort((a,b) => b.score - a.score)
            .slice(0, Math.max(0, limit))
            .map(e => e.it);
        const finalList = ranked.length ? ranked : catalog.slice(0, Math.max(0, limit));
        const lang = getCurrentLang();
        const dict = translations[lang] || translations.en;
        finalList.forEach(it => renderProductCard(homeFeatured, it, dict));
        // Ensure prices reflect current currency and styling after dynamic render
        setTimeout(() => { try { updatePrices(getCurrentLang()); highlightPremiumPricesDOM(); } catch {} }, 0);
    }
    function closeProductModal(){
        const modal = document.getElementById('productModal');
        if (modal) modal.style.display = 'none';
    }
    document.addEventListener('click', (e) => {
        const target = e.target;
        const card = (target && target.closest) ? target.closest('.product-card') : null;
        const isAddBtn = (target && target.closest) ? target.closest('.add-to-cart') : null;
        if (card && !isAddBtn){
            openProductModalFromCard(card);
        }
        // handle modal add to cart
        if (target && target.classList && target.classList.contains('modal-add')){
            const modal = document.getElementById('productModal');
            if (modal){
                const base = modal.dataset.productName || 'Item';
                const size = modal.dataset.size || 'M';
                const name = `${base} (${size})`;
                const usd = parseFloat(modal.dataset.productUsd || '0') || 0;
                addItemToCart(name, usd);
                // increment sales using saved product key and refresh bestsellers
                const pkey = modal.dataset.productKey || '';
                if (pkey) incrementSalesByKey(pkey);
                setTimeout(() => initHomeBestsellers(4), 0);
                // ensure discount formatting stays visible
                setTimeout(() => { try { updatePrices(getCurrentLang()); highlightPremiumPricesDOM(); } catch {} }, 0);
                closeProductModal();
            }
        }
        if ((target && target.closest && target.closest('.modal-close')) || (target && target.id === 'productModal')){
            closeProductModal();
        }
    });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeProductModal(); });
    // Currency switcher
    document.querySelectorAll('.curr-btn[data-curr]').forEach(btn => {
        btn.addEventListener('click', () => {
            const curr = btn.getAttribute('data-curr');
            setCurrentCurrency(curr);
            const lang = getCurrentLang();
            updatePrices(lang);
            // Also re-render cart if open
            if (document.getElementById('cart-container')) {
                setTimeout(() => {
                    const evt = new Event('recalc-cart');
                    window.dispatchEvent(evt);
                }, 0);
            }
        });
    });

    // Quick Filters banner toggle (Shop page)
    (function initQuickFilters(){
        try {
            const banner = document.getElementById('filtersBanner');
            const panel = document.getElementById('filtersQuick');
            if (!banner || !panel) return;
            const STORAGE_KEY = 'vada_filters';
        const getChecks = () => Array.from(panel.querySelectorAll('input[type="checkbox"]'));
        // Toggle panel on click/keyboard
        const toggle = () => panel.classList.toggle('show');
        banner.addEventListener('click', toggle);
        banner.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
        // Apply filters by reading saved values and toggling product cards
        function applyQuickFilters(){
            let saved = [];
            try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch {}
            const active = new Set(saved);
            const cards = document.querySelectorAll('.product-grid .product-card');
            let shown = 0;
            cards.forEach(card => {
                const cats = (card.getAttribute('data-cats') || '').split(',').map(s=>s.trim()).filter(Boolean);
                const visible = active.size === 0 ? true : cats.some(c => active.has(c));
                card.style.display = visible ? '' : 'none';
                if (visible) shown++;
            });
            // If filters hide everything, auto-clear to prevent confusion
            if (shown === 0 && active.size > 0) {
                try { localStorage.setItem(STORAGE_KEY, JSON.stringify([])); } catch {}
                // Uncheck all checkboxes in the quick panel
                getChecks().forEach(cb => cb.checked = false);
                // Show all products now
                cards.forEach(card => { card.style.display = ''; });
            }
            // Recalculate pagination to show first page of current filter results
            paginateShopGrid(1, 8);
        }
        // Load saved filters into checkboxes
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            const set = new Set(saved);
            getChecks().forEach(cb => { cb.checked = set.has(cb.value); });
        } catch {}
        // Save/Clear buttons (quick panel)
        const saveBtn = document.getElementById('quickSave');
        const quickClear = document.getElementById('quickClear');
        if (saveBtn){
            saveBtn.addEventListener('click', () => {
                const selected = getChecks().filter(cb => cb.checked).map(cb => cb.value);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
                applyQuickFilters();
                panel.classList.remove('show');
            });
        }
        if (quickClear){
            quickClear.addEventListener('click', () => {
                // Uncheck all and clear saved
                getChecks().forEach(cb => cb.checked = false);
                localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
                applyQuickFilters();
            });
        }
        // Apply filters on load as well
        applyQuickFilters();
        // Re-apply when products are created
        window.addEventListener('products-ready', applyQuickFilters);
        } catch (err) {
            try { console.warn('initQuickFilters error (safe to ignore if not on Shop):', err); } catch {}
        }
    })();
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                window.scrollTo({
                    top: targetElement.offsetTop - (headerHeight + 10), // Account for fixed header dynamically
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Update active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            if (pageYOffset >= (sectionTop - headerHeight - 120)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Shopping cart functionality (persistent)
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    function getCart() {
        try { return JSON.parse(localStorage.getItem('vada_cart') || '[]'); } catch { return []; }
    }
    function saveCart(cart) {
        localStorage.setItem('vada_cart', JSON.stringify(cart));
    }
    function updateCartCount() {
        const cart = getCart();
        const count = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
        if (cartCount) cartCount.textContent = count;
    }
    function addItemToCart(name, usd, discountPct) {
        const cart = getCart();
        const idx = cart.findIndex(it => it.name === name);
        if (idx >= 0) {
            cart[idx].qty = (cart[idx].qty || 1) + 1;
            // If discount provided and item had none, persist it
            if (isFinite(discountPct)) {
                cart[idx].discount = Number(discountPct) || 0;
            }
        } else {
            cart.push({ name, usd: Number(usd) || 0, qty: 1, discount: isFinite(discountPct) ? (Number(discountPct) || 0) : 0 });
        }
        saveCart(cart);
        updateCartCount();
        try { window.dispatchEvent(new Event('recalc-cart')); } catch {}
    }

    // initialize count on load
    updateCartCount();

    // 1) Attach existing buttons (index.html)
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.product-card');
            const productNameBase = card ? (card.querySelector('h3')?.textContent || 'Item') : 'Item';
            const priceEl = card ? card.querySelector('.price') : null;
            const usd = priceEl ? parseFloat(priceEl.getAttribute('data-price-usd')) : 0;
            const discountPct = priceEl ? parseFloat(priceEl.getAttribute('data-discount')) : 0;
            const sizeSel = card ? (card.dataset.size || 'M') : 'M';
            const productName = `${productNameBase} (${sizeSel})`;
            addItemToCart(productName, usd, discountPct);
            // increment sales for bestsellers
            const key = card ? (card.getAttribute('data-title-key') || '') : '';
            if (key) incrementSalesByKey(key);
            // refresh home bestsellers
            setTimeout(() => initHomeBestsellers(4), 0);
            // ensure discount formatting stays visible
            setTimeout(() => { try { updatePrices(getCurrentLang()); highlightPremiumPricesDOM(); } catch {} }, 0);
            if (cartCount) {
                cartCount.style.transform = 'scale(1.3)';
                setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 300);
            }
            const lang = getCurrentLang();
            const t = translations[lang] || translations.en;
            showNotification(`${productName} ${t.notify.added}`);
        });
    });
    // 2) Delegation for dynamically created buttons (shop.html)
    document.addEventListener('click', function(e){
        const btn = e.target.closest('.add-to-cart');
        if (!btn) return;
        // Avoid triggering card click (modal)
        e.stopPropagation();
        const card = btn.closest('.product-card');
        const productNameBase = card ? (card.querySelector('h3')?.textContent || 'Item') : 'Item';
        const priceEl = card ? card.querySelector('.price') : null;
        const usd = priceEl ? parseFloat(priceEl.getAttribute('data-price-usd')) : 0;
        const discountPct = priceEl ? parseFloat(priceEl.getAttribute('data-discount')) : 0;
        const sizeSel = card ? (card.dataset.size || 'M') : 'M';
        const productName = `${productNameBase} (${sizeSel})`;
        addItemToCart(productName, usd, discountPct);
        // increment sales for bestsellers
        const key = card ? (card.getAttribute('data-title-key') || '') : '';
        if (key) incrementSalesByKey(key);
        // refresh home bestsellers
        setTimeout(() => initHomeBestsellers(4), 0);
        // ensure discount formatting stays visible
        setTimeout(() => { try { updatePrices(getCurrentLang()); highlightPremiumPricesDOM(); } catch {} }, 0);
        if (cartCount) {
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 300);
        }
        const lang = getCurrentLang();
        const t = translations[lang] || translations.en;
        showNotification(`${productName} ${t.notify.added}`);
    });

    // Render cart page if present
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        function renderCart() {
            const lang = getCurrentLang();
            const t = translations[lang] || translations.en;
            const curr = getCurrentCurrency() || (lang === 'pl' ? 'PLN' : 'USD');
            const info = getCurrencyInfo(curr);
            const cart = getCart();
            if (!cart.length) {
                cartContainer.innerHTML = `<p style="text-align:center">${t.cart.empty}</p>`;
                return;
            }
            let subtotalUSD = 0;
            let html = '';
            html += `<div class="cart-actions" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem;gap:.6rem;">
                        <label style="display:flex;align-items:center;gap:.4rem;"><input type="checkbox" id="selAll"> ${t.cart.select_all}</label>
                        <div style="display:flex;gap:.4rem;">
                            <button class="curr-btn" id="delSelected">${t.cart.delete_selected}</button>
                            <button class="curr-btn" id="clearCart">${lang==='pl'?'Wyczyść koszyk':'Clear cart'}</button>
                            <button class="curr-btn" id="doCheckout">${t.cart.checkout}</button>
                        </div>
                     </div>`;
            html += `<div class="cart-table">
                        <div class="cart-row cart-head">
                            <span></span>
                            <span>${t.cart.product}</span>
                            <span>${t.cart.qty}</span>
                            <span>${t.cart.price}</span>
                            <span>${t.cart.total}</span>
                        </div>`;
            cart.forEach((item, idx) => {
                const qty = (item.qty || 1);
                const unitUSD = (item.usd || 0);
                const disc = Number(item.discount) || 0;
                const unitUSDDisc = unitUSD * (disc > 0 ? (1 - disc/100) : 1);
                const lineUSD = unitUSDDisc * qty;
                subtotalUSD += lineUSD;
                const fmtMain = new Intl.NumberFormat(info.locale,{style:'currency',currency:info.code,minimumFractionDigits:2});
                const priceMain = unitUSD * info.rate;
                const priceNew = unitUSDDisc * info.rate;
                const lineMain = lineUSD * info.rate;
                const lineOld = (unitUSD * qty) * info.rate;
                const isPremium = (item.name || '').toLowerCase().includes('premium');
                const priceHtml = (disc > 0)
                    ? `<span class="price-old">${fmtMain.format(priceMain)}</span><span class="price-new">${fmtMain.format(priceNew)}</span>`
                    : `${fmtMain.format(priceMain)}`;
                const lineHtml = (disc > 0)
                    ? `<span class="price-old">${fmtMain.format(lineOld)}</span><span class="price-new">${fmtMain.format(lineMain)}</span>`
                    : `${fmtMain.format(lineMain)}`;
                html += `<div class="cart-row" data-idx="${idx}">
                            <span><input type="checkbox" class="sel"></span>
                            <span>${item.name}</span>
                            <span>
                              <button class="qty-dec" aria-label="dec">−</button>
                              <span class="qty">${qty}</span>
                              <button class="qty-inc" aria-label="inc">+</button>
                            </span>
                            <span class="price${isPremium ? ' price-premium' : ''}">${priceHtml}</span>
                            <span class="line${isPremium ? ' price-premium' : ''}">${lineHtml}</span>
                             <span><button class="remove-row" aria-label="remove">${lang==='pl'?'Usuń':'Remove'}</button></span>
                         </div>`;
            });
            const fmtMain = new Intl.NumberFormat(info.locale,{style:'currency',currency:info.code,minimumFractionDigits:2});
            const subtotalMain = subtotalUSD * info.rate;
            html += `<div class="cart-row cart-foot"><span></span><span></span><span></span><span>${lang==='pl'?'Suma':'Subtotal'}</span><span>${fmtMain.format(subtotalMain)}</span></div></div>`;
            cartContainer.innerHTML = html;

            // Wire up interactions
            const selAll = document.getElementById('selAll');
            const sels = Array.from(cartContainer.querySelectorAll('input.sel'));
            if (selAll) selAll.addEventListener('change', () => {
                sels.forEach(cb => cb.checked = selAll.checked);
            });
            const delBtn = document.getElementById('delSelected');
            if (delBtn) delBtn.addEventListener('click', () => {
                const current = getCart();
                // For each checked row, decrement qty by 1; remove item only if qty reaches 0
                const updated = current.map((item, i) => {
                    const rowCb = cartContainer.querySelector(`.cart-row[data-idx="${i}"] input.sel`);
                    if (rowCb && rowCb.checked) {
                        const newQty = Math.max(0, (item.qty || 1) - 1);
                        return { ...item, qty: newQty };
                    }
                    return item;
                }).filter(item => (item.qty || 1) > 0);
                saveCart(updated);
                updateCartCount();
                renderCart();
            });
            const checkoutBtn = document.getElementById('doCheckout');
            if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
                alert(t.cart.paid);
                // Clear cart after mock payment
                saveCart([]);
                updateCartCount();
                renderCart();
            });
            // Clear cart button
            const clearBtn = document.getElementById('clearCart');
            if (clearBtn) clearBtn.addEventListener('click', () => {
                saveCart([]);
                updateCartCount();
                renderCart();
            });
            // Quantity controls
            cartContainer.querySelectorAll('.cart-row').forEach(row => {
                const idx = Number(row.getAttribute('data-idx'));
                const dec = row.querySelector('.qty-dec');
                const inc = row.querySelector('.qty-inc');
                const qtyEl = row.querySelector('.qty');
                const lineEl = row.querySelector('.line');
                const removeBtn = row.querySelector('.remove-row');
                function recalc() {
                    const lang = getCurrentLang();
                    const curr = getCurrentCurrency() || (lang==='pl'?'PLN':'USD');
                    const info = getCurrencyInfo(curr);
                    const cart = getCart();
                    const item = cart[idx];
                    const qty = item.qty || 1;
                    const disc = Number(item.discount) || 0;
                    const unitUSD = item.usd || 0;
                    const unitUSDDisc = unitUSD * (disc > 0 ? (1 - disc/100) : 1);
                    const lineUSD = unitUSDDisc * qty;
                    const fmt = new Intl.NumberFormat(info.locale,{style:'currency',currency:info.code,minimumFractionDigits:2});
                    const lineMain = lineUSD * info.rate;
                    const lineOld = (unitUSD * qty) * info.rate;
                    qtyEl.textContent = qty;
                    lineEl.innerHTML = (disc > 0)
                        ? `<span class="price-old">${fmt.format(lineOld)}</span><span class="price-new">${fmt.format(lineMain)}</span>`
                        : fmt.format(lineMain);
                }
                if (dec) dec.addEventListener('click', () => {
                    const cart = getCart();
                    cart[idx].qty = Math.max(1, (cart[idx].qty||1)-1);
                    saveCart(cart);
                    updateCartCount();
                    recalc();
                    // update subtotal
                    renderCart();
                });
                if (inc) inc.addEventListener('click', () => {
                    const cart = getCart();
                    cart[idx].qty = (cart[idx].qty||1)+1;
                    saveCart(cart);
                    updateCartCount();
                    recalc();
                    renderCart();
                });
                if (removeBtn) removeBtn.addEventListener('click', () => {
                    const cart = getCart();
                    cart.splice(idx, 1);
                    saveCart(cart);
                    updateCartCount();
                    renderCart();
                });
            });
        }
        renderCart();
        // re-render when language changes
        document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setTimeout(renderCart, 0)));
        // re-render when currency changes
        window.addEventListener('recalc-cart', renderCart);
    }

    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '30px';
        notification.style.right = '30px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = 'white';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '1000';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
        
        // Trigger animation
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(100px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
});

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .customize-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .customize-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Dynamic moving clouds across all pages
(function initClouds() {
    const container = document.querySelector('.clouds');
    if (!container) return;
    let clouds = [];

    function buildClouds() {
        container.innerHTML = '';
        clouds = [];
        const isMobile = window.innerWidth <= 768;
        const cloudCount = isMobile ? 7 : 12;
        for (let i = 0; i < cloudCount; i++) {
            const c = document.createElement('div');
            c.className = 'cloud';
            const top = Math.random() * 80 + 5; // 5% - 85%
            const w = Math.random() * 240 + 180; // 180 - 420 px
            const h = Math.max(60, w * 0.35);
            const dur = Math.random() * 40 + 50; // 50 - 90s
            const delay = Math.random() * -60; // negative for staggered start
            const rtl = Math.random() < 0.5;
            const opacity = 0.55 + Math.random() * 0.35;
            const blur = Math.random() < 0.4 ? Math.floor(Math.random() * 4) + 'px' : '0px';
            const depth = 0.2 + Math.random() * 0.9; // 0.2 (far) to 1.1 (near)
            c.style.setProperty('--top', top + '%');
            c.style.setProperty('--w', w + 'px');
            c.style.setProperty('--h', h + 'px');
            c.style.setProperty('--dur', (dur * (0.6 + depth * 0.6)) + 's');
            c.style.setProperty('--delay', delay + 's');
            c.style.setProperty('--opacity', opacity.toString());
            c.style.setProperty('--blur', blur);
            c.style.setProperty('--anim', rtl ? 'float_rtl' : 'float_ltr');
            // Add extra animated lobes for a more lively, fluffy look
            const lobeCount = 2 + Math.floor(Math.random() * 3); // 2-4 lobes
            for (let j = 0; j < lobeCount; j++) {
                const l = document.createElement('span');
                l.className = 'lobe';
                const lw = (Math.random() * 0.5 + 0.3) * h; // base off height for shape coherence
                const lh = (Math.random() * 0.5 + 0.35) * h;
                const lx = Math.random() * (w * 0.7); // within main cloud width
                const ly = -Math.random() * (h * 0.6); // slightly above for puffiness
                l.style.width = lw + 'px';
                l.style.height = lh + 'px';
                l.style.left = lx + 'px';
                l.style.top = ly + 'px';
                l.style.setProperty('--lsway', (6 + Math.random() * 5) + 's');
                l.style.setProperty('--ldelay', (Math.random() * 2) + 's');
                c.appendChild(l);
            }
            c.dataset.baseTop = top; // store base top in %
            c.dataset.depth = depth; // store depth for parallax
            container.appendChild(c);
            clouds.push(c);
        }
        parallax();
    }

    function parallax() {
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        clouds.forEach(c => {
            const base = parseFloat(c.dataset.baseTop || '30');
            const depth = parseFloat(c.dataset.depth || '0.5');
            // move a bit with scroll: deeper clouds move slightly more
            const offsetPx = scrollY * (depth * 0.03); // tune factor for taste
            c.style.top = `calc(${base}% + ${offsetPx}px)`;
        });
    }

    buildClouds();
    window.addEventListener('scroll', parallax, { passive: true });
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildClouds, 200);
    });
})();

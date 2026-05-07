/* app.js - Carin Atelier SPA - CLEAN REBUILD */

class ParticleBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.time = 0;
        this.active = true;
        this.shapes = ['heart', 'flower', 'percent', 'star', 'hashtag'];
        this.shapeIndex = 0;
        this.colors = ['#f472b6', '#db2777', '#8b5cf6', '#6366f1', '#fbbf24', '#f59e0b'];

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = e.clientX;
            this.targetMouse.y = e.clientY;
        });

        this.resize();
        this.init();
        this.animate();

        setInterval(() => {
            this.shapeIndex = (this.shapeIndex + 1) % this.shapes.length;
            this.morph(this.shapes[this.shapeIndex]);
        }, 10000);
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.init();
    }

    init() {
        const count = 3000; 
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas ? this.canvas.width : 1000),
                y: Math.random() * (this.canvas ? this.canvas.height : 1000),
                targetX: 0,
                targetY: 0,
                size: Math.random() * 2 + 0.5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                angle: Math.random() * Math.PI * 2,
                fillRatio: Math.random()
            });
        }
        this.morph(this.shapes[this.shapeIndex]);
    }

    morph(shape) {
        const count = this.particles.length;
        const isMobile = window.innerWidth < 768;
        const scale = isMobile ? 10 : 20; 
        this.particles.forEach((p, i) => {
            const t = p.angle;
            let tx = 0, ty = 0;
            if (shape === 'heart') {
                const r = Math.sqrt(p.fillRatio); 
                tx = 16 * Math.pow(Math.sin(t), 3) * r;
                ty = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;
            } else if (shape === 'flower') {
                const r = (14 + 8 * Math.cos(5 * t)) * Math.sqrt(p.fillRatio);
                tx = r * Math.cos(t);
                ty = r * Math.sin(t);
            } else if (shape === 'star') {
                const starPoints = [];
                for(let j=0; j<10; j++) {
                    const angle = j * Math.PI / 5 - Math.PI / 2;
                    const radius = (j % 2 === 0) ? 22 : 9;
                    starPoints.push({ x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
                }
                const index = Math.floor((t / (Math.PI * 2)) * 10);
                const A = starPoints[index];
                const B = starPoints[(index + 1) % 10];
                const v = ((t * 10) / (Math.PI * 2)) % 1;
                const r = Math.sqrt(p.fillRatio);
                tx = r * (v * B.x + (1 - v) * A.x);
                ty = r * (v * B.y + (1 - v) * A.y);
            } else if (shape === 'percent') {
                const thickness = 2.5;
                const offX = (p.fillRatio - 0.5) * thickness;
                const offY = ((p.angle / (Math.PI*2)) - 0.5) * thickness;
                if (i < count * 0.3) { 
                    const ratio = i / (count * 0.3);
                    tx = -18 + 36 * ratio + offX;
                    ty = 18 - 36 * ratio + offY;
                } else if (i < count * 0.65) { 
                    const ratio = (i - count * 0.3) / (count * 0.35);
                    const rad = 6 + p.fillRatio * 3; 
                    tx = -12 + rad * Math.cos(ratio * Math.PI * 2);
                    ty = -12 + rad * Math.sin(ratio * Math.PI * 2);
                } else { 
                    const ratio = (i - count * 0.65) / (count * 0.35);
                    const rad = 6 + p.fillRatio * 3; 
                    tx = 12 + rad * Math.cos(ratio * Math.PI * 2);
                    ty = 12 + rad * Math.sin(ratio * Math.PI * 2);
                }
            } else if (shape === 'hashtag') {
                const thickness = 2.5;
                const offX = (p.fillRatio - 0.5) * thickness;
                const offY = ((p.angle / (Math.PI*2)) - 0.5) * thickness;
                const seg = Math.floor(i / (count / 4));
                const pos = ((i % (count / 4)) / (count / 4)) * 36 - 18;
                if (seg === 0) { tx = -8 + offX; ty = pos; }
                else if (seg === 1) { tx = 8 + offX; ty = pos; }
                else if (seg === 2) { tx = pos; ty = -8 + offY; }
                else { tx = pos; ty = 8 + offY; }
            }
            p.targetX = tx * scale + (this.canvas ? this.canvas.width : 1000) / 2;
            p.targetY = ty * scale + (this.canvas ? this.canvas.height : 1000) / 2;
        });
    }

    animate() {
        if (!this.active || !this.ctx) return;
        this.time += 0.02;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        this.particles.forEach((p, i) => {
            let finalX = p.targetX;
            let finalY = p.targetY;
            let currentSize = p.size;
            let currentAlpha = 0.5 + Math.sin(this.time + i * 0.05) * 0.2;
            
            const dx = finalX - this.mouse.x;
            const dy = finalY - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 250; 
            
            if (dist < maxDist && dist > 0) {
                const force = Math.pow((maxDist - dist) / maxDist, 2); 
                const ripple = Math.sin(force * Math.PI * 3 - this.time * 5); 
                const displacement = ripple * force * 25;
                finalX += (dx / dist) * displacement;
                finalY += (dy / dist) * displacement;
                currentSize += Math.max(0, ripple * force * 3);
                currentAlpha += Math.max(0, ripple * force * 0.4);
            }
            
            p.x += (finalX - p.x) * 0.15;
            p.y += (finalY - p.y) * 0.15;
            
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, Math.max(0.1, currentSize), 0, Math.PI * 2);
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
}

const App = {
    init() {
        this.bg = new ParticleBackground('bg-canvas');
        db.checkMonthTransition();
        this.renderLayout();
        this.handleRouting();
        window.addEventListener('hashchange', () => this.handleRouting());
        window.addEventListener('scroll', () => this.handleScroll());
        
        setInterval(() => {
            if (window.location.hash === '#/admin/chat' && db.currentUser && ['admin', 'tecnico'].includes(db.currentUser.rango)) {
                this.viewAdmin(document.getElementById('main-content'), 'chat');
            }
        }, 5000);

        document.addEventListener('click', (e) => {
            const regionWrap = document.getElementById('region-selector-wrap');
            const regionDd = document.getElementById('region-dropdown');
            if (regionWrap && regionDd && !regionWrap.contains(e.target)) regionDd.style.display = 'none';
            const userWrap = document.getElementById('user-badge-wrap');
            const userDd = document.getElementById('user-dropdown');
            if (userWrap && userDd && !userWrap.contains(e.target)) userDd.style.display = 'none';
        });
    },

    renderLayout() {
        const announcement = db.get('anuncios').find(a => a.activo);
        const user = db.currentUser;
        const config = db.get('rangoConfig');
        const regiones = (db.get('regiones') || []).filter(r => r.activa);
        const currentRegion = this._currentRegion || 'global';
        const currentRegionObj = regiones.find(r => r.id === currentRegion) || regiones[0] || { nombre: 'Global', id: 'global', emoji: '🛒' };
        const showUSD = this._showUSD || false;
        const currentLanguage = this._currentLanguage || 'es';

        document.getElementById('announcement-container').innerHTML = announcement ? `
            <div class="announcement-bar" style="background-color: ${announcement.colorFondo}">
                ${announcement.texto}
                <button onclick="this.parentElement.remove()">&times;</button>
            </div>
        ` : '';

        document.getElementById('header-container').innerHTML = `
            <header>
                <div style="display:flex; align-items:center; gap: 2.5rem;">
                    <a href="#/" class="logo">Carin Atelier</a>
                    <nav class="desktop-nav">
                        <ul>
                            <li><a href="#/" class="${this.isActive('/')}">Inicio</a></li>
                            <li><a href="#/tienda" class="${this.isActive('/tienda')}">Tienda</a></li>
                            <li><a href="#/cursos" class="${this.isActive('/cursos')}">Cursos</a></li>
                            <li><a href="#/carin-plus" class="${this.isActive('/carin-plus')}" style="color:var(--color-primary); font-weight:700;">Carin+ ✨</a></li>
                            ${user ? `
                                <li><a href="#/mi-cuenta" class="${this.isActive('/mi-cuenta')}">Mi Cuenta</a></li>
                                ${['admin', 'tecnico'].includes(user.rango) ? `<li><a href="#/admin" class="${this.isActive('/admin')}">Admin</a></li>` : ''}
                                ${this.isProfessor(user) ? `<li><a href="#/panel-profesor" class="${this.isActive('/panel-profesor')}">Profesor</a></li>` : ''}
                            ` : `
                                <li><a href="#/login" class="${this.isActive('/login')}">Ingresar</a></li>
                            `}
                        </ul>
                    </nav>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div style="position:relative;" id="region-selector-wrap">
                        <button onclick="App._toggleRegionDropdown()" class="header-icon-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M2 12H22"/><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"/></svg>
                            <span style="font-size:12px; font-weight:600; text-transform:uppercase;">${currentRegionObj.id.substring(0,2)} ✨ ${showUSD?'USD':'ARS'}</span>
                        </button>
                        <div id="region-dropdown" class="settings-dropdown" style="display:none;">
                            <div class="dropdown-header">Idioma / Language</div>
                            <div style="display:flex; gap: 8px; padding: 0 16px;">
                                <button onclick="App.setLanguage('es')" class="setting-pill ${currentLanguage === 'es' ? 'active' : ''}">ES</button>
                                <button onclick="App.setLanguage('en')" class="setting-pill ${currentLanguage === 'en' ? 'active' : ''}">EN</button>
                            </div>
                            <div class="dropdown-header" style="margin-top:12px;">Región de Envío</div>
                            <div style="padding: 0 8px;">
                                ${regiones.map(r => `
                                    <button onclick="App.setRegion('${r.id}')" class="dropdown-item ${r.id === currentRegion ? 'active' : ''}">
                                        <span>${r.nombre}</span>
                                        ${r.id === currentRegion ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                    </button>
                                `).join('')}
                            </div>
                            <div class="dropdown-header" style="margin-top:4px; padding-top:12px; border-top:1px solid rgba(0,0,0,0.05);">Moneda</div>
                            <div style="padding: 0 8px; margin-bottom: 8px;">
                                <button onclick="App.setUSD(false)" class="dropdown-item ${!showUSD ? 'active' : ''}">
                                    <span>ARS (Pesos Argentinos)</span>
                                    ${!showUSD ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                </button>
                                <button onclick="App.setUSD(true)" class="dropdown-item ${showUSD ? 'active' : ''}">
                                    <span>USD (Dólares)</span>
                                    ${showUSD ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                </button>
                            </div>
                        </div>
                    </div>
                    <a href="#/carrito" class="header-icon-btn" style="position:relative;">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/><path d="M3 6H21"/><path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"/></svg>
                        ${db.cart.length ? `<span class="cart-badge">${db.cart.length}</span>` : ''}
                    </a>
                    ${user ? this.renderUserBadge(user, config) : ''}
                </div>
            </header>
        `;
        this.renderFooter();
        this.renderCart();
    },

    renderUserBadge(user, config) {
        const c = config[user.rango] || { c1: '#ccc', c2: '#999', text: '#000' };
        const isCarinPlus = user.rango === 'carin_plus';
        return `
            <div class="user-badge" id="user-badge-wrap" style="position:relative;">
                <button onclick="document.getElementById('user-dropdown').style.display = document.getElementById('user-dropdown').style.display === 'none' ? 'block' : 'none'" style="background:none; border:none; cursor:pointer; display:flex; align-items:center; gap:8px; padding:4px;">
                    <span class="user-name">${user.nombre}</span>
                    <span class="rank-pill" style="background: linear-gradient(90deg, ${c.c1}, ${c.c2}); color: ${c.text}">
                        ${isCarinPlus ? '✅ Carin+' : user.rango}
                    </span>
                    <span style="font-size:10px; opacity:0.5;">&#9660;</span>
                </button>
                <div id="user-dropdown" style="position:absolute; top:calc(100% + 8px); right:0; background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-sm); min-width:200px; box-shadow:var(--shadow-md); z-index:300; display:none; overflow:hidden;">
                    <div style="padding:12px 16px; border-bottom:1px solid var(--color-border); background:var(--color-bg-alt);">
                        <div style="font-weight:700; font-size:14px;">${user.nombre}</div>
                        <div style="font-size:11px; color:var(--color-text-muted);">${user.email}</div>
                    </div>
                    ${!isCarinPlus ? `
                    <a href="#/carin-plus" onclick="document.getElementById('user-dropdown').style.display='none'" style="display:flex; align-items:center; gap:10px; padding:12px 16px; text-decoration:none; color:var(--color-text); font-size:13px; font-weight:600; background:linear-gradient(90deg,#fdf2f8,#fce7f3); border-bottom:1px solid #fbcfe8;">
                        <span style="font-size:1.2rem;">✨</span>
                        <div><div style="color:#be185d;">Suscribirse a Carin+</div><div style="font-size:10px; color:#db2777; font-weight:400;">Descuentos premium en toda la tienda</div></div>
                    </a>` : `
                    <div style="display:flex; align-items:center; gap:10px; padding:10px 16px; background:linear-gradient(90deg,#fdf2f8,#fce7f3); border-bottom:1px solid #fbcfe8;">
                        <span style="font-size:1.2rem;">✨</span>
                        <div style="font-size:12px; color:#be185d; font-weight:700;">Miembro Carin+ Activo</div>
                    </div>`}
                    <a href="#/mi-cuenta" onclick="document.getElementById('user-dropdown').style.display='none'" style="display:flex; align-items:center; gap:10px; padding:12px 16px; text-decoration:none; color:var(--color-text); font-size:13px; border-bottom:1px solid var(--color-border); transition:background 0.15s;" onmouseover="this.style.background='var(--color-bg-alt)'" onmouseout="this.style.background='none'">
                        <span style="font-size:1.1rem;">👤</span> Mi Perfil
                    </a>
                    <button onclick="App.handleLogout()" style="display:flex; align-items:center; gap:10px; width:100%; padding:12px 16px; background:none; border:none; cursor:pointer; color:#ef4444; font-size:13px; font-weight:600; text-align:left; transition:background 0.15s;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='none'">
                        <span style="font-size:1.1rem;">🚪</span> Cerrar Sesión
                    </button>
                </div>
            </div>
        `;
    },

    _toggleRegionDropdown() {
        const dd = document.getElementById('region-dropdown');
        if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
    },

    setRegion(regionId) {
        this._currentRegion = regionId;
        const dd = document.getElementById('region-dropdown');
        if (dd) dd.style.display = 'none';
        this.renderLayout();
        const hash = window.location.hash;
        const main = document.getElementById('main-content');
        if (hash === '#/tienda') this.viewShop(main);
        else if (hash === '#/' || hash === '' || hash === '#') this.viewHome(main);
    },

    setUSD(isUSD) {
        this._showUSD = isUSD;
        const dd = document.getElementById('region-dropdown');
        if (dd) dd.style.display = 'none';
        const doRender = () => {
            this.renderLayout();
            const hash = window.location.hash;
            const main = document.getElementById('main-content');
            if (hash === '#/carrito') this.viewCartPage(main);
            else if (hash === '#/tienda') this.viewShop(main);
            else if (hash === '#/' || hash === '' || hash === '#') this.viewHome(main);
        };
        if (isUSD && !this._dolarRate) {
            this._fetchDolarRate().then(doRender);
        } else {
            doRender();
        }
    },

    async _fetchDolarRate() {
        try {
            const resp = await fetch('https://dolarapi.com/v1/dolares/blue');
            const data = await resp.json();
            this._dolarRate = data.venta || 1200;
        } catch {
            this._dolarRate = 1200;
        }
    },

    renderFooter() {
        const texts = db.get('textosPagina');
        const footerCont = document.getElementById('footer-container');
        if (!footerCont) return;
        footerCont.innerHTML = `
            <footer>
                <div class="container footer-content">
                    <div class="footer-section">
                        <h4>Carin Atelier</h4>
                        <p>${texts.sloganFooter}</p>
                    </div>
                    <div class="footer-section">
                        <h4>Contacto</h4>
                        <p>${texts.direccionLocal}</p>
                        <p>${texts.telefonoLocal}</p>
                    </div>
                    <div class="footer-section">
                        <h4>Enlaces</h4>
                        <a href="#/tienda">Tienda</a>
                        <a href="#/soporte">Soporte</a>
                    </div>
                </div>
            </footer>
        `;
    },

    isActive(path) {
        if (path === '/' && (!window.location.hash || window.location.hash === '#/')) return 'active';
        return window.location.hash.startsWith('#' + path) && path !== '/' ? 'active' : '';
    },

    isProfessor(user) {
        if (!user) return false;
        return db.get('profesores').some(p => p.userId === user.userId);
    },

    handleRouting() {
        let path = window.location.hash.slice(1) || '/';
        const queryIndex = path.indexOf('?');
        const cleanPath = queryIndex !== -1 ? path.slice(0, queryIndex) : path;
        const main = document.getElementById('main-content');
        if (!main) return;

        const isHome = cleanPath === '/';
        if (this.bg && this.bg.canvas) {
            this.bg.active = isHome;
            this.bg.canvas.style.display = isHome ? 'block' : 'none';
        }

        if (isHome) this.viewHome(main);
        else if (cleanPath === '/tienda') this.viewShop(main);
        else if (cleanPath === '/cursos') this.viewCourses(main);
        else if (cleanPath.startsWith('/cursos/')) this.viewCourseDetail(main, cleanPath.split('/')[2]);
        else if (cleanPath === '/login') this.viewLogin(main);
        else if (cleanPath === '/mi-cuenta') this.viewAccount(main);
        else if (cleanPath === '/soporte') this.viewSupport(main);
        else if (cleanPath === '/panel-profesor') this.viewProfessorPanel(main);
        else if (cleanPath === '/carrito') this.viewCartPage(main);
        else if (cleanPath === '/carin-plus') this.viewCarinPlusPage(main);
        else if (cleanPath.startsWith('/producto/')) this.viewProduct(main, cleanPath.split('/')[2]);
        else if (cleanPath.startsWith('/admin')) this.viewAdmin(main, cleanPath.split('/')[2] || 'dashboard');
        else main.innerHTML = '<div class="container" style="margin-top:5rem;"><h1>404 - No encontrado</h1><a href="#/" class="btn btn-dark">Volver</a></div>';
        
        window.scrollTo(0,0);
    },

    viewHome(main) {
        const texts = db.get('textosPagina');
        const config = db.get('configInicio');
        const featured = db.get('productos').filter(p => p.destacado && p.visible).slice(0, config.maxDestacados || 6);
        const courses = db.get('cursos').filter(c => c.destacado).slice(0, config.maxCursos || 4);
        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };
        const cfgPage = db.get('configCarinPlusPagina') || {};
        const isCarinPlus = db.currentUser && db.currentUser.rango === 'carin_plus';

        const carinBanner = !isCarinPlus ? `
        <section style="margin-top:5rem;">
            <div class="container">
                <div style="background:linear-gradient(135deg,#ec4899,#be185d); border-radius:var(--radius-md); padding:3rem; text-align:center; color:white; position:relative; overflow:hidden;">
                    <div style="position:absolute; top:-30px; right:-30px; font-size:8rem; opacity:0.1; pointer-events:none;">✨</div>
                    <div class="badge-premium" style="display:inline-block; margin-bottom:1rem; background:rgba(255,255,255,0.25); font-size:10px;">MEMBERSHIP</div>
                    <h2 style="font-size:2rem; font-weight:900; margin-bottom:0.75rem;">${cfgPage.titulo || 'Descubrí Carin+'}</h2>
                    <p style="font-size:1rem; opacity:0.9; max-width:500px; margin:0 auto 2rem;">${cfgPage.subtitulo || `Obtené un ${configCarin.descuentoGlobal}% de descuento en toda la tienda, siempre.`}</p>
                    <a href="#/carin-plus" class="btn btn-dark" style="background:white; color:#be185d; border:none; padding:12px 28px; font-size:0.95rem; font-weight:800;">
                        Ver beneficios ✨
                    </a>
                </div>
            </div>
        </section>` : '';

        main.innerHTML = `
            <section class="hero">
                <div class="container">
                    <h1>${texts.tituloHero || 'Diseño y Confección con Pasión'}</h1>
                    <p>${texts.subtituloHero || 'Encuentra los mejores moldes digitales y cursos presenciales.'}</p>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                        <a href="#/tienda" class="btn btn-dark">Ver Tienda</a>
                        <a href="#/cursos" class="btn btn-default">Nuestros Cursos</a>
                    </div>
                </div>
            </section>
            <section class="container" style="margin-top: 4rem;">
                <h2 style="text-align: center; margin-bottom: 3rem;">Productos Destacados</h2>
                <div class="product-grid-wrapper" style="overflow-x: auto; padding-bottom: 1rem; -webkit-overflow-scrolling: touch;">
                    <div class="product-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; min-width: ${window.innerWidth < 768 ? '800px' : 'auto'};">
                        ${featured.map(p => this.renderProductCard(p)).join('')}
                    </div>
                </div>
                ${window.innerWidth < 768 ? '<p style="text-align:center; font-size:12px; color:var(--color-text-muted); margin-top:1rem;">← Desliza para ver más →</p>' : ''}
            </section>
            ${carinBanner}
            ${courses.length ? `
            <section class="container" style="margin-top: 6rem; margin-bottom: 6rem;">
                <h2 style="text-align: center; margin-bottom: 3rem;">Próximos Cursos</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    ${courses.map(c => this.renderCourseCard(c)).join('')}
                </div>
            </section>` : ''}
        `;
    },

    renderProductCard(p) {
        const isCarinPlus = db.currentUser && db.currentUser.rango === 'carin_plus';
        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15, tituloBadge: 'CARIN+' };
        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0, titulo: '' };
        
        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;
        const baseDesc = p.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);
        const extraDesc = p.carinPlusDescuento || 0;
        const carinDiscount = extraDesc > 0 ? extraDesc : baseDesc;
        const totalCarinDesc = p.excluirCarinPlus ? 0 : carinDiscount;
        
        const currentDiscount = isCarinPlus ? totalCarinDesc : 0;
        const totalDesc = currentDiscount + globalSaleDesc;
        const pFinal = totalDesc > 0 ? Math.round(p.precio * (1 - (totalDesc / 100))) : p.precio;

        const showUSD = this._showUSD || false;
        const dolarRate = this._dolarRate || 1200;
        const fmt = (n) => {
            if (showUSD) return 'US$' + (n / dolarRate).toFixed(2);
            return '$' + n.toLocaleString('es-AR');
        };

        let badgeHtml = '';
        if (globalSaleDesc > 0) badgeHtml += `<span class="badge" style="position:absolute; top:1rem; left:1rem; z-index:10; background:#ef4444; color:white; padding:4px 12px; border-radius:999px; font-size:12px; font-weight:700;">🔥 ${configRebajas.titulo} -${globalSaleDesc}%</span>`;
        if (extraDesc > 0 && !p.excluirCarinPlus) badgeHtml += `<span class="badge-premium" style="position:absolute; top:1rem; right:1rem; z-index:10;">CARIN+<br><span style="font-size:8px;">${configCarin.tituloBadge}</span></span>`;

        return `
            <div class="product-card" style="position:relative; display:flex; flex-direction:column; background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; transition:transform 0.2s, box-shadow:0.2s;">
                ${badgeHtml}
                <div class="product-emoji" style="height:200px; display:flex; align-items:center; justify-content:center; background:var(--color-bg-alt);">
                    ${p.imagen ? `<img src="${p.imagen}" style="width:100%; height:100%; object-fit:cover;" alt="${p.nombre}">` : `<span style="font-size:4rem;">${p.emoji || '📦'}</span>`}
                </div>
                <div class="product-info" style="padding:1.25rem; flex:1; display:flex; flex-direction:column;">
                    <h3 style="font-size:1.1rem; font-weight:800; margin:0 0 0.5rem;">${p.nombre}</h3>
                    <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:1rem;">${p.descCorta}</p>
                    <div style="margin-top:auto;">
                        <div style="font-size:1.25rem; font-weight:900;">${fmt(pFinal)}</div>
                        ${totalDesc > 0 ? `<div style="text-decoration:line-through; font-size:0.8rem; color:var(--color-text-muted);">${fmt(p.precio)}</div>` : ''}
                    </div>
                    <div style="display:flex; gap:0.5rem; margin-top:1rem;">
                        <a href="#/producto/${p.id}" class="btn btn-default" style="flex:1; padding:8px; font-size:0.8rem; text-align:center;">Ver</a>
                        <button onclick="App.addToCart('${p.id}')" class="btn btn-dark" style="flex:1.5; padding:8px; font-size:0.8rem;">+ Carrito</button>
                    </div>
                </div>
            </div>
        `;
    },

    viewShop(main) {
        const currentRegion = this._currentRegion || 'global';
        const allProducts = db.get('productos').filter(p => p.visible);
        const products = allProducts.filter(p => !p.region || p.region === 'global' || p.region === currentRegion);
        const categories = db.get('categorias');
        const regiones = (db.get('regiones') || []).filter(r => r.activa);
        const currentRegionObj = regiones.find(r => r.id === currentRegion) || { nombre: 'Global', emoji: '🌍' };

        main.innerHTML = `
            <div class="container" style="margin-top: 3rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div>
                        <h1>Nuestra Tienda</h1>
                        <p style="font-size:14px; color:var(--color-text-muted);">${currentRegionObj.emoji} Productos en <b>${currentRegionObj.nombre}</b></p>
                    </div>
                    <select onchange="App.filterShop(this.value)" class="btn btn-default" style="padding:10px;">
                        <option value="all">Todas las categorías</option>
                        ${categories.map(c => `<option value="${c.id}">${c.nombre}</option>`).join('')}
                    </select>
                </div>
                <div id="shop-grid" class="product-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:2rem;">
                    ${products.map(p => this.renderProductCard(p)).join('')}
                </div>
            </div>
        `;
    },

    filterShop(cat) {
        const currentRegion = this._currentRegion || 'global';
        const products = db.get('productos').filter(p => p.visible && (cat === 'all' || p.cat === cat) && (!p.region || p.region === 'global' || p.region === currentRegion));
        const grid = document.getElementById('shop-grid');
        if (grid) grid.innerHTML = products.length ? products.map(p => this.renderProductCard(p)).join('') : '<p>No hay productos en esta categoría.</p>';
    },

    viewProduct(main, pid) {
        const p = db.get('productos').find(x => x.id === pid);
        if (!p) return main.innerHTML = '<h2>Producto no encontrado</h2>';
        
        main.innerHTML = `
            <div class="container" style="margin-top:3rem;">
                <div style="display:grid; grid-template-columns: ${window.innerWidth < 768 ? '1fr' : '1fr 1fr'}; gap:3rem;">
                    <div style="background:var(--color-bg-alt); border-radius:var(--radius-md); overflow:hidden;">
                        ${p.imagen ? `<img src="${p.imagen}" style="width:100%;" alt="${p.nombre}">` : `<div style="height:400px; display:flex; align-items:center; justify-content:center; font-size:10rem;">${p.emoji || '📦'}</div>`}
                    </div>
                    <div>
                        <h1>${p.nombre}</h1>
                        <p style="font-size:1.2rem; color:var(--color-text-muted); margin-bottom:2rem;">${p.descCorta}</p>
                        <div style="font-size:2rem; font-weight:900; margin-bottom:2rem;">$${p.precio.toLocaleString()}</div>
                        <button onclick="App.addToCart('${p.id}')" class="btn btn-dark" style="width:100%; padding:15px; font-size:1.1rem;">Agregar al Carrito</button>
                        <div style="margin-top:2rem; padding-top:2rem; border-top:1px solid var(--color-border); white-space:pre-line;">${p.descLarga || ''}</div>
                    </div>
                </div>
            </div>
        `;
    },

    addToCart(pid) {
        const p = db.get('productos').find(x => x.id === pid);
        if (p) {
            db.cart.push(p);
            db.save('cart', db.cart);
            this.renderLayout();
            this.showToast('✅ Agregado al carrito');
        }
    },

    renderCart() {
        const cartCont = document.getElementById('cart-container');
        if (!cartCont) return;
        // Simplified cart logic for now
    },

    showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    handleLogout() {
        db.logout();
        this.renderLayout();
        this.navigate('/');
    },

    navigate(path) {
        window.location.hash = path;
    },

    // PLACEHOLDERS FOR REMAINING METHODS (Admin, Professor, etc.)
    viewCourses(main) { main.innerHTML = '<h1>Cursos</h1>'; },
    viewCourseDetail(main, id) { main.innerHTML = '<h1>Detalle de Curso</h1>'; },
    viewLogin(main) { main.innerHTML = '<h1>Ingresar</h1>'; },
    viewAccount(main) { main.innerHTML = '<h1>Mi Cuenta</h1>'; },
    viewSupport(main) { main.innerHTML = '<h1>Soporte</h1>'; },
    viewProfessorPanel(main) { main.innerHTML = '<h1>Panel Profesor</h1>'; },
    viewCartPage(main) { main.innerHTML = '<h1>Carrito</h1>'; },
    viewCarinPlusPage(main) { main.innerHTML = '<h1>Carin+</h1>'; },
    viewAdmin(main, section) { main.innerHTML = '<h1>Panel Admin</h1>'; },
    handleScroll() {},


};

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());

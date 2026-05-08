/* app.js - Carin Atelier SPA Logic */



// --- i18n Translation Engine ---

const i18n_dict = {

    "Inicio": "Home",

    "Tienda": "Shop",

    "Cursos": "Courses",

    "Mi Cuenta": "My Account",

    "Soporte": "Support",

    "Ingresar": "Login",

    "Región de Envío": "Shipping Region",

    "Idioma / Language": "Language",

    "Moneda": "Currency",

    "ARS (Pesos Argentinos)": "ARS (Argentine Pesos)",

    "USD (Dólares)": "USD (US Dollars)",

    "Molde Blusa Drapeada": "Draped Blouse Pattern",

    "Elegante y fresca para verano.": "Elegant and fresh for summer.",

    "Clase de Costura Básica": "Basic Sewing Class",

    "Aprende desde cero en nuestro taller.": "Learn from scratch in our workshop.",

    "Molde Pantalón Palazzo": "Palazzo Pants Pattern",

    "Comodidad y estilo para todo el anio.": "Comfort and style for all year.",

    "Moldes Digitales": "Digital Patterns",

    "Patrones listos para imprimir": "Ready-to-print patterns",

    "Clases Presenciales": "In-person Classes",

    "Cursos en Alta Gracia": "Courses in Alta Gracia",

    "Accesorios": "Accessories",

    "Complementos de costura": "Sewing accessories",

    "Oferta": "Sale",

    "Disponible": "Available",

    "Añadir al Carrito": "Add to Cart",

    "Ver todos (Global)": "View all (Global)",

    "Cotización Dólar Blue en tiempo real": "Real-time Blue Dollar rate",

    "Talles disponibles": "Available sizes",

    "Tu carrito est vacío.": "Your cart is empty.",

    "Ir a Pagar": "Checkout",

    "Resumen de Compra": "Order Summary",

    "Total:": "Total:",

    "Descuento:": "Discount:",

    "Subtotal:": "Subtotal:",

    "Envío:": "Shipping:",

    "Ver carrito": "View cart",

    "Últimos Diseños": "Latest Designs",

    "Explorar Tienda": "Explore Shop",

    "Ver Todos": "View All",

    "Ver Detalle": "View Details",

    "Agregado:": "Added:",

    "Categorías": "Categories",

    "No hay productos disponibles": "No products available",

    "Cargando": "Loading",

    "Beneficios Exclusivos": "Exclusive Benefits",

    "Pagar": "Pay",

    "Vaciar": "Clear",

    "Aplicar": "Apply",

    "Quitar": "Remove",

    "Cupón de descuento": "Discount code",

    "Profesor": "Teacher",

    "Nuestra Tienda": "Our Shop",

    "Nuestra Shop": "Our Shop",

    "Explora": "Explore",

    "Ver más": "See more",

    "Anterior": "Previous",

    "Siguiente": "Next",

    "Buscar": "Search",

    "Mis Alumnos": "My Students",

    "Ajustes de Pago": "Payment Settings",

    "Entidad Bancaria": "Bank Entity",

    "Instrucciones de Pago": "Payment Instructions",

    "Copiar": "Copy",

    "Copiado": "Copied",

    "Banco": "Bank",

    "Alias": "Alias",

    "Notas": "Notes",

    "Panel del Profesor": "Professor Panel",

    "Mis Cursos": "My Courses",

    "Administrar": "Manage",

    "Administrando": "Managing",

    "Ajustes de Horarios": "Schedule Settings",

    "Tablero de Horarios": "Schedule Board",

    "Día": "Day",

    "Inicio": "Start",

    "Fin": "End",

    "Frecuencia": "Frequency",

    "Acción": "Action",

    "Añadir": "Add",

    "Eliminar": "Delete",

    "Todo el mes": "Whole month",

    "1 vez por mes": "Once a month",

    "Lunes": "Monday",

    "Martes": "Tuesday",

    "Miércoles": "Wednesday",

    "Jueves": "Thursday",

    "Viernes": "Friday",

    "Sábado": "Saturday",

    "Domingo": "Sunday",

    "nuestra tienda": "our shop",

    "nuestra shop": "our shop",

    "tienda": "shop",

    "inicio": "home",

    "cursos": "courses",

    "mi cuenta": "my account",

    "soporte": "support",

    "ingresar": "login",

    "Mi Perfil": "My Profile",

    "Detalles del Perfil": "Profile Details",

    "Nombre Completo": "Full Name",

    "Correo Electrónico": "Email Address",

    "Teléfono": "Phone",

    "Género": "Gender",

    "Femenino": "Female",

    "Masculino": "Male",

    "Rango": "Rank",

    "Fecha de Registro": "Registration Date",

    "Historial de Compras": "Purchase History",

    "Mis Pedidos": "My Orders",

    "Producto": "Product",

    "Fecha": "Date",

    "Monto": "Amount",

    "Estado": "Status",

    "Entregado": "Delivered",

    "Aún no has realizado compras en nuestra tienda.": "You haven't made any purchases in our shop yet.",

    "Ir a la tienda": "Go to Shop",

    "Aún no estás inscrito en ningún curso": "You are not enrolled in any courses yet",

    "Explora nuestros talleres y aprendé algo nuevo hoy.": "Explore our workshops and learn something new today.",

    "Ver Cursos": "View Courses",

    "Cuota mensual": "Monthly fee",

    "Mes Actual": "Current Month",

    "Mes Siguiente": "Next Month",

    "Reserva": "Reservation",

    "Solicitar Reserva": "Request Reservation",

    "Próximo mes": "Next month",

    "Pagar": "Pay",

    "Ver Ticket": "View Ticket",

    "Instrucciones de Pago": "Payment Instructions",

    "Para abonar este curso, por favor transfiere a la cuenta de": "To pay for this course, please transfer to the account of",

    "tu profesor": "your teacher",

    "El profesor no ha configurado su Alias. Por favor, contáctalo directamente.": "The teacher hasn't configured their Alias. Please contact them directly.",

    "Nota": "Note",

    "Cerrar Sesión": "Logout",

    "Ajustes": "Settings",

    "Miembro Carin+": "Carin+ Member",

    "Sobre este curso": "About this course",

    "Requisitos": "Requirements",

    " ¿Qué incluye?": "What's included?",

    "Horarios": "Schedule",

    "Inscribirse al Curso": "Enroll in Course",

    "Ver más cursos": "View more courses",

    "Curso de Lencería": "Lingerie Course",

    "Aprende a realizar conjuntos de ropa interior a medida.": "Learn to make custom underwear sets.",

    "Curso presencial de 4 clases donde aprenderás a usar la máquina": "In-person course of 4 classes where you will learn to use the machine",

    "Patrones listos para imprimir": "Patterns ready to print",

    "Complementos de costura": "Sewing complements",

    "Diseño y Confección con Pasión": "Design and Tailoring with Passion",

    "Encuentra los mejores moldes digitales y cursos presenciales.": "Find the best digital patterns and in-person courses.",

    "Ver Tienda": "View Shop",

    "Nuestros Cursos": "Our Courses",

    "Productos Destacados": "Featured Products",

    "Próximos Cursos": "Upcoming Courses",

    "Ver beneficios": "View benefits",

    "Descubrí Carin+": "Discover Carin+",

    "Obtené un": "Get a",

    "de descuento en toda la tienda, siempre.": "discount throughout the store, always.",

    "Suscribirse a Carin+": "Subscribe to Carin+",

    "Descuentos premium en toda la tienda": "Premium discounts throughout the store",

    "Miembro Carin+ Activo": "Active Carin+ Member",

    "Enero": "January",

    "Febrero": "February",

    "Marzo": "March",

    "Abril": "April",

    "Mayo": "May",

    "Junio": "June",

    "Julio": "July",

    "Agosto": "August",

    "Septiembre": "September",

    "Octubre": "October",

    "Noviembre": "November",

    "Diciembre": "December",

    "Molde Pantalón Palazzo": "Palazzo Pants Pattern",

    "Moldes Digitales": "Digital Patterns",

    "Clases Presenciales": "In-person Classes",

    "Accesorios": "Accessories",

    "admin": "Admin",

    "tecnico": "Technician",

    "usuario": "User",

    "carin_plus": "Carin+ Member",

    "profesor": "Teacher",

    "Estado de actividad": "Activity status",

    "Activo": "Active",

    "Ausente": "Away",

    "Inactivo": "Inactive",

    "Cerrar sesión": "Logout",

    "Centro de Soporte": "Support Center",

    "Nuevo Ticket": "New Ticket",

    "Asunto": "Subject",

    "Mensaje": "Message",

    "Enviar Ticket": "Send Ticket",

    "Mis Consultas": "My Inquiries",

    "Ver conversación": "View conversation",

    "Abierto": "Open",

    "En curso": "In progress",

    "Cerrado": "Closed",

    "Principal": "Main",

    "Gestión de Cursos": "Course Management",

    "Soporte Técnico": "Technical Support",

    "Avanzado": "Advanced",

    "Dashboard": "Dashboard",

    "Anuncios": "Announcements",

    "Página Inicio": "Home Page",

    "Regiones": "Regions",

    "Productos": "Products",

    "Descuentos": "Discounts",

    "Carin+ Ofertas": "Carin+ Offers",

    "Config. Carrito": "Cart Config",

    "Carin+ Página": "Carin+ Page",

    "Planes Carin+": "Carin+ Plans",

    "Cursos y Alumnos": "Courses & Students",

    "Profesores": "Teachers",

    "Equipo Técnico": "Technical Team",

    "Chat Soporte": "Support Chat",

    "Tickets Kanban": "Tickets Kanban",

    "Gestión Usuarios": "User Management",

    "Ventas": "Sales",

    "Clientes": "Customers",

    "Tickets Abiertos": "Open Tickets",

    "Panel General": "General Panel",

    "Bandeja de Notificaciones": "Notification Inbox",

    "pendientes": "pending",

    "Pagos y Reservas": "Payments & Reservations",

    "AL DÍA": "UP TO DATE",

    "EN REVISIÓN": "IN REVIEW",

    "SOLICITADO": "REQUESTED",

    "RESERVADO": "RESERVED",

    "NO ANOTADO": "NOT ENROLLED",

    "PAGO PENDIENTE": "PENDING PAYMENT",

    "Ahorrarías": "You would save",

    "Seguir comprando": "Continue shopping",

    "Gestión de Anuncios": "Ad Management",

    "Modifica el banner superior de la página": "Modify the top page banner",

    "Página de Inicio": "Home Page",

    "Personaliza textos y configura máximos de destacados": "Customize texts and set featured limits",

    "Nuevo Producto": "New Product",

    "Agrega un producto al inventario": "Add a product to the inventory",

    "Productos de la Tienda": "Shop Products",

    "productos en el catálogo": "products in the catalog",

    "Descuentos y Cupones": "Discounts and Coupons",

    "Gestión general de ofertas de la tienda": "General shop offers management",

    "Carin+ Ofertas Premium": "Carin+ Premium Offers",

    "Configuración global y excepciones": "Global configuration and exceptions",

    "Crear Nuevo Curso": "Create New Course",

    "Añade un nuevo curso o taller al catálogo": "Add a new course or workshop to the catalog",

    "Gestión de Cursos": "Course Management",

    "Administra inscripciones y crea talleres": "Manage enrollments and create workshops",

    "Profesores": "Teachers",

    "Personal docente asignado a cursos": "Teaching staff assigned to courses",

    "Equipo Técnico": "Technical Team",

    "Estado de actividad del personal de soporte": "Support staff activity status",

    "Chat de Soporte Interno": "Internal Support Chat",

    "Comunicación en vivo exclusiva para el equipo": "Live communication exclusive to the team",

    "Kanban de Tickets": "Tickets Kanban",

    "Arrastra y gestiona los casos de soporte": "Drag and manage support cases",

    "Gestión de Usuarios": "User Management",

    "perfiles registrados": "registered profiles",

    "Gestión de Regiones": "Regions Management",

    "Define las regiones disponibles para filtrar productos": "Define regions available to filter products",

    "Config. Carrito": "Cart Config",

    "Ajustes de la experiencia de compra": "Purchase experience settings",

    "Carin+ Página": "Carin+ Page",

    "Edita el contenido de la landing page": "Edit landing page content",

    "Planes de Suscripción": "Subscription Plans",

    "Configura los planes mensuales de Carin+": "Set Carin+ monthly plans",

    "Mis Cursos": "My Courses",

    "Selecciona un curso para administrar alumnos y horarios": "Select a course to manage students and schedules",

    "Administrando": "Managing",

    "Gestiona alumnos y horarios para el curso": "Manage students and schedules for the course",

    "Ajustes de Pago": "Payment Settings",

    "Configura los datos donde los alumnos transferirán el dinero.": "Set the data where students will transfer the money."

};



const i18n_keys = Object.keys(i18n_dict).sort((a, b) => b.length - a.length);



function formatPrice(n) {
    if (typeof n !== 'number') n = parseFloat(n) || 0;
    if (window.App && App._showUSD) {
        const rate = App._dolarRate || 1000;
        return 'US$ ' + (n / rate).toFixed(2);
    }
    return '$' + n.toLocaleString('es-AR') + ' ARS';
}



function translateText(str) {

    if (!window.App || App._currentLanguage !== 'en' || !str) return str;

    let res = str;

    for (let k of i18n_keys) {

        // Use a regex to replace occurrences while being careful with word boundaries or special characters

        // For simplicity and to match the current logic, we'll use a literal split/join but ensure we check for case variations if needed.

        if (res.includes(k)) {

            res = res.split(k).join(i18n_dict[k]);

        }

    }

    return res;

}



function applyTranslations(node) {

    if (!window.App || App._currentLanguage !== 'en') return;

    

    // Process text nodes

    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

    let n;

    const nodesToReplace = [];

    while (n = walker.nextNode()) {

        nodesToReplace.push(n);

    }

    

    nodesToReplace.forEach(n => {

        const text = n.nodeValue;

        if (text && text.trim()) {

            const translated = translateText(text);

            if (translated !== text) {

                n.nodeValue = translated;

            }

        }

    });

    

    // Process attributes

    if (node.querySelectorAll) {

        node.querySelectorAll('input, textarea, select, button').forEach(el => {

            if (el.placeholder) {

                const pt = translateText(el.placeholder);

                if (pt !== el.placeholder) el.placeholder = pt;

            }

            if (el.title) {

                const tt = translateText(el.title);

                if (tt !== el.title) el.title = tt;

            }

            if (el.tagName === 'SELECT') {

                Array.from(el.options).forEach(opt => {

                    const ot = translateText(opt.text);

                    if (ot !== opt.text) opt.text = ot;

                });

            }

        });

    }

}



document.addEventListener('DOMContentLoaded', () => {

    const observer = new MutationObserver(mutations => {

        if (!window.App || App._currentLanguage !== 'en') return;

        mutations.forEach(m => {

            m.addedNodes.forEach(node => {

                if (node.nodeType === Node.ELEMENT_NODE) applyTranslations(node);

                else if (node.nodeType === Node.TEXT_NODE) {

                    const text = node.nodeValue;

                    if (text && text.trim()) {

                        const translated = translateText(text);

                        if (translated !== text) node.nodeValue = translated;

                    }

                }

            });

        });

    });

    observer.observe(document.body, { childList: true, subtree: true });

});

// -------------------------------

class ParticleBackground {

    constructor(canvasId, options = {}) {

        this.canvas = document.getElementById(canvasId);

        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');

        this.particles = [];

        this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        this.targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        this.time = 0;

        this.active = true;

        this.shapes = options.shapes || ['heart', 'flower', 'percent', 'star', 'hashtag'];

        this.shapeIndex = 0;

        this.colors = options.colors || ['#f472b6', '#db2777', '#8b5cf6', '#6366f1', '#fbbf24', '#f59e0b'];



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

        }, 5000);

    }



    resize() {

        this.canvas.width = window.innerWidth;

        this.canvas.height = window.innerHeight;

        this.init();

    }



    init() {

        const count = 3000; 

        this.particles = [];

        for (let i = 0; i < count; i++) {

            this.particles.push({

                x: Math.random() * this.canvas.width,

                y: Math.random() * this.canvas.height,

                targetX: 0,

                targetY: 0,

                size: Math.random() * 2 + 0.5,

                color: this.colors[Math.floor(Math.random() * this.colors.length)],

                angle: Math.random() * Math.PI * 2,

                fillRatio: Math.random() // Used to fill the shape inside

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

            } else if (shape === 'clover') {

                const r = (16 + 8 * Math.sin(4 * t)) * Math.sqrt(p.fillRatio);

                tx = r * Math.cos(t);

                ty = r * Math.sin(t);

            } else if (shape === 'star') {

                // Cartesian interpolation for perfectly straight edges

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



                if (seg === 0) { // Vertical left

                    tx = -8 + offX; ty = pos;

                } else if (seg === 1) { // Vertical right

                    tx = 8 + offX; ty = pos;

                } else if (seg === 2) { // Horizontal top

                    tx = pos; ty = -8 + offY;

                } else { // Horizontal bottom

                    tx = pos; ty = 8 + offY;

                }

            }



            p.targetX = tx * scale;

            p.targetY = ty * scale;

        });

    }



    animate() {

        requestAnimationFrame(() => this.animate());

        if (!this.active) return;

        

        this.time += 0.02;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);



        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;

        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;



        const centerX = this.canvas.width / 2;

        const centerY = this.canvas.height / 2;



        this.particles.forEach((p, i) => {

            const baseX = centerX + p.targetX;

            const baseY = centerY + p.targetY;



            // Suave ondulación para que parezca vivo, no roto

            const globalWaveX = Math.sin(this.time * 1.2 + p.targetY * 0.02) * 5;

            const globalWaveY = Math.cos(this.time * 1.2 + p.targetX * 0.02) * 5;

            

            let finalX = baseX + globalWaveX;

            let finalY = baseY + globalWaveY;

            let currentSize = p.size;

            let currentAlpha = 0.5 + Math.sin(this.time + i * 0.05) * 0.2;



            const dx = finalX - this.mouse.x;

            const dy = finalY - this.mouse.y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            const maxDist = 250; 



            if (dist < maxDist && dist > 0) {

                const force = Math.pow((maxDist - dist) / maxDist, 2); 

                const ripple = Math.sin(force * Math.PI * 3 - this.time * 5); 

                

                // Menos agresivo para no destruir la forma

                const displacement = ripple * force * 25;

                finalX += (dx / dist) * displacement;

                finalY += (dy / dist) * displacement;



                currentSize += Math.max(0, ripple * force * 3);

                currentAlpha += Math.max(0, ripple * force * 0.4);

            }



            p.x += (finalX - p.x) * 0.15; // Retorno s rpido a la forma

            p.y += (finalY - p.y) * 0.15;



            this.ctx.fillStyle = p.color;

            this.ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));

            this.ctx.beginPath();

            this.ctx.arc(p.x, p.y, Math.max(0.1, currentSize), 0, Math.PI * 2);

            this.ctx.fill();

        });

    }

}



const App = {
    _adminTicketCategory: 'Abiertos',
    _adminSelectedTicketId: null,

    init() {
        // Load saved theme
        const savedTheme = localStorage.getItem('carin-theme') || 'light';
        document.documentElement.dataset.theme = savedTheme;
        this._currentTheme = savedTheme;
        this._accountTab = 'cursos';

        this.bg = new ParticleBackground('bg-canvas');
        db.checkMonthTransition();
        this.renderLayout();
        this.handleRouting();
        window.addEventListener('hashchange', () => {
            this.handleRouting();
            this.renderLayout();
        });
        window.addEventListener('scroll', () => this.handleScroll());
        
        setInterval(() => {
            if (window.location.hash === '#/admin/chat' && db.currentUser && ['admin', 'tecnico'].includes(db.currentUser.rango)) {
                this.viewAdmin(document.getElementById('main-content'), 'chat');
            }
        }, 3000);

        // Global click listener to close dropdowns
        document.addEventListener('click', (e) => {
            const regionWrap = document.getElementById('region-selector-wrap');
            const regionDd = document.getElementById('region-dropdown');
            if (regionWrap && regionDd && !regionWrap.contains(e.target)) regionDd.style.display = 'none';

            const userWrap = document.getElementById('user-badge-wrap');
            const userDd = document.getElementById('user-dropdown');
            if (userWrap && userDd && !userWrap.contains(e.target)) userDd.style.display = 'none';
        });
    },

    renderSecHeader(title, subtitle, btn = '') {
        return `
            <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--color-border);padding-bottom:1.5rem;margin-bottom:2rem;">
                <div><h2 style="margin:0">${translateText(title)}</h2><p style="color:var(--color-text-muted);font-size:14px;margin-top:0.25rem;">${translateText(subtitle)}</p></div>
                ${btn}
            </div>`;
    },



    navigateAccountTab(tab) {

        this._accountTab = tab;

        this.navigate('/mi-cuenta');

    },



    toggleTheme() {

        const current = document.documentElement.dataset.theme || 'light';

        const next = current === 'light' ? 'dark' : 'light';

        document.documentElement.dataset.theme = next;

        this._currentTheme = next;

        localStorage.setItem('carin-theme', next);

        this.renderLayout();

    },

    toggleNotifications() {
        const drop = document.getElementById('notifications-dropdown');
        if (drop) {
            const isHidden = drop.style.display === 'none' || !drop.style.display;
            const regionDrop = document.getElementById('region-dropdown');
            if (regionDrop) regionDrop.style.display = 'none';
            drop.style.display = isHidden ? 'block' : 'none';
        }
    },



    renderLayout() {
        const isNotifOpen = document.getElementById('notifications-dropdown')?.style.display === 'block';
        const announcement = db.get('anuncios').find(a => a.activo);

        const user = db.currentUser;

        const config = db.get('rangoConfig');

        const regiones = (db.get('regiones') || []).filter(r => r.activa);

        const currentRegion = this._currentRegion || 'global';

        const currentRegionObj = regiones.find(r => r.id === currentRegion) || regiones[0] || { nombre: 'Global', emoji: '\uD83C\uDF10' };

        const showUSD = this._showUSD || false;



        document.getElementById('announcement-container').innerHTML = announcement ? `

            <div class="announcement-bar" style="background-color: ${announcement.colorFondo}">

                ${announcement.texto}

                <button onclick="this.parentElement.remove()">&times;</button>

            </div>

        ` : '';



        const currentLanguage = this._currentLanguage || 'es';



        const isCarinPlus = window.location.hash === '#/carin-plus';

        const isDark = (document.documentElement.dataset.theme === 'dark') || isCarinPlus;

        const texts = db.get('textosPagina');

        

        // Logo Filter logic for Theme compliance

        let logoFilter = '';

        let logoClass = '';

        

        if (isCarinPlus) {

            // Magenta filter + Glow for Carin+ page

            logoFilter = 'invert(41%) sepia(82%) saturate(3435%) hue-rotate(307deg) brightness(97%) contrast(106%) drop-shadow(0 0 8px rgba(219, 39, 119, 0.6))';

            logoClass = 'logo-glow-anim';

        } else if (isDark) {

            // Full White for Dark Mode

            logoFilter = 'brightness(0) invert(1)';

        } else {

            // Full Black for Light Mode

            logoFilter = 'brightness(0)';

        }



        const logoSize = texts.logoSize || 40;

        const logoHtml = texts.logo ? 

           `<img src="${texts.logo}" alt="Logo" class="${logoClass}" style="height: ${logoSize}px; width: auto; object-fit: contain; filter: ${logoFilter}; transition: all 0.3s;">`

            : `Carin Atelier`;



        const headerStyle = isCarinPlus ? 

           'background-color: rgba(15, 23, 42, 0.85); border-bottom: 1px solid rgba(219, 39, 119, 0.3); color: white;' 

            : '';

        

        const navLinkStyle = (path) => {

            if (!isCarinPlus) return '';

            const isActive = this.isActive(path) !== '';

            if (path === '/carin-plus') return ''; // Using class instead

            return isActive ? 'color: #a855f7; font-weight: 700;' : 'color: #94a3b8;';

        };



        document.getElementById('header-container').innerHTML = `
            <header style="${headerStyle}">
                <!-- Logo y Navegaci\u00F3n Agrupados a la Izquierda -->
                <div style="display:flex; align-items:center; gap: 3rem;">
                    <div style="display:flex; align-items:center; gap: 1rem;">
                        <button id="mobile-menu-btn" onclick="App.toggleMobileMenu()" 
                                style="display:none; background:none; border:none; font-size:24px; cursor:pointer; color:${isCarinPlus ? 'white' : 'var(--color-text)'}; padding:0;">
                            \u2630
                        </button>
                        <a href="#/" class="logo" style="display:flex; align-items:center; ${isCarinPlus ? 'color: white;' : ''}">${logoHtml}</a>
                    </div>
                    
                    <nav class="desktop-nav desktop-only-flex">
                        <ul style="display:flex; align-items:center; gap: 2rem; list-style:none; margin:0; padding:0;">
                            <li><a href="#/" class="${this.isActive('/')}" style="${navLinkStyle('/')}">Inicio</a></li>
                            <li><a href="#/tienda" class="${this.isActive('/tienda')}" style="${navLinkStyle('/tienda')}">Tienda</a></li>
                            <li><a href="#/cursos" class="${this.isActive('/cursos')}" style="${navLinkStyle('/cursos')}">Cursos</a></li>
                            <li><a href="#/carin-plus" class="${this.isActive('/carin-plus')} header-carin-btn"><span class="cp-text">Carin+</span> ✨</a></li>
                            ${user ? `
                                <li><a href="#/mi-cuenta" class="${this.isActive('/mi-cuenta')}" style="${navLinkStyle('/mi-cuenta')}">Mi Cuenta</a></li>
                                ${db.hasAnyRole(user.userId, ['admin', 'tecnico']) ? `<li><a href="#/admin" class="${this.isActive('/admin')}" style="${navLinkStyle('/admin')}">Admin</a></li>` : ''}
                                ${this.isProfessor(user) ? `<li><a href="#/panel-profesor" class="${this.isActive('/panel-profesor')}" style="${navLinkStyle('/panel-profesor')}">Profesor</a></li>` : ''}
                            ` : `
                                <li><a href="#/login" class="${this.isActive('/login')}" style="${navLinkStyle('/login')}">Ingresar</a></li>
                            `}
                        </ul>
                    </nav>
                </div>

                <!-- Acciones a la Derecha -->
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="desktop-only-flex" style="display: flex; gap: 0.5rem; align-items: center;">
                        ${user ? `
                        <div style="position:relative;">
                            <button onclick="App.toggleNotifications()" class="header-icon-btn">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                                ${db.getNotifications(user.userId).filter(n => !n.leida).length > 0 ? `<span class="notif-badge">${db.getNotifications(user.userId).filter(n => !n.leida).length}</span>` : ''}
                            </button>
                        </div>
                        ` : ''}
                        <button onclick="App.toggleTheme()" class="header-icon-btn">
                            ${isDark ? 
                                '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>' : 
                                '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'}
                        </button>
                        <div style="position:relative;">
                            <button onclick="App._toggleRegionDropdown()" class="header-icon-btn">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M2 12H22"/><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"/></svg>
                                <span style="font-size:12px; font-weight:600; margin-left: 4px;">${currentRegionObj.id.substring(0,2)} \u2022 ${showUSD?'USD':'ARS'}</span>
                            </button>
                            
                            <div id="region-dropdown" class="settings-dropdown" style="display:none; position:absolute; top:calc(100% + 10px); right:0; background:var(--color-bg); border:1px solid var(--color-border); border-radius:12px; min-width:240px; box-shadow:var(--shadow-lg); z-index:1000; padding:10px 0; text-align:left;">
                                <div class="dropdown-header" style="padding:10px 16px; font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Idioma / Language</div>
                                <div style="display:flex; gap: 8px; padding: 0 16px;">
                                    <button onclick="App.setLanguage('es')" class="setting-pill ${currentLanguage === 'es' ? 'active' : ''}">ES</button>
                                    <button onclick="App.setLanguage('en')" class="setting-pill ${currentLanguage === 'en' ? 'active' : ''}">EN</button>
                                </div>
                                <div class="dropdown-header" style="padding:10px 16px; font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-top:8px;">Regi\u00F3n de Env\u00EDo</div>
                                <div style="padding: 0 8px;">
                                    ${regiones.map(r => {
                                        const isActive = r.id === currentRegion;
                                        return `
                                        <button onclick="App.setRegion('${r.id}')" class="dropdown-item ${isActive ? 'active' : ''}" style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:10px; background:${isActive ? 'var(--color-primary-light)' : 'none'}; border:none; cursor:pointer; color:${isActive ? 'var(--color-primary)' : 'var(--color-text)'}; font-size:13px; font-weight:${isActive ? '700' : '500'}; transition: all 0.2s;" onmouseover="if(!this.classList.contains('active')) this.style.background='var(--color-bg-alt)'" onmouseout="if(!this.classList.contains('active')) this.style.background='none'">
                                            <span>${r.nombre}</span>
                                            ${isActive ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                        </button>
                                        `;
                                    }).join('')}
                                </div>
                                <div class="dropdown-header" style="padding:10px 16px; font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-top:4px; padding-top:12px; border-top:1px solid var(--color-border);">Moneda</div>
                                <div style="padding: 0 8px; margin-bottom: 8px;">
                                    <button onclick="App.setUSD(false)" class="dropdown-item ${!showUSD ? 'active' : ''}" style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:10px; background:${!showUSD ? 'var(--color-primary-light)' : 'none'}; border:none; cursor:pointer; color:${!showUSD ? 'var(--color-primary)' : 'var(--color-text)'}; font-size:13px; font-weight:${!showUSD ? '700' : '500'}; transition: all 0.2s;" onmouseover="if(!this.classList.contains('active')) this.style.background='var(--color-bg-alt)'" onmouseout="if(!this.classList.contains('active')) this.style.background='none'">
                                        <span>ARS (Pesos Argentinos)</span>
                                        ${!showUSD ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                    </button>
                                    <button onclick="App.setUSD(true)" class="dropdown-item ${showUSD ? 'active' : ''}" style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:10px; background:${showUSD ? 'var(--color-primary-light)' : 'none'}; border:none; cursor:pointer; color:${showUSD ? 'var(--color-primary)' : 'var(--color-text)'}; font-size:13px; font-weight:${showUSD ? '700' : '500'}; transition: all 0.2s;" onmouseover="if(!this.classList.contains('active')) this.style.background='var(--color-bg-alt)'" onmouseout="if(!this.classList.contains('active')) this.style.background='none'">
                                        <span>USD (D\u00F3lares)</span>
                                        ${showUSD ? '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                    </button>
                                </div>
                            </div>
                        </div>
                        ${user ? this.renderUserBadge(user, config) : ''}
                    </div>

                    <button onclick="App.toggleCart()" class="header-icon-btn" style="margin-left: 0.5rem; ${isCarinPlus ? 'background:#db2777; color:white;' : ''}">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                        ${db.cart.length > 0 ? `<span class="cart-badge">${db.cart.length}</span>` : ''}
                    </button>
                </div>
            </header>
        `;

        this.renderMobileDrawer(user, isCarinPlus, navLinkStyle, currentRegionObj, showUSD, regiones);
    },

    renderMobileDrawer(user, isCarinPlus, navLinkStyle, currentRegionObj, showUSD, regiones) {
        let drawer = document.getElementById('mobile-drawer');
        let overlay = document.getElementById('mobile-drawer-overlay');
        const isDark = document.documentElement.dataset.theme === 'dark';

        if (!drawer) {
            drawer = document.createElement('div');
            drawer.id = 'mobile-drawer';
            document.body.appendChild(drawer);
            overlay = document.createElement('div');
            overlay.id = 'mobile-drawer-overlay';
            overlay.onclick = () => this.toggleMobileMenu();
            document.body.appendChild(overlay);
        }

        const cpBanner = isCarinPlus ? 
            `<div class="mobile-cp-banner">\u2728 \u00A1Beneficios Carin+ Activos! \uD83D\uDE80<br><span style="font-size:11px; font-weight:400; opacity:0.9;">Disfrutas de descuentos y contenido exclusivo</span></div>` :
            `<div class="mobile-cp-banner" style="background: var(--color-bg-alt); color: var(--color-text) !important; border: 1.5px dashed #db2777; box-shadow:none;">\uD83D\uDC8E \u00A1\u00DAnete a Carin+!<br><span style="font-size:11px; font-weight:400; color:var(--color-text-muted);">Desbloquea cursos gratis y env\u00EDos prioritarios</span></div>`;

        drawer.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border);">
                <div class="logo" style="font-size:1.2rem; color:var(--color-text);">Carin Atelier</div>
                <button onclick="App.toggleMobileMenu()" style="background:none; border:none; font-size:28px; cursor:pointer; color:var(--color-text);">&times;</button>
            </div>
            
            <nav style="display:flex; flex-direction:column; gap:1rem;">
                <!-- Perfil y Cuenta -->
                ${user ? `
                    <div style="background:var(--color-bg-alt); padding:1.2rem; border-radius:16px; border:1px solid var(--color-border); margin-bottom:0.5rem;">
                        <div style="display:flex; align-items:center; gap:15px; margin-bottom:1rem;">
                            <img src="${user.foto || 'https://www.gravatar.com/avatar/0?d=mp'}" style="width:50px; height:50px; border-radius:50%; border:2px solid var(--color-primary); box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <div>
                                <div style="font-weight:800; font-size:16px; color:var(--color-text);">${user.nombre}</div>
                                <div style="font-size:11px; color:var(--color-primary); font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">${user.rango}</div>
                            </div>
                        </div>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                            <a href="#/mi-cuenta" onclick="App.toggleMobileMenu()" class="btn btn-sm" style="background:var(--color-bg); border:1px solid var(--color-border); font-size:11px; padding:8px;">\uD83D\uDCDD Mi Cuenta</a>
                            ${db.hasAnyRole(user.userId, ['admin', 'tecnico']) ? `<a href="#/admin" onclick="App.toggleMobileMenu()" class="btn btn-sm btn-primary" style="font-size:11px; padding:8px;">\uD83D\uDEE0\uFE0F Admin</a>` : ''}
                        </div>
                    </div>
                ` : `
                    <a href="#/login" onclick="App.toggleMobileMenu()" class="btn" style="width:100%; padding:14px; border-radius:12px; background:#1e293b; color:white; font-weight:700; text-decoration:none; display:block; text-align:center; border:none; box-shadow:0 4px 12px rgba(0,0,0,0.15);">\uD83D\uDD11 Ingresar / Registrarse</a>
                `}

                ${cpBanner}

                <!-- Navegaci\u00F3n -->
                <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.5rem;">
                    <a href="#/" onclick="App.toggleMobileMenu()" style="${navLinkStyle('/')} text-decoration:none; padding:10px 14px; border-radius:10px; display:flex; align-items:center; gap:12px;">\uD83C\uDFE0 Inicio</a>
                    <a href="#/tienda" onclick="App.toggleMobileMenu()" style="${navLinkStyle('/tienda')} text-decoration:none; padding:10px 14px; border-radius:10px; display:flex; align-items:center; gap:12px;">\uD83D\uDECD\uFE0F Tienda</a>
                    <a href="#/cursos" onclick="App.toggleMobileMenu()" style="${navLinkStyle('/cursos')} text-decoration:none; padding:10px 14px; border-radius:10px; display:flex; align-items:center; gap:12px;">\uD83C\uDF93 Cursos</a>
                    <a href="#/carin-plus" onclick="App.toggleMobileMenu()" class="header-carin-btn" style="margin:8px 0; text-align:center; padding:12px; border-radius:12px;"><span class="cp-text">Carin+ Premium</span> \u2728</a>
                </div>

                <hr style="border:0; border-top:1px solid var(--color-border); margin:0.5rem 0;">

                <!-- Preferencias -->
                <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.2rem;">Configuraci\u00F3n</div>
                
                <div style="display:flex; flex-direction:column; gap:0.8rem;">
                    <div style="display:flex; flex-direction:column; gap:0.4rem;">
                        <span style="font-size:12px; font-weight:600; color:var(--color-text-muted);">Regi\u00F3n de env\u00EDo:</span>
                        <select onchange="App.setRegion(this.value); App.toggleMobileMenu();" style="width:100%; padding:10px; border-radius:10px; background:var(--color-bg-alt); border:1px solid var(--color-border); color:var(--color-text); font-size:13px; font-weight:600;">
                            ${regiones.map(r => `<option value="${r.id}" ${r.id === currentRegionObj.id ? 'selected' : ''}>${r.emoji} ${r.nombre}</option>`).join('')}
                        </select>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:0.4rem;">
                        <span style="font-size:12px; font-weight:600; color:var(--color-text-muted);">Moneda:</span>
                        <div style="display:flex; gap:8px;">
                            <button onclick="App.setUSD(false); App.toggleMobileMenu();" style="flex:1; padding:10px; border-radius:10px; border:1.5px solid ${!showUSD ? 'var(--color-primary)' : 'var(--color-border)'}; background:${!showUSD ? 'var(--color-primary-light)' : 'var(--color-bg)'}; color:var(--color-text); font-weight:${!showUSD ? '800' : '500'}; font-size:12px;">ARS</button>
                            <button onclick="App.setUSD(true); App.toggleMobileMenu();" style="flex:1; padding:10px; border-radius:10px; border:1.5px solid ${showUSD ? 'var(--color-primary)' : 'var(--color-border)'}; background:${showUSD ? 'var(--color-primary-light)' : 'var(--color-bg)'}; color:var(--color-text); font-weight:${showUSD ? '800' : '500'}; font-size:12px;">USD</button>
                        </div>
                    </div>

                    <div class="mode-toggle-row" onclick="App.toggleTheme(); App.toggleMobileMenu();" style="cursor:pointer;">
                        <span style="font-size:13px;">Modo oscuro: <span class="${isDark ? 'mode-status-active' : 'mode-status-inactive'}">${isDark ? 'Activado' : 'Desactivado'}</span></span>
                        <span>${isDark ? '🌙' : '☀️'}</span>
                    </div>
                </div>

                ${user ? `
                    <hr style="border:0; border-top:1px solid var(--color-border); margin:0.5rem 0;">
                    <button onclick="App.handleLogout(); App.toggleMobileMenu();" style="text-align:left; background:none; border:none; color:#ef4444; font-weight:800; cursor:pointer; padding:10px 14px; font-size:14px; display:flex; align-items:center; gap:10px;">🚪 Cerrar Sesión</button>
                ` : ''}
            </nav>
        `;
    },

    toggleMobileMenu() {
        const drawer = document.getElementById('mobile-drawer');
        const overlay = document.getElementById('mobile-drawer-overlay');
        if (drawer && overlay) {
            drawer.classList.toggle('active');
            overlay.classList.toggle('active');
        }
    },



    renderUserBadge(user, config) {
        const c = config[user.rango] || { c1: '#ccc', c2: '#999', text: '#fff' };
        const isCarinPlusPage = window.location.hash === '#/carin-plus';
        const isCarinPlusUser = user && db.hasRole(user.userId, 'carin_plus');
        const isDark = document.documentElement.dataset.theme === 'dark';

        const myTickets = db.get('tickets').filter(t => t.userId === user.userId);
        const unreadTickets = myTickets.filter(t =>
            t.mensajes.some(m => m.esEquipo && (!t.lastReadByUser || new Date(m.fecha) > new Date(t.lastReadByUser)))
        ).length;

        const triggerTextColor = isCarinPlusPage ? 'color: white !important;' : 'color: var(--color-text);';
        const dropBg = isDark ? 'var(--color-bg)' : 'white';
        const dropText = isDark ? 'var(--color-text)' : '#1e293b';
        const dropBorder = isDark ? 'var(--color-border)' : '#e2e8f0';
        const dropAlt = isDark ? 'var(--color-bg-alt)' : '#f8fafc';
        const dropMuted = isDark ? 'var(--color-text-muted)' : '#64748b';
        const hoverBg = isDark ? 'rgba(255,255,255,0.06)' : '#f1f5f9';
        const dangerHoverBg = isDark ? 'rgba(239,68,68,0.12)' : '#fef2f2';

        return `
            <div class="user-badge" id="user-badge-wrap" style="position:relative;">
                <button
                    onclick="document.getElementById('user-dropdown').style.display = document.getElementById('user-dropdown').style.display === 'none' ? 'block' : 'none'"
                    style="background:none; border:none; cursor:pointer; display:flex; align-items:center; gap:8px; padding:6px 8px; border-radius:8px; transition:background 0.15s;"
                    onmouseover="this.style.background='${isCarinPlusPage ? 'rgba(255,255,255,0.08)' : hoverBg}'"
                    onmouseout="this.style.background='transparent'">
                    <div style="width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,${c.c1},${c.c2}); display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:800; color:${c.text}; box-shadow:0 2px 8px rgba(0,0,0,0.2); flex-shrink:0;">
                        ${user.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:flex-start; gap:1px;">
                        <span style="font-size:13px; font-weight:700; line-height:1; ${triggerTextColor}">${user.nombre.split(' ')[0]}</span>
                        <span style="font-size:10px; font-weight:700; line-height:1; background:linear-gradient(90deg,${c.c1},${c.c2}); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-transform:uppercase; letter-spacing:0.5px;">
                            ${isCarinPlusUser ? '\u2728 Carin+' : user.rango}
                        </span>
                    </div>
                    <svg width="12" height="12" fill="none" stroke="${isCarinPlusPage ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted)'}" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                    ${unreadTickets > 0 ? `<div style="position:absolute; top:-2px; right:-4px; background:#ef4444; color:white; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:900; border:2px solid var(--color-bg);">${unreadTickets}</div>` : ''}
                </button>

                <div id="user-dropdown" style="position:absolute; top:calc(100% + 10px); right:0; background:${dropBg}; border:1px solid ${dropBorder}; border-radius:14px; min-width:260px; box-shadow:0 20px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1); z-index:500; display:none; overflow:hidden; backdrop-filter:blur(8px);">
                    <div style="padding:16px 18px 12px; background:${dropAlt}; border-bottom:1px solid ${dropBorder}; display:flex; align-items:center; gap:12px;">
                        <div style="width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,${c.c1},${c.c2}); display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:900; color:${c.text}; flex-shrink:0;">
                            ${user.nombre.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div style="font-weight:800; font-size:15px; color:${dropText};">${user.nombre}</div>
                            <div style="font-size:11px; color:${dropMuted};">${user.email}</div>
                        </div>
                    </div>

                    ${!isCarinPlusUser ? `
                    <a href="#/carin-plus" onclick="document.getElementById('user-dropdown').style.display='none'" style="display:flex; align-items:center; gap:12px; padding:12px 18px; text-decoration:none; color:${dropText}; font-size:13px; font-weight:600; background:linear-gradient(90deg,#fdf2f8,#fce7f3); border-bottom:1px solid #fbcfe8;">
                        <svg width="20" height="20" fill="none" stroke="#be185d" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <div>
                            <div style="color:#be185d;">Suscribirse a Carin+</div>
                            <div style="font-size:10px; color:#db2777; font-weight:400;">Descuentos premium en toda la tienda</div>
                        </div>
                    </a>` : `
                    <div style="display:flex; align-items:center; gap:12px; padding:12px 18px; background:linear-gradient(90deg,#fdf2f8,#fce7f3); border-bottom:1px solid #fbcfe8;">
                        <svg width="20" height="20" fill="none" stroke="#be185d" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <div style="font-size:12px; color:#be185d; font-weight:700;">Miembro Carin+ Activo</div>
                    </div>`}

                    <div style="padding:6px 0;">
                        <a href="#/mi-cuenta" onclick="document.getElementById('user-dropdown').style.display='none'"
                            style="display:flex; align-items:center; gap:12px; padding:11px 18px; text-decoration:none; color:${dropText}; font-size:13px; font-weight:600; transition:background 0.15s;"
                            onmouseover="this.style.background='${hoverBg}'"
                            onmouseout="this.style.background='transparent'">
                            <span style="width:32px; height:32px; border-radius:8px; background:${isDark ? 'rgba(255,255,255,0.07)' : '#f1f5f9'}; display:flex; align-items:center; justify-content:center; font-size:16px;">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </span>
                            <div>
                                <div>Mi Cuenta</div>
                                <div style="font-size:11px; color:${dropMuted}; font-weight:400;">Pedidos, datos personales</div>
                            </div>
                        </a>

                        ${db.hasAnyRole(user.userId, ['admin', 'owner']) ? `
                        <a href="#/admin" onclick="document.getElementById('user-dropdown').style.display='none'"
                            style="display:flex; align-items:center; gap:12px; padding:11px 18px; text-decoration:none; color:var(--color-primary); font-size:13px; font-weight:700; transition:background 0.15s;"
                            onmouseover="this.style.background='${hoverBg}'"
                            onmouseout="this.style.background='transparent'">
                            <span style="width:32px; height:32px; border-radius:8px; background:var(--color-primary-light); display:flex; align-items:center; justify-content:center; font-size:16px;">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                            </span>
                            <div>
                                <div>Panel Admin</div>
                                <div style="font-size:11px; color:var(--color-primary); font-weight:400; opacity:0.8;">Gesti\u00F3n de tienda y cursos</div>
                            </div>
                        </a>
                        ` : ''}

                        <a href="javascript:void(0)" onclick="App.navigateAccountTab('cursos'); document.getElementById('user-dropdown').style.display='none'"
                            style="display:flex; align-items:center; gap:12px; padding:11px 18px; text-decoration:none; color:${dropText}; font-size:13px; font-weight:600; transition:background 0.15s;"
                            onmouseover="this.style.background='${hoverBg}'"
                            onmouseout="this.style.background='transparent'">
                            <span style="width:32px; height:32px; border-radius:8px; background:${isDark ? 'rgba(255,255,255,0.07)' : '#f1f5f9'}; display:flex; align-items:center; justify-content:center; font-size:16px;">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                            </span>
                            <div>
                                <div>Mis Cursos</div>
                                <div style="font-size:11px; color:${dropMuted}; font-weight:400;">Classroom y materiales</div>
                            </div>
                        </a>

                        <a href="#/soporte" onclick="document.getElementById('user-dropdown').style.display='none'"
                            style="display:flex; align-items:center; gap:12px; padding:11px 18px; text-decoration:none; color:${dropText}; font-size:13px; font-weight:600; transition:background 0.15s; position:relative;"
                            onmouseover="this.style.background='${hoverBg}'"
                            onmouseout="this.style.background='transparent'">
                            <span style="width:32px; height:32px; border-radius:8px; background:${isDark ? 'rgba(255,255,255,0.07)' : '#f1f5f9'}; display:flex; align-items:center; justify-content:center; font-size:16px;">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            </span>
                            <div>
                                <div>Soporte T\u00E9cnico</div>
                                <div style="font-size:11px; color:${dropMuted}; font-weight:400;">${myTickets.length} ticket${myTickets.length !== 1 ? 's' : ''} abierto${myTickets.length !== 1 ? 's' : ''}</div>
                            </div>
                            ${unreadTickets > 0 ? `<div style="margin-left:auto; background:#ef4444; color:white; font-size:10px; font-weight:900; min-width:20px; height:20px; border-radius:10px; display:flex; align-items:center; justify-content:center; padding:0 5px;">${unreadTickets}</div>` : ''}
                        </a>
                    </div>

                    <div style="padding:6px 0; border-top:1px solid ${dropBorder};">
                        <button onclick="App.handleLogout()"
                            style="display:flex; align-items:center; gap:12px; width:100%; padding:11px 18px; background:transparent; border:none; cursor:pointer; color:#ef4444; font-size:13px; font-weight:700; text-align:left; transition:background 0.15s;"
                            onmouseover="this.style.background='${dangerHoverBg}'"
                            onmouseout="this.style.background='transparent'">
                            <span style="width:32px; height:32px; border-radius:8px; background:${isDark ? 'rgba(239,68,68,0.12)' : '#fef2f2'}; display:flex; align-items:center; justify-content:center; font-size:16px;">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                            </span>
                            <span>Cerrar Sesi\u00F3n</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },



    _toggleRegionDropdown() {
        const dd = document.getElementById('region-dropdown');
        if (dd) {
            const isHidden = dd.style.display === 'none' || !dd.style.display;
            const notifDrop = document.getElementById('notifications-dropdown');
            if (notifDrop) notifDrop.style.display = 'none';
            dd.style.display = isHidden ? 'block' : 'none';
        }
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

        document.getElementById('region-dropdown').style.display = 'none';

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

            this._dolarRate = 1200; // fallback

        }

    },



    renderFooter() {

        const texts = db.get('textosPagina');

        document.getElementById('footer-container').innerHTML = `

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



    navigate(path) {

        window.location.hash = path;

    },



    isActive(path) {

        if (path === '/' && (!window.location.hash || window.location.hash === '#/')) return 'active';

        return window.location.hash.startsWith('#' + path) && path !== '/' ? 'active' : '';

    },



    isProfessor(user) {

        if (!user) return false;

        const isAdmin = (user.rango === 'admin' || user.rango === 'owner' || (user.roles && user.roles.includes('admin')));

        return isAdmin || db.get('profesores').some(p => p.userId === user.userId);

    },



    handleRouting() {

        let path = window.location.hash.slice(1) || '/';

        const queryIndex = path.indexOf('?');

        const cleanPath = queryIndex !== -1 ? path.slice(0, queryIndex) : path;

        const main = document.getElementById('main-content');

        

        const isHome = cleanPath === '/';

        if (this.bg && this.bg.canvas) {

            this.bg.active = isHome;

            this.bg.canvas.style.display = isHome ? 'block' : 'none';

        }

        

        if (isHome) this.viewHome(main);

        else if (cleanPath === '/tienda') this.viewShop(main);

        else if (cleanPath === '/cursos') this.viewCourses(main);

        else if (cleanPath.startsWith('/cursos/')) {

            const cid = cleanPath.split('/')[2];

            this.viewCourseDetail(main, cid);

        }

        else if (cleanPath === '/login') this.viewLogin(main);

        else if (cleanPath === '/mi-cuenta') this.viewAccount(main);

        else if (cleanPath === '/soporte') this.viewSupport(main);

        else if (cleanPath === '/panel-profesor') this.viewProfessorPanel(main);

        else if (cleanPath === '/carrito') this.viewCartPage(main);

        else if (cleanPath === '/carin-plus') this.viewCarinPlusPage(main);

        else if (cleanPath.startsWith('/producto/')) {

            const pid = cleanPath.split('/')[2];

            this.viewProduct(main, pid);

        }

        else if (cleanPath.startsWith('/admin')) {

            const section = cleanPath.split('/')[2] || 'dashboard';

            this.viewAdmin(main, section);

        }

        else main.innerHTML = '<div class="container" style="margin-top:5rem;"><h1>404 - No encontrado</h1><a href="#/" class="btn btn-dark">Volver</a></div>';

        

        // Render header links active state

        const links = document.querySelectorAll('header nav a');

        links.forEach(l => {

            const href = l.getAttribute('href').slice(1) || '/';

            if (path.startsWith(href) && href !== '/') l.classList.add('active');

            else if (path === '/' && href === '/') l.classList.add('active');

            else l.classList.remove('active');

        });

        

        window.scrollTo(0,0);

    },



    viewHome(main) {

        const texts = db.get('textosPagina');

        const config = db.get('configInicio');

        const featured = db.get('productos').filter(p => p.destacado && p.visible).slice(0, 6);

        const courses = db.get('cursos').filter(c => c.destacado).slice(0, config.maxCursos || 4);

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };

        const cfgPage = db.get('configCarinPlusPagina') || {};

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');



        const carinBanner = !isCarinPlus ? `

        <section style="margin-top:5rem;">

            <div class="container">

                <div style="background:linear-gradient(135deg,#ec4899,#be185d); border-radius:var(--radius-md); padding:3rem; text-align:center; color:white; position:relative; overflow:hidden;">

                    <div style="position:absolute; top:-30px; right:-30px; font-size:8rem; opacity:0.1; pointer-events:none;">✨</div>

                    <div class="badge-premium" style="display:inline-block; margin-bottom:1rem; background:rgba(255,255,255,0.25); font-size:10px;">MEMBERSHIP</div>

                    <h2 style="font-size:2.5rem; font-weight:900; margin-bottom:0.75rem;">Descubrí Carin+</h2>

                    <p style="font-size:1rem; opacity:0.9; max-width:500px; margin:0 auto 2rem;">${cfgPage.subtitulo || `Obtenun ${configCarin.descuentoGlobal}% de descuento en toda la tienda, siempre.`}</p>

                    <a href="#/carin-plus" class="btn btn-dark" style="background:var(--color-bg); color:#be185d; border:none; padding:12px 28px; font-size:0.95rem; font-weight:800;">

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

                <div class="product-grid featured-scroll">
                    ${featured.map(p => this.renderProductCard(p)).join('')}
                </div>

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



    viewShop(main) {

        const currentRegion = this._currentRegion || 'global';

        const regiones = (db.get('regiones') || []).filter(r => r.activa);

        const currentRegionObj = regiones.find(r => r.id === currentRegion) || { nombre: 'Global', emoji: ' ?' };

        

        // Initial state for filters

        this._shopFilters = this._shopFilters || { search: '', category: 'all', minPrice: '', maxPrice: '', sortBy: 'default' };

        this._shopPage = this._shopPage || 0;

        this._accountTab = 'cursos';

        const itemsPerPage = 20; // 4 cols   5 rows



        main.innerHTML = `

            <section class="shop-hero">
                <div class="shop-hero-waves"></div>
                <div class="container" style="position:relative; z-index:2; text-align:center;">
                    <h1 style="font-size:3rem; font-weight:900; margin:0 0 0.5rem 0; letter-spacing:-1.5px; color:var(--color-text); line-height:1.2;">Nuestra Tienda</h1>
                    <p style="font-size:1rem; color:var(--color-text-muted); max-width:600px; margin:0 auto; font-weight:500;">🌎 Mostrando productos en <b>${currentRegionObj.nombre}</b> \u2022 <a href="#" onclick="event.preventDefault(); document.getElementById('region-dropdown').style.display='block'" style="color:var(--color-primary); text-decoration:underline; font-weight:700;">Cambiar regi\u00F3n</a></p>
                </div>
            </section>

            <div class="container" style="margin-bottom: 4rem;">
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: 2rem; padding: 1rem 0; border-bottom: 1px solid var(--color-border); gap: 1rem;">
                    <label style="font-size:12px; font-weight:700; color:var(--color-text-muted); text-transform:uppercase;">Ordenar por:</label>
                    <select onchange="App._shopFilters.sortBy=this.value; App.applyShopFilters();" style="padding:10px 16px; border:1px solid var(--color-border); border-radius:12px; font-size:13px; background:var(--color-bg); color:var(--color-text); cursor:pointer; min-width:200px; box-shadow:var(--shadow-sm);">
                        <option value="default" ${this._shopFilters.sortBy==='default'?'selected':''}>Recomendados</option>
                        <option value="price_asc" ${this._shopFilters.sortBy==='price_asc'?'selected':''}>Precio: Menor a Mayor</option>
                        <option value="price_desc" ${this._shopFilters.sortBy==='price_desc'?'selected':''}>Precio: Mayor a Menor</option>
                    </select>
                </div>

                <!-- Controles M\u00F3viles (B\u00FAsqueda + Filtros) -->
                <div class="shop-controls-mobile">
                    <div style="flex:1; position:relative;">
                        <input type="text" placeholder="Buscar productos..." value="${this._shopFilters.search}" onkeyup="App._shopFilters.search=this.value; App.applyShopFilters()" style="width:100%; padding:12px 12px 12px 40px; border-radius:12px; border:1px solid var(--color-border); background:var(--color-bg-alt); color:var(--color-text); font-size:14px;">
                        <svg style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--color-text-muted);" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    </div>
                    <button onclick="document.querySelector('.shop-sidebar').classList.toggle('active')" class="btn-filter-mobile">Filtros</button>
                </div>

                <div class="shop-main-layout">
                    <aside class="shop-sidebar">
                        ${this.renderShopSidebar()}
                    </aside>

                    <div>

                        <div id="shop-grid" class="product-grid">

                            <!-- Products loaded via JS -->

                        </div>

                        <div id="shop-pagination" style="margin-top:3rem; display:flex; justify-content:center; gap:0.5rem;">

                            <!-- Pagination buttons -->

                        </div>

                    </div>

                </div>

            </div>

        `;

        

        // Initial render

        this.applyShopFilters();

    },



    renderShopSidebar() {

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const allCats = db.get('categoriasStore') || [];

        const parents = allCats.filter(c => !c.parentId);

        const f = this._shopFilters || {};



        let html = `

            <div style="margin-bottom:2rem;">

                <input type="text" id="sf-search" placeholder="   Buscar producto..." value="${f.search}" onkeyup="App._shopFilters.search=this.value; App.applyShopFilters()" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm); font-size:13px;">

            </div>



            <div style="margin-bottom:2rem;">

                <h4 style="margin-top:0; margin-bottom:1rem; font-size:14px; text-transform:uppercase; color:var(--color-text-muted); font-weight:800;">Categorías</h4>

                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.5rem; font-size:14px;">

                    <li>

                        <a href="#" onclick="event.preventDefault(); App._shopFilters.category='all'; App.applyShopFilters(); App.viewShop(document.getElementById('main-content'))" style="text-decoration:none; color:${f.category==='all'?'var(--color-primary)':'var(--color-text)'}; font-weight:${f.category==='all'?'700':'400'};">Todas las categorías</a>

                    </li>

                    ${parents.map(p => {

                        const subcats = allCats.filter(s => s.parentId === p.id);

                        return `

                            <li style="margin-top:0.5rem;">

                                <div style="font-weight:700; color:var(--color-text); margin-bottom:0.25rem;">${p.nombre}</div>

                                ${subcats.length > 0 ? `

                                    <ul style="list-style:none; padding-left:1rem; margin:0; display:flex; flex-direction:column; gap:0.25rem;">

                                        ${subcats.map(s => `

                                            <li><a href="#" onclick="event.preventDefault(); App._shopFilters.category='${s.id}'; App.applyShopFilters(); App.viewShop(document.getElementById('main-content'))" style="text-decoration:none; color:${f.category===s.id?'var(--color-primary)':'var(--color-text-muted)'}; font-weight:${f.category===s.id?'700':'400'}; transition:color 0.2s;">${s.nombre}</a></li>

                                        `).join('')}

                                    </ul>

                                ` : ''}

                            </li>

                        `;

                    }).join('')}

                </ul>

            </div>



            <div style="margin-bottom:2rem;">

                <h4 style="margin-top:0; margin-bottom:1rem; font-size:14px; text-transform:uppercase; color:var(--color-text-muted); font-weight:800;">Precio ($ARS)</h4>

                <div style="display:flex; gap:0.5rem; align-items:center;">

                    <input type="number" id="sf-min" placeholder="Mín" value="${f.minPrice}" onchange="App._shopFilters.minPrice=this.value; App.applyShopFilters()" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); font-size:12px;">

                    <span style="color:var(--color-text-muted);">-</span>

                    <input type="number" id="sf-max" placeholder="Máx" value="${f.maxPrice}" onchange="App._shopFilters.maxPrice=this.value; App.applyShopFilters()" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); font-size:12px;">

                </div>

            </div>

        `;



        if (!isCarinPlus) {

            html += `

                <div style="background:var(--color-pink-bg); border:1px solid var(--color-pink-border); border-radius:var(--radius-md); padding:1.5rem; text-align:center;">

                    <div style="font-size:2rem; margin-bottom:0.5rem;">💡</div>

                    <h4 style="margin:0 0 0.5rem 0; color:var(--color-pink-text);">¿Quieres pagar menos?</h4>

                    <p style="font-size:12px; color:var(--color-pink-text); margin-bottom:1rem; opacity:0.8;">Suscríbete a <b>Carin+</b> y obtén descuentos exclusivos en toda la tienda.</p>

                    <a href="#/carin-plus" class="btn btn-dark" style="font-size:11px; padding:6px 12px; background:var(--color-pink-text); border-color:var(--color-pink-text); width:100%; color:white;">Conocéer Carin+</a>

                </div>

            `;

        }



        return html;

    },



    applyShopFilters() {

        const currentRegion = this._currentRegion || 'global';

        const f = this._shopFilters;

        const query = f.search.toLowerCase();

        

        let products = db.get('productos').filter(p => p.visible && (!p.region || p.region === 'global' || p.region === currentRegion));



        // 1. Search

        if (query) {

            products = products.filter(p => p.nombre.toLowerCase().includes(query) || (p.descCorta && p.descCorta.toLowerCase().includes(query)));

        }



        // 2. Category

        if (f.category !== 'all') {

            products = products.filter(p => p.categoriaId === f.category || p.subcategoriaId === f.category || p.cat === f.category); // fallback to old cat

        }



        // 3. Price

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 0 };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0 };

        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;



        products = products.filter(p => {

            const baseDesc = p.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = p.carinPlusDescuento || 0;

            const carinDiscount = (p.isCarinExtraOffer && extraDesc > 0) ? extraDesc : baseDesc;

            const totalCarinDesc = p.excluirCarinPlus ? 0 : carinDiscount;

            const totalDesc = (isCarinPlus ? totalCarinDesc : 0) + globalSaleDesc;

            const pFinal = totalDesc > 0 ? Math.round(p.precio * (1 - (totalDesc / 100))) : p.precio;



            if (f.minPrice && pFinal < parseInt(f.minPrice)) return false;

            if (f.maxPrice && pFinal > parseInt(f.maxPrice)) return false;

            return true;

        });



        // 4. Sort: CarinExtraOffer first, then by Price
        products.sort((a, b) => {
            // Priority 1: Products of the Month always at the top
            if (a.isCarinExtraOffer && !b.isCarinExtraOffer) return -1;
            if (!a.isCarinExtraOffer && b.isCarinExtraOffer) return 1;

            // Priority 2: User defined sort (Price)
            const sortBy = f.sortBy || 'default';
            if (sortBy === 'price_asc') return a.precio - b.precio;
            if (sortBy === 'price_desc') return b.precio - a.precio;

            return 0; // maintain original order otherwise
        });



        const grid = document.getElementById('shop-grid');

        const pagContainer = document.getElementById('shop-pagination');

        if (!grid) return;



        const itemsPerPage = 20; // 4 cols   5 rows

        const totalItems = products.length;

        const totalPages = Math.ceil(totalItems / itemsPerPage);

        

        if (this._shopPage >= totalPages && totalPages > 0) this._shopPage = totalPages - 1;

        if (this._shopPage < 0) this._shopPage = 0;



        const start = this._shopPage * itemsPerPage;

        const pagedProducts = products.slice(start, start + itemsPerPage);

        

        grid.innerHTML = pagedProducts.length ?

           pagedProducts.map(p => this.renderProductCard(p)).join('')

            : `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--color-text-muted);"><div style="font-size:3rem; margin-bottom:1rem;">🔍</div><p>No se encontraron productos con estos filtros.</p><button class="btn btn-default" style="margin-top:1rem;" onclick="App._shopFilters={search:'',category:'all',minPrice:'',maxPrice:''}; App._shopPage=0; App.viewShop(document.getElementById('main-content'))">Limpiar filtros</button></div>`;



        if (pagContainer) {

            if (totalPages > 1) {

                const cur = this._shopPage;

                let phtml = `<div style="display:flex; align-items:center; gap:0.5rem;">`;

                

                // Prev button

                phtml += `<button onclick="App._shopPage=${Math.max(0,cur-1)}; App.applyShopFilters(); window.scrollTo(0,0);" class="btn btn-default" style="padding:0 14px; height:40px; font-size:18px; display:flex; align-items:center;" ${cur===0?'disabled':''}>‹</button>`;



                // Page numbers with ellipsis

                for (let i = 0; i < totalPages; i++) {

                    const isActive = i === cur;

                    if (totalPages <= 7 || Math.abs(i - cur) <= 1 || i === 0 || i === totalPages - 1) {

                        phtml += `<button onclick="App._shopPage=${i}; App.applyShopFilters(); window.scrollTo(0,0);" class="btn ${isActive ? 'btn-dark' : 'btn-default'}" style="min-width:40px; height:40px; padding:0; display:flex; align-items:center; justify-content:center; font-weight:700;">${i+1}</button>`;

                    } else if ((i === 1 && cur > 3) || (i === totalPages-2 && cur < totalPages-4)) {

                        phtml += `<span style="padding:0 6px; color:var(--color-text-muted);"> </span>`;

                    }

                }



                // Next button

                phtml += `<button onclick="App._shopPage=${Math.min(totalPages-1,cur+1)}; App.applyShopFilters(); window.scrollTo(0,0);" class="btn btn-default" style="padding:0 14px; height:40px; font-size:18px; display:flex; align-items:center;" ${cur===totalPages-1?'disabled':''}>›</button>`;

                phtml += `<span style="font-size:12px; color:var(--color-text-muted); margin-left:0.5rem;">${start+1}-${Math.min(start+itemsPerPage,totalItems)} de ${totalItems}</span>`;

                phtml += '</div>';

                pagContainer.innerHTML = phtml;

            }

        }

    },



    renderProductCard(p) {

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15, tituloBadge: 'CARIN+' };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0, titulo: '' };



        const userId = db.currentUser?.userId;

        const ownedProductIds = userId ? db.get('compras').filter(c => c.userId === userId).map(c => c.productId) : [];

        const alreadyOwned = ownedProductIds.includes(p.id);



        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;

        const baseDesc = p.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 15);
        const extraDesc = p.carinPlusDescuento || 0;
        const discountToApply = (p.isCarinExtraOffer && extraDesc > 0) ? extraDesc : baseDesc;

        const pFinalCarin = Math.round(p.precio * (1 - (discountToApply / 100)));



        let badgeHtml = '';

        if (p.isCarinExtraOffer) {

            badgeHtml += `

                <div style="position:absolute; top:0; left:0; right:0; background:linear-gradient(to right, #ec4899, #be185d); color:white; padding:6px; text-align:center; font-size:9px; font-weight:900; z-index:11; text-transform:uppercase; letter-spacing:1px; box-shadow: 0 2px 10px rgba(190,24,93,0.3);">

                    CARIN+ PRODUCTO DEL MES

                </div>

            `;

        }

        if (alreadyOwned) {

            badgeHtml += `<span style="position:absolute; top:${p.isCarinExtraOffer ? '30px' : '0.75rem'}; left:0.75rem; z-index:10; background:rgba(21,128,61,0.9); color:white; padding:3px 10px; border-radius:999px; font-size:11px; font-weight:800; backdrop-filter:blur(4px);">✅ Ya lo tenés</span>`;

        }



        const priceHtml = alreadyOwned ?

           `<div style="font-size:13px; font-weight:700; color:var(--color-success-text); display:flex; align-items:center; gap:6px;"><span style="font-size:16px;"> </span>✅ Ya lo compraste</div>`

            : `

                <div style="display:flex; flex-direction:column; gap:4px;">

                    ${!p.excluirCarinPlus ? `

                        <div style="display:flex; align-items:center; gap:8px;">

                            <span style="font-size:1.1rem; font-weight:900; color:#db2777;">${formatPrice(pFinalCarin)}</span>

                            <span style="font-size:9px; font-weight:800; color:#db2777; padding:2px 6px; border:1px solid; border-image:linear-gradient(to right, #ec4899, #d946ef) 1; text-transform:uppercase;">${discountToApply}% CON CARIN+</span>

                        </div>

                    ` : ''}

                    <div style="font-size:0.9rem; font-weight:600; color:var(--color-text-muted);">

                        ${formatPrice(p.precio)} <span style="font-size:10px; font-weight:400;">Precio normal</span>

                    </div>

                </div>

            `;



        let cardStyle = alreadyOwned ? 'opacity:0.8;' : '';
        if (p.isCarinExtraOffer) {
            cardStyle += ' box-shadow: 0 0 0 2px #db2777, 0 8px 25px rgba(219,39,119,0.25); border-color: #db2777; transform: scale(1.02);';
        }



        return `

            <div class="product-card" style="${cardStyle} cursor:pointer; min-width:280px;" onclick="if(!event.target.closest('button')) App.navigate('/producto/${p.id}')">

                ${badgeHtml}

                <div class="product-emoji" style="padding:0; overflow:hidden; height:200px;">

                    ${p.imagen ? `<img src="${p.imagen}" style="width:100%; height:100%; object-fit:cover;" alt="${p.nombre}" loading="lazy">` : `<span style="font-size:3.5rem;">${p.emoji}</span>`}

                </div>

                <div class="product-info" style="padding:1.5rem;">

                    <div style="font-size:10px; text-transform:uppercase; font-weight:800; color:var(--color-text-muted); margin-bottom:4px; letter-spacing:0.5px;">${p.cat || 'Sin categoría'}</div>

                    <h3 style="font-size:1.1rem; font-weight:800; margin:0 0 8px 0; line-height:1.3; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${p.nombre}</h3>

                    <p style="font-size:13px; color:var(--color-text-muted); margin:0 0 15px 0; line-height:1.4; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${p.descCorta || ''}</p>

                    <div style="margin-bottom:15px;">${priceHtml}</div>

                    <div style="display:flex; gap:8px; margin-top:auto;">
                        <button onclick="App.navigate('/producto/${p.id}')" class="btn btn-default btn-details" style="flex:1; font-size:12px;">Ver detalles</button>
                        ${!alreadyOwned ? `<button onclick="App.addToCart('${p.id}')" class="btn btn-dark btn-cart" style="flex:1.5; font-size:12px;">🛒 Agregar</button>` : ''}
                    </div>

                </div>

            </div>

        `;

    },



    filterShop(cat) {

        // Obsolete: Kept for backward compatibility if called from old links, redirects to new logic

        if (!this._shopFilters) this._shopFilters = { search: '', category: 'all', minPrice: '', maxPrice: '' };

        this._shopFilters.category = cat;

        this.applyShopFilters();

        this.viewShop(document.getElementById('main-content'));

    },



    viewProduct(main, pid) {

        const p = db.get('productos').find(x => x.id === pid);

        if (!p) {

            main.innerHTML = `<div class="container" style="margin-top:5rem; text-align:center;">

                <div style="font-size:4rem; margin-bottom:1rem;">🎨</div>

                <h2>Producto no encontrado</h2>

                <a href="#/tienda" class="btn btn-dark" style="margin-top:1rem;">Volver a la Tienda</a>

            </div>`;

            return;

        }



        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0 };

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;

        const baseDesc = p.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

        const extraDesc = p.carinPlusDescuento || 0;
        const carinDiscount = (p.isCarinExtraOffer && extraDesc > 0) ? extraDesc : baseDesc;
        const totalCarinDesc = p.excluirCarinPlus ? 0 : carinDiscount;

        const totalDesc = (isCarinPlus ? totalCarinDesc : 0) + globalSaleDesc;

        const pFinal = totalDesc > 0 ? Math.round(p.precio * (1 - totalDesc / 100)) : p.precio;



        // Related products

        const related = db.get('productos').filter(x => x.visible && x.id !== p.id && x.cat === p.cat).slice(0, 4);



        const whatsappMsg = encodeURIComponent(`Hola! Me interesa el producto: ${p.nombre} (Precio: ${formatPrice(pFinal)})`);

        const whatsappUrl = `https://wa.me/5493547000000?text=${whatsappMsg}`;



        main.innerHTML = `

        <div class="container" style="margin-top:2.5rem; margin-bottom:5rem;">

            <!-- Breadcrumb -->

            <nav style="font-size:13px; color:var(--color-text-muted); margin-bottom:2rem;">

                <a href="#/" style="color:var(--color-text-muted); text-decoration:none;">Inicio</a>

                <span style="margin:0 6px;"> </span>

                <a href="#/tienda" style="color:var(--color-text-muted); text-decoration:none;">Tienda</a>

                <span style="margin:0 6px;"> </span>

                <span style="color:var(--color-text);">${p.nombre}</span>

            </nav>



            <!-- Main product grid -->
            <div class="responsive-detail-grid">

                <!-- Image -->

                <div style="position:sticky; top:100px;">

                    <div style="border-radius:var(--radius-md); overflow:hidden; background:var(--color-bg-alt); aspect-ratio:1; display:flex; align-items:center; justify-content:center; border:1.5px solid var(--color-border);">

                        ${p.imagen ?

                           `<img src="${p.imagen}" style="width:100%; height:100%; object-fit:cover;" alt="${p.nombre}">`

                            : `<span style="font-size:8rem;">${p.emoji || '  '}</span>`}

                    </div>

                    ${globalSaleDesc > 0 ? `<div style="margin-top:0.75rem; background:#fef2f2; border:1px solid #fecaca; border-radius:var(--radius-sm); padding:8px 14px; text-align:center; font-size:13px; color:#b91c1c; font-weight:700;">   ${configRebajas.titulo || 'Rebaja'} ${globalSaleDesc}% OFF aplicado</div>` : ''}

                </div>



                <!-- Info -->

                <div>

                    <span style="font-size:11px; background:var(--color-bg-alt); border:1px solid var(--color-border); color:var(--color-text-muted); padding:3px 10px; border-radius:999px; font-weight:700; text-transform:uppercase;">${p.cat}</span>

                    <h1 style="font-size:2rem; font-weight:900; margin:1rem 0 0.5rem; line-height:1.2;">${p.nombre}</h1>

                    <p style="color:var(--color-text-muted); font-size:1rem; margin-bottom:1.5rem;">${p.descCorta}</p>



                    <!-- Price block -->
                    <div style="margin-bottom:2.5rem;">
                        <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                            <span style="font-size:2.2rem; font-weight:900; color:#db2777; letter-spacing:-0.5px;">${formatPrice(Math.round(p.precio * (1 - (totalCarinDesc || baseDesc) / 100)))}</span>
                            <div style="border:1px solid #db2777; padding:4px 10px; border-radius:2px; font-size:10px; font-weight:800; color:#db2777; text-transform:uppercase; letter-spacing:0.5px;">
                                ${totalCarinDesc || baseDesc}% CON CARIN+
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px; color:var(--color-text-muted); font-weight:600;">
                            <span style="font-size:1.5rem; opacity:0.7;">${formatPrice(p.precio)}</span>
                            <span style="font-size:14px; opacity:0.6;">Precio normal</span>
                        </div>

                        <!-- Mini Panel Informativo Premium -->
                        <div style="margin-top:2rem; background:var(--color-bg-alt); border:1px solid var(--color-border); border-radius:16px; padding:1.5rem; position:relative; overflow:hidden; box-shadow:var(--shadow-sm);">
                            <div style="position:absolute; top:-10px; right:-10px; font-size:4rem; opacity:0.03; pointer-events:none;">✨</div>
                            <div style="display:flex; gap:1.25rem; align-items:start;">
                                <div style="background:linear-gradient(135deg, #ec4899, #be185d); color:white; width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:900; font-size:18px; box-shadow:0 4px 12px rgba(219, 39, 119, 0.3);">+</div>
                                <div>
                                    <h4 style="margin:0 0 0.4rem 0; font-size:14px; color:var(--color-text); font-weight:800;">Ahorro Exclusivo Carin+</h4>
                                    <p style="margin:0; font-size:12.5px; color:var(--color-text-muted); line-height:1.6;">
                                        En <strong>Carin Atelier</strong> premiamos tu fidelidad. Obten\u00E9 los mejores precios mediante <strong>Carin+</strong>. Resultados al menor precio.
                                    </p>
                                    <a href="#/carin-plus" style="display:inline-block; margin-top:0.8rem; color:#db2777; font-weight:800; font-size:12px; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='none'">Conocer m\u00E1s sobre Carin+ \u276F</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Talles -->

                    ${p.talles && p.talles.length > 0 ? `

                    <div style="margin-bottom:1.5rem;">

                        <div style="font-size:13px; font-weight:700; margin-bottom:0.5rem;">Talles disponibles</div>

                        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">

                            ${p.talles.map(t => `<span style="border:1.5px solid var(--color-border); border-radius:var(--radius-sm); padding:4px 12px; font-size:13px; font-weight:600;">${t}</span>`).join('')}

                        </div>

                    </div>` : ''}



                    <!-- Stock -->

                    <div style="margin-bottom:1.5rem; font-size:13px; color:${p.stock === 'Disponible' ? '#15803d' : '#b91c1c'}; font-weight:700;">

                        ${p.stock === 'Disponible' ? '  En stock' : ' ? Sin stock'}

                    </div>



                    <!-- CTAs -->

                    <div style="display:flex; flex-direction:column; gap:0.75rem;">

                        <button onclick="App.addToCart('${p.id}'); App.showToast('  🛒 Agregado al carrito')" class="btn btn-dark" style="width:100%; padding:14px; font-size:1rem; font-weight:700;">

                             🛒 Agregar al carrito

                        </button>

                        <a href="${whatsappUrl}" target="_blank" class="btn btn-default" style="width:100%; padding:14px; font-size:1rem; text-align:center;">
                               Consultar por WhatsApp
                        </a>

                        ${db.currentUser && db.hasRole(db.currentUser.userId, 'admin') ? `
                        <button onclick="App.editProduct('${p.id}')" class="btn btn-default" style="width:100%; padding:12px; font-size:0.9rem; font-weight:700; border:1.5px dashed var(--color-primary); color:var(--color-primary); margin-top:0.5rem; display:flex; align-items:center; justify-content:center; gap:8px;">
                             \u270F\uFE0F Editar Producto (Panel Admin)
                        </button>
                        ` : ''}

                    </div>



                    <!-- Payment method -->

                    ${p.metodoPago ? `<p style="font-size:12px; color:var(--color-text-muted); margin-top:1rem; text-align:center;">   Método de pago: ${p.metodoPago}</p>` : ''}

                </div>

            </div>



            <!-- Description -->

            ${p.descLarga ? `

            <div style="margin-top:4rem; padding-top:4rem; border-top:1px solid var(--color-border);">

                <h2 style="margin-bottom:1.5rem;">Descripción del producto</h2>

                <div style="font-size:15px; line-height:1.8; color:var(--color-text); max-width:700px; white-space:pre-line;">${p.descLarga}</div>

            </div>` : ''}



            <!-- Related products -->

            ${related.length > 0 ? `

            <div style="margin-top:4rem; padding-top:4rem; border-top:1px solid var(--color-border);">

                <h2 style="margin-bottom:2rem;">Tambi\u00E9n te puede interesar</h2>

                <div class="product-grid">

                    ${related.map(r => this.renderProductCard(r)).join('')}

                </div>

            </div>` : ''}



            <!-- Reviews and Questions -->

            <div style="margin-top:4rem; padding-top:4rem; border-top:1px solid var(--color-border); display:grid; grid-template-columns: 1fr 1fr; gap:4rem;">

                <div id="product-reviews-container">

                    ${this.renderReviews(p.id)}

                </div>

                <div id="product-questions-container">

                    ${this.renderQuestions(p.id)}

                </div>

            </div>

        </div>`;



        // Responsive: make product grid single column on mobile

        if (window.innerWidth < 768) {

            const grid = main.querySelector('div[style*="grid-template-columns:1fr 1fr"]');

            if (grid) grid.style.gridTemplateColumns = '1fr';

        }

    },



    renderReviews(pid) {

        const reviews = db.get('rese\u00F1as').filter(r => r.productId === pid).sort((a,b) => new Date(b.fecha) - new Date(a.fecha));

        const user = db.currentUser;

        const canReview = user && db.get('compras').some(c => c.userId === user.userId && c.productId === pid);



        return `

            <h3 style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center;">

                Opiniones sobre el producto 
                <span style="font-size:14px; color:var(--color-text-muted);">${reviews.length} rese\u00F1as</span>

            </h3>

            

            ${canReview ? `

                <div style="background:var(--color-bg-alt); padding:1.5rem; border-radius:var(--radius-sm); margin-bottom:2rem; border:1px solid var(--color-border);">

                    <h4 style="margin-top:0; margin-bottom:1rem;">Deja tu opini\u00F3n</h4>

                    <div style="display:flex; gap:0.5rem; margin-bottom:1rem; font-size:1.5rem;">

                        ${[1,2,3,4,5].map(i => `<span onclick="App._tempRating=${i}; App.updateRatingPreview(this)" style="cursor:pointer; color:#ccc;" class="star-rating"> </span>`).join('')}

                    </div>

                    <textarea id="review-comment" placeholder="\u00BFQu\u00E9 te pareci\u00F3 el producto?" style="width:100%; height:80px; margin-bottom:1rem; padding:10px; border:1px solid var(--color-border); border-radius:4px;"></textarea>

                    <button onclick="App.submitReview('${pid}')" class="btn btn-dark" style="width:100%;">Publicar rese\u00F1a</button>

                </div>

            ` : ''}



            <div style="display:flex; flex-direction:column; gap:1.5rem;">

                ${reviews.length === 0 ? '<p style="color:var(--color-text-muted);">A\u00FAn no hay opiniones sobre este producto.</p>' : reviews.map(r => {

                    const u = db.get('profiles').find(user => user.userId === r.userId);

                    const stars = ' '.repeat(r.rating) + ' '.repeat(5-r.rating);

                    

                    // Calc time since purchase

                    const pDate = new Date(r.purchaseDate);

                    const rDate = new Date(r.fecha);

                    const diffMs = rDate - pDate;

                    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

                    const diffDays = Math.floor(diffHours / 24);

                    const timeTag = diffHours < 1 ? 'Publicado instantes luego de la compra' : (diffHours < 24 ? `Publicado ${diffHours}h luego de la compra` : `Publicado ${diffDays}d luego de la compra`);



                    return `

                        <div style="border-bottom:1px solid var(--color-border); padding-bottom:1.5rem;">

                            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">

                                <div style="color:#f59e0b; font-weight:700;">${stars}</div>

                                <span style="font-size:11px; color:var(--color-text-muted);">${new Date(r.fecha).toLocaleDateString()}</span>

                            </div>

                            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.75rem;">

                                ${r.tags.map(t => `<span style="font-size:10px; background:var(--color-success-bg); color:var(--color-success-text); padding:2px 8px; border-radius:999px; font-weight:700;">${t}</span>`).join('')}

                                ${r.Reembolsado ? `<span style="font-size:10px; background:var(--color-danger-bg); color:var(--color-danger-text); padding:2px 8px; border-radius:999px; font-weight:700;">Reembolsado</span>` : ''}

                                <span style="font-size:10px; background:var(--color-bg-alt); color:var(--color-text-muted); padding:2px 8px; border-radius:999px; font-weight:600;">${timeTag}</span>

                            </div>

                            <p style="font-size:14px; margin:0; line-height:1.5;">${r.comentario}</p>

                            <div style="font-size:12px; color:var(--color-text-muted); margin-top:0.5rem; font-weight:600;">Por ${u ? u.nombre : 'Usuario'}</div>

                        </div>

                    `;

                }).join('')}

            </div>

        `;

    },



    renderQuestions(pid) {

        const questions = db.get('preguntas').filter(q => q.productId === pid).sort((a,b) => new Date(b.fecha) - new Date(a.fecha));

        const user = db.currentUser;



        return `

            <h3 style="margin-bottom:1.5rem;">Preguntas y respuestas</h3>

            

            ${user ? `

                <div style="display:flex; gap:1rem; margin-bottom:2.5rem;">

                    <input type="text" id="question-text" placeholder="Escribe tu pregunta..." style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                    <button onclick="App.submitQuestion('${pid}')" class="btn btn-dark">Preguntar</button>

                </div>

            ` : `<p style="margin-bottom:2.5rem; font-size:14px; color:var(--color-text-muted);">Debes <a href="#/login" style="color:var(--color-primary);">iniciar sesión</a> para hacer preguntas.</p>`}



            <h4 style="margin-bottom:1.5rem; font-size:16px;">\u00DAltimas preguntas</h4>

            <div style="display:flex; flex-direction:column; gap:2rem;">

                ${questions.length === 0 ? '<p style="color:var(--color-text-muted);">Nadie ha preguntado aón.  S ? el primero!</p>' : questions.map(q => `

                    <div>

                        <div style="font-size:14px; font-weight:600; margin-bottom:0.75rem;">${q.texto}</div>

                        ${q.respuesta ? `

                            <div style="display:flex; gap:10px; margin-left:1rem; border-left:2px solid var(--color-border); padding-left:1rem;">

                                <div style="font-size:14px; color:var(--color-text-muted);"><span style="color:var(--color-text); font-weight:700;">R:</span> ${q.respuesta}</div>

                            </div>

                        ` : '<div style="font-size:12px; color:var(--color-text-muted); margin-left:1rem;">An sin respuesta...</div>'}

                    </div>

                `).join('')}

            </div>

        `;

    },



    updateRatingPreview(el) {

        const stars = el.parentElement.querySelectorAll('.star-rating');

        let found = false;

        stars.forEach(s => {

            if (!found) s.style.color = '#f59e0b';

            else s.style.color = '#ccc';

            if (s === el) found = true;

        });

    },



    submitReview(pid) {

        const rating = this._tempRating || 0;

        const comment = document.getElementById('review-comment').value.trim();

        if (rating === 0) return this.showToast('   Selecciona una calificación');

        if (!comment) return this.showToast('   Escribe un comentario');



        const user = db.currentUser;

        const purchase = db.get('compras').find(c => c.userId === user.userId && c.productId === pid);

        

        const newReview = {

            id: 'r' + Date.now(),

            productId: pid,

            userId: user.userId,

            rating,

            comentario: comment,

            fecha: new Date().toISOString(),

            purchaseDate: purchase ? purchase.fecha : new Date(Date.now() - 86400000).toISOString(),

            tags: [user.rango === 'carin_plus' ? 'Carin+ Member' : 'Compra Verificada'],

            Reembolsado: false

        };



        db.get('rese\u00F1as').push(newReview);

        db.save();

        this.showToast('   Resenia publicada!');

        this.viewProduct(document.getElementById('main-content'), pid);

    },



    submitQuestion(pid) {

        const text = document.getElementById('question-text').value.trim();

        if (!text) return this.showToast('   Escribe tu pregunta');



        const newQ = {

            id: 'p' + Date.now(),

            productId: pid,

            userId: db.currentUser.userId,

            texto: text,

respuesta: null,

            fecha: new Date().toISOString()

        };



        db.get('preguntas').push(newQ);

        db.save();

        this.showToast('  Pregunta enviada');

        this.viewProduct(document.getElementById('main-content'), pid);

    },



    requestRefund(compId) {

        this.navigate(`/soportetype=refund&id=${compId}`);

    },



    viewCourses(main) {

        const courses = db.get('cursos');

        main.innerHTML = `

            <div class="container" style="margin-top: 3rem;">

                <div style="text-align: center; margin-bottom: 4rem;">

                    <h1>Cursos y Talleres</h1>

                    <p style="color: var(--color-text-muted); max-width: 600px; margin: 1rem auto;">Aprende las t\u00E9cnicas m\u00E1s avanzadas de costura y dise\u00F1o en nuestras clases presenciales.</p>

                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">

                    ${courses.map(c => this.renderCourseCard(c)).join('')}

                </div>

            </div>

        `;

    },






    viewCourseDetail(main, id) {

        const c = db.get('cursos').find(x => x.id === id);

        if (!c) {

            main.innerHTML = `<div class="container" style="margin-top:5rem; text-align:center;">

                <h2>Curso no encontrado</h2>

                <a href="#/cursos" class="btn btn-dark">Volver a Cursos</a>

            </div>`;

            return;

        }



        const profe = db.get('profesores').find(p => p.id === c.profeId);

        const profeNombre = profe ? profe.nombre : c.profeId;

        const slotsAvailable = c.maxAlumnos - c.alumnos.length;



        const currentUser = db.currentUser;

        let adminBannerHtml = '';

        if (currentUser) {

            const isAdmin = currentUser.rango === 'admin' || currentUser.rango === 'owner';

            const isAssignedProfe = (currentUser.rango === 'profesor') && (profe && profe.userId === currentUser.userId);

            if (isAdmin || isAssignedProfe) {

                const navTarget = isAdmin ? `App.navigate('/admin/cursos'); setTimeout(()=>App.viewAdminEnrollment('${c.id}'), 100);` : `App.navigate('/panel-profesor');`;

                adminBannerHtml = `

                    <div style="background:linear-gradient(90deg, var(--color-primary), #db2777); padding:1rem; text-align:center; color:white; font-weight:700;">

                        <span> Tienes acceso administrativo a este curso.</span>

                        <button onclick="${navTarget}" style="margin-left:1rem; padding:6px 15px; border-radius:999px; border:none; background:var(--color-bg); color:var(--color-primary); font-weight:800; cursor:pointer; font-size:12px;"> Administrar Curso</button>

                    </div>`;

            }

        }



        // Horarios Board

        let boardHtml = '';

        if (c.schedule && c.schedule.length > 0) {

            boardHtml = `

            <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-top:2rem;">

                <h3 style="margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem;"> Tablero de Horarios Mensual</h3>

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">

                    ${c.schedule.map(s => `

                        <div style="background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border); text-align:center;">

                            <div style="font-weight:800; font-size:1.1rem; color:var(--color-primary); margin-bottom:0.25rem;">${s.dia}</div>

                            <div style="font-size:1.2rem; font-weight:700;">${s.horaInicio} - ${s.horaFin}</div>

                            <div style="font-size:0.85rem; color:var(--color-text-muted); margin-top:0.5rem; font-weight:600; text-transform:uppercase;">   ${s.frecuencia}</div>

                        </div>

                    `).join('')}

                </div>

                <div style="margin-top:1rem; font-size:0.85rem; color:var(--color-text-muted); text-align:center;">Estos horarios se repiten todas las semanas del mes. Puedes asistir la cantidad de meses que desees.</div>

            </div>`;

        }



        main.innerHTML = `

            ${adminBannerHtml}

            <div class="course-banner-detail" style="height:350px; background-size:cover; background-position:center; background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${c.banner}'); display:flex; align-items:flex-end; padding-bottom:3rem;">

                <div class="container" style="color:white; width:100%;">

                    <div style="font-size:1rem; font-weight:700; text-transform:uppercase; letter-spacing:2px; margin-bottom:0.5rem; color:#fbcfe8;">${c.subtitulo || 'Curso Presencial'}</div>

                    <h1 style="font-size:3rem; margin:0; line-height:1.1; color:white;">${c.titulo}</h1>

                </div>

            </div>



            <div class="container" style="margin-top:3rem; margin-bottom:5rem;">
                <div class="responsive-detail-grid">

                    

                    <!-- Columna Izquierda -->

                    <div>

                        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:2rem; padding-bottom:2rem; border-bottom:1px solid var(--color-border);">

                            <div style="width:50px; height:50px; border-radius:50%; background:var(--color-primary); color:white; display:flex; align-items:center; justify-content:center; font-size:1.5rem; font-weight:700;">${profeNombre.charAt(0)}</div>

                            <div style="flex:1;">

                                <div style="font-size:0.9rem; color:var(--color-text-muted);">Profesor a cargo</div>

                                <div style="font-size:1.1rem; font-weight:700;">${profeNombre}</div>

                            </div>

                        </div>



                        <h3 style="margin-bottom:1rem;">Sobre este curso</h3>

                        <div style="font-size:1.05rem; line-height:1.8; color:var(--color-text); margin-bottom:2rem; white-space:pre-line;">${c.descripcionLarga || c.descripcion}</div>



                        ${c.requisitos && c.requisitos.length ? `

                        <h3 style="margin-bottom:1rem; margin-top:3rem;">Requisitos</h3>

                        <ul style="padding-left:1.5rem; line-height:1.8; margin-bottom:2rem;">

                            ${c.requisitos.map(r => `<li>${r}</li>`).join('')}

                        </ul>` : ''}



                        ${c.incluye && c.incluye.length ? `

                        <h3 style="margin-bottom:1rem; margin-top:3rem;">El curso incluye</h3>

                        <ul style="padding-left:1.5rem; line-height:1.8; margin-bottom:2rem;">

                            ${c.incluye.map(i => `<li>${i}</li>`).join('')}

                        </ul>` : ''}



                        ${boardHtml}

                    </div>



                    <!-- Columna Derecha (Fija) -->

                    <div style="position:sticky; top:100px; background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; box-shadow:var(--shadow-md);">

                        <div style="font-size:0.9rem; color:var(--color-text-muted); font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem;">Precio Mensual</div>

                        <div style="font-size:2.5rem; font-weight:900; color:var(--color-text); margin-bottom:1.5rem;">${formatPrice(c.precio||0)}</div>

                        

                        <div style="margin-bottom:2rem;">

                            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.9rem;">

                                <span>Cupos disponibles:</span>

                                <strong>${slotsAvailable} de ${c.maxAlumnos}</strong>

                            </div>

                            <div style="width:100%; height:8px; background:var(--color-bg-alt); border-radius:999px; overflow:hidden;">

                                <div style="width:${(c.alumnos.length/c.maxAlumnos)*100}%; height:100%; background:var(--color-primary);"></div>

                            </div>

                        </div>



                        ${currentUser && c.alumnos.includes(currentUser.userId) ? `

                            <div style="background:var(--color-primary-light); color:var(--color-primary); padding:1rem; border-radius:var(--radius-sm); text-align:center; font-weight:700; margin-bottom:1rem;">

                                Estás inscrito en este curso

                            </div>

                            <button onclick="document.getElementById('student-classroom').scrollIntoView({behavior:'smooth'})" class="btn btn-dark" style="width:100%; padding:14px; font-size:1.1rem; font-weight:700;">
                                Ir al Classroom \uD83D\uDCDA
                            </button>

                        ` : `

                            <button onclick="App.enrollCourse('${c.id}')" class="btn btn-dark" style="width:100%; padding:14px; font-size:1.1rem; font-weight:700; margin-bottom:1rem;" ${slotsAvailable <= 0 ? 'disabled' : ''}>

                                ${slotsAvailable <= 0 ? 'Cupo Lleno' : 'Inscribirme este mes'}

                            </button>

                        `}

                        

                        <p style="font-size:0.8rem; color:var(--color-text-muted); text-align:center; margin-top:1rem;">El pago se coordina va WhatsApp. Puedes inscribirte y pagar mes a mes.</p>

                    </div>



                </div>



                ${currentUser && c.alumnos.includes(currentUser.userId) ? `

                    <div id="student-classroom" style="margin-top:5rem; padding-top:4rem; border-top:2px solid var(--color-border);">

                        <div class="sec-header" style="text-align:center; margin-bottom:3rem;">

                            <h2 style="font-size:2.5rem;">\uD83C\uDFEB Classroom del Curso</h2>

                            <p style="font-size:1.1rem; color:var(--color-text-muted);">Aqu\u00ED encontrar\u00E1s todos los materiales compartidos por tu profesor.</p>

                        </div>

                        <div class="classroom-grid">

                            ${db.getMaterialesByCurso(c.id).map(m => `

                                <div class="material-card">

                                    <div class="material-badge">${m.tipo}</div>

                                    <div style="display:flex; align-items:center; gap:1rem;">

                                        <div class="material-icon">${m.tipo === 'PDF' ? '📄' : (m.tipo === 'VIDEO' ? '🎬' : '🖼️')}</div>

                                        <div style="flex:1;">

                                            <div style="font-weight:700; font-size:1.1rem; color:var(--color-text);">${m.titulo}</div>

                                            <div style="font-size:0.85rem; color:var(--color-text-muted);">${new Date(m.fecha).toLocaleDateString()}</div>

                                        </div>

                                    </div>

                                    <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.6; flex:1;">${m.descripcion}</p>

                                    <button class="btn btn-dark" style="width:100%; padding:10px; font-size:13px;" onclick="App.showToast('   Abriendo material...')">Acceder al contenido</button>

                                </div>

                            `).join('') || '<div style="grid-column:1/-1; text-align:center; padding:4rem; background:var(--color-bg-alt); border-radius:12px; border:2px dashed var(--color-border); color:var(--color-text-muted);">El profesor aón no ha subido materiales.</div>'}

                        </div>

                    </div>

                ` : ''}

            </div>

        `;

    },



    renderCourseCard(c) {

        const slotsAvailable = c.maxAlumnos - c.alumnos.length;

        const profe = db.get('profesores').find(p => p.id === c.profeId);

        const profeNombre = profe ? profe.nombre : c.profeId;
        const isEnrolled = db.currentUser && c.alumnos.includes(db.currentUser.userId);

        return `

            <div class="course-card" style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; position:relative; display:flex; flex-direction:column;">

                <div class="course-banner" style="height:150px; background-size:cover; background-position:center; background-color:var(--color-bg-alt); background-image: url('${c.banner}')">

                    ${c.oferta ? `<span class="badge" style="position:absolute; top:1rem; right:1rem; background:var(--color-primary); color:white; padding:4px 12px; border-radius:999px; font-size:12px; font-weight:700;"> Oferta!</span>` : ''}

                </div>

                <div class="course-info" style="padding:1.25rem; flex:1; display:flex; flex-direction:column;">

                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">

                        <div>

                            <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 1px;">${c.subtitulo}</span>

                            <h3 style="margin-top: 0.25rem; font-size:1.1rem; font-weight:700;">${c.titulo}</h3>

                        </div>

                    </div>

                    <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.5rem; flex:1;">${c.descripcion}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem;">

                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>\uD83D\uDCC5</span> <b>${c.horarios}</b>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>\uD83D\uDC64</span> <b>${profeNombre}</b>
                        </div>

                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--color-border);">

                        <span style="padding:2px 8px; border-radius:999px; font-size:10px; ${slotsAvailable > 0 ? 'background:#dcfce7; color:#15803d;' : 'background:#fee2e2; color:#b91c1c;'}">

                            ${slotsAvailable > 0 ? `Quedan ${slotsAvailable} cupos` : 'Cupo lleno'}

                        </span>

                        <div style="display:flex; gap:0.5rem; width:100%;">
                            ${isEnrolled ? `
                                <div style="width:100%; display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:white; border:1.5px solid #22c55e; color:#16a34a; padding:8px; border-radius:8px; text-align:center; font-size:11px; font-weight:800; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow: 0 2px 4px rgba(34, 197, 94, 0.1);">
                                        <span style="background:#22c55e; color:white; width:16px; height:16px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px;">\u2714</span>
                                        \u00A1YA EST\u00C1S INSCRITO!
                                    </div>
                                    <a href="javascript:void(0)" onclick="App.navigateAccountTab('cursos')" class="btn btn-dark" style="width:100%; font-size:0.85rem; padding:10px; border-radius:8px;">Ingresar al Classroom</a>
                                </div>
                            ` : `
                                <a href="#/cursos/${c.id}" class="btn btn-default" style="padding:6px 12px; font-size:0.85rem; border-radius:8px;">Detalles</a>
                                <button onclick="App.enrollCourse('${c.id}')" class="btn btn-dark" style="padding:6px 12px; font-size:0.85rem; border-radius:8px;" ${slotsAvailable <= 0 ? 'disabled' : ''}>Anotarme</button>
                            `}
                        </div>

                    </div>

                </div>

            </div>

        `;

    },



    enrollCourse(id) {
        if (!db.currentUser) {
            this.showToast('   Debes iniciar sesi\u00F3n para inscribirte');
            this.navigate('/login');
            return;
        }

        // 1. Verificar si est "al d "
        if (!db.isUserUpToDate(db.currentUser.userId)) {
            this.showToast('\u26A0\uFE0F No est\u00E1s al d\u00EDa con tus pagos. Debes regularizar tu situaci\u00F3n antes de inscribirte en un nuevo curso.');
            this.navigate('/mi-cuenta');
            return;
        }

        this.showReservationModal(id);
    },

    showReservationModal(cursoId) {
        const course = db.get('cursos').find(c => c.id === cursoId);
        if (!course) return;

        // Crear contenedor del modal si no existe
        let modal = document.getElementById('reservation-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'reservation-modal';
            modal.className = 'modal-overlay';
            document.body.appendChild(modal);
        }

        this._reservationData = { cursoId, mes: '', direccion: '', enCordoba: false };
        this._renderReservationStep(1);
        modal.style.display = 'flex';
    },

    _renderReservationStep(step) {
        const modal = document.getElementById('reservation-modal');
        const course = db.get('cursos').find(c => c.id === this._reservationData.cursoId);
        
        let content = '';
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const currentMonthIdx = new Date().getMonth();
        const availableMonths = [meses[currentMonthIdx], meses[(currentMonthIdx + 1) % 12], meses[(currentMonthIdx + 2) % 12]];

        if (step === 1) {
            content = `
                <div class="modal-content" style="max-width:450px;">
                    <h2 style="margin-bottom:1.5rem;">\uD83D\uDCC5 Selecciona el Mes</h2>
                    <p style="color:var(--color-text-muted); margin-bottom:1.5rem;">\u00BFEn qu\u00E9 mes deseas comenzar el curso de <b>${course.titulo}</b>?</p>
                    <div style="display:grid; gap:10px;">
                        ${availableMonths.map(m => `
                            <button onclick="App._reservationData.mes='${m}'; App._renderReservationStep(2);" class="btn btn-default" style="padding:15px; text-align:left; display:flex; justify-content:space-between; align-items:center;">
                                <span>${m}</span>
                                <span>\u276F</span>
                            </button>
                        `).join('')}
                    </div>
                    <button onclick="document.getElementById('reservation-modal').style.display='none'" class="btn btn-default" style="margin-top:20px; width:100%;">Cancelar</button>
                </div>`;
        } else if (step === 2) {
            const countries = {
                'Argentina': ['C\u00F3rdoba', 'Buenos Aires', 'Santa Fe', 'Mendoza', 'Entre R\u00EDos', 'Tucum\u00E1n', 'Salta', 'Misiones'],
                'Uruguay': ['Montevideo', 'Canelones', 'Maldonado', 'Salto'],
                'Chile': ['Santiago', 'Valpara\u00EDso', 'Concepci\u00F3n', 'Antofagasta'],
                'Paraguay': ['Asunci\u00F3n', 'Ciudad del Este', 'Encarnaci\u00F3n']
            };
            
            content = `
                <div class="modal-content" style="max-width:550px; padding:2.5rem; border:1px solid var(--color-border); box-shadow:var(--shadow-lg); background:var(--color-bg);">
                    <h2 style="margin-bottom:0.5rem; display:flex; align-items:center; gap:0.75rem;">\uD83D\uDCCD Tu Ubicaci\u00F3n</h2>
                    <p style="color:var(--color-text-muted); margin-bottom:2.5rem; font-size:14px;">Para este curso presencial, necesitamos verificar tu zona de residencia.</p>
                    
                    <div style="display:grid; gap:1.5rem; margin-bottom:2rem;">
                        <!-- Pa\u00EDs -->
                        <div class="form-group-premium">
                            <label style="display:block; font-size:11px; font-weight:800; color:var(--color-primary); margin-bottom:0.6rem; text-transform:uppercase; letter-spacing:1px;">Selecciona tu Pa\u00EDs</label>
                            <select id="res-country" onchange="App._updateProvinceList(this.value)" style="width:100%; padding:14px; border-radius:12px; border:2px solid var(--color-border); background:var(--color-bg-alt); color:var(--color-text); font-size:15px; cursor:pointer; outline:none; transition:border-color 0.2s;">
                                <option value="" disabled selected>Elige un pa\u00EDs...</option>
                                ${Object.keys(countries).map(c => `<option value="${c}">${c}</option>`).join('')}
                            </select>
                        </div>

                        <!-- Provincia -->
                        <div class="form-group-premium">
                            <label style="display:block; font-size:11px; font-weight:800; color:var(--color-primary); margin-bottom:0.6rem; text-transform:uppercase; letter-spacing:1px;">Provincia / Estado</label>
                            <select id="res-province" style="width:100%; padding:14px; border-radius:12px; border:2px solid var(--color-border); background:var(--color-bg-alt); color:var(--color-text); font-size:15px; cursor:pointer; outline:none; transition:border-color 0.2s;">
                                <option value="" disabled selected>Primero elige un pa\u00EDs...</option>
                            </select>
                        </div>

                        <!-- Direcci\u00F3n -->
                        <div class="form-group-premium">
                            <label style="display:block; font-size:11px; font-weight:800; color:var(--color-primary); margin-bottom:0.6rem; text-transform:uppercase; letter-spacing:1px;">Direcci\u00F3n Exacta</label>
                            <input type="text" id="res-address" placeholder="Ej: Av. Duarte Quir\u00F3s 1200" style="width:100%; padding:14px; border-radius:12px; border:2px solid var(--color-border); background:var(--color-bg-alt); color:var(--color-text); font-size:15px; outline:none; transition:border-color 0.2s;">
                        </div>
                    </div>

                    <div style="display:flex; gap:12px; margin-top:2.5rem; padding-top:1.5rem; border-top:1px solid var(--color-border);">
                        <button onclick="App._renderReservationStep(1)" class="btn btn-default" style="flex:1; padding:14px; font-weight:700;">Atr\u00E1s</button>
                        <button onclick="App._verifyLocation()" class="btn btn-dark" style="flex:2; padding:14px; font-weight:900; background:var(--color-primary); border-color:var(--color-primary);">Continuar \u276F</button>
                    </div>
                </div>`;
        } else if (step === 3) {
        } else if (step === 3) {
            const loc = course.ubicacion || 'Av. Col\u00F3n 1500, C\u00F3rdoba (Sede Central)';
            content = `
                <div class="modal-content" style="max-width:450px; text-align:center;">
                    <div style="font-size:3rem; margin-bottom:1rem;">\u2705</div>
                    <h2 style="margin-bottom:1rem;">\u00A1Todo listo!</h2>
                    <p style="color:var(--color-text-muted); margin-bottom:1.5rem;">Cumples con los requisitos. Te esperamos en:</p>
                    <div style="background:var(--color-primary-light); padding:1rem; border-radius:12px; font-weight:700; color:var(--color-primary); margin-bottom:2rem;">
                        ${loc}
                    </div>
                    <p style="font-size:13px; margin-bottom:1.5rem;">Haz clic abajo para enviar tu solicitud por WhatsApp y reservar tu lugar.</p>
                    <button onclick="App.confirmReservation()" class="btn btn-primary" style="width:100%; padding:15px; font-size:1.1rem;">
                        Solicitar Reserva via WhatsApp
                    </button>
                </div>`;
        }

        modal.innerHTML = content;
        modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    },

    _updateProvinceList(country) {
        const provinceSelect = document.getElementById('res-province');
        if (!provinceSelect) return;
        
        const countries = {
            'Argentina': ['C\u00F3rdoba', 'Buenos Aires', 'Santa Fe', 'Mendoza', 'Entre R\u00EDos', 'Tucum\u00E1n', 'Salta', 'Misiones'],
            'Uruguay': ['Montevideo', 'Canelones', 'Maldonado', 'Salto'],
            'Chile': ['Santiago', 'Valpara\u00EDso', 'Concepci\u00F3n', 'Antofagasta'],
            'Paraguay': ['Asunci\u00F3n', 'Ciudad del Este', 'Encarnaci\u00F3n']
        };
        
        const provinces = countries[country] || [];
        provinceSelect.innerHTML = `<option value="" disabled selected>Selecciona una provincia...</option>` + 
                                  provinces.map(p => `<option value="${p}">${p}</option>`).join('');
    },

    _verifyLocation() {
        const country = document.getElementById('res-country').value.trim();
        const province = document.getElementById('res-province').value.trim();
        const addr = document.getElementById('res-address').value.trim();

        if (!country || !province || !addr) {
            return this.showToast('   Completa todos los campos de ubicaci\u00F3n');
        }
        
        const isArgentina = country.toLowerCase() === 'argentina';
        const isCordoba = province.toLowerCase().includes('cordoba') || province.toLowerCase().includes('c\u00F3rdoba');

        if (isArgentina && isCordoba) {
            this._reservationData.direccion = `${addr}, ${province}, ${country}`;
            this._reservationData.enCordoba = true;
            this._renderReservationStep(3);
        } else {
            alert('\u26A0\uFE0F Lo sentimos, este curso es presencial y solo est\u00E1 disponible para residentes de C\u00F3rdoba, Argentina.');
        }
    },

    confirmReservation() {
        const { cursoId, mes, direccion } = this._reservationData;
        const course = db.get('cursos').find(c => c.id === cursoId);
        
        // Notificar al profesor (Guardar en DB)
        db.addReservaSolicitud(db.currentUser.userId, cursoId, mes, { direccion });
        
        // Mensaje WhatsApp
        const msg = `Hola! Estoy interesado en reservar mi lugar para el curso: *${course.titulo}*.
Mes: ${mes}
Horario: ${course.horarios}
Mi Direcci\u00F3n: ${direccion}
Usuario: ${db.currentUser.nombre} (${db.currentUser.email})`;

        window.open(`https://wa.me/5493547000000?text=${encodeURIComponent(msg)}`, '_blank');
        document.getElementById('reservation-modal').style.display = 'none';
        this.showToast('\u2705 Solicitud enviada correctamente');
    },

    viewLogin(main) {
        const isRegister = this._authMode === 'register';
        main.innerHTML = `
            <div class="container" style="max-width: 450px; margin-top: 5rem; margin-bottom: 5rem;">
                <div style="background: var(--color-bg); border: 1.5px solid var(--color-border); padding: 2.5rem; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
                    
                    <!-- Tabs -->
                    <div style="display:flex; gap:1rem; margin-bottom:2rem; border-bottom:1px solid var(--color-border); padding-bottom:1rem;">
                        <button onclick="App._authMode='login'; App.viewLogin(document.getElementById('main-content'))" 
                                style="background:none; border:none; font-weight:${!isRegister ? '800' : '500'}; color:${!isRegister ? 'var(--color-text)' : 'var(--color-text-muted)'}; cursor:pointer; font-size:1.1rem; position:relative;">
                            Ingresar
                            ${!isRegister ? '<div style="position:absolute; bottom:-1.1rem; left:0; width:100%; height:3px; background:var(--color-primary);"></div>' : ''}
                        </button>
                        <button onclick="App._authMode='register'; App.viewLogin(document.getElementById('main-content'))" 
                                style="background:none; border:none; font-weight:${isRegister ? '800' : '500'}; color:${isRegister ? 'var(--color-text)' : 'var(--color-text-muted)'}; cursor:pointer; font-size:1.1rem; position:relative;">
                            Crear Cuenta
                            ${isRegister ? '<div style="position:absolute; bottom:-1.1rem; left:0; width:100%; height:3px; background:var(--color-primary);"></div>' : ''}
                        </button>
                    </div>

                    ${isRegister ? `
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 0.5rem;">Nombre Completo</label>
                            <input type="text" id="reg-nombre" placeholder="Tu nombre" style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border);">
                        </div>
                    ` : ''}

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 0.5rem;">Email</label>
                        <input type="email" id="auth-email" placeholder="tu@email.com" style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border);">
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 0.5rem;">Contrase\u00F1a</label>
                        <input type="password" id="auth-pass" placeholder="********" style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border);">
                    </div>

                    <button onclick="${isRegister ? 'App.handleSignup()' : 'App.handleLogin()'}" class="btn btn-dark" style="width: 100%; padding: 12px; font-size: 1rem; font-weight:700;">
                        ${isRegister ? 'Registrarme' : 'Entrar'}
                    </button>

                    <div style="margin: 1.5rem 0; text-align: center; position: relative;">
                        <hr style="border: 0; border-top: 1px solid var(--color-border);">
                        <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--color-bg); padding: 0 10px; font-size: 12px; color: var(--color-text-muted);">O TAMBI\u00C9N</span>
                    </div>

                    <button onclick="App.loginWithGoogle()" class="btn btn-default" style="width: 100%; padding: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600;">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18">
                        Continuar con Google
                    </button>
                </div>
            </div>
        `;
    },

    async handleLogin() {
        const email = document.getElementById('auth-email').value.trim();
        const pass = document.getElementById('auth-pass').value.trim();
        if (!email || !pass) return this.showToast('   Completa todos los campos');

        try {
            this.showToast('\uD83D\uDD10 Validando...');
            await db.login(email, pass);
            this.showToast('   \u00A1Bienvenido/a!');
            this.navigate('/');
        } catch (e) {
            console.error(e);
            this.showToast('\u274C Error: Credenciales inv\u00E1lidas');
        }
    },

    async handleSignup() {
        const nombre = document.getElementById('reg-nombre').value.trim();
        const email = document.getElementById('auth-email').value.trim();
        const pass = document.getElementById('auth-pass').value.trim();
        
        if (!nombre || !email || !pass) return this.showToast('   Completa todos los campos');
        if (pass.length < 6) return this.showToast('\u26A0\uFE0F La contrase\u00F1a debe tener al menos 6 caracteres');

        try {
            this.showToast('\uD83D\uDCDD Creando cuenta...');
            await db.signup(email, pass, nombre);
            this.showToast('\u2705 \u00A1Cuenta creada con \u00E9xito!');
            this.navigate('/');
        } catch (e) {
            console.error(e);
            this.showToast('\u274C Error al registrarse: ' + e.message);
        }
    },

    async loginWithGoogle() {
        try {
            await db.loginWithGoogle();
        } catch (e) {
            console.error(e);
            this.showToast('\u274C Error con el acceso de Google');
        }
    },

    demoLogin(role) {

        const emails = {

            'admin': 'admin@carin.com',

            'tecnico': 'soporte@carin.com',

            'profesor': 'profe@carin.com',

            'carin_plus': 'vip@gmail.com',

            'usuario': 'cliente@gmail.com'

        };

        if (db.login(emails[role], '')) {

            this.showToast('  Modo Demo Activo');

            this.navigate('/');

            this.renderLayout();

        }

    },



    setAccountTab(tab) {
        this._accountTab = tab;
        this.viewAccount(document.getElementById('main-content'));
    },

    viewAccount(main) {

        const user = db.currentUser;

        if (!user) return this.navigate('/login');

        const compras = db.get('compras').filter(c => c.userId === user.userId);

        const misCursos = db.get('cursos').filter(c => c.alumnos.includes(user.userId));
        
        const isMobile = window.innerWidth <= 768;
        if (!this._accountTab) {
            this._accountTab = isMobile ? 'perfil' : 'compras';
        }

        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const fechaActual = new Date();

        const mesActual = meses[fechaActual.getMonth()];

        const anioActual = fechaActual.getFullYear();







        main.innerHTML = `

            <div class="container" style="margin-top: 4rem; margin-bottom: 5rem;">
                <div class="profile-header-card">

                    <div style="position:absolute; top:0; right:0; width:300px; height:300px; background:radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%); opacity:0.1; transform:translate(30%, -30%); border-radius:50%;"></div>

                    <div style="width:100px; height:100px; border-radius:50%; background:var(--color-primary); color:white; display:flex; align-items:center; justify-content:center; font-size:3rem; font-weight:800; box-shadow:0 10px 25px rgba(236,72,153,0.3); z-index:1; flex-shrink:0;">

                        ${user.nombre.charAt(0).toUpperCase()}

                    </div>

                    <div style="z-index:1;">

                        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">

                            <h1 style="margin:0; font-size:2.5rem; line-height:1;">${user.nombre}</h1>

                            ${db.isCarinPlusActive(user) ? `
                                <div style="display:flex; flex-direction:column; gap:2px;">
                                    <span class="badge-premium" style="font-size:11px;"> \u2728 Miembro Carin+</span>
                                    ${user.carinPlusExpiry ? `<span style="font-size:9px; color:#db2777; font-weight:800; background:#fce7f3; padding:1px 6px; border-radius:4px; width:fit-content;">Expira: ${new Date(user.carinPlusExpiry).toLocaleDateString()}</span>` : ''}
                                </div>
                            ` : ''}

                            ${user.rango === 'admin' || user.rango === 'owner' ? '<span style="background:#1e293b; color:white; padding:4px 10px; border-radius:999px; font-size:11px; font-weight:700;"> Admin</span>' : ''}

                        </div>

                        <p style="color:var(--color-text-muted); font-size:1.1rem; margin:0;">${user.email}</p>

                    </div>

                    <button onclick="App.handleLogout()" class="btn btn-default" style="margin-left:auto; color:#ef4444; border-color:#fca5a5; z-index:1;">Cerrar Sesión</button>

                </div>



                <div class="account-main-grid">

                    <div>
                        <!-- Tabs -->
                        <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; margin-bottom:2rem; border-bottom:1px solid var(--color-border);">
                            <div style="display:flex; gap:2rem; padding-bottom:0.5rem; min-width:max-content;">
                                ${isMobile ? `<div style="cursor:pointer; padding:10px 0; font-weight:700; font-size:1.1rem; color:${this._accountTab === 'perfil' ? 'var(--color-primary)' : 'var(--color-text-muted)'}; border-bottom:3px solid ${this._accountTab === 'perfil' ? 'var(--color-primary)' : 'transparent'}; transition:all 0.3s;" onclick="App.setAccountTab('perfil')">Mi Perfil</div>` : ''}
                                <div style="cursor:pointer; padding:10px 0; font-weight:700; font-size:1.1rem; color:${this._accountTab === 'compras' ? 'var(--color-primary)' : 'var(--color-text-muted)'}; border-bottom:3px solid ${this._accountTab === 'compras' ? 'var(--color-primary)' : 'transparent'}; transition:all 0.3s;" onclick="App.setAccountTab('compras')">Mis Compras</div>
                                <div style="cursor:pointer; padding:10px 0; font-weight:700; font-size:1.1rem; color:${this._accountTab === 'cursos' ? 'var(--color-primary)' : 'var(--color-text-muted)'}; border-bottom:3px solid ${this._accountTab === 'cursos' ? 'var(--color-primary)' : 'transparent'}; transition:all 0.3s;" onclick="App.setAccountTab('cursos')">Mis Cursos</div>
                            </div>
                        </div>

                        ${this._accountTab === 'perfil' ? `
                            <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md); margin-bottom:2rem;">
                                <h3 style="margin-bottom:1.5rem;">Detalles del Perfil</h3>
                                <div style="margin-bottom:1.5rem;">
                                    <label style="display:block; font-size:12px; font-weight:700; color:var(--color-text-muted); margin-bottom:0.25rem;">Nombre Completo</label>
                                    <input type="text" value="${user.nombre}" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" readonly>
                                </div>
                                <div style="margin-bottom:1.5rem;">
                                    <label style="display:block; font-size:12px; font-weight:700; color:var(--color-text-muted); margin-bottom:0.25rem;">Correo Electr\u00F3nico</label>
                                    <input type="text" value="${user.email}" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" readonly>
                                </div>
                                <p style="font-size:12px; color:var(--color-text-muted);">Los datos de tu perfil solo pueden ser modificados por un administrador por motivos de seguridad.</p>
                            </div>
                        ` : ''}

                        ${this._accountTab === 'cursos' ? `
                        <!-- Mis Cursos -->
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                            <h2 style="margin:0; display:flex; align-items:center; gap:0.5rem; font-size:1.5rem;">\uD83D\uDCDA Mis Cursos</h2>
                            ${db.hasAnyRole(user.userId, ['admin', 'tecnico']) ? `<a href="#/admin/cursos?add_new=true" class="btn btn-primary" style="font-size:12px; padding:8px 16px;">\u2795 Crear Curso</a>` : ''}
                        </div>
                        ${misCursos.length === 0 ? `
                            <div style="background:var(--color-bg); border:1px dashed var(--color-border); padding:3rem; border-radius:var(--radius-md); text-align:center; color:var(--color-text-muted);">
                                <div style="font-size:3rem; margin-bottom:1rem;">📝</div>
                                <h3 style="margin-bottom:0.5rem;">Aún no estás inscrito en ningún curso</h3>
                                <p style="margin-bottom:1.5rem;">Explora nuestros talleres y aprendé algo nuevo hoy.</p>
                                <a href="#/cursos" class="btn btn-dark">Ver Cursos</a>
                            </div>
                        ` : `
                            <div style="display:grid; gap:1.5rem;">
                                ${misCursos.map(c => {
                                    const inscActual = db.get('inscripciones').find(i => i.cursoId === c.id && i.userId === user.userId && i.mes === mesActual && i.anio == anioActual) || { estadoPago: 'Sin Pagar' };
                                    const siguienteMesIdx = (fechaActual.getMonth() + 1) % 12;
                                    const siguienteMes = meses[siguienteMesIdx];
                                    const siguienteAnio = fechaActual.getFullYear() + (siguienteMesIdx === 0 ? 1 : 0);
                                    const inscSiguiente = db.get('inscripciones').find(i => i.cursoId === c.id && i.userId === user.userId && i.mes === siguienteMes && i.anio == siguienteAnio);
                                    const profe = db.get('profesores').find(p => p.id === c.profeId);
                                    const showInstructions = (inscActual.estadoPago === 'Sin Pagar' || inscActual.estadoPago === 'Reservado') || 
                                                             (inscSiguiente && (inscSiguiente.estadoPago === 'Sin Pagar' || inscSiguiente.estadoPago === 'Reservado'));

                                    return `
                                    <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-sm); padding:1rem; margin-bottom:1rem;">
                                        <div style="display:flex; align-items:center; gap:1rem; border-bottom:1px solid var(--color-border-alt); padding-bottom:1rem;">
                                            <div style="width:50px; height:50px; border-radius:8px; background:url('${c.banner}') center/cover; flex-shrink:0;"></div>
                                            <div style="flex:1;">
                                                <h3 style="margin:0; font-size:1.05rem;">${c.titulo}</h3>
                                                <div style="font-size:11px; color:var(--color-text-muted);">Cuota mensual: ${formatPrice(c.precio)}</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Mes Actual -->
                                        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0;">
                                            <div style="font-size:13px; font-weight:600;"> ${mesActual}:</div>
                                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                                ${inscActual.estadoPago === 'En Revisión' ? `
                                                    <div style="font-size:10px; font-weight:800; color:#854d0e; background:#fef9c3; padding:4px 8px; border-radius:4px;">En Revisión</div>
                                                ` : App.getStatusBadge(inscActual.estadoPago)}
                                                
                                                ${(inscActual.estadoPago === 'Sin Pagar' || inscActual.estadoPago === 'Pendiente') ? `
                                                    <button onclick="App.showPaymentModal('${c.id}', '${mesActual}', ${anioActual})" class="btn btn-dark" style="font-size:10px; padding:4px 12px;">Pagar</button>
                                                ` : inscActual.comprobante ? `
                                                    <button onclick="App.viewImageModal('${inscActual.comprobante}')" class="btn btn-default" style="font-size:10px; padding:4px 8px;">Ver Ticket</button>
                                                ` : ''}
                                            </div>
                                        </div>

                                        <!-- Mes Siguiente (Reserva) -->
                                        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.5rem; border-top:1px dashed var(--color-border);">
                                            <div style="font-size:12px; color:var(--color-text-muted);">Próximo mes (${siguienteMes}):</div>
                                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                                ${(inscSiguiente && inscSiguiente.estadoPago === 'En Revisión') ? `
                                                    <div style="font-size:10px; font-weight:800; color:#854d0e; background:#fef9c3; padding:4px 8px; border-radius:4px;">En Revisión</div>
                                                ` : (inscSiguiente ? App.getStatusBadge(inscSiguiente.estadoPago) : `<button onclick="App.requestReservation('${c.id}', '${user.userId}', '${siguienteMes}', ${siguienteAnio})" class="btn btn-default" style="font-size:10px; padding:4px 10px; border:1px solid var(--color-primary); color:var(--color-primary);">Solicitar Reserva</button>`)}
                                                
                                                ${(inscSiguiente && (inscSiguiente.estadoPago === 'Reservado' || inscSiguiente.estadoPago === 'Sin Pagar' || inscSiguiente.estadoPago === 'Pendiente')) ? `
                                                    <button onclick="App.showPaymentModal('${c.id}', '${siguienteMes}', ${siguienteAnio})" class="btn btn-dark" style="font-size:10px; padding:4px 12px;">Pagar</button>
                                                ` : (inscSiguiente && inscSiguiente.comprobante) ? `
                                                    <button onclick="App.viewImageModal('${inscSiguiente.comprobante}')" class="btn btn-default" style="font-size:10px; padding:4px 8px;">Ver Ticket</button>
                                                ` : ''}
                                            </div>
                                        </div>
                                        
                                        <!-- Instrucciones de Pago -->
                                        ${showInstructions ? `
                                            <div style="margin-top:1rem; padding:1rem; background:var(--color-success-bg); border:1px solid var(--color-success-border); border-radius:var(--radius-sm);">
                                                <h4 style="margin:0 0 0.5rem 0; color:var(--color-success-text); font-size:13px; display:flex; align-items:center; gap:4px;"> ✨ Instrucciones de Pago</h4>
                                                <p style="margin:0 0 0.5rem 0; font-size:12px; color:var(--color-success-text);">Para abonar este curso, por favor transfiere a la cuenta de <strong>${profe ? profe.nombre : 'tu profesor'}</strong>:</p>
                                                ${(profe && profe.banco && profe.alias) ? `
                                                    <div style="background:var(--color-bg); padding:0.5rem 1rem; border-radius:4px; border:1px solid var(--color-success-border); font-family:monospace; font-size:13px; margin-bottom:0.5rem; display:flex; justify-content:space-between; align-items:center;">
                                                        <div><strong style="color:var(--color-success-text);">${profe.banco}:</strong> <span id="alias-${c.id}">${profe.alias}</span></div>
                                                        <button onclick="navigator.clipboard.writeText('${profe.alias}'); App.showToast(' ✨ Alias copiado')" style="background:none; border:none; color:var(--color-success-text); cursor:pointer; font-weight:700; font-size:11px;">Copiar</button>
                                                    </div>
                                                    ${profe.notasPago ? `<p style="margin:0; font-size:11px; color:var(--color-success-text);"><em>Nota: ${profe.notasPago}</em></p>` : ''}
                                                ` : `<p style="margin:0; font-size:12px; color:var(--color-success-text);"><em>El profesor no ha configurado su Alias. Por favor, contáctalo directamente.</em></p>`}
                                            </div>
                                        ` : ''}

                                        <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--color-border-alt); display:flex; gap:0.5rem;">
                                            <a href="#/cursos/${c.id}" class="btn btn-dark" style="flex:1; text-align:center; font-size:11px; padding:10px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:8px;">
                                                <span>🏫 Entrar al Classroom</span>
                                            </a>
                                        </div>
                                    </div>`;
                                }).join('')}
                            </div>
                        `}
                        ` : `
                        <!-- Historial de Compras -->
                        <h2 style="margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem; font-size:1.5rem;">\uD83D\uDECD Historial de Compras</h2>
                        ${compras.length ? `
                            <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-sm);">
                                <table style="width:100%;border-collapse:collapse;">
                                    <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;background:var(--color-bg-alt);">
                                        <th style="padding:1rem 1.5rem;">Producto</th>
                                        <th style="padding:1rem 1.5rem;">Fecha</th>
                                        <th style="padding:1rem 1.5rem; text-align:right;">Monto</th>
                                        <th style="padding:1rem 1.5rem; text-align:center;">Estado</th>
                                        <th style="padding:1rem 1.5rem; text-align:right;">Acciones</th>
                                    </tr></thead>
                                    <tbody>
                                    ${compras.map(c => `
                                        <tr style="border-bottom:1px solid var(--color-border);">
                                            <td style="padding:1rem 1.5rem; font-weight:600;">${c.nombreProducto}</td>
                                            <td style="padding:1rem 1.5rem; font-size:13px; color:var(--color-text-muted);">${new Date(c.fecha).toLocaleDateString()}</td>
                                            <td style="padding:1rem 1.5rem; font-weight:700; color:var(--color-primary); text-align:right;">${formatPrice(c.precio)}</td>
                                            <td style="padding:1rem 1.5rem; text-align:center;">
                                                <span style="padding:4px 10px; border-radius:999px; font-size:10px; font-weight:700; background:${c.estado.includes('Reembolso')?'var(--color-danger-bg)':'var(--color-success-bg)'}; color:${c.estado.includes('Reembolso')?'var(--color-danger-text)':'var(--color-success-text)'}; border:1px solid ${c.estado.includes('Reembolso')?'var(--color-danger-border)':'var(--color-success-border)'}; text-transform:uppercase;">${c.estado}</span>
                                            </td>
                                            <td style="padding:1rem 1.5rem; text-align:right;">
                                                ${c.estado !== 'Reembolso Solicitado' ? `
                                                    <button onclick="App.requestRefund('${c.id}')" class="btn btn-default" style="font-size:10px; padding:4px 8px; color:var(--color-danger-text); border-color:var(--color-danger-border);">Solicitar Reembolso</button>
                                                ` : '<span style="font-size:10px; color:var(--color-text-muted);">En trámite</span>'}
                                            </td>
                                        </tr>
                                    `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        ` : `
                            <div style="background:var(--color-bg); border:1px dashed var(--color-border); padding:2rem; border-radius:var(--radius-md); text-align:center; color:var(--color-text-muted);">
                                <p>Aún no has realizado compras en nuestra tienda.</p>
                                <a href="#/tienda" class="btn btn-default" style="margin-top:0.5rem;">Ir a la tienda</a>
                            </div>
                        `}
                        `}
                    </div>



                    <!-- Datos Personales Panel Lateral (Solo PC) -->
                    ${!isMobile ? `
                    <div>
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md); position:sticky; top:2rem;">
                            <h3 style="margin-bottom:1.5rem;">Detalles del Perfil</h3>
                            <div style="margin-bottom:1.5rem;">
                                <label style="display:block; font-size:12px; font-weight:700; color:var(--color-text-muted); margin-bottom:0.25rem;">Nombre Completo</label>
                                <input type="text" value="${user.nombre}" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" readonly>
                            </div>
                            <div style="margin-bottom:1.5rem;">
                                <label style="display:block; font-size:12px; font-weight:700; color:var(--color-text-muted); margin-bottom:0.25rem;">Correo Electr\u00F3nico</label>
                                <input type="text" value="${user.email}" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" readonly>
                            </div>
                            <p style="font-size:12px; color:var(--color-text-muted);">Los datos de tu perfil solo pueden ser modificados por un administrador por motivos de seguridad.</p>
                        </div>
                    </div>
                    ` : ''}

                                <input type="email" value="${user.email}" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border); background:var(--color-bg-alt);" readonly>

                            </div>



                            <div style="margin-bottom:1.5rem;">

                                <label style="display:block; font-size:12px; font-weight:700; color:var(--color-text-muted); margin-bottom:0.25rem;">Teléfono</label>

                                <input type="text" id="perfil-telefono" value="${user.telefono || ''}" placeholder="Ej: +54 9 351 0000" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                            </div>



                            <button class="btn btn-dark" style="width:100%;" onclick="App.showToast(' Los cambios de perfil estarón disponibles pr ?ximamente')">Guardar Cambios</button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    },



    async uploadStudentComprobante(event, cursoId, userId, mes = null, anio = null) {
        const file = event.target.files[0];
        if (!file) return;

        App.showToast('\uD83D\uDE80 Subiendo comprobante...');
        const url = await db.uploadImage(file);
        
        if (url) {
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            const fechaActual = new Date();
            const targetMes = mes || meses[fechaActual.getMonth()];
            const targetAnio = anio || fechaActual.getFullYear();

            db.updatePagoEstado(cursoId, userId, targetMes, targetAnio, 'En Proceso', url);
            App.showToast('  Comprobante subido. Esperando revisi\u00F3n.');
            App.viewAccount(document.getElementById('main-content'));
        } else {
            App.showToast('\u274C Error al subir comprobante');
        }
    },



    getStatusBadge(estado) {

        if (estado === 'Pagado') return `<span style="background:var(--color-success-bg); color:var(--color-success-text); border:1px solid var(--color-success-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('AL DÍA')}</span>`;

        if (estado === 'En Proceso') return `<span style="background:var(--color-warning-bg); color:var(--color-warning-text); border:1px solid var(--color-warning-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('EN REVISIÓN')}</span>`;

        if (estado === 'Solicitado') return `<span style="background:var(--color-pink-bg); color:var(--color-pink-text); border:1px solid var(--color-pink-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('SOLICITADO')}</span>`;

        if (estado === 'Reservado') return `<span style="background:var(--color-info-bg); color:var(--color-info-text); border:1px solid var(--color-info-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('RESERVADO')}</span>`;

        if (estado === 'No Anotado') return `<span style="background:var(--color-bg-alt); color:var(--color-text-muted); border:1px solid var(--color-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('NO ANOTADO')}</span>`;

        return `<span style="background:var(--color-danger-bg); color:var(--color-danger-text); border:1px solid var(--color-danger-border); padding:4px 10px; border-radius:999px; font-size:11px; font-weight:800;"> ${translateText('PAGO PENDIENTE')}</span>`;

    },



    viewImageModal(base64) {

        let modal = document.getElementById('image-viewer-modal');

        if (!modal) {

            modal = document.createElement('div');

            modal.id = 'image-viewer-modal';

            modal.style.position = 'fixed';

            modal.style.top = '0'; modal.style.left = '0'; modal.style.width = '100%'; modal.style.height = '100%';

            modal.style.background = 'rgba(0,0,0,0.85)'; modal.style.zIndex = '9999';

            modal.style.display = 'flex'; modal.style.alignItems = 'center'; modal.style.justifyContent = 'center';

            modal.innerHTML = `

                <div style="position:relative; max-width:90%; max-height:90%;">

                    <button onclick="document.getElementById('image-viewer-modal').style.display='none'" style="position:absolute; top:-40px; right:0; background:none; border:none; color:white; font-size:30px; cursor:pointer;">&times;</button>

                    <img id="image-viewer-img" src="" style="max-width:100%; max-height:90vh; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.5);">

                </div>

            `;

            document.body.appendChild(modal);

        }

        document.getElementById('image-viewer-img').src = base64;

        modal.style.display = 'flex';

    },



    viewPaymentVerificationModal(cursoId, userId, mes, anio) {

        const insc = db.get('inscripciones').find(i => i.cursoId === cursoId && i.userId === userId && i.mes === mes && i.anio == anio);

        const profile = db.get('profiles').find(p => p.userId === userId);

        const curso = db.get('cursos').find(c => c.id === cursoId);

        const profe = db.get('profesores').find(p => p.id === curso.profeId);



        if (!insc || !insc.comprobante) return this.showToast('   No hay comprobante para este alumno');



        let modal = document.getElementById('payment-verify-modal');

        if (!modal) {

            modal = document.createElement('div');

            modal.id = 'payment-verify-modal';

            modal.className = 'modal-container';

            modal.style.position = 'fixed';

            modal.style.top = '0';

            modal.style.left = '0';

            modal.style.width = '100%';

            modal.style.height = '100%';

            modal.style.zIndex = '10000';

            document.body.appendChild(modal);

        }



        const amount = curso.precio || 0;

        const alias = (profe && profe.alias) ? profe.alias : 'No definido';



        modal.innerHTML = `

            <div class="modal-content" style="max-width:900px; width:95%; padding:0; overflow:hidden; display:flex; flex-direction:row; height:85vh; background:var(--color-bg);">

                <!-- Parte Izquierda: Imagen Full -->

                <div style="flex:1.2; background:#111; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">

                    <img src="${insc.comprobante}" style="max-width:100%; max-height:100%; object-fit:contain;" alt="Comprobante">

                    <div style="position:absolute; bottom:1rem; left:1rem; background:rgba(0,0,0,0.5); color:white; padding:4px 10px; border-radius:4px; font-size:11px; backdrop-filter:blur(4px);">

                        Ticket de ${profile.nombre}

                    </div>

                </div>



                <!-- Parte Derecha: Información -->

                <div style="flex:0.8; padding:2rem; display:flex; flex-direction:column; border-left:1px solid var(--color-border); overflow-y:auto;">

                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem;">

                        <div>

                            <h2 style="margin:0; font-size:1.5rem; font-weight:800;">Verificación</h2>

                            <p style="margin:4px 0 0; color:var(--color-text-muted); font-size:13px;">${mes} ${anio} - ${curso.titulo}</p>

                        </div>

                        <button onclick="document.getElementById('payment-verify-modal').style.display='none'" class="btn btn-default" style="padding:4px 8px; border:none; font-size:20px;">&times;</button>

                    </div>



                    <div style="background:var(--color-bg-alt); padding:1rem; border-radius:8px; margin-bottom:1.5rem; border:1px solid var(--color-border);">

                        <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:8px;">Datos del Alumno</div>

                        <div style="font-weight:700; font-size:15px;">${profile.nombre}</div>

                        <div style="font-size:12px; color:var(--color-text-muted);">${profile.email}</div>

                    </div>



                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">

                        <div style="background:#f0fdf4; padding:1rem; border-radius:8px; border:1px solid #bbf7d0;">

                            <div style="font-size:10px; font-weight:800; color:#166534; text-transform:uppercase; margin-bottom:4px;">Monto Esperado</div>

                            <div style="font-weight:800; font-size:1.2rem; color:#166534;">${formatPrice(amount)}</div>

                        </div>

                        <div style="background:#fefce8; padding:1rem; border-radius:8px; border:1px solid #fef08a;">

                            <div style="font-size:10px; font-weight:800; color:#854d0e; text-transform:uppercase; margin-bottom:4px;">Tu Alias</div>

                            <div style="font-weight:700; font-size:0.9rem; color:#854d0e; word-break:break-all;">${alias}</div>

                        </div>

                    </div>



                    <div style="flex:1;">

                        <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:10px;">Checklist de Validación</div>

                        <ul style="margin:0; padding:0; list-style:none; font-size:13px; color:var(--color-text-muted); display:flex; flex-direction:column; gap:8px;">

                            <li style="display:flex; gap:8px; align-items:center;">  El monto coincide con la cuota.</li>

                            <li style="display:flex; gap:8px; align-items:center;">  El destino es tu cuenta (${alias}).</li>

                            <li style="display:flex; gap:8px; align-items:center;">  La fecha del ticket es reciente.</li>

                            <li style="display:flex; gap:8px; align-items:center;">  El nombre del emisor tiene relación.</li>

                        </ul>

                    </div>



                    <div style="margin-top:2rem; display:flex; gap:1rem;">

                        <button class="btn btn-default" style="flex:1; color:#ef4444; border-color:#fca5a5;" onclick="document.getElementById('payment-verify-modal').style.display='none'; App.rejectPayment('${cursoId}', '${userId}', '${mes}', ${anio})">Rechazar Pago</button>

                        <button class="btn btn-primary" style="flex:1.5;" onclick="document.getElementById('payment-verify-modal').style.display='none'; App.approvePayment('${cursoId}', '${userId}', '${mes}', ${anio})">Confirmar y Aceptar</button>

                    </div>

                </div>

            </div>

        `;

        modal.style.display = 'flex';

    },



    async handleLogout() {
        try {
            await db.logout();
            this.showToast('Sesi\u00F3n cerrada');
            this.navigate('/');
            this.renderLayout();
        } catch (e) {
            console.error(e);
            this.showToast('\u274C Error al cerrar sesi\u00F3n');
        }
    },



    // ==========================================

    // CART PAGE (Full page view)

    // ==========================================

    viewCartPage(main) {

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0 };

        const configCarrito = db.get('configCarrito') || { tarifaServicio: 5 };

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;

        const showUSD = this._showUSD || false;

        const dolarRate = this._dolarRate || null;



        const activeCoupon = this._activeCoupon || null;



        const calcItemPrice = (item) => {

            const baseDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = item.carinPlusDescuento || 0;

            // FIX: extra replaces base, doesn't stack

            const carinDiscount = item.excluirCarinPlus ? 0 : (extraDesc > 0 ? extraDesc : baseDesc);

            const totalDesc = (isCarinPlus ? carinDiscount : 0) + globalSaleDesc;

            return totalDesc > 0 ? Math.round(item.precio * (1 - totalDesc / 100)) : item.precio;

        };



        const calcCarinPlusPrice = (item) => {

            const baseDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = item.carinPlusDescuento || 0;

            // FIX: extra replaces base

            const carinDiscount = item.excluirCarinPlus ? 0 : (extraDesc > 0 ? extraDesc : baseDesc);

            const totalDesc = carinDiscount + globalSaleDesc;

            return totalDesc > 0 ? Math.round(item.precio * (1 - totalDesc / 100)) : item.precio;

        };



        if (db.cart.length === 0) {

            main.innerHTML = `

                <div class="container" style="margin-top:5rem; text-align:center; padding-bottom:5rem;">

                    <div style="font-size:5rem; margin-bottom:1.5rem;">  ?</div>

                    <h2>Tu carrito est vacío</h2>

                    <p style="color:var(--color-text-muted); margin:1rem 0 2rem;">Explornuestra tienda y encontrlo que as.</p>

                    <a href="#/tienda" class="btn btn-dark">Ir a la Tienda</a>

                </div>`;

            return;

        }



        const subtotal = db.cart.reduce((acc, item) => acc + calcItemPrice(item), 0);

        const tarifaServicio = Math.round(subtotal * (configCarrito.tarifaServicio / 100));

        const couponDiscount = activeCoupon ? Math.round(subtotal * (activeCoupon.porcentaje / 100)) : 0;

        const total = subtotal + tarifaServicio - couponDiscount;



        // Carin+ upsell: if user isn't carin plus, show what they'd save

        const carinSubtotal = db.cart.reduce((acc, item) => acc + calcCarinPlusPrice(item), 0);

        const carinTotal = carinSubtotal + Math.round(carinSubtotal * (configCarrito.tarifaServicio / 100)) - couponDiscount;

        const carinSavings = total - carinTotal;



        // Recommendations: up to 4 products NOT in cart

        const cartIds = new Set(db.cart.map(i => i.id));

        const recs = db.get('productos').filter(p => p.visible && !cartIds.has(p.id)).slice(0, 4);



        main.innerHTML = `

        <div class="container" style="margin-top:2.5rem; margin-bottom:5rem;">

            <h1 style="margin-bottom:0.25rem;">Tu Carrito</h1>

            <p style="color:var(--color-text-muted); margin-bottom:2rem;">${db.cart.length} producto${db.cart.length !== 1 ? 's' : ''}</p>

            

            <div class="cart-page-grid">

                <!-- Left: Items -->

                <div>

                    <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; margin-bottom:2rem;">

                        ${db.cart.map((item, idx) => {

                            const price = calcItemPrice(item);

                            const globalDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

                            const totalDisc = (isCarinPlus ? globalDesc + (item.carinPlusDescuento || 0) : 0) + globalSaleDesc;

                            return `

                            <div class="cart-item-row">

                                <div class="cart-item-thumb">

                                    ${item.imagen ? `<img src="${item.imagen}" alt="${item.nombre}">` : item.emoji}

                                </div>

                                <div style="flex:1;">

                                    <div style="font-weight:700; font-size:15px;">${item.nombre}</div>

                                    <div style="font-size:12px; color:var(--color-text-muted);">${item.cat}</div>

                                    ${totalDisc > 0 ? `<div style="font-size:11px; color:#db2777;">-${totalDisc}% aplicado</div>` : ''}

                                </div>

                                <div style="text-align:right; display:flex; flex-direction:column; align-items:flex-end; gap:0.5rem;">

                                    ${price < item.precio ? `<div style="font-size:11px; color:var(--color-text-muted); text-decoration:line-through;">${formatPrice(item.precio)}</div>` : ''}

                                    <div style="font-weight:800; font-size:15px; color:${price < item.precio ? '#db2777' : 'var(--color-text)'};">${formatPrice(price)}</div>

                                    <div style="display:flex; gap:0.5rem;">

                                        <a href="#/tienda" class="btn btn-default" style="font-size:10px; padding:3px 8px;">Ver</a>

                                        <button class="btn btn-default" style="font-size:10px; padding:3px 8px; color:#ef4444;" onclick="App.removeFromCart(${idx}); App.viewCartPage(document.getElementById('main-content'))">Quitar</button>

                                    </div>

                                </div>

                            </div>`;

                        }).join('')}

                    </div>

                    

                    <!-- Coupon Area -->

                    <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">

                        <div style="font-weight:700; font-size:14px; margin-bottom:1rem;"> ? Cdigo de Descuento</div>

                        ${activeCoupon ? `

                            <div style="display:flex; justify-content:space-between; align-items:center; background:#dcfce7; padding:0.75rem 1rem; border-radius:var(--radius-sm);">

                                <span style="color:#15803d; font-weight:700; font-size:13px;">  ${activeCoupon.codigo} (-${activeCoupon.porcentaje}%)</span>

                                <button onclick="App.quitarCupon(); App.viewCartPage(document.getElementById('main-content'))" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:12px;">  Quitar</button>

                            </div>

                        ` : `

                            <div style="display:flex; gap:0.75rem;">

                                <input type="text" id="cupon-input" placeholder="Ej: BIENVENIDA10" style="flex:1; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm); text-transform:uppercase; font-size:13px;">

                                <button class="btn btn-dark" onclick="App.aplicarCuponPage()">Aplicar</button>

                            </div>

                        `}

                    </div>



                    <!-- Recommendations -->

                    ${recs.length ? `

                    <div>

                        <h3 style="margin-bottom:1rem;">  Tambión te puede interesar</h3>

                        <div class="recommendations-strip">

                            ${recs.map(p => {

                                const configCarinPlusLocal = db.get('configCarinPlus') || { descuentoGlobal: 0 };

                                const globalDescP = p.excluirCarinPlus ? 0 : (configCarinPlusLocal.descuentoGlobal || 0);

                                const totalDescP = globalDescP + (p.carinPlusDescuento || 0) + globalSaleDesc;

                                const pFinal = totalDescP > 0 ? Math.round(p.precio * (1 - totalDescP / 100)) : p.precio;

                                return `

                                <div class="recommendation-card" onclick="App.addToCart('${p.id}'); App.viewCartPage(document.getElementById('main-content'))">

                                    <div style="height:100px; background:var(--color-bg-alt); display:flex; align-items:center; justify-content:center; overflow:hidden;">

                                        ${p.imagen ? `<img src="${p.imagen}" style="width:100%; height:100%; object-fit:cover;">` : `<span style="font-size:3rem;">${p.emoji}</span>`}

                                    </div>

                                    <div style="padding:0.75rem;">

                                        <div style="font-weight:700; font-size:13px; margin-bottom:0.25rem;">${p.nombre}</div>

                                        ${totalDescP > 0 ? `<div class="price-premium" style="font-size:13px; font-weight:800;">${formatPrice(pFinal)} <span style="font-size:10px;">(-${totalDescP}%)</span></div>

                                        <div style="font-size:11px; color:var(--color-text-muted); text-decoration:line-through;">${formatPrice(p.precio)}</div>`

                                        : `<div style="font-weight:700; font-size:13px;">${formatPrice(p.precio)}</div>`}

                                        <div style="font-size:10px; margin-top:0.5rem; color:var(--color-primary); font-weight:700;">+ 🛒 Agregar al carrito</div>

                                    </div>

                                </div>`;

                            }).join('')}

                        </div>

                    </div>` : ''}

                </div>



                <!-- Right: Summary -->

                <div>

                    <div class="cart-summary-box">

                        <h3 style="margin-bottom:1.5rem;">Resumen de Compra</h3>



                        <label class="usd-toggle" style="margin-bottom:1.5rem;">

                            <input type="checkbox" ${showUSD ? 'checked' : ''} onchange="App.toggleUSD(this.checked)">

                            <span>Ver precios en USD</span>

                            ${dolarRate ? `<span style="font-size:10px; color:var(--color-text-muted);">(Blue $${dolarRate})</span>` : '<span style="font-size:10px; color:var(--color-text-muted);">Cargando...</span>'}

                        </label>



                        <div class="cart-summary-row">

                            <span>Subtotal</span><span>${formatPrice(subtotal)}</span>

                        </div>

                        <div class="cart-summary-row">

                            <span>Tarifa de Servicio (${configCarrito.tarifaServicio}%)</span>

                            <span>+ ${formatPrice(tarifaServicio)}</span>

                        </div>

                        ${couponDiscount > 0 ? `<div class="cart-summary-row" style="color:#15803d;">

                            <span>🎟️ Cupón ${activeCoupon.codigo}</span><span>- ${formatPrice(couponDiscount)}</span>

                        </div>` : ''}

                        <div class="cart-summary-row" style="font-size:1.15rem; font-weight:800;">

                            <span>Total</span><span>${formatPrice(total)}</span>

                        </div>



                        ${!isCarinPlus && carinSavings > 0 ? `

                        <div class="carin-plus-upsell">

                            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">

                                <span class="badge-premium" style="font-size:10px; padding:2px 8px;">CARIN+</span>

                                <span style="font-weight:700; font-size:13px; color:#be185d;"> Ahorrarías ${formatPrice(carinSavings)}!</span>

                            </div>

                            <p style="font-size:12px; color:#9d174d; margin:0 0 0.75rem;">Con Carin+ pagar ?as solo <b>${formatPrice(carinTotal)}</b> en vez de ${formatPrice(total)}.</p>

                            <a href="#/carin-plus" class="btn btn-dark" style="width:100%; text-align:center; background:#db2777; border-color:#db2777; font-size:13px; display:block;">

                                Quiero Carin+

                            </a>

                        </div>` : ''}



                        <button class="btn btn-dark" style="width:100%; padding:14px; font-size:1rem; margin-top:1.5rem;" onclick="App.checkout()">

                          🛍️ Confirmar Compra

                        </button>

                        <a href="#/tienda" style="display:block; text-align:center; font-size:13px; color:var(--color-text-muted); margin-top:1rem; text-decoration:none;">  Seguir comprando</a>

                    </div>

                </div>

            </div>

        </div>`;



        // Fetch USD rate if not cached

        if (!this._dolarRate) this.fetchDolarRate();

    },



    async fetchDolarRate() {

        try {

            const res = await fetch('https://dolarapi.com/v1/dolares/blue');

            const data = await res.json();

            this._dolarRate = data.venta;

            // Re-render cart if still on cart page

            if (window.location.hash === '#/carrito') {

                this.viewCartPage(document.getElementById('main-content'));

            }

        } catch (e) {

            this._dolarRate = null;

        }

    },



    toggleUSD(checked) {

        this._showUSD = checked;

        this.viewCartPage(document.getElementById('main-content'));

    },



    aplicarCuponPage() {

        const input = document.getElementById('cupon-input');

        if (!input) return;

        const codigo = input.value.trim().toUpperCase();

        const cupones = db.get('cupones') || [];

        const c = cupones.find(x => x.codigo === codigo && x.activo);

        if (c) {

            this._activeCoupon = c;

            c.usos = (c.usos || 0) + 1;

            db.save();

            this.showToast(`  Cupón ${c.codigo} aplicado (-${c.porcentaje}%)`);

            this.viewCartPage(document.getElementById('main-content'));

        } else {

            this.showToast(' 🎟️ Cupón inválido o vencido');

        }

    },



    checkout() {

        if (!db.currentUser) {

            this.showToast('   Debes iniciar sesión para comprar');

            return this.navigate('/login');

        }



        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0 };

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;



        // Process all items in cart

        db.cart.forEach(item => {

            const baseDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = item.carinPlusDescuento || 0;

            const carinDiscount = item.excluirCarinPlus ? 0 : (extraDesc > 0 ? extraDesc : baseDesc);

            const totalDesc = (isCarinPlus ? carinDiscount : 0) + globalSaleDesc;

            const finalPrice = totalDesc > 0 ? Math.round(item.precio * (1 - totalDesc / 100)) : item.precio;



            db.get('compras').push({

                id: 'COM' + Date.now() + Math.floor(Math.random()*1000),

                userId: db.currentUser.userId,

                productId: item.id,

                nombreProducto: item.nombre,

                precio: finalPrice,

                fecha: new Date().toISOString(),

                estado: 'Pagado'

            });

        });



        this.showToast('   Compra confirmada! Gracias por elegir Carin Atelier.');

        db.cart = [];

        db.save();
        db.addNotification(db.currentUser.userId, '\u00A1Gracias por tu compra! Ya pod\u00E9s verla en tu historial.', 'success');

        this.navigate('/mi-cuenta');

        this.renderLayout();

    },



    // ==========================================

    // CARIN+ LANDING PAGE

    // ==========================================

    viewCarinPlusPage(main) {

        const cfg = db.get('configCarinPlusPagina') || {};

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 15 };

        const planes = db.get('configCarinPlusPlanes') || [];

        const isAlready = db.currentUser && db.currentUser.rango === 'carin_plus';

        const beneficios = cfg.beneficios || [];

        const icons = ['💎', '🎁', '🚀', '⭐', '📱', '🔔'];

        

        const extraOffers = db.get('productos').filter(p => p.visible && p.isCarinExtraOffer).slice(0, 3);



        const buildWhatsAppUrl = (plan) => {

            const base = cfg.ctaUrl || 'https://wa.me/5493547000000';

            const sg = `Hola! Me gustara suscribirme al plan Carin+ de ${plan.meses} meses por ${formatPrice(plan.precio)}`;

            return `${base}?text=${encodeURIComponent(sg)}`;

        };



        main.innerHTML = `

            <style>

                .carin-dark-theme {

                    background-color: #0f172a;

                    color: #f8fafc;

                    min-height: 100vh;

                    font-family: 'Inter', sans-serif;

                }

                .glass-card {

                    background: rgba(30, 41, 59, 0.7);

                    backdrop-filter: blur(12px);

                    -webkit-backdrop-filter: blur(12px);

                    border: 1px solid rgba(255, 255, 255, 0.1);

                    border-radius: var(--radius-md);

                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;

                }

                .glass-card:hover {

                    transform: translateY(-5px);

                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(219, 39, 119, 0.2);

                    border-color: rgba(236, 72, 153, 0.3);

                }

                .neon-text {

                    background: linear-gradient(135deg, #f472b6, #db2777, #9333ea);

                    -webkit-background-clip: text;

                    -webkit-text-fill-color: transparent;

                }

                .glow-btn {

                    background: linear-gradient(135deg, #db2777, #9d174d);

                    color: white;

                    border: none;

                    position: relative;

                    overflow: hidden;

                    z-index: 1;

                }

                .glow-btn::before {

                    content: '';

                    position: absolute;

                    top: 0; left: -100%; width: 100%; height: 100%;

                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);

                    transition: left 0.5s;

                    z-index: -1;

                }

                .glow-btn:hover::before { left: 100%; }

            </style>

            

            <div class="carin-dark-theme">

                <!-- Premium Hero -->

                <div style="position:relative; overflow:hidden; padding:8rem 0 6rem 0;">

                    <!-- Particle Canvas -->

                    <canvas id="carin-bg-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:0; pointer-events:none; opacity:0.8;"></canvas>

                    

                    <!-- Glow Effects -->

                    <div style="position:absolute; top:-20%; left:-10%; width:50%; height:80%; background:radial-gradient(circle, rgba(219,39,119,0.15) 0%, rgba(15,23,42,0) 70%); pointer-events:none; z-index:1;"></div>

                    <div style="position:absolute; bottom:-20%; right:-10%; width:60%; height:80%; background:radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(15,23,42,0) 70%); pointer-events:none; z-index:1;"></div>

                    

                    <div class="container" style="position:relative; z-index:10; text-align:center;">

                        ${isAlready ? '<div style="font-size:0.9rem; background:rgba(34,197,94,0.2); color:#4ade80; display:inline-block; padding:6px 20px; border-radius:999px; border:1px solid rgba(34,197,94,0.3); margin-bottom:1.5rem; backdrop-filter:blur(4px);">  Ya sos miembro Carin+</div>' : ''}

                        

                        <div style="display:inline-flex; align-items:center; gap:8px; margin-bottom:1.5rem; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:6px 16px; border-radius:999px; backdrop-filter:blur(4px);">

                            <span style="display:inline-block; width:8px; height:8px; background:#ec4899; border-radius:50%; box-shadow:0 0 10px #ec4899;"></span>

                            <span style="font-size:11px; letter-spacing:2px; font-weight:700; color:#cbd5e1;">MEMBRESA EXCLUSIVA</span>

                        </div>

                        

                        <h1 style="font-size:4rem; font-weight:900; margin-bottom:1.5rem; line-height:1.1; letter-spacing:-1px; color: white;">

                            Descubrí ? <span class="text-carin-plus" style="filter: brightness(1.1);">Carin+</span>

                        </h1>

                        

                        <p style="font-size:1.25rem; color:#94a3b8; max-width:650px; margin:0 auto 2.5rem; line-height:1.6;">

                            ${cfg.subtitulo || 'El plan premium para quienes aman la moda y el diseño. Ahorra en todas tus compras y accede añofertasnicas.'}

                        </p>



                        ${!isAlready && planes[0] ? `

                            <button onclick="document.getElementById('carin-planes').scrollIntoView({behavior: 'smooth'})" class="btn glow-btn" style="padding:16px 36px; font-size:1.1rem; font-weight:800; border-radius:999px; display:inline-flex; align-items:center; gap:10px; box-shadow:0 10px 25px rgba(219,39,119,0.3); cursor:pointer;">

                                   VER PLANES

                            </button>

                            <div style="font-size:0.85rem; color:#64748b; margin-top:1rem;">Descubre todas las ventajas de ser premium</div>

                        ` : ''}

                    </div>

                </div>



                <!-- Showcase Offers -->

                ${extraOffers.length > 0 ? `

                <div class="container" style="margin-bottom:6rem;">

                    <div style="text-align:center; margin-bottom:2rem;">

                        <h3 class="neon-text" style="font-size:1.5rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:1px;">Ofertas Extra Activas</h3>

                        <p style="color:#94a3b8; font-size:0.95rem;">Los miembros Carin+ tienen acceso a estos descuentos gigantes hoy.</p>

                    </div>

                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">

                        ${extraOffers.map(p => {

                            const desc = configCarin.descuentoGlobal;

                            const extra = p.carinPlusDescuento || 0;

                            const finalDesc = extra > 0 ? extra : desc;

                            const pFinal = Math.round(p.precio * (1 - (finalDesc/100)));

                            return `

                            <div class="glass-card" style="padding:1.5rem; display:flex; align-items:center; gap:1rem;">

                                <div style="font-size:2.5rem; background:rgba(255,255,255,0.05); border-radius:12px; width:70px; height:70px; display:flex; align-items:center; justify-content:center;">${p.emoji}</div>

                                <div>

                                    <div style="font-size:13px; color:#ec4899; font-weight:800; margin-bottom:0.25rem;">-${finalDesc}% DESCUENTO</div>

                                    <div style="font-weight:700; font-size:1.1rem; color:white; margin-bottom:0.25rem;">${p.nombre}</div>

                                    <div style="display:flex; gap:0.5rem; align-items:center;">

                                        <span style="font-weight:800; color:#f8fafc; font-size:1.2rem;">${formatPrice(pFinal)}</span>

                                        <span style="text-decoration:line-through; color:#64748b; font-size:0.9rem;">${formatPrice(p.precio)}</span>

                                    </div>

                                </div>

                            </div>

                            `;

                        }).join('')}

                    </div>

                </div>

                ` : ''}



                <!-- Benefits Grid -->

                <div style="background:rgba(255,255,255,0.02); border-top:1px solid rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.05); padding:6rem 0;">

                    <div class="container">

                        <div style="text-align:center; margin-bottom:4rem;">

                            <h2 style="font-size:2.5rem; margin-bottom:1rem; color:white;">Todo esto es tuyo</h2>

                            <p style="color:#94a3b8; font-size:1.1rem; max-width:500px; margin:0 auto;">Disfruta de ventajas exclusivas desde el primer minuto de tu suscripción.</p>

                        </div>

                        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:2rem; max-width:1000px; margin:0 auto;">

                            <!-- Main Benefit Highlight -->

                            <div class="glass-card" style="grid-column:1/-1; background:linear-gradient(135deg, rgba(219,39,119,0.1), rgba(147,51,234,0.1)); border-color:rgba(219,39,119,0.3); padding:3rem; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center;">

                                <div style="font-size:4.5rem; font-weight:900; line-height:1; margin-bottom:0.5rem;" class="neon-text">${configCarin.descuentoGlobal}% OFF</div>

                                <div style="font-size:1.5rem; font-weight:700; color:white; margin-bottom:1rem;">Base garantizado en toda la tienda</div>

                                <p style="color:#cbd5e1; max-width:600px; margin:0;">No importa qué compres, siempre pagás menos. Este descuento se aplica automáticamente al iniciar sesión y se acumula con otras rebajas globales de la página.</p>

                            </div>

                            

                            ${beneficios.map((b, i) => `

                            <div class="glass-card" style="padding:2rem;">

                                <div style="width:50px; height:50px; background:rgba(236,72,153,0.1); border:1px solid rgba(236,72,153,0.2); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1.5rem; color:#ec4899;">

                                    ${icons[i % icons.length]}

                                </div>

                                <div style="font-weight:600; font-size:1.05rem; line-height:1.6; color:#e2e8f0;">${b}</div>

                            </div>`).join('')}

                        </div>

                    </div>

                </div>



                <!-- Subscription Plans -->

                <div id="carin-planes" class="container" style="padding:6rem 0;">

                    <div style="text-align:center; margin-bottom:4rem;">

                        <h2 style="font-size:2.5rem; margin-bottom:1rem; color:white;">Elige tu plan ideal</h2>

                        <p style="color:#94a3b8; font-size:1.1rem;">Precios transparentes. Congela tu cuota suscribindote por s meses.</p>

                    </div>

                    

                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:2rem; max-width:1000px; margin:0 auto;">

                        ${planes.map(plan => {

                            const precioMes = Math.round(plan.precio / plan.meses);

                            const isPopular = plan.etiqueta === 'Más Popular';

                            const isBest = plan.etiqueta === 'Mejor Valor';

                            const highlight = isPopular || isBest;

                            return `

                            <div class="glass-card" style="position:relative; display:flex; flex-direction:column; ${highlight ? 'border-color:rgba(236,72,153,0.5); box-shadow:0 0 30px rgba(219,39,119,0.15); transform:scale(1.05); z-index:2;' : ''}">

                                ${plan.etiqueta ? `<div style="position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:linear-gradient(90deg, #db2777, #9333ea); color:white; padding:4px 16px; border-radius:999px; font-size:11px; font-weight:800; letter-spacing:1px; text-transform:uppercase; box-shadow:0 4px 10px rgba(219,39,119,0.4); white-space:nowrap;">${plan.etiqueta}</div>` : ''}

                                

                                <div style="padding:3rem 2rem 2rem; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05); flex:1;">

                                    <div style="font-size:1rem; font-weight:700; color:#94a3b8; margin-bottom:1rem; letter-spacing:1px;">${plan.meses} MESES</div>

                                    <div style="display:flex; align-items:flex-start; justify-content:center; gap:4px; margin-bottom:0.5rem;">

                                        <span style="font-size:1.5rem; font-weight:700; color:#94a3b8; margin-top:0.5rem;">$</span>

                                        <span style="font-size:3.5rem; font-weight:900; color:white; line-height:1;">${plan.precio.toLocaleString('es-AR')}</span>

                                    </div>

                                    <div style="font-size:14px; color:#64748b; margin-bottom:1.5rem;">Equivale a ${formatPrice(precioMes)} / mes</div>

                                    

                                    ${plan.descuento > 0 ? `<div style="display:inline-block; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid rgba(34,197,94,0.2); font-size:12px; font-weight:700; padding:4px 12px; border-radius:999px;">Ahorras un ${plan.descuento}%</div>` : ''}

                                </div>

                                

                                <div style="padding:2rem;">

                                    ${!isAlready ?

                                       `<a href="${buildWhatsAppUrl(plan)}" target="_blank" class="btn ${highlight?'glow-btn':''}" style="width:100%; text-align:center; display:block; padding:14px; border-radius:var(--radius-sm); font-weight:800; font-size:1.05rem; ${!highlight?'background:rgba(255,255,255,0.1); color:white; border:1px solid rgba(255,255,255,0.2);':''}">

                                            Suscribirse ahora mismo

                                        </a>`

                                        : `<div style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid rgba(34,197,94,0.3); border-radius:var(--radius-sm); padding:14px; font-size:14px; font-weight:800; text-align:center;">  Plan Seleccionado</div>`

                                    }

                                </div>

                            </div>`;

                        }).join('')}

                    </div>

                </div>



                <!-- FAQ -->

                <div class="container" style="padding-bottom:8rem; max-width:800px;">

                    <h2 style="text-align:center; margin-bottom:3rem; color:white;">Preguntas Frecuentes</h2>

                    <div style="display:flex; flex-direction:column; gap:1.5rem;">

                        ${[

                            [' Cmo es el proceso de suscripción?', 'Al elegir un plan te redirigiremos a WhatsApp. All ? coordinamos el pago (transferenciaño link de pago) y activamos tu cuenta instantneamente.'],

                            [' El descuento se aplica a toda la tienda?', 'S, el descuento base del plan Carin+ se aplica a moldes, clases e insumos de forma automtica al iniciar sesión.'],

                            [' Tengo obligación de renovar?', 'No. Al finalizar tus meses contratados te avisaremos. Sióno deseas renovar, tu cuenta simplemente volveral estado normal sin cobros automticos sorpresas.'],

                            [' Quson las Ofertas Extra?', 'Son productos seleccionados mes a mes que tienen un descuento SUPERIOR al base garantizado (ej: 40% o 50% OFF exclusivo para miembros).']

                        ].map(([q, a]) => `

                        <div class="glass-card" style="padding:2rem;">

                            <div style="font-weight:800; font-size:1.1rem; margin-bottom:1rem; color:white; display:flex; align-items:flex-start; gap:10px;">

                                <span style="color:#ec4899;"> ?</span> ${q}

                            </div>

                            <div style="font-size:1rem; color:#94a3b8; line-height:1.6; padding-left:26px;">${a}</div>

                        </div>`).join('')}

                    </div>

                </div>

            </div>`;

        

        // Initialize the animated background

        setTimeout(() => {

            if (this.carinBg) {

                this.carinBg.active = false;

            }

            this.carinBg = new ParticleBackground('carin-bg-canvas', {

                shapes: ['star', 'heart', 'clover', 'percent'],

                colors: ['#db2777', '#f472b6', '#c026d3', '#e879f9', '#9333ea']

            });

        }, 50);

    },



    viewSupport(main) {

        const user = db.currentUser;

        if (!user) return this.navigate('/login');

        

        // Parse paras

        const paras = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');

        const showForm = paras.get('action') === 'new' || paras.get('type') === 'refund';

        const prefillType = paras.get('type');

        const prefillId = paras.get('id');



        const tickets = db.get('tickets')

            .filter(t => t.userId === user.userId)

            .sort((a, b) => new Date(b.id.substring(1)) - new Date(a.id.substring(1))); // Sort by ID/Date newest first



        if (showForm) {

            this.renderSupportForm(main, prefillType, prefillId);

        } else {

            this.renderSupportList(main, tickets);

        }

    },



    renderSupportList(main, tickets) {

        main.innerHTML = `

            <div class="container" style="margin-top: 3rem; margin-bottom: 5rem;">

                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 3rem;">

                    <div>

                        <h1 style="margin:0;">Centro de Soporte</h1>

                        <p style="color:var(--color-text-muted); margin-top:0.5rem;">Gestiona tus consultas y solicitudes de reembolso.</p>

                    </div>

                    <button onclick="App.navigate('/soporte?action=new')" class="btn btn-dark" style="padding:12px 24px; font-weight:700;">\u2795 Crear Nuevo Ticket</button>

                </div>



                <div style="display: flex; flex-direction: column; gap: 1.5rem;">

                    ${tickets.length === 0 ? `

                        <div style="text-align:center; padding:5rem; background:var(--color-bg); border:1px dashed var(--color-border); border-radius:var(--radius-md);">

                            <div style="font-size:4rem; margin-bottom:1rem;">  ?</div>

                            <h3>No tienes tickets activos</h3>

                            <p style="color:var(--color-text-muted); margin-bottom:2rem;">Si tienes alguna duda o problema, estamos para ayudarte.</p>

                            <button onclick="App.navigate('/soporte?action=new')" class="btn btn-default">Abrir mi primer ticket</button>

                        </div>

                    ` : tickets.map(t => {

                        const lastMsg = t.mensajes[t.mensajes.length - 1];

                        const unreadCount = t.mensajes.filter(m => m.esEquipo && (!t.lastReadByUser || new Date(m.fecha) > new Date(t.lastReadByUser))).length;

                        

                        return `

                        <div style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 1.5rem; border-radius: var(--radius-md); box-shadow:var(--shadow-sm); display:flex; align-items:center; gap:2rem; transition:all 0.2s; position:relative;">

                            ${unreadCount > 0 ? `<div style="position:absolute; top:-10px; right:-10px; background:#ef4444; color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; border:2px solid white; box-shadow:var(--shadow-sm); animation: pulse-red 2s infinite;">${unreadCount}</div>` : ''}

                            

                            <div style="width:50px; height:50px; border-radius:12px; background:var(--color-bg-alt); display:flex; align-items:center; justify-content:center; font-size:1.5rem;">

                                ${t.categoria === 'Reembolso' ? '  ' : t.categoria === 'Problema Técnico' ? '  ?' : '  '}

                            </div>

                            

                            <div style="flex:1;">

                                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.25rem;">

                                    <span style="font-size:10px; text-transform:uppercase; font-weight:800; color:var(--color-text-muted);">${t.categoria || 'Consulta'}</span>

                                    <span style="font-size:10px; padding:2px 8px; border-radius:999px; font-weight:800; ${t.estado==='Abierto'?'background:#dbeafe; color:#1d4ed8;':t.estado==='En curso'?'background:#fef9c3; color:#a16207;':'background:var(--color-bg-alt); color:#6b7280;'}">${t.estado.toUpperCase()}</span>

                                </div>

                                <h3 style="margin:0; font-size:1.2rem;">${t.asunto}</h3>

                                <div style="font-size:13px; color:var(--color-text-muted); margin-top:0.4rem;">

                                     ?ltimo mensaje: <b>${lastMsg.esEquipo ? 'Equipo Carin' : 'T ?'}</b>    ${new Date(lastMsg.fecha).toLocaleString()}

                                </div>

                            </div>

                            

                            <button onclick="App.viewUserTicket('${t.id}')" class="btn btn-default" style="padding:10px 20px; font-weight:700; display:flex; align-items:center; gap:8px;">

                                Abrir Chat

                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>

                            </button>

                        </div>

                        `;

                    }).join('')}

                </div>

            </div>

            <style>

                @keyframes pulse-red {

                    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }

                    70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }

                    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }

                }

            </style>

        `;

    },



    renderSupportForm(main, prefillType, prefillId) {

        const myPurchases = db.get('compras').filter(c => c.userId === db.currentUser.userId);

        

        main.innerHTML = `

            <div class="container" style="margin-top: 3rem; margin-bottom: 5rem; max-width:800px;">

                <button onclick="App.navigate('/soporte')" class="btn btn-default" style="margin-bottom:2rem; font-size:13px;">⬅️ Volver al listado</button>

                

                <h2 style="margin-bottom:2rem;">Abrir Nuevo Ticket</h2>

                

                <div style="background: var(--color-bg); border: 1.5px solid var(--color-border); padding: 3rem; border-radius: var(--radius-lg); box-shadow:var(--shadow-md);">

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-bottom:2rem;">

                        <div>

                            <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 0.5rem;">Categoría de la consulta</label>

                            <select id="ticket-category" onchange="App._toggleTicketProductSelector(this.value)" style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border);">

                                <option value="Consulta General">Consulta General</option>

                                <option value="Problema Técnico" ${prefillType === 'tech' ? 'selected' : ''}>Problema Técnico</option>

                                <option value="Reembolso" ${prefillType === 'refund' ? 'selected' : ''}>Solicitar un Reembolso</option>

                                <option value="Pagos / Facturación">Pagos / Facturación</option>

                                <option value="Otros">Otros</option>

                            </select>

                        </div>

                        <div id="ticket-product-wrap" style="display:${prefillType === 'refund' ? 'block' : 'none'};">

                            <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 0.5rem;">Producto adquirido</label>

                            <select id="ticket-product" style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border);">

                                ${myPurchases.map(p => `<option value="${p.id}" ${p.id === prefillId ? 'selected' : ''}>${p.nombreProducto}</option>`).join('')}

                                ${myPurchases.length === 0 ? '<option value="">No tienes compras registradas</option>' : ''}

                            </select>

                        </div>

                    </div>



                    <div style="margin-bottom: 2rem;">

                        <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 0.5rem;">Asunto descriptivo</label>

                        <input type="text" id="ticket-subject" placeholder="Breve título de tu problema" value="${prefillType === 'refund' ? 'Solicitud de Reembolso' : ''}" style="width: 100%; padding: 14px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border); font-size:16px;">

                    </div>



                    <div style="margin-bottom: 2rem;">

                        <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 0.5rem;">Descripción detallada</label>

                        <textarea id="ticket-sg" placeholder="Explcanos cmo podemos ayudarte..." style="width: 100%; padding: 14px; border-radius: var(--radius-sm); border: 1.5px solid var(--color-border); height: 180px; font-family:inherit; font-size:15px;"></textarea>

                    </div>



                    <div style="margin-bottom: 2.5rem;">

                        <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 1rem;">Evidencia / Capturas (Opcional)</label>

                        <div id="ticket-attachments-preview" style="display:flex; gap:15px; flex-wrap:wrap; margin-bottom:15px;"></div>

                        <label class="btn btn-default" style="display:inline-flex; align-items:center; gap:10px; cursor:pointer; font-size:13px; padding:10px 20px;">

                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5-5 5 5m-5-5v12"/></svg>

                            Seleccionar Archivos

                            <input type="file" id="ticket-file-input" accept="image/*" multiple style="display:none;" onchange="App._handleTicketFile(event)">

                        </label>

                        <input type="hidden" id="ticket-attachments-data" value="[]">

                    </div>



                    <button onclick="App.createTicket()" class="btn btn-dark" style="width: 100%; padding:18px; font-size:1.1rem; font-weight:800; box-shadow:0 10px 20px rgba(0,0,0,0.1);">Enviar Solicitud de Soporte</button>

                </div>

            </div>

        `;

    },



    viewUserTicket(id) {

        const t = db.get('tickets').find(x => x.id === id);

        if (!t) return;

        

        // Mark as read

        t.lastReadByUser = new Date().toISOString();

        db.save();



        const modal = `

        <div id="user-ticket-modal" style="position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:1000; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px);">

            <div style="background:var(--color-bg); width:700px; max-width:95%; height:80vh; border-radius:var(--radius-lg); box-shadow:var(--shadow-lg); overflow:hidden; display:flex; flex-direction:column;">

                <div style="padding:1.5rem 2rem; border-bottom:1px solid var(--color-border); display:flex; justify-content:space-between; align-items:center; background:var(--color-bg-alt);">

                    <div>

                        <div style="font-size:10px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:4px;">${t.categoria}    Ticket #${t.id}</div>

                        <h3 style="margin:0;">${t.asunto}</h3>

                    </div>

                    <button onclick="document.getElementById('user-ticket-modal').remove(); App.viewSupport(document.getElementById('main-content'))" style="background:none; border:none; font-size:2rem; cursor:pointer; color:var(--color-text-muted);">&times;</button>

                </div>

                

                <div id="user-chat-window" style="flex:1; padding:2rem; overflow-y:auto; background:var(--color-bg); display:flex; flex-direction:column; gap:1.5rem;">

                    ${t.mensajes.map(m => `

                        <div style="max-width:80%; ${m.esEquipo ? 'align-self:flex-start; background:var(--color-bg-alt); color:var(--color-text); border:1px solid var(--color-border); border-radius:15px 15px 15px 0;' : 'align-self:flex-end; background:var(--color-primary); color:white; border-radius:15px 15px 0 15px;'} padding:1.2rem; box-shadow:var(--shadow-sm);">

                            <div style="font-size:14px; line-height:1.6;">${m.texto}</div>

                            <div style="font-size:10px; margin-top:8px; opacity:0.7; text-align:right;">${new Date(m.fecha).toLocaleString()}</div>

                        </div>

                    `).join('')}

                    

                    ${t.capturas && t.capturas.length > 0 ? `

                        <div style="margin-top:1rem; border-top:1px dashed var(--color-border); padding-top:1rem;">

                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.75rem;">CAPTUTAS ADJUNTAS:</div>

                            <div style="display:flex; gap:10px; flex-wrap:wrap;">

                                ${t.capturas.map(img => `

                                    <img src="${img}" onclick="App.viewImageModal('${img}')" style="width:100px; height:70px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid var(--color-border);">

                                `).join('')}

                            </div>

                        </div>

                    ` : ''}

                </div>



                <div style="padding:1.5rem 2rem; border-top:1px solid var(--color-border); display:flex; gap:1rem; background:var(--color-bg-alt);">

                    <input type="text" id="user-reply-input" placeholder="Escribe tu respuesta aqu..." style="flex:1; padding:12px 18px; border-radius:999px; border:1.5px solid var(--color-border); font-size:14px;" onkeypress="if(event.key==='Enter') App.sendUserTicketReply('${t.id}')">

                    <button class="btn btn-dark" style="border-radius:999px; padding:0 25px;" onclick="App.sendUserTicketReply('${t.id}')">Enviar</button>

                </div>

            </div>

        </div>

        `;

        

        let container = document.getElementById('user-ticket-modal-container');

        if (!container) {

            container = document.createElement('div');

            container.id = 'user-ticket-modal-container';

            document.body.appendChild(container);

        }

        container.innerHTML = modal;

        

        const chatWin = document.getElementById('user-chat-window');

        chatWin.scrollTop = chatWin.scrollHeight;

    },



    sendUserTicketReply(ticketId) {

        const input = document.getElementById('user-reply-input');

        if (!input || input.value.trim() === '') return;

        

        const t = db.get('tickets').find(x => x.id === ticketId);

        if (t) {

            t.mensajes.push({

                id: 'm' + Date.now(),

                texto: input.value.trim(),

                fecha: new Date().toISOString(),

                esEquipo: false

            });

            t.estado = 'Abierto'; // Re-open if closed/in progress? Or just keep state

            t.lastReadByUser = new Date().toISOString();

            db.save();

            this.viewUserTicket(ticketId); // refresh

        }

    },



    _toggleTicketProductSelector(val) {

        document.getElementById('ticket-product-wrap').style.display = val === 'Reembolso' ? 'block' : 'none';

    },



    _handleTicketFile(event) {

        const files = Array.from(event.target.files);

        const preview = document.getElementById('ticket-attachments-preview');

        const dataInput = document.getElementById('ticket-attachments-data');

        let currentData = JSON.parse(dataInput.value);



        files.forEach(file => {

            const reader = new FileReader();

            reader.onload = (e) => {

                const base64 = e.target.result;

                currentData.push(base64);

                dataInput.value = JSON.stringify(currentData);



                const div = document.createElement('div');

                div.style.width = '60px';

                div.style.height = '60px';

                div.style.borderRadius = '4px';

                div.style.background = `url(${base64}) center/cover`;

                div.style.border = '1px solid var(--color-border)';

                div.style.position = 'relative';

                div.innerHTML = `<button onclick="this.parentElement.remove(); App._removeTicketFile('${base64}')" style="position:absolute; top:-5px; right:-5px; background:#ef4444; color:white; border:none; border-radius:50%; width:18px; height:18px; cursor:pointer; font-size:10px;"> </button>`;

                preview.appendChild(div);

            };

            reader.readAsDataURL(file);

        });

    },



    _removeTicketFile(base64) {

        const dataInput = document.getElementById('ticket-attachments-data');

        let currentData = JSON.parse(dataInput.value);

        currentData = currentData.filter(x => x !== base64);

        dataInput.value = JSON.stringify(currentData);

    },



    createTicket() {

        const catSelect = document.getElementById('ticket-category');

        const subjInput = document.getElementById('ticket-subject');

        const sgInput = document.getElementById('ticket-sg');

        const prodSelect = document.getElementById('ticket-product');

        const attachmentsInput = document.getElementById('ticket-attachments-data');



        const categoria = catSelect.value;

        const asunto = subjInput.value;

        const sg = sgInput.value;

        const productoId = prodSelect ? prodSelect.value : null;

        const capturas = JSON.parse(attachmentsInput.value || '[]');



        if (!asunto || !sg) return this.showToast('   Por favor, completa el asunto y el mensaje');

        if (categoria === 'Reembolso' && !productoId) return this.showToast('   Debes seleccionar un producto para el reembolso');

        

        const id = 'T' + Date.now();

        const newTicket = {

            id, 

            userId: db.currentUser.userId, 

            asunto, 

            categoria,

            productoId: categoria === 'Reembolso' ? productoId : null,

            prioridad: categoria === 'Reembolso' ? 'Alta' : 'Media', 

            estado: 'Abierto', 

            asignadoA: null,

            capturas,

            mensajes: [{ id: 'm1', texto: sg, fecha: new Date().toISOString(), esEquipo: false }],

            lastReadByUser: new Date().toISOString()

        };

        

        db.get('tickets').push(newTicket);
        db.addNotification(db.currentUser.userId, 'Se cre\u00F3 tu ticket satisfactoriamente. Te responderemos pronto.', 'info');

        

        // If it's a refund, mark the order as "Reembolso Solicitado"

        if (categoria === 'Reembolso') {

            const comp = db.get('compras').find(c => c.id === productoId);

            if (comp) comp.estado = 'Reembolso Solicitado';

        }



        db.save();

        

        // Clear ForsubjInput.value = '';

        sgInput.value = '';

        attachmentsInput.value = '[]';

        const preview = document.getElementById('ticket-attachments-preview');

        if (preview) preview.innerHTML = '';



        this.showToast('  Ticket creado con  ?xito. Redirigiendo...');

        

        // Navigate back to list

        setTimeout(() => {

            this.navigate('/soporte');

        }, 1500);

    },



    // ----------------------------------------------------

    // IMAGE UPLOAD SYSTEM

    // ----------------------------------------------------

    async handleImageUpload(event, previewId, hiddenInputId) {
        const file = event.target.files[0];
        if (!file) return;

        this.showToast('\uD83D\uDE80 Subiendo imagen a la nube...');
        try {
            const url = await db.uploadImage(file);
            if (url) {
                document.getElementById(hiddenInputId).value = url;
                const preview = document.getElementById(previewId);
                if (preview) {
                    preview.src = url;
                    preview.style.display = 'block';
                }
                this.showToast('\u2705 Imagen subida con \u00E9xito');
            }
        } catch (e) {
            console.error(e);
            this.showToast('\u274C Error al subir imagen');
        }
    },

    // ----------------------------------------------------

    // ADMIN PANEL V2 - REDESIGN

    // ----------------------------------------------------



    viewAdmin(container, section = 'dashboard') {

        if (!db.currentUser || !db.hasAnyRole(db.currentUser.userId, ['admin', 'tecnico'])) {

            this.navigate('/');

            return;

        }



        const stats = db.getStats();
        const compras = db.get('compras');
        const cursos = db.get('cursos');
        const productos = db.get('productos');
        const users = db.get('profiles');
        const tickets = db.get('tickets') || [];
        const cats = db.get('categorias');

        const isAct = (sec) => section === sec ? 'active' : '';
        const sidebarLink = (hash, sec, icon, label) => `<a href="${hash}" class="admin-nav-btn ${isAct(sec)}">${icon} ${translateText(label)}</a>`;
        
        const isAdmin = db.hasAnyRole(db.currentUser.userId, ['admin', 'owner']);

        const sidebar = `
            <aside id="admin-sidebar" class="admin-sidebar">
                <button class="btn-close-sidebar" onclick="document.getElementById('admin-sidebar').classList.remove('active')" style="display:none; margin-bottom:1.5rem; align-items:center; gap:0.5rem; background:none; border:none; color:var(--color-primary); font-weight:800; cursor:pointer;">
                    ← Cerrar Menú
                </button>

                ${isAdmin ? `
                <div class="admin-sidebar-category" onclick="App.toggleAdminSidebarCategory(this)">${translateText('Principal')}</div>
                <span class="admin-sidebar-desc">Resumen general y configuración básica del sitio.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/dashboard','dashboard','📊','Dashboard')}
                    ${sidebarLink('#/admin/anuncios','anuncios','📢','Anuncios')}
                    ${sidebarLink('#/admin/inicio','inicio','📄','Página Inicio')}
                    ${sidebarLink('#/admin/regiones','regiones','🌍','Regiones')}
                </div>

                <div class="admin-sidebar-category" onclick="App.toggleAdminSidebarCategory(this)">${translateText('Tienda')}</div>
                <span class="admin-sidebar-desc">Gestión de productos, categorías y descuentos.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/productos','productos','📦','Productos')}
                    ${sidebarLink('#/admin/categorias','categorias','📁','Categorías')}
                    ${sidebarLink('#/admin/descuentos','descuentos','🏷️','Descuentos')}
                    ${sidebarLink('#/admin/config_carrito','config_carrito','🛒','Config. Carrito')}
                </div>

                <div class="admin-sidebar-category" style="color:#db2777;" onclick="App.toggleAdminSidebarCategory(this)">✨ ${translateText('Carin+ Hub')}</div>
                <span class="admin-sidebar-desc">Centro de control para el programa premium.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/carin_plus_hub','carin_plus_hub','🖥️','Panel Carin+')}
                    ${sidebarLink('#/admin/carin_plus','carin_plus','🏷️','Carin+ Ofertas')}
                    ${sidebarLink('#/admin/carin_plus_pagina','carin_plus_pagina','📄','Carin+ Página')}
                    ${sidebarLink('#/admin/planes_carin','planes_carin','💎','Planes Carin+')}
                </div>

                <div class="admin-sidebar-category" onclick="App.toggleAdminSidebarCategory(this)">${translateText('Gestión de Cursos')}</div>
                <span class="admin-sidebar-desc">Administración de contenido educativo y docentes.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/cursos','cursos','🎓','Cursos y Alumnos')}
                    ${sidebarLink('#/admin/profesores','profesores','👩‍🏫','Profesores')}
                </div>
                ` : ''}

                <div class="admin-sidebar-category" onclick="App.toggleAdminSidebarCategory(this)">${translateText('Usuarios')}</div>
                <span class="admin-sidebar-desc">Control de la comunidad y perfiles.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/usuarios','usuarios','👥','Gestión Usuarios')}
                </div>

                <div class="admin-sidebar-category" onclick="App.toggleAdminSidebarCategory(this)">${translateText('Soporte Técnico')}</div>
                <span class="admin-sidebar-desc">Atención al cliente y resolución de incidencias.</span>
                <div class="admin-subnav">
                    ${sidebarLink('#/admin/equipo','equipo','🛠️','Equipo Técnico')}
                    ${sidebarLink('#/admin/chat','chat','💬','Chat Soporte')}
                    ${sidebarLink('#/admin/tickets','tickets','📋','Gestionar Tickets')}
                    ${isAdmin ? sidebarLink('#/admin/sanciones','sanciones','🚫','Sanciones') : ''}
                </div>
            </aside>`;


        let content = '';



        /* --- 1. PRINCIPAL --- */

        if (section === 'dashboard') {

            content = this.renderSecHeader('Panel General', `${new Date().toLocaleDateString('es-AR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}`) + `

                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:3rem;">

                    <div style="padding:1.5rem;background:var(--color-pink-bg);border:1px solid var(--color-pink-border);border-radius:var(--radius-md);">

                        <div style="font-size:12px;color:var(--color-pink-text);font-weight:700;text-transform:uppercase;">💰 Ventas</div>

                        <div style="font-size:28px;font-weight:800;color:var(--color-pink-text);margin-top:0.5rem;">${formatPrice(stats.totalVentas)}</div>

                    </div>

                    <div style="padding:1.5rem;background:var(--color-success-bg);border:1px solid var(--color-success-border);border-radius:var(--radius-md);">

                        <div style="font-size:12px;color:var(--color-success-text);font-weight:700;text-transform:uppercase;">📚 Cursos</div>

                        <div style="font-size:28px;font-weight:800;color:var(--color-success-text);margin-top:0.5rem;">${cursos.length}</div>

                    </div>

                    <div style="padding:1.5rem;background:var(--color-info-bg);border:1px solid var(--color-info-border);border-radius:var(--radius-md);">

                        <div style="font-size:12px;color:var(--color-info-text);font-weight:700;text-transform:uppercase;">👤 Clientes</div>

                        <div style="font-size:28px;font-weight:800;color:var(--color-info-text);margin-top:0.5rem;">${stats.totalClientes}</div>

                    </div>

                    <div style="padding:1.5rem;background:var(--color-warning-bg);border:1px solid var(--color-warning-border);border-radius:var(--radius-md);">

                        <div style="font-size:12px;color:var(--color-warning-text);font-weight:700;text-transform:uppercase;">📅 Tickets Abiertos</div>

                        <div style="font-size:28px;font-weight:800;color:var(--color-warning-text);margin-top:0.5rem;">${stats.ticketsAbiertos}</div>

                    </div>

                </div>



                ${(() => {

                    const allInsc = db.get('inscripciones');

                    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

                    const now = new Date();

                    const currentMes = meses[now.getMonth()];

                    const currentAnio = now.getFullYear();



                    const pending = allInsc.filter(i => 

                        i.mes === currentMes && 
                        i.anio == currentAnio && 
                        (i.estadoPago === 'En Proceso' || i.estadoPago === 'Solicitado' || i.estadoPago === 'En Revisi\u00F3n')
                    );
                    const processed = allInsc.filter(i => i.estadoPago === 'Pagado' || i.estadoPago === 'Reservado').sort((a,b) => new Date(b.fechaPago || 0) - new Date(a.fechaPago || 0)).slice(0, 5);

                    const listToDisplay = pending.length > 0 ? pending : processed;
                    const isHistory = pending.length === 0;

                    return `
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; margin-bottom:3rem; box-shadow:var(--shadow-sm); border-top:5px solid ${isHistory ? 'var(--color-text-muted)' : 'var(--color-primary)'};">
                            <h3 style="margin-top:0; margin-bottom:2rem; display:flex; align-items:center; gap:0.75rem; color:${isHistory ? 'var(--color-text-muted)' : 'var(--color-primary)'}; font-size:1.3rem;">
                                ${isHistory ? '⏳ Historial Reciente' : '📩 Acciones Pendientes del Mes'}
                                ${!isHistory ? `<span style="background:var(--color-primary-light); color:var(--color-primary); font-size:12px; padding:4px 12px; border-radius:999px; font-weight:800;">${pending.length} por revisar</span>` : ''}
                            </h3>
                            <div style="display:flex; flex-direction:column; gap:1.25rem;">
                                ${listToDisplay.length === 0 ? '<p style="color:var(--color-text-muted); font-size:14px; text-align:center; padding:2rem;">No hay actividad relevante este mes.</p>' : listToDisplay.map(insc => {
                                    const u = db.get('profiles').find(p => p.userId === insc.userId);
                                    const c = db.get('cursos').find(x => x.id === insc.cursoId);
                                    const isSolicitud = insc.estadoPago === 'Solicitado';
                                    const isProcessed = ['Pagado','Reservado'].includes(insc.estadoPago);
                                    const accent = isProcessed ? 'var(--color-text-muted)' : (isSolicitud ? 'var(--color-pink-text)' : 'var(--color-warning-text)');
                                    const bg = isProcessed ? 'var(--color-bg-alt)' : (isSolicitud ? 'var(--color-pink-bg)' : 'var(--color-warning-bg)');
                                    const border = isProcessed ? 'var(--color-border)' : (isSolicitud ? 'var(--color-pink-border)' : 'var(--color-warning-border)');

                                    return `
                                        <div style="background:${bg}; border:1px solid ${border}; padding:1.25rem; border-radius:16px; display:flex; justify-content:space-between; align-items:center; transition:transform 0.2s; cursor:default;">
                                            <div style="display:flex; align-items:center; gap:1.25rem;">
                                                <div style="width:48px; height:48px; border-radius:14px; background:${accent}; color:white; display:flex; align-items:center; justify-content:center; font-size:1.4rem;">
                                                    ${isSolicitud ? '⏳' : (isProcessed ? '✅' : '📄')}
                                                </div>
                                                <div>
                                                    <div style="font-weight:800; font-size:15px; color:${accent};">${u ? u.nombre : 'Usuario'}</div>
                                                    <div style="font-size:12px; color:var(--color-text-muted); margin-top:2px;">
                                                        ${isSolicitud ? 'Solicitó reserva en' : 'Informó pago para'} <b>${c ? c.titulo : 'Curso'}</b> (${insc.mes})
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display:flex; gap:0.75rem; align-items:center;">
                                                ${isProcessed ? `<span style="font-size:11px; font-weight:800; color:#64748b; background:#e2e8f0; padding:5px 12px; border-radius:999px; text-transform:uppercase;">Procesado</span>` : `
                                                    ${insc.comprobante ? `<button onclick="App.viewImageModal('${insc.comprobante}')" class="btn btn-default" style="font-size:11px; padding:6px 12px; border-radius:8px;">Ver Ticket</button>` : ''}
                                                    <button onclick="App.viewAdminEnrollment('${insc.cursoId}')" class="btn btn-primary" style="font-size:11px; padding:6px 12px; border-radius:8px; font-weight:800;">Gestionar</button>
                                                `}
                                            </div>

                                        </div>`;

                                }).join('')}

                            </div>

                        </div>`;

                })()}



                <!-- Registro de Actividad (Logs) -->

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; box-shadow:var(--shadow-sm);">

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">

                        <h3 style="margin:0; font-size:16px; display:flex; align-items:center; gap:0.5rem;">   Registro de Actividad</h3>

                        <div style="display:flex; gap:0.5rem;">

                            <select id="log-filter" onchange="App.filterLogs(this.value)" style="padding:4px 8px; font-size:12px; border-radius:4px; border:1px solid var(--color-border);">

                                <option value="all">Todas las acciones</option>

                                <option value="pago">Pagos/Confirmaciones</option>

                                <option value="inscripcion">Inscripciones/Reservas</option>

                                <option value="baja">Bajas/Eliminaciones</option>

                                <option value="ticket">Soporte/Tickets</option>

                                <option value="system">Sistema</option>

                            </select>

                        </div>

                    </div>

                    <div id="logs-container" style="display:flex; flex-direction:column; gap:0.5rem; max-height:300px; overflow-y:auto; padding-right:0.5rem;">

                        ${this.renderLogEntries(db.get('logs'))}

                    </div>

                </div>`;

        } 

        else if (section === 'anuncios') {

            const an = db.get('anuncios')[0] || {};

            content = this.renderSecHeader('Gestión de Anuncios', 'Modifica el banner superior de la página') + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md); max-width:600px;">

                    <div style="margin-bottom:1.5rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Texto del Anuncio</label>

                        <input type="text" id="an-texto" value="${an.texto||''}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                    </div>

                    <div style="margin-bottom:1.5rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Color de Fondo</label>

                        <input type="color" id="an-color" value="${an.colorFondo||'#000000'}" style="width:100px; height:40px; padding:0; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                    </div>

                    <div style="margin-bottom:2rem; display:flex; align-items:center; gap:0.5rem;">

                        <input type="checkbox" id="an-activo" ${an.activo?'checked':''}>

                        <label for="an-activo" style="font-weight:600; font-size:14px;">Banner Activo (Visible para todos)</label>

                    </div>

                    <button class="btn btn-dark" onclick="App.saveAnuncio()">Guardar Anuncio</button>

                </div>`;

        }

        else if (section === 'inicio') {

            const tp = db.get('textosPagina');

            const ci = db.get('configInicio');

            content = this.renderSecHeader('Página de Inicio', 'Personaliza textos y configura m?ximos de destacados') + `

                <div style="display:grid; gap:2rem; max-width:800px;">

                    <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md);">

                        <h3 style="margin-bottom:1.5rem;">Identidad Visual</h3>

                        <div style="margin-bottom:1.5rem;">

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Logotipo del Sitio</label>

                            <div style="display:flex; align-items:center; gap:2rem; background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm);">

                                <div id="admin-logo-preview" style="width:100px; height:60px; border:1px dashed var(--color-border); display:flex; align-items:center; justify-content:center; overflow:hidden;">

                                    ${tp.logo ? `<img src="${tp.logo}" style="max-width:100%; max-height:100%;">` : '<span style="font-size:10px; color:var(--color-text-muted);">Sin Logo</span>'}

                                </div>

                                <div style="flex:1;">

                                    <input type="file" id="admin-logo-file" accept="image/*" style="font-size:12px; margin-bottom:0.5rem;">

                                    <p style="font-size:10px; color:var(--color-text-muted);">Formatos: PNG, SVG, JPG. Recomendado: fondo transparente.</p>

                                </div>

                            </div>

                        </div>

                        <div style="display:flex; gap:0.5rem;">

                            <button class="btn btn-dark" onclick="App.saveSiteLogo()">Subir Logo</button>

                            ${tp.logo ? `<button class="btn btn-default" style="color:#ef4444;" onclick="if(confirm(' Eliminar logo?')){ const t=db.get('textosPagina'); t.logo=''; db.save(); App.renderLayout(); App.viewAdmin(document.getElementById('main-content'), 'inicio'); }">Eliminar</button>` : ''}

                        </div>

                        <div style="margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--color-border);">

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Tamaño del Logo (Altura en px)</label>

                            <div style="display:flex; gap:10px; align-items:center;">

                                <input type="number" id="admin-logo-size" value="${tp.logoSize || 40}" style="width:100px; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                                <button class="btn btn-default" onclick="App.saveSiteLogoSize()">Actualizar Tamaño</button>

                            </div>

                        </div>

                    </div>

                    <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md);">

                        <h3 style="margin-bottom:1.5rem;">Textos del Hero</h3>

                        <div style="margin-bottom:1rem;">

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Título Principal</label>

                            <input type="text" id="cfg-titulo" value="${tp.tituloHero}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                        <div style="margin-bottom:1.5rem;">

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Subtítulo</label>

                            <input type="text" id="cfg-sub" value="${tp.subtituloHero}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                        <button class="btn btn-dark" onclick="App.saveConfigInicioTextos()">Guardar Textos</button>

                    </div>

                    <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md);">

                        <h3 style="margin-bottom:1.5rem;">Lmitems de Destacados</h3>

                        <p style="font-size:13px; color:var(--color-text-muted); margin-bottom:1.5rem;">Controla cuántos items destacados se muestran como máximo en la portada.</p>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">

                            <div>

                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Máx Productos Destacados</label>

                                <input type="number" id="cfg-max-p" value="${ci.maxDestacados}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            </div>

                            <div>

                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Máx Cursos Destacados</label>

                                <input type="number" id="cfg-max-c" value="${ci.maxCursos}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            </div>

                        </div>

                        <button class="btn btn-dark" onclick="App.saveConfigInicioLimites()">Guardar Lmitems</button>

                    </div>

                </div>`;

        }

        else if (section === 'productos') {

            const isAdding = window.location.hash.includes('add_new');

            if (isAdding) {

                // Nuevo Producto Inline

                content = this.renderSecHeader('   Nuevo Producto', 'Agrega un producto al inventario', `<a href="#/admin/productos" class="btn btn-default">Cancelar</a>`) + `

                <div style="background:var(--color-bg);border:1px solid var(--color-border);padding:2rem;border-radius:var(--radius-md);">

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Nombre *</label>

                        <input id="np-nombre" type="text" placeholder="Ej: Molde Pollera A" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Categoría / Subcategoría *</label>

                        <select id="np-cat" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                            <option value="">Seleccionar Categoría</option>

                            ${(db.get('categoriasStore') || []).filter(c=>!c.parentId).map(c => `

                                <optgroup label="${c.nombre}">

                                    ${(db.get('categoriasStore') || []).filter(sub => sub.parentId === c.id).map(sub => `

                                        <option value="${sub.id}">${sub.nombre}</option>

                                    `).join('')}

                                </optgroup>

                            `).join('')}

                        </select></div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Imagen (URL o Subir Archivo)</label>

                        <div style="display:flex; gap:10px; align-items:center;">

                            <input id="np-imagen" type="text" placeholder="https://ejemplo.com/foto.jpg o subir archivo ->" style="flex:1;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);" oninput="document.getElementById('np-img-preview').src=this.value; document.getElementById('np-img-preview').style.display='block';">

                            <label class="btn btn-default" style="cursor:pointer; margin:0; padding:10px 15px;">

                                   Subir Local <input type="file" accept="image/*" style="display:none;" onchange="App.handleImageUpload(event, 'np-img-preview', 'np-imagen')">

                            </label>

                        </div>

                        <img id="np-img-preview" src="" style="max-width:150px; margin-top:10px; display:none; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        </div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Emoji (Opcional)</label>

                        <input id="np-emoji" type="text" placeholder="  ?" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio ($ARS) *</label>

                        <input id="np-precio" type="number" placeholder="0" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio Anterior</label>

                        <input id="np-precioAntes" type="number" placeholder="0" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Método de Pago</label>

                        <select id="np-metodo" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"><option>Por la página</option><option>WhatsApp</option><option>Ambas</option></select></div>

                        <div style="grid-column: span 2;">

                            <label style="display:flex; align-items:center; gap:0.5rem; font-weight:700; cursor:pointer;">

                                <input type="checkbox" id="np-carinextra" style="width:18px; height:18px;">

                                Oferta Extra Carin+ (Aparecerprimera en la tienda y tendrun diseño destacado)

                            </label>

                        </div>

                    </div>

                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Corta</label>

                    <input id="np-descCorta" type="text" placeholder="Breve descripción" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Completa</label>

                    <textarea id="np-descLarga" placeholder="Detalles del producto..." style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:100px;"></textarea></div>

                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Talles (separados por coma)</label>

                    <input id="np-talles" type="text" placeholder="S, M, L, XL, XXL" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;"> ? Región de Disponibilidad</label>

                    <select id="np-region" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                        ${(db.get('regiones') || []).filter(r=>r.activa).map(r => `<option value="${r.id}">${r.emoji} ${r.nombre}</option>`).join('')}

                    </select>

                    <p style="font-size:11px;color:var(--color-text-muted);margin-top:0.25rem;">Selecciona Global para que aparezca en todas las regiones.</p></div>

                    <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:flex-end;">

                        <a href="#/admin/productos" class="btn btn-default">Cancelar</a>

                        <button class="btn btn-dark" onclick="App.saveNewProduct()">Guardar y Publicar</button>

                    </div>

                </div>`;

            } else {

                content = this.renderSecHeader('\uD83D\uDCE6 Productos de la Tienda', `${productos.length} productos`, `<a href="#/admin/productos?add_new=true" class="btn btn-dark">\u2795 Nuevo Producto</a>`) + `

                <div style="margin-bottom:1rem;"><input type="text" id="admin-search-prod" placeholder="\uD83D\uDD0D Buscar producto..." style="width:100%; max-width:400px; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" onkeyup="App.filterAdminTable('admin-search-prod', 'prod-table')"></div>

                <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden;">

                    <table id="prod-table" style="width:100%;border-collapse:collapse;">

                        <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;background:var(--color-bg-alt);">

                            <th style="padding:0.75rem 1.5rem;">Producto</th><th style="padding:0.75rem 1.5rem;">Precio</th>

                            <th style="padding:0.75rem 1.5rem;">Estado</th><th style="padding:0.75rem 1.5rem;text-align:right;">Acciones</th>

                        </tr></thead>

                        <tbody>${productos.map(p => `

                            <tr style="border-bottom:1px solid var(--color-border);">

                                <td style="padding:1rem 1.5rem;font-weight:600;">

                                    <div style="display:flex;align-items:center;gap:0.75rem;">

                                        <span style="font-size:22px;">${p.emoji}</span>

                                        <div><div>${p.nombre}</div><div style="font-size:12px;color:var(--color-text-muted);">${p.cat}</div></div>

                                    </div>

                                </td>

                                <td style="padding:1rem 1.5rem;font-weight:700;">${formatPrice(p.precio)}</td>

                                <td style="padding:1rem 1.5rem;">

                                    <span style="padding:2px 8px; border-radius:999px; font-size:10px; ${p.visible?'background:#dcfce7; color:#15803d;':'background:var(--color-bg-alt); color:#6b7280;'}">${p.visible?'Visible':'Oculto'}</span>

                                    ${p.destacado?'<span style="padding:2px 8px; border-radius:999px; font-size:10px; background:#fef9c3; color:#a16207; margin-left:4px;">⭐ Dest.</span>':''}

                                </td>

                                <td style="padding:1rem 1.5rem;text-align:right;">

                                    <button class="btn btn-default" style="font-size:11px;padding:4px 8px;margin-right:4px;" onclick="App.editProduct('${p.id}')">✏️ Editar</button>

                                    <button class="btn btn-default" style="font-size:11px;padding:4px 8px;margin-right:4px;" onclick="db.toggleProductVisible('${p.id}');App.viewAdmin(document.getElementById('main-content'),'productos')">${p.visible?'Ocultar':'Mostrar'}</button>

                                    <button class="btn btn-default" style="font-size:11px;padding:4px 8px;" onclick="db.toggleProductDestacado('${p.id}');App.viewAdmin(document.getElementById('main-content'),'productos')">${p.destacado?'Quitar ⭐':'⭐ Destacar'}</button>

                                </td>

                            </tr>`).join('')}

                        </tbody>

                    </table>

                </div>`;

            }

        }

        else if (section === 'categorias') {

            const allCats = db.get('categoriasStore') || [];

            const parents = allCats.filter(c => !c.parentId);

            

            content = this.renderSecHeader('\uD83D\uDCC1 Gesti\u00F3n de Categor\u00EDas', 'Agrupa tus productos en la tienda') + `

                <div style="display:grid; gap:2rem; max-width:800px;">

                    <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md);">

                        <h3 style="margin-bottom:1.5rem;">🛒 Agregar Nueva</h3>

                        <div style="display:flex; gap:1rem;">

                            <input type="text" id="new-cat-name" placeholder="Nombre (Ej: Indumentaria)" style="flex:1; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            <select id="new-cat-parent" style="padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                                <option value="">Grupo Principal</option>

                                ${parents.map(p => `<option value="${p.id}">Dentro de: ${p.nombre}</option>`).join('')}

                            </select>

                            <button class="btn btn-dark" onclick="App.createCategoria()">Agregar</button>

                        </div>

                    </div>



                    <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden;">

                        ${parents.length === 0 ? '<p style="padding:2rem; text-align:center; color:var(--color-text-muted);">No hay categorías creadas.</p>' : parents.map(p => {

                            const subcats = allCats.filter(s => s.parentId === p.id);

                            return `

                            <div style="border-bottom:1px solid var(--color-border); padding:1.5rem;">

                                <div style="display:flex; justify-content:space-between; align-items:center;">

                                    <div style="font-weight:700; font-size:16px;">📁 ${p.nombre}</div>

                                    <button onclick="App.deleteCategoria('${p.id}')" style="background:none; border:none; color:#ef4444; font-size:12px; cursor:pointer; text-decoration:underline;">Eliminar Grupo</button>

                                </div>

                                <div style="margin-top:1rem; padding-left:1.5rem; display:flex; flex-direction:column; gap:0.5rem;">

                                    ${subcats.length === 0 ? '<span style="font-size:12px; color:var(--color-text-muted);">- Sin subcategorías</span>' : subcats.map(s => `

                                        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-bg-alt); padding:0.5rem 1rem; border-radius:var(--radius-sm);">

                                            <span style="font-size:13px;">${s.nombre}</span>

                                            <button onclick="App.deleteCategoria('${s.id}')" style="background:none; border:none; color:#ef4444; font-size:11px; cursor:pointer;">X</button>

                                        </div>

                                    `).join('')}

                                </div>

                            </div>

                        `;}).join('')}

                    </div>

                </div>

            `;

        }

        else if (section === 'descuentos') {

            const rebajas = db.get('configRebajas') || { activa: false, porcentaje: 0, titulo: 'Cyber Monday' };

            const cupones = db.get('cupones') || [];

            

            content = this.renderSecHeader('\uD83C\uDFF7\uFE0F Descuentos y Cupones', 'Gesti\u00F3n general de ofertas de la tienda') + `

                <div style="display:grid; gap:2rem; max-width:900px; margin-bottom:3rem;">

                    <div style="background:var(--color-bg); border:1px solid ${rebajas.activa ? '#fca5a5' : 'var(--color-border)'}; padding:2rem; border-radius:var(--radius-md); position:relative; overflow:hidden;">

                        ${rebajas.activa ? '<div style="position:absolute; top:0; left:0; right:0; height:4px; background:#ef4444;"></div>' : ''}

                        <h3 style="margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem;">

                               Rebaja Global de Tienda 

                            <span style="font-size:10px; padding:2px 8px; border-radius:999px; background:${rebajas.activa ? '#fee2e2' : '#f3f4f6'}; color:${rebajas.activa ? '#b91c1c' : '#6b7280'};">${rebajas.activa ? 'ACTIVA' : 'INACTIVA'}</span>

                        </h3>

                        <p style="font-size:13px; color:var(--color-text-muted); margin-bottom:1.5rem;">Aplica un porcentaje de descuento masivo a todos los productos de la tienda instantáneamente. Se mostrará una etiqueta especial en los productos.</p>

                        

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">

                            <div>

                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Porcentaje de Descuento (%)</label>

                                <input type="number" id="rebaja-pct" value="${rebajas.porcentaje}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            </div>

                            <div>

                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Etiqueta (Ej. Cyber Monday)</label>

                                <input type="text" id="rebaja-tit" value="${rebajas.titulo}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            </div>

                        </div>

                        <div style="display:flex; justify-content:space-between; align-items:center;">

                            <label style="display:flex; align-items:center; gap:0.5rem; font-weight:700; cursor:pointer;">

                                <input type="checkbox" id="rebaja-activa" ${rebajas.activa ? 'checked' : ''} style="width:18px; height:18px;">

                                Activar Promoción Masiva

                            </label>

                            <button class="btn btn-dark" style="background:#ef4444; border-color:#ef4444;" onclick="App.saveConfigRebajas()">Guardar Rebaja</button>

                        </div>

                    </div>



                    <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:2rem; border-radius:var(--radius-md);">

                        <h3 style="margin-bottom:1.5rem;">🎟️ Cupones Promocionales</h3>

                        <p style="font-size:13px; color:var(--color-text-muted); margin-bottom:1.5rem;">Crea códigos que los clientes pueden ingresar en el carrito de compras. (Se suman a los descuentos existentes).</p>

                        

                        <div style="display:flex; gap:1rem; align-items:end; margin-bottom:2rem; background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                            <div style="flex:2;">

                                <label style="display:block; font-weight:700; font-size:12px; margin-bottom:0.5rem;">Código (Ej. VIP20)</label>

                                <input type="text" id="new-cupon-cod" placeholder="Código en mayúsculas" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); text-transform:uppercase;">

                            </div>

                            <div style="flex:1;">

                                <label style="display:block; font-weight:700; font-size:12px; margin-bottom:0.5rem;">Descuento (%)</label>

                                <input type="number" id="new-cupon-pct" placeholder="20" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            </div>

                            <button class="btn btn-dark" onclick="App.createCupon()">+ Añadir</button>

                        </div>



                        <table style="width:100%;border-collapse:collapse;">

                            <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;">

                                <th style="padding:0.75rem 1rem;">Código</th>

                                <th style="padding:0.75rem 1rem;">Descuento</th>

                                <th style="padding:0.75rem 1rem;text-align:center;">Usos</th>

                                <th style="padding:0.75rem 1rem;text-align:center;">Estado</th>

                                <th style="padding:0.75rem 1rem;text-align:right;">Acción</th>

                            </tr></thead>

                            <tbody>${cupones.length === 0 ? '<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--color-text-muted);">No hay cupones creados</td></tr>' : cupones.map(c => `

                                <tr style="border-bottom:1px solid var(--color-border);">

                                    <td style="padding:1rem;font-weight:800;letter-spacing:1px;color:var(--color-primary);">${c.codigo}</td>

                                    <td style="padding:1rem;font-weight:700;">-${c.porcentaje}%</td>

                                    <td style="padding:1rem;text-align:center;font-size:12px;">${c.usos}</td>

                                    <td style="padding:1rem;text-align:center;">

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px; border:none; ${c.activo?'background:#dcfce7;color:#15803d;':'background:#fee2e2;color:#b91c1c;'}" onclick="App.toggleCupon('${c.id}')">${c.activo?'ACTIVO':'PAUSADO'}</button>

                                    </td>

                                    <td style="padding:1rem;text-align:right;">

                                        <button class="btn btn-default" style="font-size:10px; color:#ef4444;" onclick="App.deleteCupon('${c.id}')">Eliminar</button>

                                    </td>

                                </tr>`).join('')}

                            </tbody>

                        </table>

                    </div>

                </div>`;

        }

        else if (section === 'carin_plus_hub') {
            content = this.renderSecHeader('\u2728 Panel Carin+ Hub', 'Gesti\u00F3n centralizada del programa premium') + `
                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-bottom:2.5rem;">
                    
                    <div class="admin-card-interactive" onclick="window.location.hash='#/admin/carin_plus'" style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.25rem; display:flex; align-items:center; gap:1rem; transition:all 0.3s; cursor:pointer; position:relative; overflow:hidden;">
                        <div style="width:40px; height:40px; border-radius:10px; background:#fce7f3; color:#db2777; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;">\uD83C\uDFF7\uFE0F</div>
                        <div style="flex:1;">
                            <h4 style="margin:0; font-size:14px;">Configurar Ofertas</h4>
                            <p style="font-size:11px; color:var(--color-text-muted); margin:0;">Descuentos y exclusiones.</p>
                        </div>
                    </div>

                    <div class="admin-card-interactive" onclick="window.location.hash='#/admin/carin_plus_pagina'" style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.25rem; display:flex; align-items:center; gap:1rem; transition:all 0.3s; cursor:pointer; position:relative; overflow:hidden;">
                        <div style="width:40px; height:40px; border-radius:10px; background:#e0e7ff; color:#4338ca; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;">\uD83D\uDCC4</div>
                        <div style="flex:1;">
                            <h4 style="margin:0; font-size:14px;">Personalizar P\u00E1gina</h4>
                            <p style="font-size:11px; color:var(--color-text-muted); margin:0;">Landing page y beneficios.</p>
                        </div>
                    </div>

                    <div class="admin-card-interactive" onclick="window.location.hash='#/admin/planes_carin'" style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.25rem; display:flex; align-items:center; gap:1rem; transition:all 0.3s; cursor:pointer; position:relative; overflow:hidden;">
                        <div style="width:40px; height:40px; border-radius:10px; background:#fef3c7; color:#b45309; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;">\uD83D\uDC8E</div>
                        <div style="flex:1;">
                            <h4 style="margin:0; font-size:14px;">Gesti\u00F3n de Planes</h4>
                            <p style="font-size:11px; color:var(--color-text-muted); margin:0;">Precios y duraciones.</p>
                        </div>
                    </div>

                </div>

                <div style="background:var(--color-bg); border:1px solid #7c3aed; padding:2rem; border-radius:var(--radius-md); box-shadow:0 4px 20px rgba(124,58,237,0.05); margin-bottom:3rem; max-width:900px;">
                    <h3 style="color:#7c3aed; margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem;">\u23F1\uFE0F Gesti\u00F3n de Suscripciones Temporales</h3>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2rem; padding-bottom:2rem; border-bottom:1px solid var(--color-border);">
                        <div>
                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Usuario</label>
                            <select id="cp-temp-user" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">
                                <option value="">-- Seleccionar Usuario --</option>
                                ${users.map(u => `<option value="${u.userId}">${u.nombre} (${u.email})</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Duraci\u00F3n (D:H:M:S)</label>
                            <div style="display:flex; gap:5px;">
                                <input type="number" id="cp-days" placeholder="D" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
                                <input type="number" id="cp-hours" placeholder="H" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
                                <input type="number" id="cp-mins" placeholder="M" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
                                <input type="number" id="cp-secs" placeholder="S" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
                            </div>
                        </div>
                        <button class="btn btn-dark" style="background:#7c3aed; border-color:#7c3aed; grid-column:span 2; font-weight:800;" onclick="App.setCarinPlusTemporalUI()">Activar Carin+ Temporal</button>
                    </div>

                    <div style="overflow-x:auto;">
                        <table style="width:100%; border-collapse:collapse; font-size:13px;">
                            <thead>
                                <tr style="text-align:left; border-bottom:2px solid var(--color-border); color:var(--color-text-muted);">
                                    <th style="padding:0.5rem;">Usuario</th>
                                    <th style="padding:0.5rem;">Expiraci\u00F3n</th>
                                    <th style="padding:0.5rem;">Estado</th>
                                    <th style="padding:0.5rem; text-align:right;">Acci\u00F3n</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.filter(u => u.roles.includes('carin_plus'))
                                    .sort((a,b) => {
                                        const actA = db.isCarinPlusActive(a);
                                        const actB = db.isCarinPlusActive(b);
                                        if (actA && !actB) return -1;
                                        if (!actA && actB) return 1;
                                        return new Date(b.carinPlusExpiry || 0) - new Date(a.carinPlusExpiry || 0);
                                    })
                                    .map(u => {
                                        const active = db.isCarinPlusActive(u);
                                        return `
                                        <tr style="border-bottom:1px solid var(--color-border); opacity:${active?1:0.6};">
                                            <td style="padding:0.75rem 0.5rem;">
                                                <div style="font-weight:700;">${u.nombre}</div>
                                                <div style="font-size:11px; color:var(--color-text-muted);">${u.email}</div>
                                            </td>
                                            <td style="padding:0.75rem 0.5rem;">
                                                ${u.carinPlusExpiry ? new Date(u.carinPlusExpiry).toLocaleString() : 'Permanente'}
                                            </td>
                                            <td style="padding:0.75rem 0.5rem;">
                                                <span style="padding:2px 8px; border-radius:10px; font-size:10px; font-weight:900; background:${active?'#dcfce7':'#fee2e2'}; color:${active?'#166534':'#991b1b'};">
                                                    ${active?'ACTIVO':'EXPIRADO'}
                                                </span>
                                            </td>
                                            <td style="padding:0.75rem 0.5rem; text-align:right;">
                                                <button class="btn btn-default" style="font-size:10px; padding:4px 8px;" onclick="db.toggleUserRole('${u.userId}', 'carin_plus'); App.viewAdmin(document.getElementById('main-content'), 'carin_plus_hub');">Quitar</button>
                                            </td>
                                        </tr>`;
                                    }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>`;
        }

        else if (section === 'carin_plus') {

            const cpConfig = db.get('configCarinPlus') || { descuentoGlobal: 15, tituloBadge: 'CARIN+' };

            const excepciones = productos.filter(p => (p.carinPlusDescuento > 0) || p.excluirCarinPlus);

            const disponibles = productos.filter(p => !((p.carinPlusDescuento > 0) || p.excluirCarinPlus));



            content = this.renderSecHeader('\u2728 Carin+ Ofertas Premium', 'Configuraci\u00F3n global y excepciones') + `

                <div style="display:grid; gap:2rem; max-width:800px; margin-bottom:3rem;">

                    <div style="background:var(--color-bg); border:1px solid #db2777; padding:2rem; border-radius:var(--radius-md); box-shadow:0 4px 20px rgba(236,72,153,0.05); margin-bottom:2rem;">
                        <h3 style="color:#db2777; margin-bottom:1.5rem;">Ajustes Globales Carin+</h3>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
                            <div>
                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Descuento Base (%)</label>
                                <input type="number" id="cp-global-desc" value="${cpConfig.descuentoGlobal}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">
                            </div>
                            <div>
                                <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">T\u00EDtulo del Badge</label>
                                <input type="text" id="cp-global-title" value="${cpConfig.tituloBadge}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">
                            </div>
                        </div>
                        <button class="btn btn-dark" style="background:#db2777; border-color:#db2777;" onclick="App.saveCarinPlusConfig()">Guardar Ajustes</button>
                    </div>
                </div>



                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">

                    <h3 style="margin:0;">Excepciones y Ofertas Extra</h3>

                    <div style="display:flex; gap:0.5rem;">

                        <select id="cp-add-select" style="padding:8px; border-radius:var(--radius-sm); border:1px solid var(--color-border); max-width:250px;">

                            <option value="">-- Seleccionar Producto --</option>

                            ${disponibles.map(p => `<option value="${p.id}">${p.emoji} ${p.nombre}</option>`).join('')}

                        </select>

                        <button class="btn btn-dark" onclick="App.addCarinPlusException()">➕ Agregar</button>

                    </div>

                </div>



                <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden;">

                    ${excepciones.length === 0 ? `<div style="padding:3rem; text-align:center; color:var(--color-text-muted);">No hay ofertas especiales ni exclusiones configuradas.<br>Todos los productos usan el descuento global del ${cpConfig.descuentoGlobal}%.</div>` : `

                    <table style="width:100%;border-collapse:collapse;">

                        <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;background:var(--color-bg-alt);">

                            <th style="padding:0.75rem 1.5rem;">Producto</th>

                            <th style="padding:0.75rem 1.5rem;text-align:center;"> Excluir Global?</th>

                            <th style="padding:0.75rem 1.5rem;text-align:center;">Dcto. Extra (%)</th>

                            <th style="padding:0.75rem 1.5rem;text-align:right;">Precio Final Carin+</th>

                            <th style="padding:0.75rem 1.5rem;text-align:center;">Quitar</th>

                        </tr></thead>

                        <tbody>${excepciones.map(p => {

                            const globalDesc = p.excluirCarinPlus ? 0 : cpConfig.descuentoGlobal;

                            const extraDesc = p.carinPlusDescuento || 0;

                            const totalDesc = globalDesc + extraDesc;

                            const pFinal = totalDesc > 0 ? Math.round(p.precio * (1 - (totalDesc/100))) : p.precio;

                            

                            return `<tr style="border-bottom:1px solid var(--color-border);">

                                <td style="padding:1rem 1.5rem;font-weight:600;"><span style="margin-right:8px">${p.emoji}</span>${p.nombre}</td>

                                <td style="padding:1rem 1.5rem;text-align:center;">

                                    <input type="checkbox" ${p.excluirCarinPlus?'checked':''} onchange="App.toggleCarinPlusExclude('${p.id}', this.checked)">

                                </td>

                                <td style="padding:1rem 1.5rem;text-align:center;">

                                    <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem;">

                                        <input type="number" id="cp-desc-${p.id}" value="${p.carinPlusDescuento||0}" style="width:60px; padding:4px 8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); text-align:center;">

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px;" onclick="App.saveCarinPlusDiscount('${p.id}')">💾</button>

                                    </div>

                                </td>

                                <td style="padding:1rem 1.5rem;text-align:right; font-weight:700; ${totalDesc>0?'color:#db2777;':''} ">$${pFinal} <span style="font-size:10px;font-weight:normal;color:var(--color-text-muted);">(-${totalDesc}%)</span></td>

                                <td style="padding:1rem 1.5rem;text-align:center;">

                                    <button class="btn btn-default" style="font-size:10px; color:#ef4444; padding:4px 8px;" onclick="App.removeCarinPlusException('${p.id}')">🗑️</button>

                                </td>

                            </tr>`;

                        }).join('')}

                        </tbody>

                    </table>`}

                </div>`;

        }



        /* --- 3. GESTIÓN DE CURSOS --- */

        else if (section === 'cursos') {

            const isAdding = window.location.hash.includes('add_new');

            if (isAdding) {

                const profes = db.get('profesores');

                content = this.renderSecHeader('Crear Nuevo Curso', 'Añade un nuevo curso o taller al catálogo', `<a href="#/admin/cursos" class="btn btn-default">⬅️ Volver</a>`) + `

                <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:2rem;">

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Título *</label>

                        <input id="nc-titulo" type="text" placeholder="Ej: Curso de Lencería" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                        

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Subtítulo</label>

                        <input id="nc-subtitulo" type="text" placeholder="Ej: Taller de Diseño y Confección" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Profesor *</label>

                        <select id="nc-profeId" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                            ${profes.map(p => `<option value="${p.id}">${p.nombre}</option>`).join('')}

                        </select></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Max. Alumnos *</label>

                        <input id="nc-maxAlumnos" type="number" value="10" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio Mensual Visible ($)</label>

                        <input id="nc-precio" type="number" placeholder="Ej: 15000" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio Interno (Privado Admin) ($)</label>

                        <input id="nc-precioInterno" type="number" placeholder="Ej: 10000" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Resumen de Horarios (Texto Corto)</label>

                        <input id="nc-horarios" type="text" placeholder="Ej: Sábados 10:00 - 12:00" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div style="grid-column:1/-1; background:var(--color-bg-alt); padding:1.5rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                            <label style="display:block;font-size:13px;font-weight:700;margin-bottom:1rem;">Tablero de Horarios (Visual)</label>

                            <div id="nc-schedule-container" style="display:grid; gap:1rem; margin-bottom:1rem;"></div>

                            <button class="btn btn-default" style="font-size:12px;" onclick="App.addScheduleRow()">➕ Añadir Horario</button>

                        </div>



                        <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Corta (Cards)</label>

                        <textarea id="nc-descripcion" placeholder="Aprende a realizar..." style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:60px;"></textarea></div>



                        <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Larga (Página Detalle)</label>

                        <textarea id="nc-descripcionLarga" placeholder="Detalle completo del curso..." style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:120px;"></textarea></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Requisitos (uno por línea)</label>

                        <textarea id="nc-requisitos" placeholder="Máquina de coser..." style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:80px;"></textarea></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">¿Qué incluye? (uno por línea)</label>

                        <textarea id="nc-incluye" placeholder="Apuntes..." style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:80px;"></textarea></div>



                        <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Ubicaci\u00F3n del Curso (Direcci\u00F3n en C\u00F3rdoba)</label>
                        <input id="nc-ubicacion" type="text" placeholder="Ej: Av. Col\u00F3n 1234, C\u00F3rdoba" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);margin-bottom:1rem;"></div>

                        <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Banner (Imagen URL o Local)</label>

                        <div style="display:flex; gap:10px; align-items:center;">

                            <input id="nc-banner" type="text" placeholder="URL o subir archivo ->" style="flex:1;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);" oninput="document.getElementById('nc-banner-preview').src=this.value; document.getElementById('nc-banner-preview').style.display='block';">

                            <label class="btn btn-default" style="cursor:pointer; margin:0; padding:10px 15px;">

                                   Subir Local <input type="file" accept="image/*" style="display:none;" onchange="App.handleImageUpload(event, 'nc-banner-preview', 'nc-banner')">

                            </label>

                        </div>

                        <img id="nc-banner-preview" src="" style="max-width:300px; margin-top:10px; display:none; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        </div>

                        

                        <div style="grid-column:1/-1;display:flex;gap:1.5rem;">

                            <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;cursor:pointer;"><input type="checkbox" id="nc-oferta"> Marcar como Oferta</label>

                            <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;cursor:pointer;"><input type="checkbox" id="nc-destacado" checked> Destacar en Inicio</label>

                        </div>

                    </div>

                    <div style="margin-top:2rem;border-top:1px solid var(--color-border);padding-top:1.5rem;display:flex;justify-content:flex-end;gap:1rem;">

                        <a href="#/admin/cursos" class="btn btn-default">Cancelar</a>

                        <button class="btn btn-dark" onclick="App.saveAdminCurso()">Guardar Curso</button>

                    </div>

                </div>`;

                

                setTimeout(() => this.addScheduleRow(), 100);

            } else {

                content = this.renderSecHeader('\uD83C\uDF93 Gesti\u00F3n de Cursos', 'Administra inscripciones y crea talleres', `<a href="#/admin/cursos?add_new=true" class="btn btn-dark">\u2795 Crear Curso</a>`) + `

                <div style="display:grid;gap:1.5rem;">

                    ${cursos.length === 0 ? '<div style="color:var(--color-text-muted);">No hay cursos creados.</div>' : ''}

                    ${cursos.map(c => {

                        const pct = Math.round((c.alumnos.length / c.maxAlumnos) * 100) || 0;

                        return `<div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-sm);">

                            <div style="display:flex;justify-content:space-between;align-items:center;">

                                <div style="display:flex;gap:1rem;align-items:center;">

                                    <div style="width:48px;height:48px;border-radius:var(--radius-sm);background:var(--color-primary-light);display:flex;align-items:center;justify-content:center;font-size:20px;">📈</div>

                                    <div>

                                        <h3 style="margin:0;font-size:1.1rem;">${c.titulo}</h3>

                                        <div style="font-size:13px;color:var(--color-text-muted); display:flex; align-items:center; gap:8px; margin-top:4px;">

                                            <span style="display:flex; align-items:center; gap:4px;">   Profe: <b>${(() => {

                                                const p = db.get('profesores').find(x => x.id === c.profeId);

                                                return p ? p.nombre : 'Sin asignar';

                                            })()}</b></span>

                                            <button class="btn btn-default" style="font-size:9px; padding:2px 6px; border:none;" onclick="App.showQuickAssignProfessor('${c.id}')"> Cambiar</button>

                                            <span>  ${c.horarios}</span>

                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <button class="btn btn-default" style="font-size:12px; margin-right:0.5rem;" onclick="App.viewAdminEnrollment('${c.id}')"> Administrar</button>

                                    <button class="btn btn-danger" style="font-size:12px; background:#fef2f2; border:1px solid #fca5a5; color:#b91c1c; padding:6px 12px; border-radius:var(--radius-sm);" onclick="if(confirm(' Eliminar curso?')) { db.deleteCurso('${c.id}'); App.viewAdmin(document.getElementById('main-content'), 'cursos'); }">    Eliminar</button>

                                </div>

                            </div>

                            <div style="margin-top:1rem;background:var(--color-bg-alt);padding:0.75rem 1rem;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                                <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:0.4rem;color:var(--color-text-muted);text-transform:uppercase;">

                                    <span>Ocupación</span><span>${c.alumnos.length} / ${c.maxAlumnos} alumnos</span>

                                </div>

                                <div style="width:100%;height:8px;background:var(--color-border);border-radius:999px;overflow:hidden;">

                                    <div style="width:${pct}%;height:100%;background:${pct > 90 ? '#ef4444' : 'var(--color-primary)'};transition:width 0.3s;"></div>

                                </div>

                            </div>

                        </div>`;

                    }).join('')}

                </div>`;

            }

        }

        else if (section === 'profesores') {

            const profes = db.get('profesores');

            const allUsers = db.get('profiles');

            content = this.renderSecHeader('   Profesores', 'Personal docente asignado a cursos') + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">

                    <h3 style="margin-bottom:1rem;">Añadir Nuevo Profesor</h3>

                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">

                        <div>

                            <label style="font-size:12px; font-weight:700;">Correo Electrónico *</label>

                            <input type="email" id="np-user" placeholder="ejemplo@correo.com" style="width:100%; padding:8px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        </div>

                        <div>

                            <label style="font-size:12px; font-weight:700;">Especialidad</label>

                            <input type="text" id="np-especialidad" placeholder="Ej: Costura" style="width:100%; padding:8px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        </div>

                        <div style="display:flex; align-items:flex-end;">

                            <button class="btn btn-dark" style="width:100%;" onclick="App.addProfesorAdmin()">Crear Profesor</button>

                        </div>

                    </div>

                </div>



                <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden;">

                    <table style="width:100%;border-collapse:collapse;">

                        <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;background:var(--color-bg-alt);">

                            <th style="padding:0.75rem 1.5rem;">Nombre / Especialidad</th>

                            <th style="padding:0.75rem 1.5rem;">Contacto</th>

                            <th style="padding:0.75rem 1.5rem;">Cursos Asignados</th>

                            <th style="padding:0.75rem 1.5rem; text-align:right;">Acción</th>

                        </tr></thead>

                        <tbody>${profes.map(p => {

                            const cAsig = db.get('cursos').filter(c => c.profeId === p.id).length;

                            return `<tr style="border-bottom:1px solid var(--color-border);">

                                <td style="padding:1rem 1.5rem;"><div style="font-weight:700;">${p.nombre}</div><div style="font-size:12px;color:var(--color-text-muted);">${p.especialidad}</div></td>

                                <td style="padding:1rem 1.5rem; font-size:13px;"><div>   ${p.correo}</div><div>   ${p.telefono}</div></td>

                                <td style="padding:1rem 1.5rem; font-size:13px;"><b>${cAsig}</b> cursos</td>

                                <td style="padding:1rem 1.5rem; text-align:right;">

                                    <button class="btn btn-default" style="font-size:10px; color:#ef4444;" onclick="App.deleteProfesorAdmin('${p.id}')">Eliminar</button>

                                </td>

                            </tr>`;

                        }).join('')}

                        </tbody>

                    </table>

                </div>`;

        }



        /* --- 4. SOPORTE T CNICO --- */

        else if (section === 'equipo') {

            const equipo = users.filter(u => db.hasAnyRole(u.userId, ['admin', 'tecnico']));

            content = this.renderSecHeader('🛠️ Equipo Técnico', 'Estado de actividad del personal de soporte') + `

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:1.5rem;">

                    ${equipo.map(u => {

                        const asignados = tickets.filter(t => t.asignadoA === u.userId && t.estado !== 'Cerrado').length;

                        const isActivo = u.estadoActividad === 'Activo';

                        return `

                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; text-align:center; position:relative;">

                            <div style="width:12px; height:12px; border-radius:50%; background:${isActivo?'var(--color-success-text)':'var(--color-danger-text)'}; position:absolute; top:1.5rem; right:1.5rem; box-shadow:0 0 0 3px ${isActivo?'var(--color-success-bg)':'var(--color-danger-bg)'};"></div>

                            <div style="font-size:2.5rem; margin-bottom:1rem;">${u.rango==='admin'?'  ?':'  '}</div>

                            <h3 style="margin:0 0 0.25rem 0;">${u.nombre}</h3>

                            <div style="font-size:12px; color:var(--color-text-muted); text-transform:uppercase; font-weight:700; margin-bottom:1rem;">${u.rango}</div>

                            <div style="background:var(--color-bg-alt); padding:0.5rem; border-radius:var(--radius-sm); font-size:13px; font-weight:600; border: 1px solid var(--color-border);">

                                ${asignados} Tickets Asignados

                            </div>

                        </div>`;

                    }).join('')}

                </div>`;

        }

        else if (section === 'chat') {

            const chatLog = db.get('chatEquipo');

            content = this.renderSecHeader('   Chat de Soporte Interno', 'Comunicación en vivo exclusiva para el equipo') + `

                <div class="chat-container">

                    <div class="chat-messages" id="admin-chat-window">

                        ${chatLog.map(m => {

                            const isMe = m.userId === db.currentUser.userId;

                            const sender = users.find(u => u.userId === m.userId)?.nombre || m.userId;

                            return `

                            <div class="chat-message ${isMe ? 'me' : 'others'}">

                                ${!isMe ? `<div style="font-size:11px; font-weight:700; margin-bottom:4px; opacity:0.7;">${sender}</div>` : ''}

                                ${m.texto}

                                <div style="font-size:9px; margin-top:4px; opacity:0.6; text-align:right;">${new Date(m.fecha).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>

                            </div>`;

                        }).join('')}

                    </div>

                    <div class="chat-input-area">

                        <input type="text" id="chat-input" placeholder="Escribe un mensaje al equipo..." style="flex:1; padding:12px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" onkeypress="if(event.key==='Enter') App.sendChat()">

                        <button class="btn btn-dark" onclick="App.sendChat()">Enviar</button>

                    </div>

                </div>`;

            setTimeout(() => {

                const w = document.getElementById('admin-chat-window');

                if (w) w.scrollTop = w.scrollHeight;

            }, 50);

        }

        else if (section === 'tickets') {
            content = this.renderAdminTicketsMain(tickets, users);
        }

        else if (section === 'equipo') {
            const tecnicos = users.filter(u => u.roles && u.roles.includes('tecnico'));
            content = this.renderSecHeader('🛠️ Gestión del Equipo Técnico', 'Asignación de sectores y roles internos') + `
                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden;">
                    <table style="width:100%; border-collapse:collapse;">
                        <thead>
                            <tr style="background:var(--color-bg-alt); text-align:left; font-size:11px; text-transform:uppercase; color:var(--color-text-muted); border-bottom:1px solid var(--color-border);">
                                <th style="padding:1rem;">Técnico</th>
                                <th style="padding:1rem;">Estado</th>
                                <th style="padding:1rem;">Sector</th>
                                <th style="padding:1rem;">Cargo / Rol</th>
                                <th style="padding:1rem; text-align:right;">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tecnicos.map(t => {
                                const sector = db.getTecnicoSector(t.userId);
                                const techInfo = (db.get('equipoSoporte') || []).find(e => e.userId === t.userId) || {};
                                const cargo = techInfo.cargo || '';
                                const isAdmin = db.hasAnyRole(db.currentUser.userId, ['admin', 'owner']);
                                return `
                                <tr style="border-bottom:1px solid var(--color-border);">
                                    <td style="padding:1rem;">
                                        <div style="font-weight:700;">${t.nombre}</div>
                                        <div style="font-size:12px; opacity:0.7;">${t.email}</div>
                                    </td>
                                    <td style="padding:1rem;">
                                        <span style="font-size:11px; padding:2px 8px; border-radius:999px; background:${t.estadoActividad==='Activo'?'#dcfce7':'#f3f4f6'}; color:${t.estadoActividad==='Activo'?'#166534':'#64748b'}; font-weight:700;">
                                            ${t.estadoActividad || 'Inactivo'}
                                        </span>
                                    </td>
                                    <td style="padding:1rem;">
                                        ${isAdmin ? `
                                        <select id="tech-sector-${t.userId}" style="padding:8px; border-radius:8px; border:1.5px solid var(--color-border); font-size:13px; font-weight:600; width:100%;">
                                            <option value="General" ${sector==='General'?'selected':''}>General</option>
                                            <option value="Pagos" ${sector==='Pagos'?'selected':''}>Pagos</option>
                                            <option value="Tecnico" ${sector==='Tecnico'?'selected':''}>Técnico</option>
                                            <option value="Cursos" ${sector==='Cursos'?'selected':''}>Cursos</option>
                                        </select>` : `<span>${sector}</span>`}
                                    </td>
                                    <td style="padding:1rem;">
                                        ${isAdmin ? `
                                        <input type="text" id="tech-cargo-${t.userId}" value="${cargo}" placeholder="Ej: Soporte IT" style="padding:8px; border-radius:8px; border:1.5px solid var(--color-border); font-size:13px; font-weight:600; width:100%;">
                                        ` : `<span>${cargo || 'Sin cargo'}</span>`}
                                    </td>
                                    <td style="padding:1rem; text-align:right;">
                                        ${isAdmin ? `<button class="btn btn-dark" style="font-size:11px; padding:8px 16px;" onclick="App.updateTechProfile('${t.userId}')">GUARDAR</button>` : '<span style="font-size:12px; color:var(--color-text-muted);">Solo lectura</span>'}
                                    </td>
                                </tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                </div>`;
        }

        else if (section === 'sanciones') {
            const sanciones = db.get('sanciones') || [];
            const pending = sanciones.filter(s => s.estado === 'Pendiente');
            const resolved = sanciones.filter(s => s.estado !== 'Pendiente');

            content = this.renderSecHeader('🚫 Solicitudes de Sanción', 'Aprobación de bloqueos por mal uso del soporte') + `
                <div style="display:grid; gap:2rem;">
                    <div>
                        <h3 style="font-size:1rem; margin-bottom:1rem;">⚠️ Pendientes de Revisión</h3>
                        ${pending.length === 0 ? '<p style="color:var(--color-text-muted); font-size:13px; padding:2rem; background:var(--color-bg-alt); border-radius:12px; text-align:center;">No hay solicitudes pendientes.</p>' : `
                        <div style="display:grid; gap:1rem;">
                            ${pending.map(s => {
                                const u = users.find(x => x.userId === s.userId);
                                const req = users.find(x => x.userId === s.solicitadoPor);
                                return `
                                <div style="background:var(--color-bg); border:1px solid #fecaca; border-radius:12px; padding:1.5rem; display:flex; justify-content:space-between; align-items:center;">
                                    <div>
                                        <div style="font-weight:800; font-size:15px;">Sanción para: ${u ? u.nombre : s.userId}</div>
                                        <div style="font-size:13px; color:#ef4444; margin-top:0.25rem;"><b>Motivo:</b> ${s.motivo}</div>
                                        <div style="font-size:11px; opacity:0.7; margin-top:0.5rem;">Solicitado por: ${req ? req.nombre : 'Equipo'} • ${new Date(s.fecha).toLocaleDateString()}</div>
                                    </div>
                                    <div style="display:flex; gap:0.5rem;">
                                        <button class="btn btn-dark" style="background:#16a34a; border:none; padding:8px 16px; font-size:12px;" onclick="App.resolveSanction('${s.id}', true)">APROBAR</button>
                                        <button class="btn btn-default" style="padding:8px 16px; font-size:12px;" onclick="App.resolveSanction('${s.id}', false)">RECHAZAR</button>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>`}
                    </div>

                    <div>
                        <h3 style="font-size:1rem; margin-bottom:1rem; opacity:0.6;">📋 Historial de Resoluciones</h3>
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:12px; padding:1rem;">
                            ${resolved.map(s => {
                                const u = users.find(x => x.userId === s.userId);
                                return `<div style="font-size:12px; padding:8px 0; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between;">
                                    <span><b>${u ? u.nombre : 'Usuario'}</b>: ${s.estado}</span>
                                    <span style="opacity:0.6;">${new Date(s.fecha).toLocaleDateString()}</span>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>`;
        }



        /* --- 5. AVANZADO --- */

        else if (section === 'usuarios') {

            const rolesPriority = ['owner', 'admin', 'tecnico', 'profesor', 'carin_plus', 'usuario'];

            let allUsers = db.get('profiles');

            

            // Sort by highest role

            allUsers.sort((a, b) => {

                const getPrio = (u) => {

                    for (let i = 0; i < rolesPriority.length; i++) {

                        if (u.roles && u.roles.includes(rolesPriority[i])) return i;

                    }

                    return rolesPriority.length;

                };

                return getPrio(a) - getPrio(b);

            });



            content = this.renderSecHeader('👥 Gestión de Usuarios', `${allUsers.length} perfiles registrados`) + `

                <div style="margin-bottom:1.5rem; display:flex; gap:1rem; flex-wrap:wrap; align-items:center;">

                    <div style="flex:1; min-width:300px;">

                        <input type="text" id="admin-search-user" placeholder="🔍 Buscar por nombre o email..." style="width:100%; padding:12px; border-radius:var(--radius-sm); border:1.5px solid var(--color-border);" onkeyup="App.filterAdminUserTable()">

                    </div>

                    <select id="admin-filter-role" style="padding:12px; border-radius:var(--radius-sm); border:1.5px solid var(--color-border); font-weight:600;" onchange="App.filterAdminUserTable()">

                        <option value="all">Todos los Roles</option>

                        <option value="admin">Administradores</option>

                        <option value="tecnico">Técnicos</option>

                        <option value="profesor">Profesores</option>

                        <option value="carin_plus">Miembros Carin+</option>

                        <option value="usuario">Usuarios Básicos</option>

                    </select>

                </div>

                <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden;">

                    <table id="user-table" style="width:100%;border-collapse:collapse;">

                        <thead><tr style="text-align:left;border-bottom:1px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;background:var(--color-bg-alt);">

                            <th style="padding:1rem 1.5rem;">Usuario</th>

                            <th style="padding:1rem 1.5rem;">Registro</th>

                            <th style="padding:1rem 1.5rem;">Roles Activos</th>

                            <th style="padding:1rem 1.5rem;text-align:right;">Acciones de Gesti\u00F3n</th>

                        </tr></thead>

                        <tbody>${allUsers.map(u => {

                            const roles = u.roles || [u.rango || 'usuario'];

                            return `<tr style="border-bottom:1px solid var(--color-border);" class="user-admin-row" data-roles="${roles.join(',')}">

                                <td style="padding:1rem 1.5rem;">

                                    <div style="font-weight:700; font-size:15px;">${u.nombre}</div>

                                    <div style="font-size:12px; color:var(--color-text-muted);">${u.email}</div>

                                </td>

                                <td style="padding:1rem 1.5rem; font-size:13px; color:var(--color-text-muted);">${new Date(u.fechaRegistro).toLocaleDateString()}</td>

                                <td style="padding:1rem 1.5rem;">

                                    <div style="display:flex; gap:4px; flex-wrap:wrap;">

                                        ${roles.map(r => {

                                            const roleKey = r === 'carin_plus' ? 'plus' : r;

                                            return `<span style="background:var(--role-${roleKey}-bg); color:var(--role-${roleKey}-text); border:1px solid var(--role-${roleKey}-border); padding:2px 8px; border-radius:999px; font-size:10px; font-weight:800; text-transform:uppercase;">${r}</span>`;

                                        }).join('')}

                                    </div>

                                </td>

                                <td style="padding:1rem 1.5rem;text-align:right;">

                                    <div style="display:flex; gap:0.5rem; justify-content:flex-end; align-items:center;">

                                        <button class="btn btn-dark" style="font-size:10px; padding:6px 12px; font-weight:800; background:var(--color-primary); border:none;" onclick="App.editUserAdmin('${u.userId}')">✏️ EDITAR PERFIL</button>

                                        <div style="width:1px; height:20px; background:var(--color-border); margin:0 4px;"></div>

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px; border-color:${roles.includes('admin')?'var(--color-pink-text)':'var(--color-border)'}; color:${roles.includes('admin')?'var(--color-pink-text)':'inherit'};" onclick="App.toggleUserRoleUI('${u.userId}', 'admin')">Admin</button>

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px; border-color:${roles.includes('tecnico')?'var(--color-info-text)':'var(--color-border)'}; color:${roles.includes('tecnico')?'var(--color-info-text)':'inherit'};" onclick="App.toggleUserRoleUI('${u.userId}', 'tecnico')">Técnico</button>

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px; border-color:${roles.includes('profesor')?'#6b21a8':'var(--color-border)'}; color:${roles.includes('profesor')?'#6b21a8':'inherit'};" onclick="App.toggleUserRoleUI('${u.userId}', 'profesor')">Profe</button>

                                        <button class="btn btn-default" style="font-size:10px; padding:4px 8px; border-color:${roles.includes('carin_plus')?'var(--color-warning-text)':'var(--color-border)'}; color:${roles.includes('carin_plus')?'var(--color-warning-text)':'inherit'};" onclick="App.toggleUserRoleUI('${u.userId}', 'carin_plus')">Carin+</button>

                                    </div>

                                </td>

                            </tr>`;

                        }).join('')}</tbody>

                    </table>

                </div>`;

        }

        else if (section === 'regiones') {

            const regiones = db.get('regiones') || [];

            content = this.renderSecHeader('\ud83c\udf0e Gesti\u00f3n de Regiones', 'Define las regiones disponibles para filtrar productos', `<button class="btn btn-dark" onclick="App.createRegion()">+ Nueva Regi\u00f3n</button>`) + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">

                    <p style="font-size:13px; color:var(--color-text-muted);">Las regiones segmentan el cat\u00e1logo por zona geogr\u00e1fica. Los productos "Global" aparecen en todas las regiones.</p>

                    <div style="display:flex; gap:1rem; margin-top:1rem;">

                        <input type="text" id="new-region-nombre" placeholder="Nombre (Ej: Europa)" style="flex:2; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        <input type="text" id="new-region-emoji" placeholder="Emoji (Ej: \ud83c\uddea\ud83c\uddfa)" style="flex:1; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        <button class="btn btn-dark" onclick="App.createRegion()">Agregar</button>

                    </div>

                </div>

                <div style="display:grid; gap:1rem;">

                    ${regiones.map(r => `

                    <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-sm); padding:1rem 1.5rem; display:flex; justify-content:space-between; align-items:center;">

                        <div style="display:flex; align-items:center; gap:0.75rem; font-size:1.1rem;">

                            <span>${r.emoji}</span>

                            <span style="font-weight:700;">${r.nombre}</span>

                            <span style="font-size:10px; padding:2px 8px; border-radius:999px; background:${r.activa?'var(--color-success-bg)':'var(--color-danger-bg)'}; color:${r.activa?'var(--color-success-text)':'var(--color-danger-text)'}; border:1px solid ${r.activa?'var(--color-success-border)':'var(--color-danger-border)'}; font-weight:700;">${r.activa?'ACTIVA':'INACTIVA'}</span>

                        </div>

                        <div style="display:flex; gap:0.5rem;">

                            <button class="btn btn-default" style="font-size:11px;" onclick="App.toggleRegionAdmin('${r.id}')">${r.activa?'Desactivar':'Activar'}</button>

                            ${r.id !== 'global' ? `<button class="btn btn-default" style="font-size:11px; color:#ef4444;" onclick="App.deleteRegion('${r.id}')">Eliminar</button>` : ''}

                        </div>

                    </div>`).join('')}

                </div>`;

        }

        else if (section === 'config_carrito') {

            const cfg = db.get('configCarrito') || { tarifaServicio: 5 };

            content = this.renderSecHeader('\ud83d\uded2 Config. Carrito', 'Ajustes de la experiencia de compra') + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; max-width:600px;">

                    <div style="margin-bottom:1.5rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Tarifa de Servicio (%)</label>

                        <input type="number" id="cfg-tarifa" value="${cfg.tarifaServicio}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        <p style="font-size:11px; color:var(--color-text-muted); margin-top:0.25rem;">Se suma al subtotal en el carrito. 0 para desactivar.</p>

                    </div>

                    <button class="btn btn-dark" onclick="App.saveConfigCarrito()">Guardar Configuraci\u00f3n</button>

                </div>`;

        }

        else if (section === 'carin_plus_pagina') {

            const cfg = db.get('configCarinPlusPagina') || {};

            const beneficios = cfg.beneficios || [];

            content = this.renderSecHeader('\ud83d\udc8e Carin+ P\u00e1Página', 'Edita el contenido de la landing page') + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; max-width:700px; display:grid; gap:1.25rem;">

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">T\u00edtulo</label>

                    <input type="text" id="cpp-titulo" value="${cfg.titulo||''}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Subt\u00edtulo</label>

                    <input type="text" id="cpp-subtitulo" value="${cfg.subtitulo||''}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Precio Mensual ($ARS)</label>

                    <input type="number" id="cpp-precio" value="${cfg.precio||2500}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Beneficios (uno por l\u00ednea)</label>

                    <textarea id="cpp-beneficios" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm); height:120px;">${beneficios.join('\n')}</textarea></div>

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Texto del bot\u00f3n CTA</label>

                    <input type="text" id="cpp-ctatexto" value="${cfg.ctaTexto||''}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                    <div><label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">URL del bot\u00f3n (WhatsApp, etc.)</label>

                    <input type="text" id="cpp-ctaurl" value="${cfg.ctaUrl||''}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                    <button class="btn btn-dark" onclick="App.saveCarinPlusPagina()">Guardar P\u00e1Página</button>

                </div>`;

        }

        else if (section === 'planes_carin') {

            const planes = db.get('configCarinPlusPlanes') || [];

            content = this.renderSecHeader('💎 Planes de Suscripción', 'Configura los planes mensuales de Carin+') + `

                <div style="display:grid; gap:1.5rem; max-width:700px;">

                    ${planes.map((plan, idx) => `

                    <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem;">

                        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">

                            <div style="background:${plan.etiqueta==='Más Popular'?'var(--color-primary)':plan.etiqueta==='Mejor Valor'?'var(--color-info-text)':'var(--color-bg-alt)'}; color:${plan.etiqueta?'white':'var(--color-text)'}; padding:4px 14px; border-radius:999px; font-size:11px; font-weight:800; text-transform:uppercase; border:1px solid ${plan.etiqueta?'transparent':'var(--color-border)'};">${plan.etiqueta || plan.meses + ' meses'}</div>

                            <div style="font-weight:700;">${plan.meses} meses</div>

                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">

                            <div><label style="display:block; font-size:12px; font-weight:700; margin-bottom:0.4rem;">Precio Total ($ARS)</label>

                            <input type="number" id="plan-precio-${idx}" value="${plan.precio}" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                            <div><label style="display:block; font-size:12px; font-weight:700; margin-bottom:0.4rem;">Descuento (%)</label>

                            <input type="number" id="plan-desc-${idx}" value="${plan.descuento}" min="0" max="100" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                            <div><label style="display:block; font-size:12px; font-weight:700; margin-bottom:0.4rem;">Etiqueta Badge</label>

                            <input type="text" id="plan-etiq-${idx}" value="${plan.etiqueta}" placeholder="Ej: Más Popular" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm);"></div>

                        </div>

                        <button class="btn btn-dark" style="margin-top:1rem; font-size:12px;" onclick="App.savePlanCarin(${idx})">Guardar Plan</button>

                    </div>`).join('')}

                </div>`;

        }



        container.innerHTML = `
            <div class="container" style="margin-top:2rem; margin-bottom:5rem;">
                <div class="admin-layout">
                    ${sidebar}
                    <div id="admin-main-area" class="fade-in admin-main">${content}</div>
                </div>
                <button class="admin-sidebar-toggle-btn" onclick="document.getElementById('admin-sidebar').classList.toggle('active')">
                    \u2630
                </button>
            </div>`;

    },



    // --- Admin Action Methods ---

    filterAdminTable(inputId, tableId) {

        const input = document.getElementById(inputId);

        const filter = input.value.toLowerCase();

        const trs = document.getElementById(tableId).getElementsByTagName('tr');

        for (let i = 1; i < trs.length; i++) {

            const txt = trs[i].innerText.toLowerCase();

            trs[i].style.display = txt.includes(filter) ? '' : 'none';

        }

    },



    editUserAdmin(userId) {
        const u = db.get('profiles').find(x => x.userId === userId);
        if (!u) return;

        const roles = u.roles || [u.rango || 'usuario'];
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:9999; backdrop-filter:blur(8px);";

        modal.innerHTML = `
            <div class="modal-content" style="background:var(--color-bg); padding:2.5rem; border-radius:24px; max-width:500px; width:95%; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); border:1px solid var(--color-border);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
                    <h2 style="margin:0; font-weight:900;">\uD83D\uDC64 Gestionar Usuario</h2>
                    <button onclick="this.closest('.modal-overlay').remove()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--color-text-muted);">\u2715</button>
                </div>
                
                <div style="display:grid; gap:1.5rem; text-align:left;">
                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.5rem;">Nombre Completo</label>
                        <input type="text" id="edit-user-name" value="${u.nombre}" style="width:100%; padding:12px; border-radius:12px; border:1.5px solid var(--color-border); background:var(--color-bg); font-size:14px; font-weight:600;">
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.5rem;">Correo Electr\u00F3nico</label>
                        <input type="email" id="edit-user-email" value="${u.email}" style="width:100%; padding:12px; border-radius:12px; border:1.5px solid var(--color-border); background:var(--color-bg); font-size:14px; font-weight:600;">
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.5rem;">Tel\u00E9fono / WhatsApp</label>
                        <input type="text" id="edit-user-phone" value="${u.telefono || ''}" placeholder="+54 9..." style="width:100%; padding:12px; border-radius:12px; border:1.5px solid var(--color-border); background:var(--color-bg); font-size:14px; font-weight:600;">
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:1rem;">Roles y Permisos</label>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
                            ${['admin', 'tecnico', 'profesor', 'carin_plus', 'usuario'].map(r => {
                                const isSensitive = ['admin', 'tecnico', 'profesor', 'owner'].includes(r);
                                const isAdminOrOwner = db.hasAnyRole(db.currentUser.userId, ['admin', 'owner']);
                                if (isSensitive && !isAdminOrOwner) return '';
                                
                                return `
                                <label style="display:flex; align-items:center; gap:8px; background:var(--color-bg-alt); padding:10px 14px; border-radius:10px; cursor:pointer; border:1px solid var(--color-border);">
                                    <input type="checkbox" name="edit-user-roles" value="${r}" ${roles.includes(r) ? 'checked' : ''} style="width:18px; height:18px;">
                                    <span style="font-size:12px; font-weight:700; text-transform:capitalize;">${r.replace('_', ' ')}</span>
                                </label>
                            `;}).join('')}
                        </div>
                    </div>
                </div>

                <div style="margin-top:2.5rem; display:grid; grid-template-columns:1fr 1.5fr; gap:1rem;">
                    <button class="btn btn-default" onclick="this.closest('.modal-overlay').remove()" style="padding:14px; font-weight:700;">Cancelar</button>
                    <button class="btn btn-dark" onclick="App.saveUserAdmin('${userId}')" style="padding:14px; font-weight:800; background:linear-gradient(to right, #db2777, #9333ea); border:none; color:white;">Guardar Cambios</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    saveUserAdmin(userId) {
        const nombre = document.getElementById('edit-user-name').value.trim();
        const email = document.getElementById('edit-user-email').value.trim();
        const telefono = document.getElementById('edit-user-phone').value.trim();
        const roles = Array.from(document.querySelectorAll('input[name="edit-user-roles"]:checked')).map(el => el.value);

        if (!nombre || !email) return this.showToast('\u26A0\uFE0F Nombre y Email son obligatorios');
        if (roles.length === 0) roles.push('usuario');

        if (db.updateUserProfile(userId, { nombre, email, telefono, roles })) {
            this.showToast('\u2705 Usuario actualizado correctamente');
            document.querySelector('.modal-overlay').remove();
            this.viewAdmin(document.getElementById('main-content'), 'usuarios');
        }
    },

    filterAdminUserTable() {

        const search = document.getElementById('admin-search-user').value.toLowerCase();

        const roleFilter = document.getElementById('admin-filter-role').value;

        const rows = document.querySelectorAll('.user-admin-row');

        

        rows.forEach(row => {

            const text = row.innerText.toLowerCase();

            const roles = row.getAttribute('data-roles').split(',');

            

            const matchSearch = text.includes(search);

            const matchRole = roleFilter === 'all' || roles.includes(roleFilter);

            

            row.style.display = (matchSearch && matchRole) ? '' : 'none';

        });

    },



    toggleUserRoleUI(userId, role) {

        db.toggleUserRole(userId, role);

        this.showToast('  Rol actualizado');

        this.viewAdmin(document.getElementById('main-content'), 'usuarios');

    },



    saveAnuncio() {

        const t = document.getElementById('an-texto').value;

        const c = document.getElementById('an-color').value;

        const a = document.getElementById('an-activo').checked;

        const ans = db.get('anuncios');

        if(ans.length > 0) { ans[0].texto = t; ans[0].colorFondo = c; ans[0].activo = a; }

        else { ans.push({ id:'1', texto:t, colorFondo:c, activo:a }); }

        db.save();

        this.showToast('  Anuncio actualizado');

        this.renderLayout(); // refresh top banner

    },



    saveConfigInicioTextos() {

        const tp = db.get('textosPagina');

        tp.tituloHero = document.getElementById('cfg-titulo').value;

        tp.subtituloHero = document.getElementById('cfg-sub').value;

        db.save();

        this.showToast('  Textos guardados');

    },



    async saveSiteLogo() {
        const fileInput = document.getElementById('admin-logo-file');
        const file = fileInput.files[0];
        if (!file) return this.showToast('   Selecciona un archivo');

        this.showToast('\uD83D\uDE80 Subiendo logo...');
        const url = await db.uploadImage(file);
        
        if (url) {
            const tp = db.get('textosPagina');
            tp.logo = url;
            db.save();
            this.renderLayout();
            this.viewAdmin(document.getElementById('main-content'), 'inicio');
            this.showToast('  Logotipo actualizado');
        }
    },



    saveSiteLogoSize() {

        const sizeInput = document.getElementById('admin-logo-size');

        const newSize = parseInt(sizeInput.value);

        if (!newSize || newSize < 10 || newSize > 200) return this.showToast('   Ingresa un tamaño válido (10-200)');

        

        const tp = db.get('textosPagina');

        tp.logoSize = newSize;

        db.save();

        this.showToast('  Tamaño del logo actualizado');

        this.renderLayout();

    },



    saveConfigInicioLimites() {

        const ci = db.get('configInicio');

        ci.maxDestacados = parseInt(document.getElementById('cfg-max-p').value) || 6;

        ci.maxCursos = parseInt(document.getElementById('cfg-max-c').value) || 4;

        db.save();

        this.showToast('  L ?mitems guardados');

    },



    saveCarinPlusDiscount(prodId) {

        const val = parseInt(document.getElementById('cp-desc-'+prodId).value) || 0;

        const p = db.get('productos').find(x => x.id === prodId);

        if (p) { p.carinPlusDescuento = val; db.save(); this.showToast('  Descuento Premium aplicado'); this.viewAdmin(document.getElementById('main-content'), 'carin_plus'); }

    },



    toggleAdminSidebarCategory(el) {
        if (window.innerWidth > 768) return;
        const subnav = el.nextElementSibling.nextElementSibling;
        const isShowing = subnav.classList.contains('show');
        
        // Close others
        document.querySelectorAll('.admin-subnav').forEach(s => s.classList.remove('show'));
        document.querySelectorAll('.admin-sidebar-category').forEach(c => c.classList.remove('active-cat'));
        
        if (!isShowing) {
            subnav.classList.add('show');
            el.classList.add('active-cat');
        }
    },

    setCarinPlusTemporalUI() {
        const userId = document.getElementById('cp-temp-user').value;
        const days = parseInt(document.getElementById('cp-days').value) || 0;
        const hours = parseInt(document.getElementById('cp-hours').value) || 0;
        const mins = parseInt(document.getElementById('cp-mins').value) || 0;
        const secs = parseInt(document.getElementById('cp-secs').value) || 0;
        
        if (!userId) return this.showToast('\u26A0\uFE0F Selecciona un usuario');
        
        const totalSeconds = (days * 86400) + (hours * 3600) + (mins * 60) + secs;
        if (totalSeconds <= 0) return this.showToast('\u26A0\uFE0F Ingresa una duraci\u00F3n v\u00E1lida');
        
        if (db.setCarinPlusTemporal(userId, totalSeconds)) {
            this.showToast('\u2728 Carin+ Temporal activado correctamente');
            this.viewAdmin(document.getElementById('main-content'), 'carin_plus');
        }
    },

    saveCarinPlusConfig() {

        const desc = parseInt(document.getElementById('cp-global-desc').value) || 0;

        const tit = document.getElementById('cp-global-title').value || 'CARIN+';

        const cfg = db.get('configCarinPlus');

        if (cfg) { cfg.descuentoGlobal = desc; cfg.tituloBadge = tit; }

        else { db.data.configCarinPlus = { descuentoGlobal: desc, tituloBadge: tit }; }

        db.save();

        this.showToast('  Configuración Carin+ guardada');

        this.viewAdmin(document.getElementById('main-content'), 'carin_plus');

    },



    addCarinPlusException() {

        const id = document.getElementById('cp-add-select').value;

        if (!id) return;

        const p = db.get('productos').find(x => x.id === id);

        if (p) {

            p.excluirCarinPlus = false; // Add it with 0 extra, but it's now in the list (or it wouldn't show up unless we give it an extra desc)

            // Wait, to show up in the exceptions list without extra discount, we can set a dummy extra discount or check 'excluir'.

            // Actually, we can just set carinPlusDescuento to 1 so it appears, or toggle "excluir" to false.

            // But if it's 0 and not excluded, it doesn't show up. Let's set it to 1% extra by default so it appears in the editor.

            p.carinPlusDescuento = 1; 

            db.save();

            this.showToast('  Producto agregado a excepciones');

            this.viewAdmin(document.getElementById('main-content'), 'carin_plus');

        }

    },



    toggleCarinPlusExclude(id, checked) {

        const p = db.get('productos').find(x => x.id === id);

        if (p) { p.excluirCarinPlus = checked; db.save(); this.viewAdmin(document.getElementById('main-content'), 'carin_plus'); }

    },



    removeCarinPlusException(id) {

        const p = db.get('productos').find(x => x.id === id);

        if (p) { p.carinPlusDescuento = 0; p.excluirCarinPlus = false; db.save(); this.viewAdmin(document.getElementById('main-content'), 'carin_plus'); }

    },



    saveConfigRebajas() {

        const pct = parseInt(document.getElementById('rebaja-pct').value) || 0;

        const tit = document.getElementById('rebaja-tit').value || 'Rebaja Especial';

        const activa = document.getElementById('rebaja-activa').checked;

        const cfg = db.get('configRebajas');

        if (cfg) { cfg.porcentaje = pct; cfg.titulo = tit; cfg.activa = activa; }

        else { db.data.configRebajas = { porcentaje: pct, titulo: tit, activa: activa }; }

        db.save();

        this.showToast(activa ? '   Rebaja Global Activada' : '  Rebaja Global Desactivada');

        this.viewAdmin(document.getElementById('main-content'), 'descuentos');

        this.renderLayout(); // Refresh cart badge if needed

    },



    createCupon() {

        const cod = document.getElementById('new-cupon-cod').value.trim().toUpperCase();

        const pct = parseInt(document.getElementById('new-cupon-pct').value);

        if (!cod || !pct) return this.showToast('   Ingresa un cdigo y porcentaje válido');

        

        const cupones = db.get('cupones');

        if (cupones.find(c => c.codigo === cod)) return this.showToast('   El cdigo ya existe');

        

        cupones.push({ id: 'C' + Date.now(), codigo: cod, porcentaje: pct, activo: true, usos: 0 });

        db.save();

        this.showToast('  Cupón Creado');

        this.viewAdmin(document.getElementById('main-content'), 'descuentos');

    },



    toggleCupon(id) {

        const c = db.get('cupones').find(x => x.id === id);

        if (c) { c.activo = !c.activo; db.save(); this.viewAdmin(document.getElementById('main-content'), 'descuentos'); }

    },



    deleteCupon(id) {

        if (!confirm(' Seguro que deseas eliminar este cupón?')) return;

        db.data.cupones = db.data.cupones.filter(c => c.id !== id);

        db.save();

        this.viewAdmin(document.getElementById('main-content'), 'descuentos');

    },



    createRegion() {

        const nombre = document.getElementById('new-region-nombre')?.value.trim();

        const emoji = document.getElementById('new-region-emoji')?.value.trim() || '  ';

        if (!nombre) return this.showToast('   Ingresun nombre para la región');

        const regiones = db.get('regiones');

        const id = nombre.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');

        if (regiones.find(r => r.id === id)) return this.showToast('   Ya existe una región con ese nombre');

        regiones.push({ id, nombre, emoji, activa: true });

        db.save();

        this.showToast('  Región creada');

        this.viewAdmin(document.getElementById('main-content'), 'regiones');

    },



    toggleRegionAdmin(id) {

        const r = db.get('regiones').find(x => x.id === id);

        if (r) { r.activa = !r.activa; db.save(); this.viewAdmin(document.getElementById('main-content'), 'regiones'); }

    },



    deleteRegion(id) {

        if (!confirm(' Eliminar esta regiónLos productos asignados a ella pasarón a mostrarse como globales.')) return;

        db.data.regiones = db.data.regiones.filter(r => r.id !== id);

        db.save();

        this.viewAdmin(document.getElementById('main-content'), 'regiones');

    },



    saveConfigCarrito() {

        const tarifa = parseInt(document.getElementById('cfg-tarifa').value) || 0;

        const cfg = db.get('configCarrito');

        if (cfg) cfg.tarifaServicio = tarifa;

        else db.data.configCarrito = { tarifaServicio: tarifa };

        db.save();

        this.showToast('  Configuración de carrito guardada');

        this.viewAdmin(document.getElementById('main-content'), 'config_carrito');

    },



    saveCarinPlusPagina() {

        const cfg = db.get('configCarinPlusPagina') || {};

        cfg.titulo = document.getElementById('cpp-titulo').value;

        cfg.subtitulo = document.getElementById('cpp-subtitulo').value;

        cfg.precio = parseInt(document.getElementById('cpp-precio').value) || 0;

        cfg.beneficios = document.getElementById('cpp-beneficios').value.split('\n').map(b => b.trim()).filter(Boolean);

        cfg.ctaTexto = document.getElementById('cpp-ctatexto').value;

        cfg.ctaUrl = document.getElementById('cpp-ctaurl').value;

        db.data.configCarinPlusPagina = cfg;

        db.save();

        this.showToast('  Página Carin+ actualizada');

        this.viewAdmin(document.getElementById('main-content'), 'carin_plus_pagina');

    },



    savePlanCarin(idx) {

        const planes = db.get('configCarinPlusPlanes');

        if (!planes || !planes[idx]) return;

        planes[idx].precio = parseInt(document.getElementById(`plan-precio-${idx}`).value) || 0;

        planes[idx].descuento = parseInt(document.getElementById(`plan-desc-${idx}`).value) || 0;

        planes[idx].etiqueta = document.getElementById(`plan-etiq-${idx}`).value.trim();

        db.save();

        this.showToast(`  Plan ${planes[idx].meses} meses guardado`);

        this.viewAdmin(document.getElementById('main-content'), 'planes_carin');

    },



    changeUserRole(userId, newRole) {

        db.changeUserRole(userId, newRole);

        this.showToast('  Rango actualizado');

        this.viewAdmin(document.getElementById('main-content'), 'usuarios');

    },



    sendChat() {

        const input = document.getElementById('chat-input');

        if (input && input.value.trim() !== '') {

            db.sendTeamMessage(input.value.trim());

            input.value = '';

            this.viewAdmin(document.getElementById('main-content'), 'chat');

        }

    },



    viewTicketDetailModal(id) {

        const t = db.get('tickets').find(x => x.id === id);

        const users = db.get('profiles');

        if (!t) return;

        const cli = users.find(u => u.userId === t.userId);

        const product = t.productoId ? db.get('compras').find(c => c.id === t.productoId) : null;

        

        const modal = `

        <div style="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:300; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(2px);">

            <div style="background:var(--color-bg); width:700px; max-width:95%; border-radius:var(--radius-md); box-shadow:var(--shadow-md); overflow:hidden; display:flex; flex-direction:column; max-height:90vh;">

                <!-- Header -->

                <div style="padding:1.5rem; border-bottom:1px solid var(--color-border); display:flex; justify-content:space-between; align-items:center; background:var(--color-bg-alt);">

                    <div>

                        <div style="font-size:10px; text-transform:uppercase; font-weight:800; color:var(--color-text-muted); margin-bottom:4px;">${t.categoria || 'Ticket'}    ID: ${t.id}</div>

                        <h3 style="margin:0">${t.asunto}</h3>

                        <div style="font-size:12px; color:var(--color-text-muted);">Solicitado por: <b>${cli ? cli.nombre : 'N/A'}</b> (${cli ? cli.email : ''})</div>

                    </div>

                    <button onclick="document.getElementById('admin-ticket-modal-container').innerHTML=''" style="background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>

                </div>



                <!-- Product Info (If refund) -->

                ${product ? `

                <div style="padding:1rem 1.5rem; background:var(--color-bg); border-bottom:1px solid var(--color-border); display:flex; align-items:center; justify-content:space-between;">

                    <div style="display:flex; align-items:center; gap:10px;">

                        <div style="font-size:1.5rem;">  </div>

                        <div>

                            <div style="font-size:11px; font-weight:700; color:#db2777; text-transform:uppercase;">Producto para Reembolso</div>

                            <div style="font-weight:700; font-size:14px;">${product.nombreProducto}</div>

                            <div style="font-size:12px; color:#9d174d;">Valor: ${formatPrice(product.precio)}    Compra: ${new Date(product.fecha).toLocaleDateString()}</div>

                        </div>

                    </div>

                    <div style="display:flex; gap:0.5rem;">

                        <button class="btn btn-dark" style="background:#16a34a; border-color:#16a34a; font-size:11px; padding:6px 12px;" onclick="App.processRefundAction('${t.id}', 'Aceptar')">Aceptar Reembolso</button>

                        <button class="btn btn-dark" style="background:#ef4444; border-color:#ef4444; font-size:11px; padding:6px 12px;" onclick="App.processRefundAction('${t.id}', 'Rechazar')">Rechazar</button>

                        <button class="btn btn-default" style="font-size:11px; padding:6px 12px;" onclick="App.processRefundAction('${t.id}', 'Escalar')">Enviar a Superior</button>

                    </div>

                </div>

                ` : ''}



                <!-- Status, Priority & Sector -->
                <div style="padding:1rem 1.5rem; border-bottom:1px solid var(--color-border); display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5rem; background:var(--color-bg-alt);">
                    <div>
                        <label style="display:block; font-size:10px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.4rem;">ESTADO</label>
                        <select onchange="db.changeTicketState('${t.id}', this.value); App.viewAdmin(document.getElementById('main-content'), 'tickets');" style="width:100%; padding:8px; border-radius:8px; font-size:13px; font-weight:700; border:1px solid var(--color-border);">
                            <option value="Abierto" ${t.estado==='Abierto'?'selected':''}>🟢 Abierto</option>
                            <option value="En curso" ${t.estado==='En curso'?'selected':''}>🟡 En curso</option>
                            <option value="Cerrado" ${t.estado==='Cerrado'?'selected':''}>⚪ Cerrado</option>
                        </select>
                    </div>
                    <div>
                        <label style="display:block; font-size:10px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.4rem;">PRIORIDAD</label>
                        <select onchange="db.updateTicketPriority('${t.id}', this.value); App.viewTicketDetailModal('${t.id}');" style="width:100%; padding:8px; border-radius:8px; font-size:13px; font-weight:700; border:1px solid var(--color-border); color:${t.prioridad==='Alta'?'#ef4444':'inherit'}">
                            <option value="Baja" ${t.prioridad==='Baja'?'selected':''}>Baja</option>
                            <option value="Media" ${t.prioridad==='Media'?'selected':''}>Media</option>
                            <option value="Alta" ${t.prioridad==='Alta'?'selected':''}>Alta 🔥</option>
                        </select>
                    </div>
                    <div>
                        <label style="display:block; font-size:10px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.4rem;">SECTOR ASIGNADO</label>
                        <select onchange="db.updateTicketSector('${t.id}', this.value); App.viewTicketDetailModal('${t.id}');" style="width:100%; padding:8px; border-radius:8px; font-size:13px; font-weight:700; border:1px solid var(--color-border);">
                            <option value="General" ${t.sector==='General'?'selected':''}>General</option>
                            <option value="Pagos" ${t.sector==='Pagos'?'selected':''}>Pagos</option>
                            <option value="Tecnico" ${t.sector==='Tecnico'?'selected':''}>Técnico</option>
                            <option value="Cursos" ${t.sector==='Cursos'?'selected':''}>Cursos</option>
                        </select>
                    </div>
                </div>



                <!-- Chat Content -->

                <div style="flex:1; padding:1.5rem; overflow-y:auto; background:var(--color-bg-alt); display:flex; flex-direction:column; gap:1rem;">

                    ${t.mensajes.map(m => `

                        <div style="max-width:85%; ${m.esEquipo ? 'align-self:flex-end; background:var(--color-primary); color:white; border-radius:12px 12px 0 12px;' : 'align-self:flex-start; background:var(--color-bg); border:1px solid var(--color-border); border-radius:12px 12px 12px 0;'} padding:1rem; box-shadow:0 2px 4px rgba(0,0,0,0.05);">

                            <div style="font-size:14px; line-height:1.5;">${m.texto}</div>

                            <div style="font-size:10px; margin-top:8px; opacity:0.7; text-align:right; font-weight:600;">

                                ${m.esEquipo ? 'Equipo de Soporte' : cli ? cli.nombre : 'Cliente'}    ${new Date(m.fecha).toLocaleString()}

                            </div>

                        </div>

                    `).join('')}



                    <!-- Attachments -->

                    ${t.capturas && t.capturas.length > 0 ? `

                        <div style="margin-top:1rem; border-top:1px dashed var(--color-border); padding-top:1rem;">

                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.75rem;">CAPTUTAS ADJUNTAS:</div>

                            <div style="display:flex; gap:10px; flex-wrap:wrap;">

                                ${t.capturas.map(img => `

                                    <img src="${img}" onclick="App.viewImageModal('${img}')" style="width:120px; height:80px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid var(--color-border); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">

                                `).join('')}

                            </div>

                        </div>

                    ` : ''}

                </div>



                <!-- Reply Area -->
                <div style="padding:1rem 1.5rem; border-top:1px solid var(--color-border); display:flex; gap:1rem; background:var(--color-bg); align-items:center;">
                    <button class="btn btn-default" style="color:#ef4444; border-color:#fecaca; font-size:18px; padding:10px;" title="Solicitar Sanción por Mal Uso" onclick="App.requestSanctionUI('${t.userId}', '${t.id}')">🚫</button>
                    <input type="text" id="admin-reply-input" placeholder="Escribe una respuesta para el cliente..." style="flex:1; padding:12px; border-radius:var(--radius-sm); border:1.5px solid var(--color-border); font-size:14px;" onkeypress="if(event.key==='Enter') App.sendTicketReplyFromAdmin('${t.id}')">
                    <button class="btn btn-dark" style="padding:12px 24px;" onclick="App.sendTicketReplyFromAdmin('${t.id}')">Responder</button>
                </div>

            </div>

        </div>`;

        document.getElementById('admin-ticket-modal-container').innerHTML = modal;

    },



    processRefundAction(ticketId, action) {

        const t = db.get('tickets').find(x => x.id === ticketId);

        if (!t || !t.productoId) return;

        const comp = db.get('compras').find(c => c.id === t.productoId);

        if (!comp) return;



        if (action === 'Aceptar') {

            if (confirm(' Confirmar el reembolso total de este productoSe cerrarel ticket y se notificaral cliente.')) {

                comp.estado = 'Reembolsado';

                t.estado = 'Cerrado';

                db.addTicketReply(ticketId, '  Tu solicitud de reembolso ha sido APROBADA. El monto seracreditado en tu cuenta en los prximos das.', true);

                this.showToast('  Reembolso procesado correctamente');

            }

        } else if (action === 'Rechazar') {

            const motivo = prompt('Ingresa el motivo del rechazo para informar al cliente:');

            if (motivo) {

                comp.estado = 'Pagado';

                t.estado = 'Cerrado';

                db.addTicketReply(ticketId, ` ? Tu solicitud de reembolso ha sido RECHAZADA. Motivo: ${motivo}`, true);

                this.showToast(' Reembolso rechazado');

            }

        } else if (action === 'Escalar') {

            t.estado = 'En curso';

            t.prioridad = 'Alta';

            db.addTicketReply(ticketId, ' ? Tu caso ha sido enviado al departamento superior para una revisión más detallada. Te notificaremos pronto.', true);

            this.showToast('   Ticket escalado a un superior');

        }



        db.save();

        this.viewTicketDetailModal(ticketId);

        this.viewAdmin(document.getElementById('main-content'), 'tickets');

    },



    deleteTicketAdmin(id) {
        if (confirm('⚠️ ¿Seguro que deseas ELIMINAR este ticket permanentemente?')) {
            db.deleteTicket(id);
            this.showToast('🗑️ Ticket eliminado');
            this.viewAdmin(document.getElementById('main-content'), 'tickets');
        }
    },

    updateTechProfile(userId) {
        const sector = document.getElementById(`tech-sector-${userId}`).value;
        const cargo = document.getElementById(`tech-cargo-${userId}`).value;
        db.updateTecnicoSector(userId, sector);
        db.updateTecnicoCargo(userId, cargo);
        this.showToast('✅ Perfil del técnico actualizado');
    },

    requestSanctionUI(userId, ticketId) {
        const reason = prompt('Motivo de la solicitud de sanción (ej: Insultos, Spam, Mal uso):');
        if (reason) {
            db.requestSanction(userId, ticketId, reason);
            this.showToast('🚀 Solicitud de sanción enviada a administración');
        }
    },

    resolveSanction(id, approved) {
        if (approved) {
            if (db.approveSanction(id)) {
                this.showToast('🚫 Usuario SANCIONADO. Ticket cerrado.');
            }
        } else {
            db.rejectSanction(id);
            this.showToast('✅ Solicitud de sanción rechazada');
        }
        this.viewAdmin(document.getElementById('main-content'), 'sanciones');
    },

    filterTicketTable() {
        const query = document.getElementById('ticket-search').value.toLowerCase();
        const rows = document.querySelectorAll('.ticket-row');
        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(query) ? '' : 'none';
        });
    },

    sortTicketTable(criteria) {
        this.viewAdmin(document.getElementById('main-content'), 'tickets'); // Full re-render for sorting logic in viewAdmin
    },

    sendTicketReplyFromAdmin(ticketId) {

        const input = document.getElementById('admin-reply-input');

        if (input && input.value.trim() !== '') {

            db.addTicketReply(ticketId, input.value.trim(), true);

            this.showToast('  Respuesta enviada');

            this.viewTicketDetailModal(ticketId); // refresh modal

            // Also refresh kanban behind it

            this.viewAdmin(document.getElementById('main-content'), 'tickets');

        }

    },



    createCategoria() {

        const name = document.getElementById('new-cat-name').value.trim();

        const parentId = document.getElementById('new-cat-parent').value;

        if (!name) return this.showToast('   El nombre de la categoría es requerido');

        db.addCategoria(name, parentId || null);

        this.showToast('  Categoría creada');

        this.viewAdmin(document.getElementById('main-content'), 'categorias');

    },



    deleteCategoria(id) {

        if (confirm(' Eliminar esta categoríaSe desvincularón los productos asociados.')) {

            db.deleteCategoria(id);

            this.showToast('  Categoría eliminada');

            this.viewAdmin(document.getElementById('main-content'), 'categorias');

        }

    },



    editProduct(id) {

        const p = db.get('productos').find(x => x.id === id);

        if (!p) return;

        const allCats = db.get('categoriasStore') || [];

        const main = document.getElementById('main-content');

        const { secHeader } = window._adminHelpers || {};



        main.innerHTML = `

            <div style="max-width:1000px; margin:2rem auto; padding:0 1.5rem 5rem;">

                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem;">

                    <h2 style="margin:0;">   Editar Producto</h2>

                    <button onclick="App.viewAdmin(document.getElementById('main-content'),'productos')" class="btn btn-default">⬅️ Volver</button>

                </div>

                <div style="background:var(--color-bg);border:1px solid var(--color-border);padding:2.5rem;border-radius:var(--radius-md);">

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">

                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Nombre *</label>

                        <input id="ep-nombre" type="text" value="${p.nombre}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Categoría</label>

                        <select id="ep-cat" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                            <option value="">Sin categoría</option>

                            ${allCats.filter(c=>!c.parentId).map(c => `

                                <optgroup label="${c.nombre}">

                                    ${allCats.filter(s=>s.parentId===c.id).map(s=>`<option value="${s.id}" ${(p.subcategoriaId===s.id||p.categoriaId===s.id)?'selected':''}>${s.nombre}</option>`).join('')}

                                </optgroup>`).join('')}

                        </select></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Emoji</label>

                        <input id="ep-emoji" type="text" value="${p.emoji || ''  }" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio ($ARS) *</label>

                        <input id="ep-precio" type="number" value="${p.precio}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Precio Anterior</label>

                        <input id="ep-precioAntes" type="number" value="${p.precioAntes || 0}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                        <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Método de Pago</label>

                        <select id="ep-metodo" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">

                            <option ${p.metodoPago==='Por la página'?'selected':''}>Por la página</option>

                            <option ${p.metodoPago==='WhatsApp'?'selected':''}>WhatsApp</option>

                            <option ${p.metodoPago==='Ambas'?'selected':''}>Ambas</option>

                        </select></div>



                        <div style="grid-column:span 2;">

                            <label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Imagen (URL o subir archivo)</label>

                            <div style="display:flex; gap:10px; align-items:center;">

                                <input id="ep-imagen" type="text" value="${p.imagen || ''}" placeholder="URL de imagen" style="flex:1;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);" oninput="let prev=document.getElementById('ep-img-preview'); prev.src=this.value; prev.style.display=this.value?'block':'none';">

                                <label class="btn btn-default" style="cursor:pointer; margin:0; padding:10px 15px;">

                                       Subir <input type="file" accept="image/*" style="display:none;" onchange="App.handleImageUpload(event, 'ep-img-preview', 'ep-imagen')">

                                </label>

                            </div>

                            <img id="ep-img-preview" src="${p.imagen || ''}" style="max-width:150px; margin-top:10px; ${p.imagen?'display:block':'display:none'}; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        </div>

                    </div>



                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Corta</label>

                    <input id="ep-descCorta" type="text" value="${(p.descCorta||'').replace(/"/g,'&quot;')}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>



                    <div style="margin-top:1.5rem;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Completa</label>

                    <textarea id="ep-descLarga" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:100px;">${p.descLarga || ''}</textarea></div>



                    <input id="ep-talles" type="text" value="${(p.talles||[]).join(', ')}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <!-- Purple Section: Special Carin+ Offer -->
                    <div style="margin-top:2.5rem; background:linear-gradient(135deg, #7e22ce, #581c87); border-radius:16px; padding:2rem; color:white; position:relative; overflow:hidden;">
                        <div style="position:absolute; top:-10px; right:-10px; font-size:4rem; opacity:0.1; pointer-events:none;">\u2728</div>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:2rem;">
                            <div style="flex:1;">
                                <h3 style="margin:0; font-size:1.1rem; font-weight:800; display:flex; align-items:center; gap:8px;">\uD83D\uDC8E Oferta Especial Carin+</h3>
                                <div style="margin-top:1.5rem; display:flex; align-items:center; gap:12px;">
                                    <input type="checkbox" id="ep-carinExtra" ${p.isCarinExtraOffer ? 'checked' : ''} style="width:20px; height:20px; accent-color:#a855f7; cursor:pointer;">
                                    <label style="font-size:14px; font-weight:700; cursor:pointer;" for="ep-carinExtra">Marcar como Producto del Mes</label>
                                </div>
                            </div>
                            <div style="width:150px;">
                                <label style="display:block; font-size:11px; font-weight:700; text-transform:uppercase; margin-bottom:0.5rem; opacity:0.9;">Descuento VIP (%)</label>
                                <div style="position:relative;">
                                    <input id="ep-carinPlusDescuento" type="number" value="${p.carinPlusDescuento || 0}" style="width:100%; padding:10px 30px 10px 12px; border-radius:8px; border:none; background:white; color:#581c87; font-weight:800; font-size:1.1rem;">
                                    <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); color:#581c87; font-weight:800;">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="hidden" id="ep-excluirCarin" value="${p.excluirCarinPlus ? 'true' : 'false'}">

                    <div style="margin-top:3rem; display:flex; justify-content:flex-end; gap:1rem;">
                        <button onclick="App.saveEditProduct('${p.id}')" class="btn btn-dark" style="padding:1rem 2rem; font-weight:800; font-size:1rem; border-radius:12px; box-shadow:0 10px 20px rgba(0,0,0,0.1); background:linear-gradient(to right, #1e293b, #0f172a);">\u2705 Guardar y Salir</button>
                    </div>
                </div>
            </div>
        `;
    },



    saveEditProduct(id, exit = true) {

        const p = db.get('productos').find(x => x.id === id);

        if (!p) return;

        const allCats = db.get('categoriasStore') || [];



        const nombre = document.getElementById('ep-nombre').value.trim();

        const precio = parseInt(document.getElementById('ep-precio').value);

        if (!nombre || !precio) { this.showToast('   Completa nombre y precio'); return; }



        const catValue = document.getElementById('ep-cat').value;

        const selectedCat = allCats.find(c => c.id === catValue);

        let categoriaId = null, subcategoriaId = null, catText = p.cat;

        if (selectedCat) {

            if (selectedCat.parentId) {

                subcategoriaId = selectedCat.id;

                categoriaId = selectedCat.parentId;

                const parent = allCats.find(c => c.id === selectedCat.parentId);

                catText = `${parent ? parent.nombre : ''} > ${selectedCat.nombre}`;

            } else {

                categoriaId = selectedCat.id;

                catText = selectedCat.nombre;

            }

        }



        p.nombre = nombre;

        p.precio = precio;

        p.precioAntes = parseInt(document.getElementById('ep-precioAntes').value) || 0;

        p.categoriaId = categoriaId;

        p.subcategoriaId = subcategoriaId;

        p.cat = catText;

        p.emoji = document.getElementById('ep-emoji').value || p.emoji;

        p.imagen = document.getElementById('ep-imagen').value.trim();

        p.descCorta = document.getElementById('ep-descCorta').value;

        p.descLarga = document.getElementById('ep-descLarga').value;

        p.metodoPago = document.getElementById('ep-metodo').value;
        p.talles = document.getElementById('ep-talles').value.split(',').map(t => t.trim()).filter(Boolean);

        // Carin+ Special Offer
        const extraCheck = document.getElementById('ep-carinExtra');
        if (extraCheck) p.isCarinExtraOffer = extraCheck.checked;
        
        const extraDesc = document.getElementById('ep-carinPlusDescuento');
        if (extraDesc) p.carinPlusDescuento = parseInt(extraDesc.value) || 0;
        
        const extraExcluir = document.getElementById('ep-excluirCarin');
        if (extraExcluir) p.excluirCarinPlus = extraExcluir.value === 'true';

        db.save();
        this.showToast('  Producto actualizado correctamente');

        // Smart redirect
        if (window.location.hash.includes('/producto/')) {
            this.viewProduct(id);
        } else {
            this.viewAdmin(document.getElementById('main-content'), 'productos');
        }
    },



    saveNewProduct() {

        const nombre = document.getElementById('np-nombre').value.trim();

        const precio = parseInt(document.getElementById('np-precio').value);

        if (!nombre || !precio) { this.showToast('Completa nombre y precio'); return; }

        const catValue = document.getElementById('np-cat').value;

        const allCats = db.get('categoriasStore') || [];

        const selectedCat = allCats.find(c => c.id === catValue);

        let categoriaId = null, subcategoriaId = null, catText = 'Sin categoria';

        if (selectedCat) {

            if (selectedCat.parentId) {

                subcategoriaId = selectedCat.id;

                categoriaId = selectedCat.parentId;

                const parent = allCats.find(c => c.id === selectedCat.parentId);

                catText = (parent ? parent.nombre : '') + ' > ' + selectedCat.nombre;

            } else { categoriaId = selectedCat.id; catText = selectedCat.nombre; }

        }

        const data = {

            nombre, precio,

            precioAntes: parseInt(document.getElementById('np-precioAntes').value) || 0,

            categoriaId, subcategoriaId, cat: catText,

            emoji: document.getElementById('np-emoji').value || '!',

            imagen: document.getElementById('np-imagen') ? document.getElementById('np-imagen').value.trim() : '',

            descCorta: document.getElementById('np-descCorta').value,

            descLarga: document.getElementById('np-descLarga').value,

            metodoPago: document.getElementById('np-metodo').value,

            talles: document.getElementById('np-talles').value.split(',').map(s=>s.trim()).filter(Boolean),

            region: document.getElementById('np-region') ? document.getElementById('np-region').value : 'global',

            stock: 'Disponible', cantidad: 99, whatsapp: '', sgWhatsapp: '', archivo: '', tipoArchivo: '', tags: [], visitas: 0, compras: 0, carinPlusDescuento: 0,

            isCarinExtraOffer: document.getElementById('np-carinextra') ? document.getElementById('np-carinextra').checked : false

        };

        db.addProduct(data);

        this.showToast('Producto publicado correctamente');

        window.location.hash = '/admin/productos';

    },



    saveAdminCurso() {

        const titulo = document.getElementById('nc-titulo').value.trim();

        const profeId = document.getElementById('nc-profeId').value;

        const maxAlumnos = parseInt(document.getElementById('nc-maxAlumnos').value) || 10;

        

        if (!titulo || !profeId) {

            this.showToast('   Completa título y profesor');

            return;

        }



        // Obtener schedule

        const scheduleRows = document.querySelectorAll('.schedule-row');

        const schedule = [];

        scheduleRows.forEach(row => {

            schedule.push({

                dia: row.querySelector('.s-dia').value,

                horaInicio: row.querySelector('.s-hi').value,

                horaFin: row.querySelector('.s-hf').value,

                frecuencia: row.querySelector('.s-frec').value

            });

        });



        const data = {

            titulo,

            profeId,

            maxAlumnos,

            precio: parseInt(document.getElementById('nc-precio').value) || 0,

            precioInterno: parseInt(document.getElementById('nc-precioInterno').value) || 0,

            subtitulo: document.getElementById('nc-subtitulo').value.trim(),

            horarios: document.getElementById('nc-horarios').value.trim(),

            schedule,

            descripcion: document.getElementById('nc-descripcion').value.trim(),

            descripcionLarga: document.getElementById('nc-descripcionLarga').value.trim(),

            requisitos: document.getElementById('nc-requisitos').value.split('\n').map(x=>x.trim()).filter(Boolean),

            incluye: document.getElementById('nc-incluye').value.split('\n').map(x=>x.trim()).filter(Boolean),

            banner: document.getElementById('nc-banner').value.trim(),

            oferta: document.getElementById('nc-oferta').checked,

            destacado: document.getElementById('nc-destacado').checked,
            ubicacion: document.getElementById('nc-ubicacion').value.trim(),
            alumnos: []

        };

        db.addCurso(data);

        this.showToast('  Curso guardado correctamente');

        window.location.hash = '/admin/cursos';

    },



    addScheduleRow() {

        const c = document.getElementById('nc-schedule-container');

        if(!c) return;

        const div = document.createElement('div');

        div.className = 'schedule-row';

        div.style.display = 'flex';

        div.style.gap = '0.5rem';

        div.innerHTML = `

            <select class="s-dia" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border); flex:1;">

                <option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>

            </select>

            <input class="s-hi" type="time" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

            <input class="s-hf" type="time" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

            <select class="s-frec" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border); flex:1;">

                <option>1 vez por semana</option><option>2 veces por semana</option><option>3 veces por semana</option><option>Todos los das</option>

            </select>

            <button class="btn btn-default" style="color:#ef4444; padding:6px 10px;" onclick="this.parentElement.remove()">X</button>

        `;

        c.appendChild(div);

    },



    addProfesorAdmin() {

        const emailInput = document.getElementById('np-user').value.trim().toLowerCase();

        const especialidad = document.getElementById('np-especialidad').value;

        if (!emailInput) return this.showToast('   Ingresa un correo electrnico');



        const user = db.get('profiles').find(u => u.email.toLowerCase() === emailInput);

        if (!user) return this.showToast(' ? Usuario no encontrado');

        

        if (db.hasRole(user.userId, 'profesor')) {

            return this.showToast('   Este usuario ya es profesor');

        }



        db.toggleUserRole(user.userId, 'profesor');

        const p = db.get('profesores').find(x => x.userId === user.userId);

        if (p && especialidad) {

            p.especialidad = especialidad;

            db.save();

        }

        

        this.showToast('  Profesor creado exitosamente');

        this.viewAdmin(document.getElementById('main-content'), 'profesores');

    },



    deleteProfesorAdmin(id) {

        if (confirm(' Eliminar a este profesor?')) {

            db.deleteProfesor(id);

            this.showToast('  Profesor eliminado');

            this.viewAdmin(document.getElementById('main-content'), 'profesores');

        }

    },



    editCurso(id) {
        const c = db.get('cursos').find(x => x.id === id);
        const main = document.getElementById('admin-main-area');
        if (!c || !main) return;

        const profes = db.get('profesores');
        main.innerHTML = `
            <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:2rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
                    <h3 style="margin:0;">✏️ Editar: ${c.titulo}</h3>
                    <button class="btn btn-default" onclick="App.viewAdminEnrollment('${id}')">⬅️ Volver</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                    <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Título *</label>
                    <input id="ec-titulo" type="text" value="${c.titulo}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>
                    
                    <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Subtítulo</label>
                    <input id="ec-subtitulo" type="text" value="${c.subtitulo || ''}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Profesor *</label>
                    <select id="ec-profeId" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">
                        ${profes.map(p => `<option value="${p.id}" ${p.id === c.profeId ? 'selected' : ''}>${p.nombre}</option>`).join('')}
                    </select></div>

                    <div><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Max. Alumnos *</label>
                    <input id="ec-maxAlumnos" type="number" value="${c.maxAlumnos}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Resumen de Horarios (Texto Corto)</label>
                    <input id="ec-horarios" type="text" value="${c.horarios || ''}" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);"></div>

                    <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Descripción Corta</label>
                    <textarea id="ec-descripcion" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);height:60px;">${c.descripcion || ''}</textarea></div>

                    <div style="grid-column:1/-1;"><label style="display:block;font-size:13px;font-weight:700;margin-bottom:0.5rem;">Banner (URL o Subir)</label>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <input id="ec-banner" type="text" value="${c.banner || ''}" style="flex:1;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border);" oninput="document.getElementById('ec-banner-preview').src=this.value;">
                        <label class="btn btn-default" style="cursor:pointer; margin:0; padding:10px 15px;">
                            Subir <input type="file" accept="image/*" style="display:none;" onchange="App.handleImageUpload(event, 'ec-banner-preview', 'ec-banner')">
                        </label>
                    </div>
                    <img id="ec-banner-preview" src="${c.banner || ''}" style="max-width:300px; margin-top:10px; display:${c.banner?'block':'none'}; border-radius:var(--radius-sm); border:1px solid var(--color-border);">
                    </div>
                </div>
                <div style="margin-top:2rem;border-top:1px solid var(--color-border);padding-top:1.5rem;display:flex;justify-content:flex-end;gap:1rem;">
                    <button class="btn btn-dark" onclick="App.saveEditCurso('${id}')">Guardar Cambios</button>
                </div>
            </div>`;
    },

    saveEditCurso(id) {
        const c = db.get('cursos').find(x => x.id === id);
        if (!c) return;

        c.titulo = document.getElementById('ec-titulo').value.trim();
        c.subtitulo = document.getElementById('ec-subtitulo').value.trim();
        c.profeId = document.getElementById('ec-profeId').value;
        c.maxAlumnos = parseInt(document.getElementById('ec-maxAlumnos').value) || 10;
        c.horarios = document.getElementById('ec-horarios').value.trim();
        c.descripcion = document.getElementById('ec-descripcion').value.trim();
        c.banner = document.getElementById('ec-banner').value.trim();

        db.save();
        this.showToast('  Curso actualizado');
        this.viewAdminEnrollment(id);
    },

    viewAdminEnrollment(cursoId) {

        const c = db.get('cursos').find(x => x.id === cursoId);

        const main = document.getElementById('admin-main-area');

        if (!c || !main) return;



        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const fechaActual = new Date();

        const mesActual = meses[fechaActual.getMonth()];

        const anioActual = fechaActual.getFullYear();

        const selectedMes = this._adminCursoMes || mesActual;

        const selectedAnio = this._adminCursoAnio || anioActual;

        

        const stats = db.getPagoStats(c.id, selectedMes, selectedAnio);

        const pendingThisCourse = db.get('inscripciones').filter(i => 
            i.cursoId === c.id && 
            i.mes === selectedMes && 
            i.anio == selectedAnio && 
            (i.estadoPago === 'En Proceso' || i.estadoPago === 'Solicitado' || i.estadoPago === 'En Revisi\u00F3n')
        );



        main.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                <h2 style="margin:0;">\uD83D\uDCDA ${c.titulo}</h2>
                <button class="btn btn-default" onclick="App.editCurso('${c.id}')">\u270F\uFE0F Editar Curso</button>
            </div>
            ${pendingThisCourse.length > 0 ? `

                <div style="background:var(--color-bg-alt); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem; border-left:5px solid var(--color-primary);">

                    <h3 style="margin-top:0; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem; color:var(--color-text); font-size:1.1rem;">

                         Notificaciones Pendientes del Curso

                    </h3>

                    <div style="display:flex; flex-direction:column; gap:0.75rem;">

                        ${pendingThisCourse.map(insc => {

                            const u = db.get('profiles').find(p => p.userId === insc.userId);

                            const isSol = insc.estadoPago === 'Solicitado';

                            return `

                                <div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-bg); padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border); box-shadow:0 1px 2px rgba(0,0,0,0.05); border-left:3px solid ${isSol?'var(--color-pink-text)':'var(--color-warning-text)'};">

                                    <div>

                                        <span style="font-weight:700;">${u ? u.nombre : insc.userId}</span> 

                                        ${isSol ? `solicit ? una <b>reserva</b> para` : `espera confirmación de pago para`} <b>${insc.mes} ${insc.anio}</b>

                                    </div>

                                    <div style="display:flex; gap:0.5rem; align-items:center;">

                                        ${(!isSol && insc.comprobante) ? `<button class="btn btn-default" style="font-size:10px; padding:5px 10px;" onclick="App.viewImageModal('${insc.comprobante}')"> Ver Comprobante</button>` : ''}

                                        ${isSol ? `

                                            <button class="btn btn-dark" style="font-size:10px; padding:5px 12px; background:#2563eb; border-color:#2563eb;" onclick="App.changePagoEstado('${c.id}', '${insc.userId}', '${insc.mes}', ${insc.anio}, 'Reservado'); App.viewAdminEnrollment('${c.id}');">Aceptar Reserva</button>

                                        ` : `

                                            <button class="btn btn-dark" style="font-size:10px; padding:5px 12px; background:#16a34a; border-color:#16a34a;" onclick="App.changePagoEstado('${c.id}', '${insc.userId}', '${insc.mes}', ${insc.anio}, 'Pagado'); App.viewAdminEnrollment('${c.id}');">  Confirmar Pago</button>

                                        `}

                                    </div>

                                </div>

                            `;

                        }).join('')}

                    </div>

                </div>

            ` : ''}



            <div style="margin-bottom:2rem; display:flex; justify-content:space-between; align-items:center;">

                <button class="btn btn-default" onclick="window.location.hash='/admin/cursos'">⬅️ Volver a Cursos</button>

                <div style="background:var(--color-bg); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--color-border); display:flex; gap:1rem; align-items:center;">

                    <span style="font-weight:700; font-size:13px;">Ver mes:</span>

                    <select id="admin-mes-select" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" onchange="App.setAdminCursoMes('${c.id}', this.value, document.getElementById('admin-anio-select').value)">

                        ${meses.map(m => `<option value="${m}" ${m === selectedMes ? 'selected' : ''}>${m}${m === mesActual && selectedAnio == anioActual ? ' (Actual)' : ''}</option>`).join('')}

                    </select>

                    <select id="admin-anio-select" style="padding:6px; border-radius:var(--radius-sm); border:1px solid var(--color-border);" onchange="App.setAdminCursoMes('${c.id}', document.getElementById('admin-mes-select').value, this.value)">

                        ${[2024, 2025, 2026, 2027].map(a => `<option value="${a}" ${a == selectedAnio ? 'selected' : ''}>${a}</option>`).join('')}

                    </select>

                </div>

            </div>



            <div style="background:var(--color-bg); border:1px solid var(--color-border); padding:1.5rem; border-radius:var(--radius-md); margin-bottom:2rem;">

                <h3 style="margin-bottom:1rem; color:var(--color-primary); display:flex; justify-content:space-between; align-items:center;">

                    <span>Dashboard Financiero (${selectedMes} ${selectedAnio})</span>

                    <button class="btn btn-default" style="font-size:12px; padding:4px 8px; border:none; background:var(--color-bg-alt);" onclick="document.getElementById('admin-edit-prices').style.display='block'">   Editar Precios</button>

                </h3>

                

                <div id="admin-edit-prices" style="display:none; background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border); margin-bottom:1.5rem;">

                    <div style="font-size:12px; font-weight:700; margin-bottom:0.5rem; text-transform:uppercase;">Configurar Precios del Curso</div>

                    <div style="display:flex; gap:1rem; align-items:flex-end;">

                        <div style="flex:1;">

                            <label style="font-size:11px; font-weight:600; color:var(--color-text-muted);">Precio Mensual Visible (Pblico)</label>

                            <input type="number" id="edit-precio-visible" value="${c.precio||0}" style="width:100%; padding:6px; border-radius:4px; border:1px solid var(--color-border);">

                        </div>

                        <div style="flex:1;">

                            <label style="font-size:11px; font-weight:600; color:var(--color-text-muted);">Precio Interno (Admin)</label>

                            <input type="number" id="edit-precio-interno" value="${c.precioInterno||0}" style="width:100%; padding:6px; border-radius:4px; border:1px solid var(--color-border);">

                        </div>

                        <button class="btn btn-dark" style="padding:6px 15px;" onclick="App.saveAdminCoursePrices('${c.id}')">Guardar</button>

                    </div>

                </div>



                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">

                    <div style="background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        <div style="font-size:12px; color:var(--color-text-muted); font-weight:700; text-transform:uppercase;">Ingreso Esperado</div>

                        <div style="font-size:1.5rem; font-weight:800; color:#15803d;">${formatPrice(stats ? stats.montoEsperado : 0)}</div>

                        <div style="font-size:10px; color:var(--color-text-muted); margin-top:4px;">Basado en Precio Interno: $${c.precioInterno||0}</div>

                    </div>

                    <div style="background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        <div style="font-size:12px; color:var(--color-text-muted); font-weight:700; text-transform:uppercase;">Monto Pendiente</div>

                        <div style="font-size:1.5rem; font-weight:800; color:var(--color-danger-text);">${formatPrice(stats ? stats.montoPendiente : 0)}</div>

                    </div>

                    <div style="background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        <div style="font-size:12px; color:var(--color-text-muted); font-weight:700; text-transform:uppercase;">Alumnos al da</div>

                        <div style="font-size:1.5rem; font-weight:800;">${stats ? stats.pagados : 0} / ${c.alumnos.length}</div>

                    </div>

                    <div style="background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        <div style="font-size:12px; color:var(--color-text-muted); font-weight:700; text-transform:uppercase;">Alumnos deudores</div>

                        <div style="font-size:1.5rem; font-weight:800; color:var(--color-danger-text);">${stats ? stats.sinPagar : 0}</div>

                        <div style="font-size:10px; color:var(--color-text-muted); margin-top:4px;">En proceso: ${stats ? stats.enProceso : 0}</div>

                    </div>

                </div>

            </div>



            <div style="display:grid;grid-template-columns:1fr 2fr;gap:2rem;">

                <div style="background:var(--color-bg);border:1px solid var(--color-border);padding:1.5rem;border-radius:var(--radius-md);">

                    <h3>Inscribir Alumno Manual</h3>

                    <div style="margin-top:1.5rem;">

                        <input type="email" id="new-alumno-email" placeholder="Email del usuario registrado" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:1px solid var(--color-border); margin-bottom:1rem;">

                        <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">

                            <select id="new-alumno-mes" style="flex:1; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                                ${meses.map(m => `<option value="${m}" ${m === selectedMes ? 'selected' : ''}>${m}</option>`).join('')}

                            </select>

                            <select id="new-alumno-anio" style="width:80px; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                                ${[2024, 2025, 2026, 2027].map(a => `<option value="${a}" ${a == selectedAnio ? 'selected' : ''}>${a}</option>`).join('')}

                            </select>

                            <select id="new-alumno-estado" style="flex:1; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                                <option value="Sin Pagar">PAGO PENDIENTE</option>

                                <option value="Reservado" selected>RESERVADO</option>

                                <option value="Pagado">PAGADO</option>

                            </select>

                        </div>

                        <button class="btn btn-dark" style="width:100%;" onclick="App.adminAddStudent('${c.id}')">Inscribir Alumno</button>

                    </div>

                </div>

                <div style="background:var(--color-bg);border:1px solid var(--color-border);padding:1.5rem;border-radius:var(--radius-md);">

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">

                        <h3 style="margin:0;">Alumnos Inscriptos (${c.alumnos.length}/${c.maxAlumnos})</h3>

                        <select id="admin-filtro-pago" style="padding:6px; border-radius:var(--radius-sm); font-size:12px;" onchange="App.filterAdminEnrollment(this.value)">

                            <option value="todos">Todos</option>

                            <option value="pagados">Solo Pagados</option>

                            <option value="deudores">Solo Deudores (En Proceso/Sin Pagar)</option>

                        </select>

                    </div>

                    <div style="margin-top:1.5rem;">

                        <table style="width:100%;border-collapse:collapse;" id="admin-enrollment-table">

                            <thead><tr style="text-align:left;border-bottom:1.5px solid var(--color-border);font-size:12px;color:var(--color-text-muted);text-transform:uppercase;"><th style="padding:0.75rem;">Alumno</th><th style="padding:0.75rem;">Estado Pago</th><th style="padding:0.75rem;text-align:right;">Acciones</th></tr></thead>

                            <tbody>

                                ${(() => {

                                    const isCurrentOrFuture = (selectedAnio > anioActual) || (selectedAnio == anioActual && meses.indexOf(selectedMes) >= meses.indexOf(mesActual));

                                    const inscripcionesMes = db.get('inscripciones').filter(i => i.cursoId === c.id && i.mes === selectedMes && i.anio == selectedAnio);

                                    

                                    const lista = inscripcionesMes.map(insc => ({ uid: insc.userId, estado: insc.estadoPago, insc: insc }));
                                    let htmlRows = '';
                                    if (lista.length > 0) {
                                        htmlRows += `<tr><td colspan="3" style="background:var(--color-bg-alt); padding:8px 15px; font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px;">Alumnos Inscriptos (${selectedMes})</td></tr>`;
                                        htmlRows += lista.map(item => App._renderEnrollmentRow(item, c, selectedMes, selectedAnio, mesActual, anioActual)).join('');
                                    }

                                    if (isCurrentOrFuture) {
                                        const noAnotados = c.alumnos.filter(uid => !lista.find(l => l.uid === uid));
                                        if (noAnotados.length > 0) {
                                            htmlRows += `<tr><td colspan="3" style="background:var(--color-bg-alt); padding:8px 15px; font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; border-top:2px solid var(--color-border);">Alumnos del Curso (Sin Anotar)</td></tr>`;
                                            htmlRows += noAnotados.map(uid => App._renderEnrollmentRow({ uid, estado: 'No Anotado', insc: null }, c, selectedMes, selectedAnio, mesActual, anioActual)).join('');
                                        }
                                    }

                                    return htmlRows || '<tr><td colspan="3" style="text-align:center; padding:2rem; color:var(--color-text-muted);">No hay alumnos registrados.</td></tr>';
                                })()}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>



            <!-- Profesor Encargado -->

            <div style="margin-top:2rem; padding:2rem; background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md);">

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">

                    <div>

                        <h3 style="margin:0;"> 🎓 Profesor Encargado</h3>

                        <p style="color:var(--color-text-muted); font-size:13px; margin-top:0.25rem;">Designa quién gestionará este curso y recibirá los pagos.</p>

                    </div>

                </div>

                <div style="display:flex; gap:1rem; align-items:flex-end;">

                    <div style="flex:1;">

                        <label style="display:block; font-size:11px; font-weight:800; color:var(--color-text-muted); margin-bottom:0.5rem; text-transform:uppercase;">Seleccionar Profesor</label>

                        <select id="assign-profe-select" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                            <option value="">Sin profesor asignado</option>

                            ${(() => {

                                const profes = db.get('profiles').filter(u => u.roles && u.roles.includes('profesor'));

                                return profes.map(u => {

                                    const p = db.get('profesores').find(x => x.userId === u.userId);

                                    if (!p) return '';

                                    return `<option value="${p.id}" ${c.profeId === p.id ? 'selected' : ''}>${u.nombre} (${p.especialidad || 'Sin especialidad'})</option>`;

                                }).join('');

                            })()}

                        </select>

                    </div>

                    <button class="btn btn-dark" style="padding:10px 25px;" onclick="App.assignCourseProfessor('${c.id}')">Asignar Profesor</button>

                </div>

            </div>

        `;

    },



    setAdminCursoMes(cursoId, mes, anio) {

        this._adminCursoMes = mes;

        this._adminCursoAnio = parseInt(anio);

        this.viewAdminEnrollment(cursoId);

    },



    saveAdminCoursePrices(cursoId) {

        const pv = document.getElementById('edit-precio-visible').value;

        const pi = document.getElementById('edit-precio-interno').value;

        if (db.updateCoursePrices(cursoId, pv, pi)) {

            this.showToast('  Precios actualizados');

            this.viewAdminEnrollment(cursoId);

        }

    },



    assignCourseProfessor(cursoId) {

        const professorId = document.getElementById('assign-profe-select').value;

        if (db.assignProfessorToCourse(cursoId, professorId)) {

            this.showToast('  Profesor asignado correctamente');

            this.viewAdminEnrollment(cursoId);

        }

    },



    filterAdminEnrollment(val) {

        const rows = document.querySelectorAll('.enrollment-row');

        rows.forEach(r => {

            if (val === 'todos') r.style.display = '';

            else if (val === 'pagados' && r.getAttribute('data-estado') === 'pagado') r.style.display = '';

            else if (val === 'deudores' && r.getAttribute('data-estado') === 'deudor') r.style.display = '';

            else r.style.display = 'none';

        });

    },



    showQuickAssignProfessor(cursoId) {

        const c = db.get('cursos').find(x => x.id === cursoId);

        if (!c) return;

        

        const profes = db.get('profiles').filter(u => u.roles && u.roles.includes('profesor'));

        

        let html = `

            <div style="margin-top:1rem; padding:1rem; background:var(--color-bg-alt); border:1.5px dashed var(--color-border); border-radius:var(--radius-sm);">

                <div style="font-size:11px; font-weight:800; color:var(--color-primary); margin-bottom:0.75rem; text-transform:uppercase;">Asignar Profesor Encargado</div>

                <div style="display:flex; gap:0.5rem;">

                    <select id="quick-profe-${cursoId}" style="flex:1; padding:8px; font-size:12px; border-radius:4px; border:1px solid var(--color-border);">

                        <option value="">Sin profesor asignado</option>

                        ${profes.map(u => {

                            const p = db.get('profesores').find(x => x.userId === u.userId);

                            if (!p) return '';

                            return `<option value="${p.id}" ${c.profeId === p.id ? 'selected' : ''}>${u.nombre} (${p.especialidad})</option>`;

                        }).join('')}

                    </select>

                    <button class="btn btn-dark" style="font-size:11px; padding:8px 12px;" onclick="App.doQuickAssignProfessor('${cursoId}')">Asignar</button>

                    <button class="btn btn-default" style="font-size:11px; padding:8px 12px;" onclick="App.viewAdmin(document.getElementById('main-content'), 'cursos')">Cancelar</button>

                </div>

            </div>

        `;

        

        // Find the card and inject

        const cards = document.querySelectorAll('.admin-layout .admin-main-area .admin-main > div > div'); // selector might be tricky

        // Better: search for the card containing the button

        const btn = event.target;

        const cardBody = btn.closest('div');

        const container = document.createElement('div');

        container.innerHTML = html;

        btn.parentElement.parentElement.appendChild(container);

        btn.style.display = 'none';

    },



    doQuickAssignProfessor(cursoId) {

        const select = document.getElementById(`quick-profe-${cursoId}`);

        const professorId = select.value;

        if (db.assignProfessorToCourse(cursoId, professorId)) {

            this.showToast('  Profesor asignado correctamente');

            this.viewAdmin(document.getElementById('main-content'), 'cursos');

        }

    },



    adminAddStudent(cursoId) {

        const email = document.getElementById('new-alumno-email').value;

        const mes = document.getElementById('new-alumno-mes').value;

        const anio = parseInt(document.getElementById('new-alumno-anio').value);

        const estado = document.getElementById('new-alumno-estado').value;

        const user = db.get('profiles').find(p => p.email === email);

        if (user) {

            if (db.enrollStudent(cursoId, user.userId, mes, anio)) {

                db.updatePagoEstado(cursoId, user.userId, mes, anio, estado);

                this.showToast('  Alumno inscrito correctamente con estado: ' + estado);

                this.viewAdminEnrollment(cursoId);

            } else {

                this.showToast('   El alumno ya está en el curso');

            }

        } else {

            this.showToast(' ? Usuario no encontrado. Debe registrarse primero.');

        }

    },



    viewProfessorPanel(main, section = 'alumnos') {

        const user = db.currentUser;

        if (!user) return this.navigate('/login');

        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const fechaActual = new Date();

        const mesActual = meses[fechaActual.getMonth()];

        const anioActual = fechaActual.getFullYear();



        const isAdmin = (user.rango === 'admin' || user.rango === 'owner' || (user.roles && user.roles.includes('admin')));

        let profe = db.get('profesores').find(p => p.userId === user.userId);

        if (!profe && isAdmin) {

            profe = { userId: user.userId, nombre: user.nombre, id: 'admin-view', especialidad: 'Administrador', correo: user.email, telefono: user.telefono || '' };

        }

        if (!profe) return this.navigate('/');



        const navItem = (id, icon, text) => `

            <a href="#" onclick="event.preventDefault(); App.viewProfessorPanel(document.getElementById('main-content'), '${id}')"

               style="display:flex; align-items:center; gap:0.75rem; padding:12px 1rem; border-radius:var(--radius-md); font-weight:600; font-size:14px; text-decoration:none; color:${section===id?'var(--color-primary)':'var(--color-text-muted)'}; background:${section===id?'var(--color-primary-light)':'transparent'}; transition:all 0.2s;">

                <span style="font-size:1.2rem;">${icon}</span>

                ${text}

            </a>`;



        const secHeader = (title, subtitle) => `
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:2rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border);">
                <div>
                    <h2 style="margin:0 0 0.25rem 0; font-size:1.5rem;">${translateText(title)}</h2>
                    <p style="margin:0; color:var(--color-text-muted); font-size:13px;">${translateText(subtitle)}</p>
                </div>
                ${(() => {
                    const reqs = db.getReservaSolicitudesByProfesor(profe.id).filter(s => s.estado === 'Pendiente' && s.mes === mesActual);
                    if (reqs.length === 0) return '';
                    return `
                    <div style="background:var(--color-danger-bg); border:1px solid var(--color-danger-text); padding:10px 15px; border-radius:12px; display:flex; align-items:center; gap:12px; animation: pulse-red 2s infinite;">
                        <span style="font-size:1.5rem;">\u26A0\uFE0F</span>
                        <div style="font-size:13px; color:var(--color-danger-text);">
                            <div style="font-weight:800;">PENDIENTE: ${reqs.length} solicitud(es) para ${mesActual}</div>
                            <div>Revisa tus notificaciones de alumnos.</div>
                        </div>
                    </div>`;
                })()}
            </div>`;



        let content = '';

        const misCursos = isAdmin ? db.get('cursos') : db.get('cursos').filter(c => c.profeId === profe.id);



        if (section === 'alumnos') {

            const selectedMes = this._profesorMes || mesActual;

            const selectedAnio = this._profesorAnio || anioActual;



            if (!this._managedCourseId) {

                content = this.renderSecHeader('📚 Mis Cursos', 'Selecciona un curso para administrar alumnos y horarios') + `

                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:1.5rem;">

                        ${misCursos.length === 0 ? '<p style="color:var(--color-text-muted)">No tienes cursos asignados.</p>' : misCursos.map(c => `

                            <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden; transition:transform 0.2s, box-shadow 0.2s; cursor:pointer;" onclick="App.manageCourse('${c.id}')" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">

                                <div style="height:120px; background:url('${c.banner}') center/cover;"></div>

                                <div style="padding:1.25rem;">

                                    <h3 style="margin:0; font-size:1.1rem;">${c.titulo}</h3>

                                    <div style="font-size:12px; color:var(--color-text-muted); margin:0.5rem 0;">${c.horarios}</div>

                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem;">

                                        <span style="font-size:11px; font-weight:700; color:var(--color-primary);">${c.alumnos.length} / ${c.maxAlumnos} Alumnos</span>

                                        <button class="btn btn-dark" style="font-size:11px; padding:6px 12px;">Administrar</button>

                                    </div>

                                </div>

                            </div>

                        `).join('')}

                    </div>`;

            } else {
                const c = misCursos.find(x => x.id === this._managedCourseId);
                if (!c) {
                    this._managedCourseId = null;
                    return this.viewProfessorPanel(main, 'alumnos');
                }

                // --- CALCULO DE ESTADISTICAS ---
                const allInsc = db.get('inscripciones').filter(i => i.cursoId === c.id);
                const inscMesActual = allInsc.filter(i => i.mes === mesActual && i.anio === anioActual);
                const nextMonth = meses[(fechaActual.getMonth() + 1) % 12];
                const nextAnio = fechaActual.getMonth() === 11 ? anioActual + 1 : anioActual;

                const stats = {
                    inscritosActual: inscMesActual.length,
                    reservadosTotal: allInsc.filter(i => i.estadoPago === 'Reservado').length,
                    reservadosNext: allInsc.filter(i => i.estadoPago === 'Reservado' && i.mes === nextMonth && i.anio === nextAnio).length,
                    pendientes: db.getInscritos(c.id, selectedMes, selectedAnio).filter(i => i.estadoPago === 'Pendiente' || i.estadoPago === 'Sin Pagar').length,
                    pagados: db.getInscritos(c.id, selectedMes, selectedAnio).filter(i => i.estadoPago === 'Pagado').length
                };
                stats.reservadosOtros = stats.reservadosTotal - stats.reservadosNext;

                content = `
                    <div style="margin-bottom:2rem;">
                        <button class="btn btn-default" style="font-size:12px; padding:6px 12px; margin-bottom:1rem;" onclick="App.manageCourse(null)">\u2B05\uFE0F Volver a la lista</button>
                        ${this.renderSecHeader(`\u2699\uFE0F Administrando: ${c.titulo}`, `Gestiona alumnos y horarios para el curso`)}
                    </div>

                    <!-- ESTADISTICAS RAPIDAS -->
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:2rem;">
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; gap:0.5rem; box-shadow:var(--shadow-sm);">
                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Inscriptos (${mesActual})</div>
                            <div style="font-size:1.5rem; font-weight:900; color:var(--color-primary);">${stats.inscritosActual}</div>
                        </div>
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; gap:0.5rem; box-shadow:var(--shadow-sm);">
                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Reservas Totales</div>
                            <div style="font-size:1.5rem; font-weight:900; color:#854d0e;">${stats.reservadosTotal}</div>
                            <div style="font-size:10px; color:var(--color-text-muted);">Pr\u00F3ximo mes (${nextMonth}): <strong>${stats.reservadosNext}</strong> | Otros: <strong>${stats.reservadosOtros}</strong></div>
                        </div>
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; gap:0.5rem; box-shadow:var(--shadow-sm);">
                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Pendientes (${selectedMes})</div>
                            <div style="font-size:1.5rem; font-weight:900; color:#ef4444;">${stats.pendientes}</div>
                        </div>
                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:16px; padding:1.25rem; display:flex; flex-direction:column; gap:0.5rem; box-shadow:var(--shadow-sm);">
                            <div style="font-size:11px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Pagados (${selectedMes})</div>
                            <div style="font-size:1.5rem; font-weight:900; color:#16a34a;">${stats.pagados}</div>
                        </div>
                    </div>

                    <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">
                        <h3 style="margin-bottom:1rem; font-size:1.1rem;">\uD83D\uDCC5 Horarios del Mes</h3>
                        <table style="width:100%; border-collapse:collapse; font-size:13px;">
                            <thead>
                                <tr style="border-bottom:2px solid var(--color-border); color:var(--color-text-muted);">
                                    <th style="padding:10px; text-align:left;">D\u00EDa</th>
                                    <th style="padding:10px; text-align:left;">Desde</th>
                                    <th style="padding:10px; text-align:left;">Hasta</th>
                                    <th style="padding:10px; text-align:left;">Frecuencia</th>
                                    <th style="padding:10px; text-align:right;">Acci\u00F3n</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${(c.schedule || []).map((s, idx) => `
                                    <tr style="border-bottom:1px solid var(--color-border);">
                                        <td style="padding:10px;"><strong>${s.dia}</strong></td>
                                        <td style="padding:10px;">${s.horaInicio}</td>
                                        <td style="padding:10px;">${s.horaFin}</td>
                                        <td style="padding:10px;">${s.frecuencia}</td>
                                        <td style="padding:10px; text-align:right;">
                                            <button class="btn btn-default" style="color:#ef4444; border-color:#fca5a5; padding:4px 8px; font-size:11px;" onclick="App.removeScheduleRow('${c.id}', ${idx})">\uD83D\uDDD1\uFE0F</button>
                                        </td>
                                    </tr>
                                `).join('')}
                                <tr>
                                    <td style="padding:10px;"><select id="new-sch-dia" style="padding:5px; border-radius:4px; border:1px solid var(--color-border); width:100%;"><option>Lunes</option><option>Martes</option><option>Mi\u00E9rcoles</option><option>Jueves</option><option>Viernes</option><option>S\u00E1bado</option><option>Domingo</option></select></td>
                                    <td style="padding:10px;"><input type="time" id="new-sch-inicio" style="padding:5px; border-radius:4px; border:1px solid var(--color-border); width:100%;"></td>
                                    <td style="padding:10px;"><input type="time" id="new-sch-fin" style="padding:5px; border-radius:4px; border:1px solid var(--color-border); width:100%;"></td>
                                    <td style="padding:10px;"><select id="new-sch-frec" style="padding:5px; border-radius:4px; border:1px solid var(--color-border); width:100%;"><option>1 vez por semana</option><option>2 veces por semana</option><option>3 veces por semana</option><option>Mensual</option></select></td>
                                    <td style="padding:10px; text-align:right;"><button class="btn btn-dark" style="font-size:11px; padding:6px 12px;" onclick="App.addScheduleRow('${c.id}')">\u2795 A\u00F1adir</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; box-shadow:var(--shadow-sm);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
                            <h3 style="margin:0; font-size:1.25rem;">\uD83D\uDCDD Gesti\u00F3n de Alumnos</h3>
                            <div style="display:flex; gap:1rem; align-items:center; background:var(--color-bg-alt); padding:8px 16px; border-radius:12px; border:1px solid var(--color-border);">
                                <label style="font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase;">Mes:</label>
                                <select onchange="App.setProfesorMes(this.value, ${selectedAnio})" style="padding:4px 8px; border-radius:8px; border:1px solid var(--color-border); font-size:13px; font-weight:700; background:white;">
                                    ${meses.map(m => `<option ${m===selectedMes?'selected':''}>${m}</option>`).join('')}
                                </select>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <table style="width:100%; border-collapse:collapse;">
                                <thead>
                                    <tr style="border-bottom:2px solid var(--color-border); color:var(--color-text-muted); font-size:11px; text-transform:uppercase; letter-spacing:1px;">
                                        <th style="padding:12px 1rem; text-align:left;">Alumno</th>
                                        <th style="padding:12px 1rem; text-align:left;">Contacto</th>
                                        <th style="padding:12px 1rem; text-align:center;">Estado</th>
                                        <th style="padding:12px 1rem; text-align:center;">Pago</th>
                                        <th style="padding:12px 1rem; text-align:right;">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${(() => {
                                        const inscriptions = db.getInscritos(c.id, selectedMes, selectedAnio);
                                        const enrolledUserIds = inscriptions.map(i => i.userId);
                                        const unrecordedStudents = c.alumnos.filter(uid => !enrolledUserIds.includes(uid));

                                        const renderRow = (insc, isEnrolled) => {
                                            const profile = db.get('profiles').find(p => p.userId === insc.userId);
                                            if (!profile) return '';
                                            const uid = profile.userId;
                                            const isEnRevision = insc.estadoPago === 'En Revisi\u00F3n' || insc.estadoPago === 'En Proceso';
                                            const bgSt = isEnRevision ? '#fef9c3' : (insc.estadoPago === 'Pagado' ? '#dcfce7' : (insc.estadoPago === 'Reservado' ? '#dcfce7' : '#f3f4f6'));
                                            const fgSt = isEnRevision ? '#854d0e' : (insc.estadoPago === 'Pagado' ? '#166534' : (insc.estadoPago === 'Reservado' ? '#166534' : '#4b5563'));

                                            // Buscar otros meses
                                            const otherInsc = allInsc.filter(i => i.userId === uid && (i.mes !== selectedMes || i.anio !== selectedAnio));
                                            const otherMonthsText = otherInsc.length > 0 ? `<div style="font-size:9px; color:var(--color-primary); font-weight:700; margin-top:2px;">Inscripto en: ${otherInsc.map(oi => oi.mes).join(', ')}</div>` : '';

                                            return `
                                                <tr style="border-bottom:1px solid var(--color-border);">
                                                    <td style="padding:1.25rem 1rem;">
                                                        <div style="font-weight:800; font-size:14px;">${profile.nombre}</div>
                                                        <div style="font-size:11px; color:var(--color-text-muted);">${profile.email}</div>
                                                        ${!isEnrolled ? otherMonthsText : ''}
                                                    </td>
                                                    <td style="padding:1.25rem 1rem;">
                                                        <a href="https://wa.me/${profile.telefono.replace(/\D/g,'')}" target="_blank" style="text-decoration:none; color:#16a34a; font-weight:800; font-size:11px; display:flex; align-items:center; gap:6px;">
                                                            \u2705 WhatsApp
                                                        </a>
                                                    </td>
                                                    <td style="padding:1.25rem 1rem; text-align:center;">
                                                        ${!isEnrolled ? `
                                                            <button onclick="App.reserveSlot('${c.id}', '${uid}', '${selectedMes}', ${selectedAnio})" class="btn btn-default" style="padding:6px 14px; font-size:10px; font-weight:800; border-radius:999px; background:#fef9c3; color:#854d0e; border:1px solid #854d0e40;">
                                                                \u2714 RESERVAR
                                                            </button>
                                                        ` : `
                                                            <div style="display:flex; align-items:center; justify-content:center;">
                                                                ${isEnRevision ? `
                                                                    <div style="padding:5px 12px; font-size:10px; font-weight:800; border-radius:999px; background:#fef9c3; color:#854d0e; border:1px solid #854d0e40;">\u23F3 REVISI\u00D3N</div>
                                                                ` : `
                                                                    <select onchange="App.changePagoEstado('${c.id}', '${uid}', '${selectedMes}', ${selectedAnio}, this.value); App.viewProfessorPanel(document.getElementById('main-content'), 'alumnos');" style="padding:6px 12px; font-size:11px; font-weight:800; border-radius:999px; background:${bgSt}; color:${fgSt}; border:1px solid ${fgSt}40; cursor:pointer;">
                                                                        <option value="Pendiente" ${insc.estadoPago==='Pendiente'||insc.estadoPago==='Sin Pagar'?'selected':''}>PENDIENTE</option>
                                                                        <option value="Reservado" ${insc.estadoPago==='Reservado'?'selected':''}>RESERVADO</option>
                                                                        <option value="Pagado" ${insc.estadoPago==='Pagado'?'selected':''}>PAGADO</option>
                                                                    </select>
                                                                `}
                                                            </div>
                                                        `}
                                                    </td>
                                                    <td style="padding:1.25rem 1rem; text-align:center;">
                                                        ${insc.comprobante ? `
                                                            <button class="btn btn-default" style="padding:6px 12px; font-size:11px; border-radius:8px; font-weight:700;" onclick="App.viewPaymentVerificationModal('${c.id}', '${uid}', '${selectedMes}', ${selectedAnio})">\uD83D\uDCC4 Ticket</button>
                                                        ` : '<span style="color:var(--color-text-muted); font-size:11px; opacity:0.3;">No hay</span>'}
                                                    </td>
                                                    <td style="padding:1.25rem 1rem; text-align:right;">
                                                        <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
                                                            ${isEnrolled ? `
                                                                <button class="btn btn-default" style="font-size:10px; color:#f97316; padding:6px 10px; font-weight:700;" onclick="if(confirm('\u00BFDar de baja a este alumno de este mes?')){ App.removeInscription('${c.id}', '${uid}', '${selectedMes}', ${selectedAnio}); }">Baja Mes</button>
                                                            ` : ''}
                                                            <button class="btn btn-default" style="font-size:10px; color:#ef4444; padding:6px 10px; font-weight:700;" onclick="if(confirm('\u00BFExpulsar alumno del curso permanentemente?')){ App.removeStudentFromCourse('${c.id}', '${uid}'); }">Expulsar</button>
                                                        </div>
                                                    </td>
                                                </tr>`;
                                        };

                                        let html = '';
                                        if (inscriptions.length > 0) {
                                            html += `<tr><td colspan="5" style="background:var(--color-bg-alt); padding:12px 1rem; font-size:11px; font-weight:900; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; border-bottom:1px solid var(--color-border);">Inscriptos Activos (${selectedMes})</td></tr>`;
                                            html += inscriptions.map(i => renderRow(i, true)).join('');
                                        }
                                        if (unrecordedStudents.length > 0) {
                                            html += `<tr><td colspan="5" style="background:var(--color-bg-alt); padding:12px 1rem; font-size:11px; font-weight:900; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; border-top:2px solid var(--color-border); border-bottom:1px solid var(--color-border);">Otros Alumnos del Curso (Sin Anotar)</td></tr>`;
                                            html += unrecordedStudents.map(uid => renderRow({ userId: uid, estadoPago: 'No Anotado' }, false)).join('');
                                        }
                                        return html || '<tr><td colspan="5" style="text-align:center; padding:3rem; color:var(--color-text-muted);">No hay alumnos registrados.</td></tr>';
                                    })()}
                                </tbody>
                            </table>
                        </div>

                        <div style="padding:1.5rem; background:var(--color-bg-alt); border-top:1px solid var(--color-border); margin-top:2rem; border-radius:16px;">
                            <div style="font-size:12px; font-weight:800; color:var(--color-text-muted); margin-bottom:1rem; text-transform:uppercase; letter-spacing:0.5px;">Inscribir Nuevo Alumno Manualmente</div>
                            <div style="display:flex; gap:0.75rem; align-items:center;">
                                <input type="email" id="prof-add-email-${c.id}" placeholder="Email del alumno" style="flex:2; padding:10px 14px; font-size:13px; border:1.5px solid var(--color-border); border-radius:10px; background:white;">
                                <select id="prof-add-mes-${c.id}" style="flex:1; padding:10px; font-size:13px; border:1.5px solid var(--color-border); border-radius:10px; background:white;">
                                    ${meses.map(m => `<option value="${m}" ${m === selectedMes ? 'selected' : ''}>${m}</option>`).join('')}
                                </select>

                                <select id="prof-add-estado-${c.id}" style="flex:1; padding:8px; font-size:12px; border:1px solid var(--color-border); border-radius:4px;">

                                    ${(() => {

                                        const nextMonth = meses[(fechaActual.getMonth() + 1) % 12];

                                        if (selectedMes === mesActual) {

                                            return '<option value="Pendiente">PENDIENTE</option><option value="Pagado">PAGADO</option>';

                                        } else if (selectedMes === nextMonth) {

                                            return '<option value="Reservado">RESERVADO</option>';

                                        } else {

                                            return '<option value="Pendiente">PENDIENTE</option><option value="Reservado">RESERVADO</option><option value="Pagado">PAGADO</option>';

                                        }

                                    })()}

                                </select>

                                <button class="btn btn-dark" style="font-size:11px; padding:8px 15px;" onclick="App.profesorAddStudent('${c.id}')">Inscribir</button>

                            </div>

                        </div>

                    </div>

                    <!-- SECCION REGISTRO (AL FINAL) -->
                    <div style="margin-top:4rem; padding-top:2rem; border-top:2px dashed var(--color-border);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                            <div>
                                <h3 style="margin:0; font-size:1.2rem;">\uD83D\uDCCB Registro Hist\u00F3rico del Curso</h3>
                                <p style="margin:0; font-size:12px; color:var(--color-text-muted);">Seguimiento de pagos, comprobantes y deudas pasadas.</p>
                            </div>
                            <div style="display:flex; gap:0.5rem;">
                                <input type="text" id="reg-filter-${c.id}" placeholder="Filtrar por nombre..." oninput="App.filterCourseRegister('${c.id}')" style="padding:8px 12px; border:1px solid var(--color-border); border-radius:8px; font-size:12px;">
                            </div>
                        </div>

                        <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:16px; overflow:hidden;">
                            <table style="width:100%; border-collapse:collapse; font-size:12px;" id="table-register-${c.id}">
                                <thead style="background:var(--color-bg-alt); border-bottom:1px solid var(--color-border);">
                                    <tr>
                                        <th style="padding:12px 1rem; text-align:left;">Alumno</th>
                                        <th style="padding:12px 1rem; text-align:left;">Per\u00EDodo</th>
                                        <th style="padding:12px 1rem; text-align:center;">Estado Pago</th>
                                        <th style="padding:12px 1rem; text-align:center;">Comprobante</th>
                                        <th style="padding:12px 1rem; text-align:right;">Nota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${(() => {
                                        const now = new Date();
                                        const allRows = allInsc.sort((a,b) => {
                                            if (a.anio !== b.anio) return b.anio - a.anio;
                                            return meses.indexOf(b.mes) - meses.indexOf(a.mes);
                                        });

                                        if (allRows.length === 0) return '<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--color-text-muted);">No hay registros todav\u00EDa.</td></tr>';

                                        return allRows.map(i => {
                                            const p = db.get('profiles').find(px => px.userId === i.userId);
                                            if (!p) return '';
                                            const mIdx = meses.indexOf(i.mes);
                                            const isPast = (i.anio < now.getFullYear()) || (i.anio === now.getFullYear() && mIdx < now.getMonth());
                                            const isDeudaPasada = isPast && (i.estadoPago !== 'Pagado');
                                            
                                            return `
                                                <tr class="reg-row" data-name="${p.nombre.toLowerCase()}" style="border-bottom:1px solid var(--color-border); ${isDeudaPasada ? 'background:#fff7ed;' : ''}">
                                                    <td style="padding:12px 1rem;">
                                                        <div style="font-weight:700;">${p.nombre}</div>
                                                        <div style="font-size:10px; color:var(--color-text-muted);">${p.email}</div>
                                                    </td>
                                                    <td style="padding:12px 1rem;">${i.mes} ${i.anio}</td>
                                                    <td style="padding:12px 1rem; text-align:center;">
                                                        <span style="padding:4px 8px; border-radius:6px; font-size:10px; font-weight:800; background:${i.estadoPago==='Pagado'?'#dcfce7':'#fee2e2'}; color:${i.estadoPago==='Pagado'?'#166534':'#991b1b'};">
                                                            ${i.estadoPago.toUpperCase()}
                                                        </span>
                                                    </td>
                                                    <td style="padding:12px 1rem; text-align:center;">
                                                        ${i.comprobante ? `<button class="btn btn-default" style="padding:4px 8px; font-size:10px;" onclick="App.viewPaymentVerificationModal('${c.id}', '${i.userId}', '${i.mes}', ${i.anio})">Ver</button>` : '\u2014'}
                                                    </td>
                                                    <td style="padding:12px 1rem; text-align:right;">
                                                        ${isDeudaPasada ? '<span style="color:#f97316; font-weight:800; font-size:9px;">\u26A0\uFE0F DEUDA VENCIDA</span>' : (i.estadoPago==='Pagado' ? '<span style="color:#16a34a; font-size:9px;">\u2705 Finalizado</span>' : '')}
                                                    </td>
                                                </tr>
                                            `;
                                        }).join('');
                                    })()}
                                </tbody>
                            </table>
                        </div>
                    </div>

                `;

            }

        } else if (section === 'classroom') {

            const myCourses = misCursos;

            content = this.renderSecHeader('🎓 Classroom Management', 'Sube apuntes y materiales para tus alumnos') + `

                <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">

                    <label style="display:block; font-weight:700; font-size:14px; margin-bottom:0.5rem;">Seleccionar Curso</label>

                    <select id="prof-class-selector" onchange="App.renderProfessorClassroom(this.value)" style="width:100%; padding:10px; border-radius:var(--radius-sm); border:1.5px solid var(--color-border);">

                        <option value="">Selecciona un curso...</option>

                        ${myCourses.map(c => `<option value="${c.id}">${c.titulo}</option>`).join('')}

                    </select>

                </div>

                <div id="prof-classroom-content">

                    <div style="text-align:center; padding:4rem; color:var(--color-text-muted); border:2px dashed var(--color-border); border-radius:12px;">

                        <div style="font-size:3rem; margin-bottom:1rem;">  ?</div>

                        <p>Selecciona un curso para gestionar sus materiales.</p>

                    </div>

                </div>

            `;

        } else if (section === 'pagos') {

            const bancos = ['Mercado Pago', 'Banco Nación', 'Banco Galicia', 'Santander Ro', 'BBVA', 'Ual?', 'Brubank', 'Personal Pay', 'Naranja X', 'Otro'];

            content = this.renderSecHeader('💰 Ajustes de Pago', 'Configura los datos donde los alumnos transferirán el dinero.') + `

                <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; max-width:600px;">

                    <div style="margin-bottom:1.5rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Entidad Bancaria</label>

                        <select id="profe-banco" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                            <option value="">Seleccione un banco...</option>

                            ${bancos.map(b => `<option value="${b}" ${profe.banco === b ? 'selected' : ''}>${b}</option>`).join('')}

                        </select>

                    </div>

                    <div style="margin-bottom:1.5rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Alias / CBU / CVU</label>

                        <input type="text" id="profe-alias" value="${profe.alias || ''}" placeholder="Ej: ana.profe.mp" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                    </div>

                    <div style="margin-bottom:2rem;">

                        <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Instrucciones Extra (Opcional)</label>

                        <textarea id="profe-notas" placeholder="Ej: Enviar comprobante por WhatsApp con nombre completo." rows="3" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm); resize:vertical;">${profe.notasPago || ''}</textarea>

                    </div>

                    <button class="btn btn-dark" onclick="App.saveProfessorPaymentSettings('${profe.id}')">Guardar Configuración</button>

                </div>

            `;

        }

        else if (section === 'perfil') {

            content = this.renderSecHeader('👤 Mi Perfil', 'Administra tus datos personales y profesionales') + `

                <div style="background:var(--color-bg); border:1.5px solid var(--color-border); border-radius:var(--radius-md); padding:2rem; max-width:800px;">

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">

                        <div>

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Nombre Completo</label>

                            <input type="text" id="profe-perfil-nombre" value="${profe.nombre}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                        <div>

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Correo Electrónico</label>

                            <input type="email" id="profe-perfil-correo" value="${profe.correo}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                        <div>

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Teléfono / WhatsApp</label>

                            <input type="text" id="profe-perfil-tel" value="${profe.telefono}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                        <div>

                            <label style="display:block; font-weight:700; font-size:13px; margin-bottom:0.5rem;">Especialidad</label>

                            <input type="text" id="profe-perfil-esp" value="${profe.especialidad}" style="width:100%; padding:10px; border:1px solid var(--color-border); border-radius:var(--radius-sm);">

                        </div>

                    </div>

                    

                    <div style="margin-top:2rem; padding-top:2rem; border-top:1px solid var(--color-border); display:flex; justify-content:flex-end;">

                        <button class="btn btn-dark" onclick="App.saveProfessorProfile('${profe.id}')">Actualizar Perfil</button>

                    </div>

                </div>

            `;

        }



        main.innerHTML = `

            <div class="admin-layout" style="display:grid; grid-template-columns:250px 1fr; min-height:calc(100vh - 70px);">

                <!-- Sidebar -->

                <aside class="admin-sidebar" style="background:var(--color-bg); border-right:1px solid var(--color-border); padding:2rem 1.5rem; display:flex; flex-direction:column; gap:0.5rem; position:sticky; top:70px; height:calc(100vh - 70px); overflow-y:auto;">

                    <div style="margin-bottom:1.5rem; padding:0 0.5rem;">

                        <div style="font-size:10px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem;">Panel del Profesor</div>

                        <div style="font-weight:700; font-size:1.2rem;">${profe.nombre}</div>

                    </div>

                    <div style="font-size:10px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; margin:1rem 0 0.5rem 0.5rem;">Gestión</div>

                    ${navItem('alumnos', '👥', 'Mis Alumnos')}

                    ${navItem('classroom', '🎓', 'Classroom')}

                    <div style="font-size:10px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; margin:1.5rem 0 0.5rem 0.5rem;">Ajustes</div>

                    ${navItem('pagos', '💰', 'Datos de Pago')}

                    ${navItem('perfil', '👤', 'Mi Perfil')}

                    ${isAdmin ? `

                        <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--color-border);">

                            <a href="#/admin" class="btn btn-dark" style="width:100%; font-size:12px; padding:10px;">⬅️ Volver a Admin</a>

                        </div>

                    ` : ''}

                </aside>



                <!-- Main Content -->

                <div class="admin-main" style="padding:3rem 2rem; background:var(--color-bg-alt);">

                    <div style="max-width:1200px; margin:0 auto;">

                        ${content}

                    </div>

                </div>

            </div>`;

    },



    filterCourseRegister(cursoId) {
        const query = document.getElementById(`reg-filter-${cursoId}`).value.toLowerCase();
        const rows = document.querySelectorAll(`#table-register-${cursoId} .reg-row`);
        rows.forEach(row => {
            const name = row.getAttribute('data-name');
            row.style.display = name.includes(query) ? '' : 'none';
        });
    },

    saveProfessorProfile(profeId) {

        const nombre = document.getElementById('profe-perfil-nombre').value.trim();

        const correo = document.getElementById('profe-perfil-correo').value.trim();

        const telefono = document.getElementById('profe-perfil-tel').value.trim();

        const especialidad = document.getElementById('profe-perfil-esp').value.trim();

        

        if (!nombre || !correo) return this.showToast('   Nombre y Correo son obligatorios');



        db.updateProfesorData(profeId, { nombre, correo, telefono, especialidad });

        this.showToast('✅ Perfil actualizado correctamente');

        this.viewProfessorPanel(document.getElementById('main-content'), 'perfil');

    },



    manageCourse(courseId) {

        this._managedCourseId = courseId;

        this.viewProfessorPanel(document.getElementById('main-content'), 'alumnos');

    },



    addScheduleRow(courseId) {

        const dia = document.getElementById('new-sch-dia').value;

        const inicio = document.getElementById('new-sch-inicio').value;

        const fin = document.getElementById('new-sch-fin').value;

        const frec = document.getElementById('new-sch-frec').value;



        if (!inicio || !fin) return this.showToast('   Por favor completa los horarios.');



        const c = db.get('cursos').find(x => x.id === courseId);

        if (c) {

            const sch = c.schedule || [];

            sch.push({ dia, horaInicio: inicio, horaFin: fin, frecuencia: frec });

            db.updateCourseSchedule(courseId, sch);

            this.showToast('✅ Horario añadido correctamente.');

            this.viewProfessorPanel(document.getElementById('main-content'), 'alumnos');

        }

    },



    removeScheduleRow(courseId, index) {

        const c = db.get('cursos').find(x => x.id === courseId);

        if (c && c.schedule) {

            c.schedule.splice(index, 1);

            db.updateCourseSchedule(courseId, c.schedule);

            this.showToast('🗑️ Horario eliminado.');

            this.viewProfessorPanel(document.getElementById('main-content'), 'alumnos');

        }

    },



    saveProfessorPaymentSettings(profeId) {

        const banco = document.getElementById('profe-banco').value;

        const alias = document.getElementById('profe-alias').value;

        const notas = document.getElementById('profe-notas').value;

        

        if (!banco || !alias.trim()) {

            return this.showToast('   Debes completar el Banco y el Alias.');

        }

        

        db.updateProfesorPago(profeId, banco, alias, notas);

        this.showToast('  Ajustes de pago guardados correctamente.');

    },



    setProfesorMes(mes, anio) {

        this._profesorMes = mes;

        this._profesorAnio = parseInt(anio);

        this.viewProfessorPanel(document.getElementById('main-content'));

    },



    reserveSlot(cursoId, userId, mes, anio) {
        if (db.enrollStudent(cursoId, userId, mes, anio)) {
            const insc = db.get('inscripciones').find(i => i.cursoId === cursoId && i.userId === userId && i.mes === mes && i.anio == anio);
            if (insc) {
                insc.estadoPago = 'Reservado';
                db.save();
                this.showToast(' Cupo reservado para ' + mes);
                if (window.location.hash.includes('admin')) this.viewAdminEnrollment(cursoId);
                else this.viewProfessorPanel(document.getElementById('main-content'));
            }
        }
    },

    removeStudentFromMonth(cursoId, userId, mes, anio) {
        db.removeStudentFromMonth(cursoId, userId, mes, anio);
        this.showToast('\uD83D\uDDD1\uFE0F Reserva eliminada correctamente');
        if (window.location.hash.includes('admin')) this.viewAdminEnrollment(cursoId);
        else this.viewProfessorPanel(document.getElementById('main-content'));
    },



    requestReservation(cursoId, userId, mes, anio) {

        const c = db.get('cursos').find(x => x.id === cursoId);

        const u = db.get('profiles').find(x => x.userId === userId);

        if (!c || !u) return;



        const profe = db.get('profesores').find(p => p.id === c.profeId);

        

        if (db.enrollStudent(cursoId, userId, mes, anio)) {

            const insc = db.get('inscripciones').find(i => i.cursoId === cursoId && i.userId === userId && i.mes === mes && i.anio == anio);

            if (insc) {

                insc.estadoPago = 'Solicitado';

                db.save();

                this.showToast('   Solicitud enviada correctamente');

                

                // WhatsApp

                if (profe && profe.telefono) {

                    const sg = encodeURIComponent(`Hola ${profe.nombre}! Me gustaria solicitar una reserva para "${c.titulo}" en el mes "${mes}" mi correo de usuario es: ${u.email}`);

                    window.open(`https://wa.me/${profe.telefono.replace(/\D/g,'')}?text=${sg}`, '_blank');

                }

                

                this.viewProfile(document.getElementById('main-content'));

            }

        }

    },



    changePagoEstado(cursoId, userId, mes, anio, estado) {

        db.updatePagoEstado(cursoId, userId, mes, anio, estado);

        this.showToast('  Estado de pago actualizado');

        // Do not re-render immediately if not needed, but here we probably want to update the select color

        this.viewProfessorPanel(document.getElementById('main-content'));

    },



    uploadComprobante(event, cursoId, userId, mes, anio) {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {

            db.updatePagoEstado(cursoId, userId, mes, anio, 'En Proceso', e.target.result);

            App.showToast('  Comprobante subido, estado cambiado a En Proceso');

            App.viewProfessorPanel(document.getElementById('main-content'));

        };

        reader.readAsDataURL(file);

    },



    removeStudentFromCourse(cursoId, userId) {

        if (confirm(' Seguro que deseas eliminar a este alumno del curso de forma permanente?')) {

            if (db.removeAlumno(cursoId, userId)) {

                this.showToast('  Alumno eliminado');

                const hash = window.location.hash;

                if (hash === '#/panel-profesor') this.viewProfessorPanel(document.getElementById('main-content'));

                else this.viewAdminEnrollment(cursoId);

            }

        }

    },



    removeInscription(cursoId, userId, mes, anio) {

        if (confirm(` Eliminar la reserva/inscripción de este alumno para ${mes} ${anio}?`)) {

            if (db.removeInscription(cursoId, userId, mes, anio)) {

                this.showToast('🎓 Inscripción del mes eliminada');

                const hash = window.location.hash;

                if (hash.includes('panel-profesor')) this.viewProfessorPanel(document.getElementById('main-content'));

                else this.viewAdminEnrollment(cursoId);

            }

        }

    },



    profesorAddStudent(cursoId) {

        const email = document.getElementById(`prof-add-email-${cursoId}`).value.trim();

        const mes = document.getElementById(`prof-add-mes-${cursoId}`).value;

        const estado = document.getElementById(`prof-add-estado-${cursoId}`).value;

        const anio = this._profesorAnio || new Date().getFullYear();

        

        const user = db.get('profiles').find(p => p.email === email);

        if (user) {

            if (db.enrollStudent(cursoId, user.userId, mes, anio)) {

                db.updatePagoEstado(cursoId, user.userId, mes, anio, estado);

                this.showToast('  Alumno inscrito correctamente');

                this.viewProfessorPanel(document.getElementById('main-content'));

            } else {

                this.showToast('   El alumno ya está en el curso');

            }

        } else {

            this.showToast(' ? Usuario no encontrado');

        }

    },



    updateEnrollmentStatusOptions(cursoId, selectedMes) {

        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const fechaActual = new Date();

        const mesActual = meses[fechaActual.getMonth()];

        const nextMonth = meses[(fechaActual.getMonth() + 1) % 12];

        

        const select = document.getElementById(`prof-add-estado-${cursoId}`);

        if (!select) return;

        

        let options = '';

        if (selectedMes === mesActual) {

            options = '<option value="Pendiente">PENDIENTE</option><option value="Pagado">PAGADO</option>';

        } else if (selectedMes === nextMonth) {

            options = '<option value="Reservado">RESERVADO</option>';

        } else {

            options = '<option value="Pendiente">PENDIENTE</option><option value="Reservado">RESERVADO</option><option value="Pagado">PAGADO</option>';

        }

        select.innerHTML = options;

    },



    showPaymentModal(cursoId, mes, anio) {
        const c = db.get('cursos').find(x => x.id === cursoId);
        if (!c) return;

        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const now = new Date();
        const targetMonth = mes || months[now.getMonth()];
        const targetAnio = anio || now.getFullYear();

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:9999; backdrop-filter:blur(8px);";

        modal.innerHTML = `
            <div class="modal-content" style="background:var(--color-bg); padding:2.5rem; border-radius:24px; max-width:480px; width:95%; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); text-align:center; border:1px solid var(--color-border);">
                <div style="font-size:3.5rem; margin-bottom:1rem;">\uD83D\uDCAA</div>
                <h2 style="margin-bottom:0.5rem; font-weight:900;">Informar Pago</h2>
                <p style="color:var(--color-text-muted); font-size:14px; margin-bottom:2rem;">Confirm\u00E1 tu lugar en <b>${c.titulo}</b> para <b>${targetMonth} ${targetAnio}</b> enviando el comprobante.</p>
                
                <div style="background:var(--color-bg-alt); padding:1.5rem; border-radius:16px; border:1px solid var(--color-border); text-align:left; margin-bottom:2rem;">
                    <div style="font-size:11px; font-weight:800; color:var(--color-primary); text-transform:uppercase; margin-bottom:0.75rem; letter-spacing:1px;">Datos de Cuenta</div>
                    <div style="font-size:14px; margin-bottom:0.5rem; color:var(--color-text);"><b>Banco:</b> Santander</div>
                    <div style="font-size:14px; margin-bottom:0.5rem; color:var(--color-text);"><b>Alias:</b> carin.atelier.ok</div>
                    <div style="font-size:14px; color:var(--color-text);"><b>Monto:</b> <span style="color:var(--color-primary); font-weight:800;">${formatPrice(c.precio)}</span></div>
                </div>

                <div style="margin-bottom:2rem; text-align:left;">
                    <label style="display:block; font-size:13px; font-weight:700; margin-bottom:0.75rem; color:var(--color-text);">Sube tu comprobante (Imagen):</label>
                    <input type="file" id="pay-screenshot" accept="image/*" style="width:100%; padding:10px; border:1.5px dashed var(--color-border); border-radius:8px; font-size:12px;">
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                    <button class="btn btn-default" onclick="this.closest('.modal-overlay').remove()" style="padding:12px;">Cancelar</button>
                    <button class="btn btn-primary" onclick="App.submitPaymentNotification('${cursoId}', '${targetMonth}', ${targetAnio})" style="padding:12px; font-weight:800; background:linear-gradient(to right, #db2777, #9333ea); border:none; color:white;">Enviar Aviso</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },



    async submitPaymentNotification(cursoId, mes, anio) {
        const fileInput = document.getElementById('pay-screenshot');
        if (!fileInput.files[0]) return this.showToast('   Debes subir una imagen del comprobante');

        this.showToast('\uD83D\uDE80 Subiendo aviso de pago...');
        const url = await db.uploadImage(fileInput.files[0]);
        
        if (url) {
            if (db.informPago(cursoId, db.currentUser.userId, mes, anio, url)) {
                this.showToast('\u2705 Aviso enviado. El profesor revisar\u00E1 tu pago.');
                document.querySelector('.modal-overlay').remove();
                this.viewAccount(document.getElementById('main-content'));
            } else {
                this.showToast('\u274C Error: No se encontr\u00F3 tu inscripci\u00F3n.');
            }
        } else {
            this.showToast('\u274C Error al subir comprobante');
        }
    },



    approvePayment(cursoId, userId, mes, anio) {

        if (db.approveInscription(cursoId, userId, mes, anio)) {

            this.showToast('💰 Pago aprobado correctamente');

            this.viewProfessorPanel(document.getElementById('main-content'));

        }

    },



    rejectPayment(cursoId, userId, mes, anio) {

        if (db.rejectInscription(cursoId, userId, mes, anio)) {

            this.showToast(' ? Pago rechazado. Se notific ? al alumno.');

            this.viewProfessorPanel(document.getElementById('main-content'));

        }

    },



    renderProfessorClassroom(cursoId) {

        if (!cursoId) return;

        const container = document.getElementById('prof-classroom-content');

        const materials = db.getMaterialesByCurso(cursoId);

        

        container.innerHTML = `

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">

                <h3 style="margin:0;">📁 Materiales del Curso</h3>

                <button class="btn btn-dark" onclick="App.showAddMaterialModal('${cursoId}')">➕ Subir Material</button>

            </div>

            

            <div class="classroom-grid" id="materials-sortable-list">

                ${materials.length === 0 ? `

                    <div style="grid-column:1/-1; text-align:center; padding:4rem; background:var(--color-bg-alt); border-radius:12px; border:2px dashed var(--color-border);">

                        <p style="color:var(--color-text-muted); margin:0;">No hay materiales subidos aún.  Empieza subiendo el primero!</p>

                    </div>

                ` : materials.map((m, idx) => `

                    <div class="material-card" data-id="${m.id}">

                        <div class="material-badge">${m.tipo}</div>

                        <div style="display:flex; align-items:center; gap:1rem;">

                            <div class="drag-handle" style="font-size:20px;">⠿</div>

                            <div class="material-icon">${m.tipo === 'PDF' ? '📄' : (m.tipo === 'VIDEO' ? '🎬' : '🖼️')}</div>

                            <div style="flex:1;">

                                <div style="font-weight:700; font-size:1.05rem; color:var(--color-text);">${m.titulo}</div>

                                <div style="font-size:0.8rem; color:var(--color-text-muted);">${new Date(m.fecha).toLocaleDateString()}</div>

                            </div>

                        </div>

                        <p style="font-size:0.85rem; color:var(--color-text-muted); line-height:1.5; margin:0.5rem 0;">${m.descripcion}</p>

                        <div class="material-actions">

                            <button class="btn btn-default" style="font-size:11px; flex:1; color:#ef4444;" onclick="App.deleteMaterial('${m.id}', '${cursoId}')">Eliminar</button>

                            <div style="display:flex; gap:2px;">

                                 <button class="btn btn-default" style="padding:4px 8px; font-size:11px;" onclick="App.moveMaterial('${m.id}', '${cursoId}', -1)" title="Subir">🔼</button>

                                 <button class="btn btn-default" style="padding:4px 8px; font-size:11px;" onclick="App.moveMaterial('${m.id}', '${cursoId}', 1)" title="Bajar">🔽</button>

                            </div>

                        </div>

                    </div>

                `).join('')}

            </div>

        `;

    },



    showAddMaterialModal(cursoId) {

        const modal = document.createElement('div');

        modal.className = 'modal-overlay';

        modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:2000; backdrop-filter:blur(4px);";

        modal.innerHTML = `

            <div class="modal-content" style="background:var(--color-bg); padding:2rem; border-radius:var(--radius-md); max-width:500px; width:90%; box-shadow:var(--shadow-lg);">

                <h3 style="margin-top:0;">   Subir Nuevo Material</h3>

                <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:1.5rem;">Agrega apuntes o contenido para tus alumnos.</p>

                

                <div style="margin-bottom:1.25rem;">

                    <label style="display:block; font-size:13px; font-weight:700; margin-bottom:0.5rem;">Título del material</label>

                    <input type="text" id="mat-titulo" placeholder="Ej: Apunte Clase 1" style="width:100%; padding:10px; border:1.5px solid var(--color-border); border-radius:8px;">

                </div>

                

                <div style="margin-bottom:1.25rem;">

                    <label style="display:block; font-size:13px; font-weight:700; margin-bottom:0.5rem;">Descripción corta</label>

                    <textarea id="mat-desc" rows="3" placeholder=" ¿De qué trata este archivo?..." style="width:100%; padding:10px; border:1.5px solid var(--color-border); border-radius:8px; font-family:inherit;"></textarea>

                </div>

                

                <div style="margin-bottom:1.5rem;">

                    <label style="display:block; font-size:13px; font-weight:700; margin-bottom:0.5rem;">Tipo</label>

                    <select id="mat-tipo" style="width:100%; padding:10px; border:1.5px solid var(--color-border); border-radius:8px;">

                        <option value="PDF">Documento PDF</option>

                        <option value="VIDEO">Video / Tutorial</option>

                        <option value="IMAGEN">Imagen / Molde</option>

                    </select>

                </div>



                <div style="display:flex; gap:1rem; justify-content:flex-end;">

                    <button class="btn btn-default" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>

                    <button class="btn btn-dark" onclick="App.saveNewMaterial('${cursoId}')">Subir Material</button>

                </div>

            </div>

        `;

        document.body.appendChild(modal);

    },



    saveNewMaterial(cursoId) {

        const titulo = document.getElementById('mat-titulo').value;

        const descripcion = document.getElementById('mat-desc').value;

        const tipo = document.getElementById('mat-tipo').value;

        if (!titulo) return this.showToast(' ✨ Ingresa un título');

        db.addMaterialClase(cursoId, { titulo, descripcion, tipo });

        this.showToast('✅ Material subido correctamente');

        document.querySelector('.modal-overlay').remove();

        this.renderProfessorClassroom(cursoId);

    },



    deleteMaterial(id, cursoId) {

        if (confirm(' ¿Eliminar este material?')) {

            db.deleteMaterial(id);

            this.showToast('🗑️ Material eliminado');

            this.renderProfessorClassroom(cursoId);

        }

    },



    moveMaterial(id, cursoId, direction) {

        const materials = db.getMaterialesByCurso(cursoId);

        const idx = materials.findIndex(m => m.id === id);

        if (idx === -1) return;

        const newIdx = idx + direction;

        if (newIdx < 0 || newIdx >= materials.length) return;

        const temp = materials[idx];

        materials[idx] = materials[newIdx];

        materials[newIdx] = temp;

        db.updateMaterialOrden(cursoId, materials.map(m => m.id));

        this.renderProfessorClassroom(cursoId);

    },



    handleScroll() {

        if (this.bg) {

            this.bg.canvas.style.opacity = (1 - (window.scrollY / 700)).toString();

        }

    },



    /* UI Components */

    toggleCart() {

        const overlay = document.getElementById('cart-overlay');

        overlay.classList.toggle('active');

        if (overlay.classList.contains('active')) {

            this.renderCart();

        }

    },



    addToCart(id) {

        const p = db.get('productos').find(prod => prod.id === id);

        if (p) {

            db.addToCart(p);

            this.showToast(`Agregado: ${p.nombre}`);

            this.renderLayout(); // Update badge

        }

    },



    removeFromCart(index) {

        db.removeFromCart(index);

        this.renderCart();

        this.renderLayout();

    },



    renderCart() {

        const list = document.getElementById('cart-items');

        const totalEl = document.getElementById('cart-total');

        if (!list) return;

        

        const configCarin = db.get('configCarinPlus') || { descuentoGlobal: 0 };

        const configRebajas = db.get('configRebajas') || { activa: false, porcentaje: 0 };

        const globalSaleDesc = configRebajas.activa ? configRebajas.porcentaje : 0;

        const isCarinPlus = db.currentUser && db.hasRole(db.currentUser.userId, 'carin_plus');

        const activeCoupon = this._activeCoupon || null;



        if (db.cart.length === 0) {

            list.innerHTML = '<p style="text-align:center;color:var(--color-text-muted);margin-top:2rem;">Tu carrito est vacío.</p>';

            totalEl.innerText = '$0';

            const couponArea = document.getElementById('cart-coupon-area');

            if (couponArea) couponArea.style.display = 'none';

            return;

        }



        list.innerHTML = db.cart.map((item, index) => {

            const globalDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = item.carinPlusDescuento || 0;

            const totalCarinDesc = (isCarinPlus ? globalDesc + extraDesc : 0) + globalSaleDesc;

            const price = totalCarinDesc > 0 ? Math.round(item.precio * (1 - totalCarinDesc / 100)) : item.precio;



            return `

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border);">

                <div>

                    <div style="font-weight:600;">${item.nombre}</div>

                    <div style="font-size:0.8rem; color:var(--color-primary); font-weight:700;">${formatPrice(price)}</div>

                    ${totalCarinDesc > 0 ? `<div style="font-size:0.7rem; color:var(--color-text-muted);">-${totalCarinDesc}% ${isCarinPlus ? 'Carin+' : ''} ${globalSaleDesc > 0 ? '+ Rebaja' : ''}</div>` : ''}

                </div>

                <button onclick="App.removeFromCart(${index})" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:0.8rem;">Quitar</button>

            </div>`;

        }).join('');



        // Subtotal

        let subtotal = db.cart.reduce((acc, item) => {

            const globalDesc = item.excluirCarinPlus ? 0 : (configCarin.descuentoGlobal || 0);

            const extraDesc = item.carinPlusDescuento || 0;

            const totalCarinDesc = (isCarinPlus ? globalDesc + extraDesc : 0) + globalSaleDesc;

            const price = totalCarinDesc > 0 ? Math.round(item.precio * (1 - totalCarinDesc / 100)) : item.precio;

            return acc + price;

        }, 0);



        // Apply coupon

        let couponDiscount = 0;

        let couponLabel = '';

        if (activeCoupon) {

            couponDiscount = Math.round(subtotal * (activeCoupon.porcentaje / 100));

            couponLabel = `<div style="margin-bottom:0.75rem; padding:0.5rem 0.75rem; background:#dcfce7; border-radius:var(--radius-sm); font-size:12px; color:#15803d; font-weight:700; display:flex; justify-content:space-between;">

                <span>🎟️ Cupón ${activeCoupon.codigo} (-${activeCoupon.porcentaje}%)</span>

                <span>-${formatPrice(couponDiscount)}</span>

            </div>`;

        }



        const total = subtotal - couponDiscount;



        // Coupon area

        const couponArea = document.getElementById('cart-coupon-area');

        if (couponArea) {

            couponArea.style.display = 'block';

            couponArea.innerHTML = `

                ${couponLabel}

                ${!activeCoupon ? `

                <div style="display:flex; gap:0.5rem; margin-bottom:0.75rem;">

                    <input type="text" id="cupon-input" placeholder="Código de descuento" style="flex:1; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); font-size:12px; text-transform:uppercase;">

                    <button class="btn btn-default" style="font-size:12px; padding:6px 10px;" onclick="App.aplicarCupon()">Aplicar</button>

                </div>` : `

                <div style="text-align:right; margin-bottom:0.5rem;">

                    <button style="background:none; border:none; color:#ef4444; font-size:11px; cursor:pointer;" onclick="App.quitarCupon()">  Quitar cupón</button>

                </div>`}

            `;

        }



        totalEl.innerText = formatPrice(total);

    },



    aplicarCupon() {

        const input = document.getElementById('cupon-input');

        if (!input) return;

        const codigo = input.value.trim().toUpperCase();

        const cupones = db.get('cupones') || [];

        const c = cupones.find(x => x.codigo === codigo && x.activo);

        if (c) {

            this._activeCoupon = c;

            c.usos = (c.usos || 0) + 1;

            db.save();

            this.showToast(`  Cupón ${c.codigo} aplicado (-${c.porcentaje}%)`);

            this.renderCart();

        } else {

            this.showToast(' 🎟️ Cupón inválido o vencido');

        }

    },



    quitarCupon() {

        this._activeCoupon = null;

        this.renderCart();

    },



    showToast(sg) {

        const toast = document.createElement('div');

        toast.className = 'toast';

        toast.innerText = sg;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);

        setTimeout(() => {

            toast.classList.remove('show');

            setTimeout(() => toast.remove(), 500);

        }, 3000);

    },



    /* UI Toggles & Settings */

    _toggleRegionDropdown() {

        const dd = document.getElementById('region-dropdown');

        if(dd) dd.style.display = dd.style.display === 'none' || dd.style.display === '' ? 'block' : 'none';

    },

    

    setLanguage(lang) {

        this._currentLanguage = lang;

        this.renderLayout();

        this.handleRouting(); 

        if (lang === 'en') {

            applyTranslations(document.body);

        } else {

            // When switching back to ES, we might need a full reload or re-render since nodes were mutated

            window.location.reload(); 

        }

    },

    

    setRegion(regionId) {

        this._currentRegion = regionId;

        this.renderLayout();

        this.handleRouting(); 

    },

    

    filterLogs(type) {

        const logs = db.get('logs');

        const filtered = type === 'all' ? logs : logs.filter(l => l.type === type);

        document.getElementById('logs-container').innerHTML = this.renderLogEntries(filtered);

    },



    renderLogEntries(logs) {

        if (logs.length === 0) return '<p style="text-align:center; font-size:12px; color:var(--color-text-muted); padding:1rem;">No hay registros para mostrar.</p>';

        return logs.map(l => {

            const date = new Date(l.fecha);

            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const dayStr = date.toLocaleDateString([], { day: '2-digit', month: '2-digit' });

            

            let color = '#64748b';

            if (l.type === 'pago') color = '#16a34a';

            if (l.type === 'inscripcion') color = '#2563eb';

            if (l.type === 'baja') color = '#dc2626';

            if (l.type === 'ticket') color = '#7c3aed';



            return `

                <div style="display:flex; gap:0.75rem; font-size:12px; padding:0.5rem; border-bottom:1px solid #f1f5f9; align-items:flex-start;">

                    <div style="color:var(--color-text-muted); font-family:monospace; white-space:nowrap;">[${dayStr} ${timeStr}]</div>

                    <div style="width:8px; height:8px; border-radius:50%; background:${color}; margin-top:4px; flex-shrink:0;"></div>

                    <div style="flex:1;">${l.text}</div>

                    <div style="display:flex; align-items:center; gap:0.5rem;">

                        <div style="font-size:10px; color:var(--color-text-muted); text-transform:uppercase; font-weight:700;">${l.type}</div>

                        ${l.details && Object.keys(l.details).length > 0 ? `<button onclick="App.viewLogDetails('${l.id}')" style="background:none; border:none; color:var(--color-primary); cursor:pointer; font-size:10px; padding:2px 5px; text-decoration:underline;">Detalles</button>` : ''}

                    </div>

                </div>`;

        }).join('');

    },



    confirmInscripcion(cursoId, userId, mes, anio) {

        db.updatePagoEstado(cursoId, userId, mes, anio, 'Pagado');

        this.showToast('🎓 Inscripción confirmada correctamente');

        this.viewAdmin(document.getElementById('main-content'), 'dashboard');

    },



    viewLogDetails(logId) {

        const log = db.get('logs').find(l => l.id === logId);

        if (!log) return;

        const details = log.details || {};

        const u = db.get('profiles').find(p => p.userId === log.userId);



        let modal = document.getElementById('log-details-modal');

        if (!modal) {

            modal = document.createElement('div');

            modal.id = 'log-details-modal';

            modal.style.position = 'fixed'; modal.style.top = '0'; modal.style.left = '0'; modal.style.width = '100%'; modal.style.height = '100%';

            modal.style.background = 'rgba(0,0,0,0.6)'; modal.style.zIndex = '9999';

            modal.style.display = 'flex'; modal.style.alignItems = 'center'; modal.style.justifyContent = 'center';

            document.body.appendChild(modal);

        }

        modal.style.display = 'flex';

        modal.innerHTML = `

            <div style="background:var(--color-bg); border-radius:var(--radius-md); width:90%; max-width:500px; padding:2rem; box-shadow:var(--shadow-lg); position:relative;">

                <button onclick="this.closest('#log-details-modal').style.display='none'" style="position:absolute; top:1rem; right:1rem; background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>

                <h3 style="margin-top:0; border-bottom:1px solid var(--color-border); padding-bottom:1rem; margin-bottom:1.5rem;">Detalles de la Actividad</h3>

                

                <div style="display:grid; gap:1rem; font-size:14px;">

                    <div style="display:grid; grid-template-columns:100px 1fr; border-bottom:1px solid #f1f5f9; padding-bottom:0.5rem;">

                        <span style="font-weight:700; color:var(--color-text-muted);">Acción:</span>

                        <span>${log.text}</span>

                    </div>

                    <div style="display:grid; grid-template-columns:100px 1fr; border-bottom:1px solid #f1f5f9; padding-bottom:0.5rem;">

                        <span style="font-weight:700; color:var(--color-text-muted);">Ejecutado por:</span>

                        <span>${u ? u.nombre : log.userId} (${u ? u.rango : 'N/A'})</span>

                    </div>

                    <div style="display:grid; grid-template-columns:100px 1fr; border-bottom:1px solid #f1f5f9; padding-bottom:0.5rem;">

                        <span style="font-weight:700; color:var(--color-text-muted);">Fecha:</span>

                        <span>${new Date(log.fecha).toLocaleString()}</span>

                    </div>

                    

                    <div style="margin-top:1rem; background:var(--color-bg-alt); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--color-border);">

                        <div style="font-weight:800; font-size:11px; text-transform:uppercase; color:var(--color-primary); margin-bottom:0.75rem;">Datos Técnicos del Cambio</div>

                        <div style="display:flex; flex-direction:column; gap:0.5rem;">

                            ${Object.entries(details).map(([k, v]) => `

                                <div style="display:flex; justify-content:space-between; font-family:monospace; font-size:12px;">

                                    <span style="color:#64748b;">${k}:</span>

                                    <span style="font-weight:700;">${v}</span>

                                </div>

                            `).join('')}

                        </div>

                    </div>

                </div>

                

                <button onclick="this.closest('#log-details-modal').style.display='none'" class="btn btn-dark" style="width:100%; margin-top:1.5rem;">Cerrar</button>

            </div>

        `;

    },

    renderAdminTicketsMain(tickets, users) {
        const cat = this._adminTicketCategory || 'Abiertos';
        const user = db.currentUser;
        
        let filtered = [...tickets];
        if (cat === 'Abiertos') filtered = tickets.filter(t => t.estado === 'Abierto');
        else if (cat === 'En Proceso') filtered = tickets.filter(t => t.estado === 'En curso');
        else if (cat === 'Cerrados') filtered = tickets.filter(t => t.estado === 'Cerrado');
        else if (cat === 'Mis Tickets') filtered = tickets.filter(t => t.asignadoA === user.userId && t.estado !== 'Cerrado');

        const title = this._adminSelectedTicketId ? 'Gestionar Ticket' : `Tickets: ${cat}`;
        const header = this.renderSecHeader('📋 Soporte Técnico', title, this._adminSelectedTicketId ? `<button class="btn btn-default" onclick="App.selectAdminTicket(null)">← Volver al listado</button>` : '');

        return `
            <div style="display:grid; grid-template-columns: 240px 1fr; gap: 2rem;">
                <aside>
                    ${this.renderSupportSidebar(tickets)}
                </aside>
                <div id="admin-tickets-content">
                    ${this._adminSelectedTicketId ? this.renderAdminTicketDetail(this._adminSelectedTicketId) : this.renderAdminTicketsList(filtered, users)}
                </div>
            </div>
        `;
    },

    renderSupportSidebar(tickets) {
        const user = db.currentUser;
        const counts = {
            abiertos: tickets.filter(t => t.estado === 'Abierto').length,
            en_proceso: tickets.filter(t => t.estado === 'En curso').length,
            cerrados: tickets.filter(t => t.estado === 'Cerrado').length,
            mis_tickets: tickets.filter(t => t.asignadoA === user.userId && t.estado !== 'Cerrado').length
        };

        const currentCat = this._adminTicketCategory || 'Abiertos';
        const isAct = (c) => currentCat === c ? 'active' : '';

        return `
            <div class="support-sidebar">
                <div class="support-sidebar-item ${isAct('Abiertos')}" onclick="App.setAdminTicketCategory('Abiertos')">
                    <span>🟢 Abiertos</span>
                    <span class="count">${counts.abiertos}</span>
                </div>
                <div class="support-sidebar-item ${isAct('En Proceso')}" onclick="App.setAdminTicketCategory('En Proceso')">
                    <span>🟡 En Proceso</span>
                    <span class="count">${counts.en_proceso}</span>
                </div>
                <div class="support-sidebar-item ${isAct('Cerrados')}" onclick="App.setAdminTicketCategory('Cerrados')">
                    <span>⚪ Cerrados</span>
                    <span class="count">${counts.cerrados}</span>
                </div>
                <div class="support-sidebar-item ${isAct('Mis Tickets')}" onclick="App.setAdminTicketCategory('Mis Tickets')">
                    <span>👤 Mis Tickets</span>
                    ${counts.mis_tickets > 0 ? `<span class="count red-badge">${counts.mis_tickets}</span>` : `<span class="count">${counts.mis_tickets}</span>`}
                </div>
            </div>
        `;
    },

    renderAdminTicketsList(tickets, users) {
        return `
            <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); overflow:hidden;">
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="background:var(--color-bg-alt); text-align:left; font-size:11px; text-transform:uppercase; color:var(--color-text-muted); border-bottom:1px solid var(--color-border);">
                            <th style="padding:1rem;">Ticket / Fecha</th>
                            <th style="padding:1rem;">Usuario</th>
                            <th style="padding:1rem;">Prioridad</th>
                            <th style="padding:1rem;">Asignado A</th>
                            <th style="padding:1rem; text-align:right;">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tickets.map(t => {
                            const u = users.find(x => x.userId === t.userId);
                            const tech = users.find(x => x.userId === t.asignadoA);
                            return `
                            <tr style="border-bottom:1px solid var(--color-border); font-size:13px;">
                                <td style="padding:1rem;">
                                    <div style="font-weight:800; color:var(--color-primary);">${t.asunto}</div>
                                    <div style="font-size:11px; color:var(--color-text-muted);">${new Date(t.fecha || t.id.substring(1)).toLocaleString()}</div>
                                </td>
                                <td style="padding:1rem;">
                                    <div style="font-weight:600;">${u ? u.nombre : 'Usuario'}</div>
                                    <div style="font-size:11px; opacity:0.7;">${u ? u.email : ''}</div>
                                </td>
                                <td style="padding:1rem;">
                                    <span style="padding:2px 8px; border-radius:999px; font-size:10px; font-weight:900; background:${t.prioridad==='Alta'?'#fee2e2':t.prioridad==='Media'?'#fef9c3':'#dcfce7'}; color:${t.prioridad==='Alta'?'#b91c1c':t.prioridad==='Media'?'#854d0e':'#166534'}; border:1px solid currentColor;">
                                        ${t.prioridad || 'Media'}
                                    </span>
                                </td>
                                <td style="padding:1rem;">
                                    <div style="font-size:12px; font-weight:600;">${tech ? tech.nombre : '<span style="opacity:0.5;">Sin asignar</span>'}</div>
                                </td>
                                <td style="padding:1rem; text-align:right;">
                                    <button class="btn btn-dark" style="font-size:11px; padding:6px 12px;" onclick="App.selectAdminTicket('${t.id}')">GESTIONAR</button>
                                </td>
                            </tr>`;
                        }).join('')}
                        ${tickets.length === 0 ? '<tr><td colspan="5" style="padding:3rem; text-align:center; color:var(--color-text-muted);">No hay tickets en esta categoría</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    },

    renderAdminTicketDetail(id) {
        const t = db.get('tickets').find(x => x.id === id);
        if (!t) return 'Error: Ticket no encontrado';

        const users = db.get('profiles');
        const user = users.find(x => x.userId === t.userId);
        const equipo = db.get('equipoSoporte') || [];
        const techList = equipo.map(e => {
            const p = users.find(u => u.userId === e.userId);
            return { userId: e.userId, nombre: p ? p.nombre : e.userId, cargo: e.cargo };
        });

        return `
            <div class="admin-ticket-detail-layout">
                <div class="ticket-chat-area">
                    <div style="padding:1rem; border-bottom:1px solid var(--color-border); background:var(--color-bg-alt); display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <div style="font-size:10px; font-weight:800; color:var(--color-text-muted);">TICKET #${t.id}</div>
                            <h3 style="margin:0;">${t.asunto}</h3>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-size:11px; font-weight:700;">Usuario: ${user ? user.nombre : 'Desconocido'}</div>
                            <div style="font-size:10px; color:var(--color-text-muted);">${user ? user.email : ''}</div>
                        </div>
                    </div>
                    
                    <div id="admin-chat-window" style="flex:1; padding:1.5rem; overflow-y:auto; display:flex; flex-direction:column; gap:1rem; background:var(--color-bg-alt);">
                        ${t.mensajes.map(m => {
                            if (m.esSistema) return `<div class="system-notification">${m.texto}</div>`;
                            return `
                                <div class="chat-message ${m.esEquipo ? 'me' : 'others'}">
                                    <div style="font-size:13px;">${m.texto}</div>
                                    <div style="font-size:9px; margin-top:4px; opacity:0.6; text-align:right;">${new Date(m.fecha).toLocaleTimeString()}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div style="padding:1.5rem; border-top:1px solid var(--color-border); display:flex; gap:1rem; background:var(--color-bg);">
                        <input type="text" id="admin-reply-input" placeholder="${t.asignadoA ? 'Escribe tu respuesta...' : 'Debes asignar el ticket antes de responder'}" style="flex:1; border-radius:999px; padding:10px 20px;" onkeypress="if(event.key==='Enter') App.sendAdminTicketReply('${t.id}')" ${!t.asignadoA ? 'disabled' : ''}>
                        <button class="btn btn-dark" style="border-radius:999px;" onclick="App.sendAdminTicketReply('${t.id}')" ${!t.asignadoA ? 'disabled' : ''}>Enviar</button>
                    </div>
                </div>

                <div class="ticket-actions-panel">
                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.75rem;">👤 Asignar Responsable</label>
                        <select onchange="App.assignTicketAdmin('${t.id}', this.value)" style="width:100%; padding:10px; border-radius:8px; font-weight:700;">
                            <option value="">No asignado</option>
                            ${techList.map(e => `<option value="${e.userId}" ${t.asignadoA === e.userId ? 'selected' : ''}>${e.nombre} (${e.cargo})</option>`).join('')}
                        </select>
                    </div>

                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.75rem;">⚡ Prioridad</label>
                        <select onchange="App.updateTicketPriorityAdmin('${t.id}', this.value)" style="width:100%; padding:10px; border-radius:8px; font-weight:700; color:${t.prioridad==='Alta'?'#ef4444':'inherit'}">
                            <option value="Baja" ${t.prioridad==='Baja'?'selected':''}>Baja</option>
                            <option value="Media" ${t.prioridad==='Media'?'selected':''}>Media</option>
                            <option value="Alta" ${t.prioridad==='Alta'?'selected':''}>Alta</option>
                        </select>
                    </div>

                    <div>
                        <label style="display:block; font-size:12px; font-weight:800; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:0.75rem;">🔄 Estado del Ticket</label>
                        <select onchange="App.updateTicketStatusAdmin('${t.id}', this.value)" style="width:100%; padding:10px; border-radius:8px; font-weight:700;">
                            <option value="Abierto" ${t.estado==='Abierto'?'selected':''}>Abierto</option>
                            <option value="En curso" ${t.estado==='En curso'?'selected':''}>En Proceso</option>
                            <option value="Cerrado" ${t.estado==='Cerrado'?'selected':''}>Cerrado</option>
                        </select>
                    </div>

                    <div style="margin-top:auto; padding-top:2rem;">
                        <button class="btn btn-danger" style="width:100%; padding:14px; font-weight:800;" onclick="App.updateTicketStatusAdmin('${t.id}', 'Cerrado')">Finalizar Ticket</button>
                    </div>
                </div>
            </div>
        `;
    },

    setAdminTicketCategory(cat) {
        this._adminTicketCategory = cat;
        this._adminSelectedTicketId = null;
        this.viewAdmin(document.getElementById('main-content'), 'tickets');
    },

    selectAdminTicket(id) {
        this._adminSelectedTicketId = id;
        this.viewAdmin(document.getElementById('main-content'), 'tickets');
        if (id) {
            setTimeout(() => {
                const w = document.getElementById('admin-chat-window');
                if (w) w.scrollTop = w.scrollHeight;
            }, 50);
        }
    },

    assignTicketAdmin(ticketId, userId) {
        const t = db.get('tickets').find(x => x.id === ticketId);
        if (!t) return;

        const users = db.get('profiles');
        const tech = users.find(u => u.userId === userId);
        const techName = tech ? tech.nombre : userId;

        const updateData = { asignadoA: userId };
        if (userId && t.estado === 'Abierto') updateData.estado = 'En curso';

        db.updateTicket(ticketId, updateData);

        if (userId) {
            t.mensajes.push({
                id: 'sys-' + Date.now(),
                texto: `--- SE ASIGNÓ A ${techName.toUpperCase()} -----`,
                fecha: new Date().toISOString(),
                esSistema: true
            });
            db.save();
        }
        
        this.selectAdminTicket(ticketId);
        this.showToast('Ticket asignado');
    },

    updateTicketPriorityAdmin(ticketId, priority) {
        db.updateTicket(ticketId, { prioridad: priority });
        this.selectAdminTicket(ticketId);
        this.showToast('Prioridad actualizada');
    },

    updateTicketStatusAdmin(ticketId, status) {
        db.updateTicket(ticketId, { estado: status });
        this.selectAdminTicket(ticketId);
        this.showToast('Estado actualizado');
    },

    sendAdminTicketReply(ticketId) {
        const input = document.getElementById('admin-reply-input');
        if (!input || input.value.trim() === '') return;

        const t = db.get('tickets').find(x => x.id === ticketId);
        if (!t.asignadoA) {
            this.showToast('⚠️ Debes asignar el ticket antes de responder');
            return;
        }

        t.mensajes.push({
            id: 'm' + Date.now(),
            texto: input.value.trim(),
            fecha: new Date().toISOString(),
            esEquipo: true
        });
        db.save();
        this.selectAdminTicket(ticketId);
        input.value = '';
    }

};



window.App = App;

document.addEventListener('DOMContentLoaded', () => App.init());


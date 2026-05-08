// db.js - Simulated Database for Carin Atelier

const DEFAULT_DATA = {
    profiles: [
        { userId: 'admin1', email: 'admin@carin.com', nombre: 'Carin Admin', telefono: '+5493547000000', genero: 'Femenino', rango: 'admin', roles: ['admin'], fechaRegistro: new Date().toISOString(), estadoActividad: 'Activo' },
        { userId: 'tecnico1', email: 'soporte@carin.com', nombre: 'Lucas Tecnico', telefono: '+5493547222222', genero: 'Masculino', rango: 'tecnico', roles: ['tecnico'], fechaRegistro: new Date().toISOString(), estadoActividad: 'Ausente' },
        { userId: 'tecnico2', email: 'ayuda@carin.com', nombre: 'Carla Soporte', telefono: '+5493547555555', genero: 'Femenino', rango: 'tecnico', roles: ['tecnico'], fechaRegistro: new Date().toISOString(), estadoActividad: 'Activo' },
        { userId: 'user1', email: 'cliente@gmail.com', nombre: 'Maria Lopez', telefono: '+5493547111111', genero: 'Femenino', rango: 'usuario', roles: ['usuario'], fechaRegistro: new Date().toISOString() },
        { userId: 'plus1', email: 'vip@gmail.com', nombre: 'Sofia Plus', telefono: '+5493547333333', genero: 'Femenino', rango: 'carin_plus', roles: ['carin_plus'], fechaRegistro: new Date().toISOString() },
        { userId: 'profe1', email: 'profe@carin.com', nombre: 'Ana Profe', telefono: '+5493547444444', genero: 'Femenino', rango: 'profesor', roles: ['profesor'], fechaRegistro: new Date().toISOString(), estadoActividad: 'Activo' }
    ],
    reseñas: [
        { id: 'r1', productId: '1', userId: 'user1', rating: 5, comentario: ' ¡Me encantó el molde! Muy fácil de seguir.', fecha: new Date(Date.now() - 86400000 * 2).toISOString(), purchaseDate: new Date(Date.now() - 86400000 * 3).toISOString(), tags: ['Verificado'], Reembolsado: false },
        { id: 'r2', productId: '1', userId: 'plus1', rating: 4, comentario: 'Muy buen calce, aunque me costó un poco la parte del cuello.', fecha: new Date(Date.now() - 3600000 * 3).toISOString(), purchaseDate: new Date(Date.now() - 3600000 * 6).toISOString(), tags: ['Carin+ Member'], Reembolsado: false }
    ],
    preguntas: [
        { id: 'p1', productId: '1', userId: 'user1', texto: ' ¿Viene en talle XXL?', respuesta: ' ¡Hola! Sí, este modelo incluye hasta el talle XXL.', fecha: new Date().toISOString() }
    ],
    compras: [],
    reembolsos: [], // Store refund requests
    equipoSoporte: [
        { userId: 'admin1', cargo: 'Directora Creativa' },
        { userId: 'tecnico1', cargo: 'Soporte de IT' },
        { userId: 'tecnico2', cargo: 'Atención al Cliente' }
    ],
    categorias: [
        { id: 'moldes', nombre: 'Moldes Digitales', descripcion: 'Patrones listos para imprimir', color: '#b88fa0', activa: true },
        { id: 'clases', nombre: 'Clases Presenciales', descripcion: 'Cursos en Alta Gracia', color: '#8fb8a0', activa: true },
        { id: 'accesorios', nombre: 'Accesorios', descripcion: 'Complementos de costura', color: '#8fa0b8', activa: true }
    ],
    productos: [
        {
            id: '1',
            nombre: 'Molde Blusa Drapeada',
            descCorta: 'Elegante y fresca para verano.',
            descLarga: 'Este molde digital incluye todos los talles (S al XXL) con instrucciones detalladas de confección. Ideal para telas fluidas como seda o viscosa.',
            categoriaId: 'cat_moldes',
            subcategoriaId: null,
            cat: 'Moldes Digitales',
            emoji: '👗',
            imagen: '',
            imagenes: [],
            precio: 1500,
            precioAntes: 2000,
            stock: 'Disponible',
            cantidad: 100,
            talles: ['S', 'M', 'L', 'XL', 'XXL'],
            colores: [],
            archivo: 'blusa-drapeada.pdf',
            tipoArchivo: 'PDF',
            metodoPago: 'Ambas',
            whatsapp: '5493547000000',
            msgWhatsapp: 'Hola! Me interesa el molde de la Blusa Drapeada.',
            destacado: true,
            visible: true,
            carinPlusDescuento: 15,
            tags: ['verano', 'blusa', 'digital'],
            visitas: 124,
            compras: 45,
            descargas: 40,
            clicksWhatsapp: 12
        },
        {
            id: '2',
            nombre: 'Clase de Costura Básica',
            descCorta: 'Aprende desde cero en nuestro taller.',
            descLarga: 'Curso presencial de 4 clases donde aprenderás a usar la máquina, realizar costuras básicas y terminar tu primera prenda.',
            categoriaId: 'cat_clases',
            subcategoriaId: 'cat_clases_costura',
            cat: 'Clases > Costura',
            emoji: '🧵',
            imagen: '',
            imagenes: [],
            precio: 5000,
            precioAntes: 0,
            stock: 'Disponible',
            cantidad: 8,
            talles: [],
            colores: [],
            archivo: '',
            tipoArchivo: '',
            metodoPago: 'WhatsApp',
            whatsapp: '5493547000000',
            msgWhatsapp: 'Hola! Quiero inscribirme a las clases de costura básica.',
            destacado: true,
            visible: true,
            carinPlusDescuento: 0,
            tags: ['presencial', 'curso', 'basico'],
            visitas: 89,
            compras: 12,
            descargas: 0,
            clicksWhatsapp: 25
        },
        {
            id: '3',
            nombre: 'Molde Pantalón Palazzo',
            descCorta: 'Comodidad y estilo para todo el año.',
            descLarga: 'Molde digital con instrucciones paso a paso. Talles desde XS hasta 3XL. Perfecto para telas con caída como el lino o crepe.',
            categoriaId: 'cat_moldes',
            subcategoriaId: null,
            cat: 'Moldes Digitales',
            emoji: '👖',
            imagen: '',
            imagenes: [],
            precio: 1800,
            precioAntes: 0,
            stock: 'Disponible',
            cantidad: 100,
            talles: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
            colores: [],
            archivo: 'pantalon-palazzo.pdf',
            tipoArchivo: 'PDF',
            metodoPago: 'Ambas',
            whatsapp: '5493547000000',
            msgWhatsapp: 'Hola! Me interesa el molde del Pantalón Palazzo.',
            destacado: true,
            visible: true,
            carinPlusDescuento: 15,
            tags: ['pantalón', 'palazzo', 'digital'],
            visitas: 210,
            compras: 67,
            descargas: 60,
            clicksWhatsapp: 15
        },
        {
            id: '4',
            nombre: 'Molde Vestido de Gala',
            descCorta: 'Sofisticación para eventos especiales.',
            descLarga: 'Molde digital de vestido largo con escote en V y espalda descubierta. Incluye tutorial de costura para terminaciones finas.',
            categoriaId: 'cat_moldes',
            cat: 'Moldes Digitales',
            emoji: '💃',
            precio: 2500,
            precioAntes: 3500,
            stock: 'Disponible',
            visible: true,
            destacado: true,
            carinPlusDescuento: 30,
            tags: ['fiesta', 'vestido', 'digital']
        },
        {
            id: '5',
            nombre: 'Molde Top Deportivo',
            descCorta: 'Máxima comodidad para entrenar.',
            descLarga: 'Molde de top deportivo con espalda cruzada. Ideal para telas con alta elasticidad como lycra o supplex.',
            categoriaId: 'cat_moldes',
            cat: 'Moldes Digitales',
            emoji: '🧘',
            precio: 1200,
            stock: 'Disponible',
            visible: true,
            destacado: true,
            tags: ['deporte', 'top', 'yoga']
        },
        {
            id: '6',
            nombre: 'Molde Short de Verano',
            descCorta: 'Fresco y fácil de confeccionar.',
            descLarga: 'Short con cintura elástica y bolsillos laterales. Un proyecto ideal para principiantes.',
            categoriaId: 'cat_moldes',
            cat: 'Moldes Digitales',
            emoji: '🩳',
            precio: 1100,
            stock: 'Disponible',
            visible: true,
            destacado: true,
            tags: ['verano', 'short', 'basico']
        },
        ...Array.from({ length: 30 }).map((_, i) => ({
            id: `test_${i}`,
            nombre: `Producto Test ${i + 1}`,
            descCorta: `Descripción corta para testeo de paginación ${i + 1}`,
            descLarga: `Descripción detallada del producto de prueba ${i + 1}.`,
            categoriaId: 'moldes',
            cat: 'Pruebas',
            emoji: i % 2 === 0 ? '📦' : '🛍️',
            precio: 1000 + (i * 100),
            stock: 'Disponible',
            visible: true,
            destacado: false,
            isCarinExtraOffer: i === 0
        }))
    ],
    compras: [
        { id: 'C1', userId: 'user1', productoId: '1', nombreProducto: 'Molde Blusa Drapeada', precio: 1500, fecha: '2026-05-01T14:30:00Z', estado: 'Entregado' },
        { id: 'C2', userId: 'plus1', productoId: '3', nombreProducto: 'Molde Pantalón Palazzo', precio: 900, fecha: '2026-05-03T10:15:00Z', estado: 'Entregado' }
    ],
    tickets: [
        {
            id: 'T1',
            userId: 'user1',
            asunto: 'Consulta sobre moldes',
            prioridad: 'Media',
            estado: 'Abierto',
            asignadoA: null,
            mensajes: [
                { id: 'm1', texto: 'Hola, los moldes ya vienen con margen de costura?', fecha: '2026-05-04T09:00:00Z', esEquipo: false },
                { id: 'm2', texto: 'Hola Maria! Si, todos nuestros moldes incluyen 1cm de margen.', fecha: '2026-05-04T10:30:00Z', esEquipo: true }
            ]
        },
        {
            id: 'T2',
            userId: 'plus1',
            asunto: 'Problema con la descarga',
            prioridad: 'Alta',
            estado: 'En curso',
            asignadoA: 'tecnico1',
            mensajes: [
                { id: 'm3', texto: 'No me llega el correo con el PDF.', fecha: '2026-05-05T10:00:00Z', esEquipo: false }
            ]
        }
    ],
    chatEquipo: [
        { id: 'msg1', userId: 'admin1', texto: 'Buenos días equipo, hoy lanzamos la nueva colección de moldes.', fecha: new Date(Date.now() - 3600000).toISOString() },
        { id: 'msg2', userId: 'tecnico1', texto: 'Recibido. Estaré atento a los tickets de soporte.', fecha: new Date(Date.now() - 3500000).toISOString() }
    ],
    logs: [
        { id: 'L_NEW', type: 'system', text: 'Restauración de sistema completada: Iconos y caracteres especiales corregidos.', fecha: new Date().toISOString(), userId: 'admin1' },
        { id: 'L1', type: 'system', text: 'Sistema iniciado correctamente.', fecha: new Date().toISOString(), userId: 'admin1' }
    ],
    cursos: [
        {
            id: 'C-LENCERIA',
            titulo: 'Curso de Lencería',
            profeId: 'profe1',
            maxAlumnos: 10,
            alumnos: ['user1'],
            horarios: 'Sábados 10:00 - 12:00',
            schedule: [{ dia: 'Sábado', horaInicio: '10:00', horaFin: '12:00', frecuencia: '1 vez por semana' }],
            descripcion: 'Aprende a realizar conjuntos de ropa interior a medida.',
            descripcionLarga: 'Este curso presencial mensual te guiará paso a paso en la creación de lencería a medida. Comenzaremos con los patrones básicos y avanzaremos hasta diseños más complejos. Ideal para quienes ya tienen nociones básicas de costura y quieren especializarse.',
            requisitos: ['Máquina de coser', 'Conocimientos básicos', 'Kit de costura básico'],
            incluye: ['Materiales de la primera clase', 'Apuntes impresos', 'Certificado final'],
            precio: 15000,
            precioInterno: 10000,
            subtitulo: 'Taller de Diseño y Confección',
            banner: 'https://images.unsplash.com/photo-1582142306909-195724d33ffcq=80&w=2070&auto=format&fit=crop',
            oferta: true,
            destacado: true
        }
    ],
    profesores: [
        { id: 'profe1', userId: 'profe1', nombre: 'Ana Profe', correo: 'profe@carin.com', telefono: '+5493547444444', especialidad: 'Costura y Diseño', permisos: ['marcar_pago', 'gestionar_alumnos'], banco: 'Mercado Pago', alias: 'ana.profe.mp', notasPago: 'Por favor, enviar el comprobante por WhatsApp.' }
    ],
    inscripciones: [
        { cursoId: 'C-LENCERIA', userId: 'user1', mes: 'Mayo', anio: 2026, estadoPago: 'Pagado', fechaPago: '2026-05-01', comprobante: '', historial: [] }
    ],
    textosPagina: {
        logo: '',
        sloganFooter: 'Transformando telas en sueños desde 2010.',
        direccionLocal: 'Av. Belgrano 123, Alta Gracia',
        telefonoLocal: '+54 9 3547 000000',
        tituloHero: 'Diseño y Confección con Pasión',
        subtituloHero: 'Encuentra los mejores moldes digitales y cursos presenciales en Alta Gracia.'
    },
    anuncios: [
        { id: '1', texto: ' 🎉 Nuevos moldes de invierno ya disponibles!', colorFondo: 'var(--color-primary)', activo: true }
    ],
    configInicio: {
        maxDestacados: 6,
        maxCursos: 4
    },
    configCarinPlus: {
        descuentoGlobal: 15,
        tituloBadge: 'OFERTA DEL MES'
    },
    configRebajas: {
        activa: false,
        porcentaje: 0,
        titulo: 'Rebaja Especial'
    },
    cupones: [
        { id: 'c1', codigo: 'BIENVENIDA10', porcentaje: 10, activo: true, usos: 0 }
    ],
    configCarrito: {
        tarifaServicio: 5,
        mostrarUSD: true
    },
    configCarinPlusPagina: {
        titulo: 'Descubrí Carin+',
        subtitulo: 'El plan premium para quienes aman la moda y el diseño',
        precio: 2500,
        beneficios: [
            'Descuento base del 15% en toda la tienda',
            'Ofertas exclusivas y descuentos especiales mensuales',
            'Acceso anticipado a nuevos moldes y colecciones',
            'Soporte prioritario por WhatsApp'
        ],
        ctaTexto: 'Suscribirme por WhatsApp',
        ctaUrl: 'https://wa.me/5493547000000?text=Quiero%20suscribirme%20a%20Carin%2B'
    },
    categoriasStore: [
        { id: 'cat_moldes', nombre: 'Moldes Digitales', parentId: null },
        { id: 'cat_lencería', nombre: 'Lencería', parentId: 'cat_moldes' },
        { id: 'cat_mallas', nombre: 'Trajes de Baño', parentId: 'cat_moldes' },
        { id: 'cat_ropa', nombre: 'Ropa Terminada', parentId: null },
        { id: 'cat_ropa_verano', nombre: 'Colección Verano', parentId: 'cat_ropa' },
        { id: 'cat_clases', nombre: 'Clases', parentId: null },
        { id: 'cat_clases_costura', nombre: 'Costura', parentId: 'cat_clases' },
        { id: 'cat_insumos', nombre: 'Insumos', parentId: null },
        { id: 'cat_telas', nombre: 'Telas', parentId: 'cat_insumos' }
    ],
    regiones: [
        { id: 'global', nombre: 'Global', emoji: '🌐', activa: true },
        { id: 'argentina', nombre: 'Argentina', emoji: '🇦🇷', activa: true },
        { id: 'latam', nombre: 'Latinoamérica', emoji: '🌎', activa: true }
    ],
    configCarinPlusPlanes: [
        { id: 'p1', meses: 1, precio: 2500, descuento: 0, etiqueta: '' },
        { id: 'p3', meses: 3, precio: 6500, descuento: 0, etiqueta: '' },
        { id: 'p6', meses: 6, precio: 11000, descuento: 15, etiqueta: 'Más Popular' },
        { id: 'p12', meses: 12, precio: 18000, descuento: 40, etiqueta: 'Mejor Valor' }
    ],
    horarios: {
        lunes: { activo: true, desde: '09:00', hasta: '18:00' },
        martes: { activo: true, desde: '09:00', hasta: '18:00' },
        miércoles: { activo: true, desde: '09:00', hasta: '18:00' },
        jueves: { activo: true, desde: '09:00', hasta: '18:00' },
        viernes: { activo: true, desde: '09:00', hasta: '18:00' },
        sábado: { activo: true, desde: '10:00', hasta: '13:00' },
        domingo: { activo: false, desde: '-', hasta: '-' },
        nota: 'Se requiere cita previa para visitas presenciales.'
    },
    rangoConfig: {
        admin: { c1: '#ffafbd', c2: '#ffc3a0', text: '#fff' },
        tecnico: { c1: '#2193b0', c2: '#6dd5ed', text: '#fff' },
        profesor: { c1: '#8a2be2', c2: '#da70d6', text: '#fff' },
        carin_plus: { c1: '#f83600', c2: '#f9d423', text: '#fff' },
        usuario: { c1: '#00b09b', c2: '#96c93d', text: '#fff' }
    },
    lastCheckedMonth: '',
    notificaciones: [],
    materialesClase: [
        { id: 'm1', cursoId: 'C-LENCERIA', titulo: 'Guía de materiales', descripcion: 'Lista completa para la primera clase.', archivo: '', tipo: 'PDF', fecha: new Date().toISOString(), orden: 0 }
    ],
    reservaSolicitudes: []
};

const ROLE_PRIORITY = ['owner', 'admin', 'tecnico', 'profesor', 'carin_plus', 'usuario'];

class DB {
    constructor() {
        this.supabaseUrl = "https://fdcugljuketyxkmluhgn.supabase.co";
        this.supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkY3VnbGp1a2V0eXhrbWx1aGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMTkxNjIsImV4cCI6MjA5MzY5NTE2Mn0.fu39hHKcyUF8hL5Zz6CEab3p_PzLBv1dbkL5PaHoAZ4";

        this.supabase = supabase.createClient(this.supabaseUrl, this.supabaseKey);

        this.isSynced = false;
        this.load();
        if (!this.data.profiles) this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));

        this.initAuthListener();
        this.syncWithSupabase();
    }

    initAuthListener() {
        this.supabase.auth.onAuthStateChange(async (event, session) => {
            console.log("🔑 Evento Auth:", event);
            if (session && session.user) {
                const user = session.user;
                const email = user.email;
                const userId = user.id;

                let profile = this.data.profiles.find(p => p.userId === userId || p.email === email);

                const adminEmails = ['brunodavidsmith2006@gmail.com', 'carinaandreanieto@gmail.com'];
                const isAdminEmail = adminEmails.includes(email.toLowerCase());

                if (!profile) {
                    console.log("✨ Creando nuevo perfil para usuario de Supabase...");
                    profile = {
                        userId: userId,
                        email: email,
                        nombre: '',
                        apellido: '',
                        fechaNacimiento: '',
                        onboardingCompleted: false,
                        roles: isAdminEmail ? ['admin', 'alumno'] : ['alumno'],
                        rango: isAdminEmail ? 'admin' : 'alumno',
                        foto: user.user_metadata.avatar_url || '',
                        cursos: []
                    };
                    this.data.profiles.push(profile);
                    this.save();
                } else {
                    let changed = false;
                    if (profile.userId !== userId) {
                        profile.userId = userId;
                        changed = true;
                    }
                    if (isAdminEmail && profile.rango !== 'admin') {
                        profile.roles = ['admin', 'alumno'];
                        profile.rango = 'admin';
                        changed = true;
                    }
                    if (changed) this.save();
                }

                this.currentUser = profile;
                localStorage.setItem('carin_atelier_user', JSON.stringify(profile));
            } else {
                this.currentUser = null;
                localStorage.removeItem('carin_atelier_user');
            }

            if (window.App && typeof window.App.renderLayout === 'function') {
                window.App.renderLayout();
            }
        });
    }

    async login(email, password) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) throw error;
        return data;
    }

    async signup(email, password, nombre) {
        const { data, error } = await this.supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: nombre
                }
            }
        });
        if (error) throw error;
        return data;
    }

    async loginWithGoogle() {
        const { data, error } = await this.supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin
            }
        });
        if (error) throw error;
        return data;
    }

    async logout() {
        const { error } = await this.supabase.auth.signOut();
        if (error) throw error;
        this.currentUser = null;
        localStorage.removeItem('carin_atelier_user');
        window.location.hash = '#/';
    }

    async syncWithSupabase() {
        console.log("📡 Iniciando sincronización con Supabase...");

        const { data, error } = await this.supabase
            .from('system_data')
            .select('content')
            .eq('id', 'main')
            .single();

        if (error) {
            console.error("❌ Error al cargar de Supabase:", error.message);
            if (error.code === 'PGRST116') {
                console.log("⚠️ La fila 'main' no existe. Creándola...");
                this.saveToCloud();
            }
        } else if (data && data.content) {
            console.log("✅ Datos cargados desde la nube con éxito.");
            this.data = data.content;
            this.isSynced = true;
            localStorage.setItem('carin_atelier_db', JSON.stringify(this.data));
            if (window.App && typeof window.App.renderLayout === 'function') {
                window.App.renderLayout();
            }
        } else {
            this.isSynced = true;
        }

        this.supabase
            .channel('db-changes')
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'system_data' }, (payload) => {
                if (payload.new && payload.new.id === 'main') {
                    console.log("📡 Actualización recibida de otro dispositivo.");
                    this.data = payload.new.content;
                    localStorage.setItem('carin_atelier_db', JSON.stringify(this.data));
                    if (window.App && typeof window.App.renderLayout === 'function') {
                        window.App.renderLayout();
                    }
                }
            })
            .subscribe();
    }

    async saveToCloud() {
        if (!this.isSynced) {
            console.warn("⚠️ Guardado en la nube bloqueado: Esperando sincronización inicial...");
            return;
        }

        console.log("📡 Intentando guardar en la nube...");
        const { data, error } = await this.supabase
            .from('system_data')
            .upsert({ id: 'main', content: this.data });

        if (error) {
            console.error("❌ ERROR AL GUARDAR EN LA NUBE:", error.message);
            if (window.App) window.App.showToast('❌ Error de sincronización con la nube');
        } else {
            console.log("✅ Sincronización en la nube completada.");
        }
    }

    async uploadImage(file, path = 'images') {
        if (!file) return null;

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await this.supabase.storage
            .from('images')
            .upload(filePath, file);

        if (error) {
            console.error("Upload Error:", error);
            return null;
        }

        const { data: publicUrlData } = this.supabase.storage
            .from('images')
            .getPublicUrl(filePath);

        return publicUrlData.publicUrl;
    }

    load() {
        try {
            this.currentUser = JSON.parse(localStorage.getItem('carin_atelier_user')) || null;
            this.cart = JSON.parse(localStorage.getItem('carin_atelier_cart')) || [];
        } catch (e) {
            this.currentUser = null;
            this.cart = [];
        }

        const saved = localStorage.getItem('carin_atelier_db');
        try {
            this.data = saved ? JSON.parse(saved) : DEFAULT_DATA;
        } catch (e) {
            console.error("Error parsing local storage, falling back to default data", e);
            this.data = DEFAULT_DATA;
        }

        if (!this.data.chatEquipo) this.data.chatEquipo = DEFAULT_DATA.chatEquipo;
        if (!this.data.configInicio) this.data.configInicio = DEFAULT_DATA.configInicio;
        if (!this.data.configCarinPlus) this.data.configCarinPlus = DEFAULT_DATA.configCarinPlus;
        if (!this.data.configRebajas) this.data.configRebajas = DEFAULT_DATA.configRebajas;
        if (!this.data.cupones) this.data.cupones = DEFAULT_DATA.cupones;
        if (!this.data.configCarrito) this.data.configCarrito = DEFAULT_DATA.configCarrito;
        if (!this.data.configCarinPlusPagina) this.data.configCarinPlusPagina = DEFAULT_DATA.configCarinPlusPagina;
        if (!this.data.regiones) this.data.regiones = DEFAULT_DATA.regiones;
        if (!this.data.sanciones) this.data.sanciones = [];
        if (!this.data.equipoSoporte) this.data.equipoSoporte = [];
        if (!this.data.notificaciones) this.data.notificaciones = [];
        if (!this.data.reservaSolicitudes) this.data.reservaSolicitudes = [];
        if (!this.data.cursos) this.data.cursos = DEFAULT_DATA.cursos;
        if (!this.data.profesores) this.data.profesores = DEFAULT_DATA.profesores;
        if (!this.data.inscripciones) this.data.inscripciones = DEFAULT_DATA.inscripciones;
        if (!this.data.categoriasStore) this.data.categoriasStore = DEFAULT_DATA.categoriasStore;
        if (!this.data.reseñas) this.data.reseñas = DEFAULT_DATA.reseñas || [];
        if (!this.data.preguntas) this.data.preguntas = DEFAULT_DATA.preguntas || [];
        if (!this.data.compras) this.data.compras = DEFAULT_DATA.compras || [];
        if (!this.data.reembolsos) this.data.reembolsos = DEFAULT_DATA.reembolsos || [];
        if (!this.data.logs) this.data.logs = DEFAULT_DATA.logs || [];
        if (this.data.lastCheckedMonth === undefined) this.data.lastCheckedMonth = '';
        if (!this.data.configCarinPlusPlanes) {
            this.data.configCarinPlusPlanes = DEFAULT_DATA.configCarinPlusPlanes;
        } else if (!this.data.configCarinPlusPlanes.find(p => p.id === 'p1')) {
            this.data.configCarinPlusPlanes.unshift({ id: 'p1', meses: 1, precio: 2500, descuento: 0, etiqueta: '' });
            this.save();
        }
        if (this.data.productos) {
            this.data.productos.forEach(p => { if (!p.region) p.region = 'global'; });
        }

        if (this.data.profiles) {
            DEFAULT_DATA.profiles.forEach(defProfile => {
                if (!this.data.profiles.find(p => p.email === defProfile.email)) {
                    this.data.profiles.push(defProfile);
                }
            });
        }

        if (this.data.profiles) {
            this.data.profiles.forEach(p => {
                if (!p.roles) {
                    p.roles = p.rango ? [p.rango] : ['usuario'];
                }
            });

            this.checkExpiredRoles();
            this.data.profiles.forEach(p => {
                p.rango = this.getHighestRole(p);
            });

            const masterAdmin = this.data.profiles.find(p => p.email === 'admin@carin.com');
            if (masterAdmin && !masterAdmin.roles.includes('admin')) {
                masterAdmin.roles.push('admin');
                masterAdmin.rango = this.getHighestRole(masterAdmin);
                this.save();
            }
        }
    }

    save() {
        try {
            this.checkExpiredRoles();
            if (this.data.profiles) {
                this.data.profiles.forEach(p => { p.rango = this.getHighestRole(p); });
            }

            localStorage.setItem('carin_atelier_db', JSON.stringify(this.data));
            this.saveToCloud();
            if (this.currentUser) {
                const upToDateUser = this.data.profiles.find(p => p.userId === this.currentUser.userId);
                if (upToDateUser) this.currentUser = upToDateUser;
            }
            localStorage.setItem('carin_atelier_user', JSON.stringify(this.currentUser));
            localStorage.setItem('carin_atelier_cart', JSON.stringify(this.cart));
        } catch (e) {
            console.error("Critical: Storage limit reached", e);
            if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                alert("Atención! El almacenamiento está lleno.\n\nNo se pueden guardar más cambios.");
            }
        }
    }

    addNotification(userId, texto, tipo = 'info') {
        if (!this.data.notificaciones) this.data.notificaciones = [];
        const notif = {
            id: 'N' + Date.now() + Math.floor(Math.random() * 1000),
            userId,
            texto,
            tipo,
            fecha: new Date().toISOString(),
            leida: false
        };
        this.data.notificaciones.unshift(notif);
        this.save();
        return notif;
    }

    getNotifications(userId) {
        return (this.data.notificaciones || []).filter(n => n.userId === userId);
    }

    markNotificationRead(id) {
        const n = this.data.notificaciones.find(x => x.id === id);
        if (n) {
            n.leida = true;
            this.save();
        }
    }

    markAllNotificationsRead(userId) {
        (this.data.notificaciones || []).forEach(n => {
            if (n.userId === userId) n.leida = true;
        });
        this.save();
    }

    logActivity(type, text, details = {}, userId = null) {
        const u = userId || (this.currentUser ? this.currentUser.userId : 'system');
        this.data.logs.unshift({
            id: 'L' + Date.now() + Math.floor(Math.random() * 1000),
            type,
            text,
            details,
            fecha: new Date().toISOString(),
            userId: u
        });
        if (this.data.logs.length > 500) this.data.logs = this.data.logs.slice(0, 500);
        this.save();
    }

    addReservaSolicitud(userId, cursoId, mes, locationData) {
        const solicitud = {
            id: 'RS' + Date.now(),
            userId,
            cursoId,
            mes,
            locationData,
            fecha: new Date().toISOString(),
            estado: 'Pendiente'
        };
        if (!this.data.reservaSolicitudes) this.data.reservaSolicitudes = [];
        this.data.reservaSolicitudes.unshift(solicitud);
        this.save();
        return solicitud;
    }

    getReservaSolicitudesByProfesor(profeId) {
        const misCursosIds = this.data.cursos.filter(c => c.profeId === profeId).map(c => c.id);
        return (this.data.reservaSolicitudes || []).filter(s => misCursosIds.includes(s.cursoId));
    }

    isUserUpToDate(userId) {
        const inscripciones = (this.data.inscripciones || []).filter(i => i.userId === userId);
        if (inscripciones.length === 0) return true;
        return !inscripciones.some(i => i.estadoPago === 'Sin Pagar');
    }

    get(collection) { return this.data[collection] || []; }

    updateTicketPriority(ticketId, priority) {
        const t = this.data.tickets.find(x => x.id === ticketId);
        if (t) {
            t.prioridad = priority;
            this.save();
            return true;
        }
        return false;
    }

    updateTicketSector(ticketId, sector) {
        const t = this.data.tickets.find(x => x.id === ticketId);
        if (t) {
            t.sector = sector;
            this.save();
            return true;
        }
        return false;
    }

    deleteTicket(id) {
        this.data.tickets = this.data.tickets.filter(t => t.id !== id);
        this.save();
    }

    requestSanction(userId, ticketId, reason) {
        if (!this.data.sanciones) this.data.sanciones = [];
        this.data.sanciones.push({
            id: 'S' + Date.now(),
            userId,
            ticketId,
            motivo: reason,
            solicitadoPor: this.currentUser.userId,
            fecha: new Date().toISOString(),
            estado: 'Pendiente'
        });
        this.save();
    }

    approveSanction(sanctionId) {
        const s = this.data.sanciones.find(x => x.id === sanctionId);
        if (s) {
            s.estado = 'Aprobada';
            const user = this.data.profiles.find(u => u.userId === s.userId);
            if (user) {
                user.sancionadoSoporte = true;
            }
            const t = this.data.tickets.find(x => x.id === s.ticketId);
            if (t) t.estado = 'Cerrado';

            this.save();
            return true;
        }
        return false;
    }

    rejectSanction(sanctionId) {
        const s = this.data.sanciones.find(x => x.id === sanctionId);
        if (s) {
            s.estado = 'Rechazada';
            this.save();
            return true;
        }
        return false;
    }

    updateTecnicoInfo(userId, data) {
        if (!this.data.equipoSoporte) this.data.equipoSoporte = [];
        let tech = this.data.equipoSoporte.find(x => x.userId === userId);
        if (tech) {
            Object.assign(tech, data);
        } else {
            this.data.equipoSoporte.push({ userId, ...data });
        }
        this.save();
    }

    updateTecnicoCargo(userId, cargo) {
        if (!this.data.equipoSoporte) this.data.equipoSoporte = [];
        let tech = this.data.equipoSoporte.find(x => x.userId === userId);
        if (tech) {
            tech.cargo = cargo;
        } else {
            this.data.equipoSoporte.push({ userId, cargo });
        }
        this.save();
    }

    updateTecnicoSector(userId, sector) {
        if (!this.data.equipoSoporte) this.data.equipoSoporte = [];
        let tech = this.data.equipoSoporte.find(x => x.userId === userId);
        if (tech) {
            tech.sector = sector;
        } else {
            this.data.equipoSoporte.push({ userId, sector });
        }
        this.save();
    }

    getTecnicoSector(userId) {
        if (!this.data.equipoSoporte) return 'General';
        const tech = this.data.equipoSoporte.find(x => x.userId === userId);
        return tech ? tech.sector : 'General';
    }

    isUserSanctioned(userId) {
        const user = this.data.profiles.find(u => u.userId === userId);
        return user ? !!user.sancionadoSoporte : false;
    }

    saveCourseOrder(newOrder) {
        // Implementation for course reordering
    }

    hasRole(userId, role) {
        const user = this.data.profiles.find(p => p.userId === userId);
        if (!user || !user.roles) return false;
        if (role === 'carin_plus') return this.isCarinPlusActive(user);
        return user.roles.includes(role);
    }

    hasAnyRole(userId, roles) {
        const user = this.data.profiles.find(p => p.userId === userId);
        if (!user || !user.roles) return false;
        return roles.some(r => {
            if (r === 'carin_plus') return this.isCarinPlusActive(user);
            return user.roles.includes(r);
        });
    }

    checkExpiredRoles() {
        if (!this.data.profiles) return;
        this.data.profiles.forEach(user => {
            if (user.roles && user.roles.includes('carin_plus') && user.carinPlusExpiry) {
                if (new Date(user.carinPlusExpiry) <= new Date()) {
                    user.roles = user.roles.filter(r => r !== 'carin_plus');
                }
            }
        });
    }

    isCarinPlusActive(user) {
        if (!user || !user.roles || !user.roles.includes('carin_plus')) return false;
        if (!user.carinPlusExpiry) return true;
        return new Date(user.carinPlusExpiry) > new Date();
    }

    getHighestRole(user) {
        if (!user || !user.roles || user.roles.length === 0) return 'usuario';
        const effectiveRoles = user.roles.filter(r => {
            if (r === 'carin_plus') return this.isCarinPlusActive(user);
            return true;
        });
        for (const role of ROLE_PRIORITY) {
            if (effectiveRoles.includes(role)) return role;
        }
        return 'usuario';
    }

    toggleUserRole(userId, role) {
        const user = this.data.profiles.find(u => u.userId === userId);
        if (!user) return;
        if (!user.roles) user.roles = [user.rango || 'usuario'];
        if (user.roles.includes(role)) {
            user.roles = user.roles.filter(r => r !== role);
            if (user.roles.length === 0) user.roles = ['usuario'];
        } else {
            user.roles.push(role);
        }
        user.rango = this.getHighestRole(user);
        if (role === 'profesor') {
            const hasProfeRole = user.roles.includes('profesor');
            const existingProfe = this.data.profesores.find(p => p.userId === userId);
            if (hasProfeRole && !existingProfe) {
                this.addProfesor({
                    userId: user.userId,
                    nombre: user.nombre,
                    correo: user.email,
                    telefono: user.telefono || '',
                    especialidad: 'Nueva Especialidad',
                    permisos: ['marcar_pago', 'gestionar_alumnos'],
                    banco: '',
                    alias: '',
                    notasPago: ''
                });
            }
        }
        this.logActivity('system', `Roles de ${user.nombre} actualizados: [${user.roles.join(', ')}]`, { userId, roles: user.roles });
        this.save();
    }

    updateUserProfile(userId, data) {
        const user = this.data.profiles.find(p => p.userId === userId);
        if (!user) return false;
        if (data.nombre) user.nombre = data.nombre;
        if (data.email) user.email = data.email;
        if (data.telefono !== undefined) user.telefono = data.telefono;
        if (data.roles) {
            user.roles = data.roles;
            user.rango = this.getHighestRole(user);
        }
        this.logActivity('system', `Perfil de ${user.nombre} actualizado por admin`, { userId, data });
        this.save();
        return true;
    }

    setCarinPlusTemporal(userId, seconds) {
        const user = this.data.profiles.find(p => p.userId === userId);
        if (!user) return false;
        if (!user.roles.includes('carin_plus')) {
            user.roles.push('carin_plus');
        }
        const now = new Date();
        const expiry = new Date(now.getTime() + seconds * 1000);
        user.carinPlusExpiry = expiry.toISOString();
        user.rango = this.getHighestRole(user);
        this.logActivity('system', `Carin+ Temporal activado para ${user.nombre}`, { userId, seconds });
        this.save();
        return true;
    }

    login(email, pass) {
        const user = this.data.profiles.find(p => p.email === email);
        if (user) {
            this.currentUser = user;
            if (['admin', 'tecnico'].includes(user.rango)) {
                user.estadoActividad = 'Activo';
            }
            this.save();
            return true;
        }
        return false;
    }

    logout() {
        if (this.currentUser && ['admin', 'tecnico'].includes(this.currentUser.rango)) {
            const user = this.data.profiles.find(p => p.userId === this.currentUser.userId);
            if (user) user.estadoActividad = 'Ausente';
        }
        this.currentUser = null;
        this.save();
    }

    addToCart(product) {
        this.cart.push(product);
        this.save();
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.save();
    }

    clearCart() {
        this.cart = [];
        this.save();
    }

    getStats() {
        const totalVentas = this.data.compras.reduce((acc, c) => acc + c.precio, 0);
        const totalClientes = this.data.profiles.length;
        const totalAlumnos = this.data.cursos.reduce((acc, c) => acc + c.alumnos.length, 0);
        const ticketsAbiertos = this.data.tickets.filter(t => t.estado === 'Abierto').length;
        return { totalVentas, totalClientes, totalAlumnos, ticketsAbiertos };
    }

    toggleProductVisible(id) {
        const p = this.data.productos.find(x => x.id === id);
        if (p) p.visible = !p.visible;
        this.save();
    }

    toggleProductDestacado(id) {
        const p = this.data.productos.find(x => x.id === id);
        if (p) p.destacado = !p.destacado;
        this.save();
    }

    addProduct(productData) {
        const id = (this.data.productos.length + 1).toString();
        this.data.productos.push({ id, ...productData, visible: true, carinPlusDescuento: productData.carinPlusDescuento || 0 });
        this.save();
    }

    addCategoria(nombre, parentId = null) {
        const id = 'cat_' + Date.now();
        this.data.categoriasStore.push({ id, nombre, parentId });
        this.save();
        return id;
    }

    deleteCategoria(id) {
        this.data.categoriasStore = this.data.categoriasStore.filter(c => c.id !== id && c.parentId !== id);
        this.data.productos.forEach(p => {
            if (p.categoriaId === id || p.subcategoriaId === id) {
                p.categoriaId = null;
                p.subcategoriaId = null;
            }
        });
        this.save();
    }

    getInscritos(cursoId, mes, anio) {
        return this.data.inscripciones.filter(i => i.cursoId === cursoId && i.mes === mes && i.anio == anio);
    }

    enrollStudent(cursoId, userId, mes = null, anio = null) {
        const curso = this.data.cursos.find(c => c.id === cursoId);
        if (!curso) return false;
        if (!curso.alumnos.includes(userId)) {
            if (curso.alumnos.length >= curso.maxAlumnos) return false;
            curso.alumnos.push(userId);
        }
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const fechaActual = new Date();
        const mesActual = mes || meses[fechaActual.getMonth()];
        const anioActual = anio || fechaActual.getFullYear();
        let insc = this.data.inscripciones.find(i => i.cursoId === cursoId && i.userId === userId && i.mes === mesActual && i.anio == anioActual);
        if (!insc) {
            this.data.inscripciones.push({
                id: 'insc_' + Date.now(),
                cursoId,
                userId,
                mes: mesActual,
                anio: parseInt(anioActual),
                estadoPago: 'Sin Pagar',
                fechaPago: null,
                comprobante: '',
                historial: []
            });
        }
        this.save();
        return true;
    }

    updateCoursePrices(cursoId, precioVisible, precioInterno) {
        const curso = this.data.cursos.find(c => c.id === cursoId);
        if (curso) {
            curso.precio = parseInt(precioVisible) || 0;
            curso.precioInterno = parseInt(precioInterno) || 0;
            this.save();
            return true;
        }
        return false;
    }

    updatePagoEstado(cursoId, userId, mes, anio, estado, comprobanteBase64 = null) {
        let insc = this.data.inscripciones.find(i => i.cursoId === cursoId && i.userId === userId && i.mes === mes && i.anio == anio);
        if (!insc) return;
        insc.estadoPago = estado;
        if (comprobanteBase64) insc.comprobante = comprobanteBase64;
        this.save();
    }

    removeAlumno(cursoId, userId) {
        const curso = this.data.cursos.find(c => c.id === cursoId);
        if (curso) {
            curso.alumnos = curso.alumnos.filter(id => id !== userId);
            this.data.inscripciones = this.data.inscripciones.filter(i => !(i.cursoId === cursoId && i.userId === userId));
            this.save();
            return true;
        }
        return false;
    }

    checkMonthTransition() {
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const fechaActual = new Date();
        const mesActual = meses[fechaActual.getMonth()];
        const anioActual = fechaActual.getFullYear();
        const key = `${mesActual}-${anioActual}`;
        if (this.data.lastCheckedMonth !== key) {
            this.data.lastCheckedMonth = key;
            this.save();
        }
    }

    getPagoStats(cursoId, mes, anio) {
        const curso = this.data.cursos.find(c => c.id === cursoId);
        if (!curso) return null;
        const inscripcionesMes = this.data.inscripciones.filter(i => i.cursoId === cursoId && i.mes === mes && i.anio === anio);
        return {
            totalAlumnos: inscripcionesMes.length,
            pagados: inscripcionesMes.filter(i => i.estadoPago === 'Pagado').length,
            montoEsperado: inscripcionesMes.length * (curso.precioInterno || 0)
        };
    }

    addTicketReply(ticketId, texto, esEquipo) {
        const t = this.data.tickets.find(x => x.id === ticketId);
        if (t) {
            t.mensajes.push({ id: Date.now().toString(), texto, fecha: new Date().toISOString(), esEquipo });
            if (esEquipo && t.estado === 'Abierto') t.estado = 'En curso';
            this.save();
        }
    }

    changeTicketState(id, state) {
        const t = this.data.tickets.find(x => x.id === id);
        if (t) t.estado = state;
        this.save();
    }

    sendTeamMessage(texto) {
        if (!this.currentUser) return;
        this.data.chatEquipo.push({
            id: 'msg' + Date.now(),
            userId: this.currentUser.userId,
            texto,
            fecha: new Date().toISOString()
        });
        this.save();
    }

    addCurso(cursoData) {
        if (!cursoData.id) cursoData.id = 'C-' + Date.now();
        this.data.cursos.push(cursoData);
        this.save();
    }

    deleteCurso(id) {
        this.data.cursos = this.data.cursos.filter(c => c.id !== id);
        this.data.inscripciones = this.data.inscripciones.filter(i => i.cursoId !== id);
        this.save();
    }

    addProfesor(data) {
        const id = 'PROFE-' + Date.now();
        this.data.profesores.push({ id, ...data });
        this.save();
    }

    updateProfesorData(profeId, data) {
        const profe = this.data.profesores.find(p => p.id === profeId);
        if (profe) {
            Object.assign(profe, data);
            this.save();
        }
    }

    assignProfessorToCourse(courseId, professorId) {
        const c = this.data.cursos.find(x => x.id === courseId);
        if (c) {
            c.profeId = professorId;
            this.save();
            return true;
        }
        return false;
    }

    deleteProfesor(id) {
        this.data.profesores = this.data.profesores.filter(p => p.id !== id);
        this.save();
    }

    getMaterialesByCurso(cursoId) {
        return (this.data.materialesClase || []).filter(m => m.cursoId === cursoId).sort((a, b) => a.orden - b.orden);
    }

    addMaterialClase(cursoId, material) {
        if (!this.data.materialesClase) this.data.materialesClase = [];
        const newMaterial = {
            id: 'M-' + Date.now(),
            cursoId,
            ...material,
            fecha: new Date().toISOString(),
            orden: this.data.materialesClase.filter(m => m.cursoId === cursoId).length
        };
        this.data.materialesClase.push(newMaterial);
        this.save();
        return newMaterial;
    }

    deleteMaterial(id) {
        if (!this.data.materialesClase) return;
        this.data.materialesClase = this.data.materialesClase.filter(m => m.id !== id);
        this.save();
    }

    updateTicket(id, data) {
        const t = this.data.tickets.find(x => x.id === id);
        if (t) {
            Object.assign(t, data);
            this.save();
            return true;
        }
        return false;
    }
}

const db = new DB();
window.db = db;

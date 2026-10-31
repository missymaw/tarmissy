(function () {
  "use strict";

  const telefonoWhatsApp = "525648734291";

  function enlaceWhatsApp(servicio) {
    const mensaje = servicio === "Mawddi"
      ? "Hola, Missy. Vi tu tarjeta digital y me gustaría conocer los servicios de Mawddi. ¿Me orientas, por favor?"
      : `Hola, Missy. Me interesa el servicio "${servicio}". ¿Podemos revisar lo que necesito y el alcance?`;

    return `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }

  window.TARJETA_CONFIG = {
    templateFile: "finstey.js",

    // CONFIGURACIÓN CENTRAL DE RECURSOS VISUALES.
    // Cambia las rutas aquí; usa rutas relativas desde index.html.
    // Puedes usar JPG, PNG, WEBP, AVIF o SVG. Para fotografías, WEBP/JPG.
    media: {
      images: {
        avatar: "assets/imagenes/missy01.jpg",
        cover: "",
        logo: "",
        featured: "",
        background: "",
        // Agrega recursos con claves propias:
        // servicioWeb: "assets/imagenes/servicio-web.webp"
      },
      // Ajustes comunes para imágenes de contenido.
      imageFit: "cover", // cover | contain
      imagePosition: "center"
    },

    // VISTA PREVIA INTERNA REUTILIZABLE.
    // Los enlaces web externos se abren dentro de la misma página cuando
    // el sitio de destino permite iframe. Si lo bloquea, se ofrece abrir fuera.
    preview: {
      enabled: true,
      interceptExternalLinks: true,
      autoHideMenuOnNavigate: true,
      autoHideDelayMs: 450,
      menuLabel: "Navegación",
      homeLabel: "Volver a la tarjeta",
      externalLabel: "Abrir fuera",
      showAddress: false,
      height: "54px",
      // Dominios que siempre deben abrir fuera (WhatsApp, pagos, etc.).
      openOutside: ["wa.me", "api.whatsapp.com", "chat.whatsapp.com"]
    },

    // CONTROL GLOBAL DE PRESENTACIÓN. Las plantillas mantienen su identidad,
    // pero estos límites evitan paneles estrechos y tamaños exagerados.
    layout: {
      pageMax: "100%",
      pagePadding: "clamp(10px, 1.5vw, 22px)",
      sectionGap: "12px",
      cardGap: "10px",
      contentColumns: "auto-fit",
      minCardWidth: "min(100%, 250px)",
      compactCards: true
    },

    meta: {
      title: "Missy Mei Madrid Wuotto · Mawddi",
      description: "Soluciones digitales, técnicas y publicitarias para negocios, profesionales y emprendedores.",
      themeColor: "#087a3d",
      keywords: "Missy, Mawddi, desarrollo web, tarjetas digitales, soluciones digitales",
      canonicalUrl: "",
      ogImage: "assets/imagenes/missy01.jpg",
      robots: "index,follow",
      favicon: "favicon.svg"
    },

    profile: {
      name: "Missy Mei Madrid Wuotto",
      role: "Desarrolladora indie",
      tagline: "Soluciones digitales prácticas para negocios reales",
      eyebrow: "Mawddi",
      bio: "Mawddi reúne soluciones digitales, técnicas y publicitarias para negocios. El alcance de cada proyecto se define según las necesidades del cliente.",
      avatarImage: "",
      coverImage: "",
      logoImage: "",
      location: "Tepetlapa esq. con Palmira, Coyoacán, 04919 CDMX",
      status: "",
      verified: false,
      badges: [
        "Desarrollo de software",
        "Redes y telecomunicaciones",
        "Integración de sistemas"
      ]
    },

    theme: {
      // Vacío = conserva la paleta original y contrastada de cada plantilla.
      // Para personalizar, agrega solo las claves que quieras sobrescribir:
      // background, surface, surface2, text, muted, primary, secondary, accent, border, glow.
      colors: {},
      fontHeading: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      fontBody: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      radius: "18px",
      pageMax: "100%",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundOverlay: 0.18,
      pagePadding: "clamp(10px, 1.5vw, 22px)",
      animations: true,
      customCss: ""
    },

    visibility: {
      avatar: true,
      logo: false,
      cover: false,
      bio: true,
      badges: true,
      location: true,
      status: false,
      verified: false,
      actions: true,
      socialLinks: true,
      footer: true,

      sections: {
        stats: false,
        featured: true,
        services: true,
        portfolio: false,
        gallery: false,
        videos: false,
        live: false,
        schedule: false,
        pricing: false,
        testimonials: false,
        faq: true,
        contact: true,
        map: false,
        newsletter: false,
        resume: false,
        events: false,
        products: false,
        sponsors: false,
        awards: false,
        experience: false,
        education: false,
        skills: false,
        certifications: false,
        publications: false,
        resources: false,
        links: false,
        customSections: false
      }
    },

    actions: [
      {
        label: "Contactar por WhatsApp",
        href: enlaceWhatsApp("Mawddi"),
        style: "primary",
        icon: "✉"
      }
    ],

    socialLinks: [
      {
        label: "Sitio web",
        href: "https://missy.mawddi.com/",
        icon: "↗"
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@missychangamer",
        icon: "◎"
      },
      {
        label: "Red de Negocios Tepetlapa",
        href: "https://tepetlapa.com/",
        icon: "⌂"
      }
    ],

    sectionTitles: {
      featured: "Soluciones para tu negocio",
      services: "Servicios",
      faq: "Preguntas frecuentes",
      contact: "Contacto"
    },

    sectionDescriptions: {
      featured: "Soluciones digitales, técnicas y publicitarias en un solo lugar.",
      services: "Consulta cada servicio directamente por WhatsApp.",
      faq: "Información para solicitar y definir tu proyecto.",
      contact: "Cuéntame qué necesitas y revisamos el alcance."
    },

    sectionsOrder: [
      "featured",
      "services",
      "faq",
      "contact"
    ],

    content: {
      stats: [],

      featured: {
        title: "Tu negocio, en un solo lugar",
        eyebrow: "Mawddi",
        description: "Servicios digitales, técnicos y publicitarios para negocios, profesionales y emprendedores. Puedes consultar un servicio individual o solicitar una combinación a tu medida.",
        image: "",
        href: enlaceWhatsApp("Mawddi"),
        buttonLabel: "Consultar por WhatsApp",
        meta: ""
      },

      services: [
        {
          title: "Red de negocios y aplicación móvil",
          description: "Presencia en la red de negocios, directorio por categoría y ubicación, difusión de productos y servicios, promociones y contacto con clientes. Las funciones disponibles dependen de la modalidad.",
          tags: ["Negocios", "Difusión", "Aplicación"],
          href: enlaceWhatsApp("Red de negocios y aplicación móvil"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Diseño y desarrollo web",
          description: "Sitios web, páginas informativas y landing pages adaptables a móviles y computadoras. Secciones, imágenes, catálogos, formularios, botones de contacto, rediseños e integraciones.",
          tags: ["Páginas web", "Desarrollo", "Integraciones"],
          href: enlaceWhatsApp("Diseño y desarrollo web"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Tarjetas digitales, QR y catálogos",
          description: "Tarjetas digitales con formas de contacto, códigos QR, catálogos de servicios o productos, menús y fichas con fotografías e información comercial.",
          tags: ["Tarjetas digitales", "QR", "Catálogos"],
          href: enlaceWhatsApp("Tarjetas digitales, QR y catálogos"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Publicidad en lonas, vinil y vidrios",
          description: "Diseño e impresión publicitaria para lonas, pendones, banners, vinil, vidrios, aparadores, fachadas y señalética, según las especificaciones del proyecto.",
          tags: ["Impresión", "Vinil", "Publicidad"],
          href: enlaceWhatsApp("Publicidad en lonas, vinil y vidrios"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Tarjetas, volantes y papelería",
          description: "Diseño de tarjetas de presentación, volantes, dípticos, trípticos, folletos, notas, recetas, hojas membretadas, etiquetas, stickers y material impreso.",
          tags: ["Diseño gráfico", "Papelería", "Impresión"],
          href: enlaceWhatsApp("Tarjetas, volantes y papelería"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Estampados y artículos personalizados",
          description: "Diseño para prendas, tazas, termos, regalos, artículos promocionales y otros productos personalizados, sujeto al material y método de impresión requerido.",
          tags: ["Personalización", "Estampado", "Regalos"],
          href: enlaceWhatsApp("Estampados y artículos personalizados"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Diseño gráfico y publicidad digital",
          description: "Anuncios, imágenes, flyers, publicaciones para redes sociales, campañas promocionales, menús, catálogos, tarjetas e identidad visual.",
          tags: ["Diseño", "Redes sociales", "Publicidad"],
          href: enlaceWhatsApp("Diseño gráfico y publicidad digital"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Punto de venta y control comercial",
          description: "Configuración de soluciones de punto de venta, productos, precios, inventario, reportes y periféricos. La compatibilidad se revisa según el equipo y el sistema utilizado.",
          tags: ["Punto de venta", "Inventario", "Comercios"],
          href: enlaceWhatsApp("Punto de venta y control comercial"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Automatización de procesos",
          description: "Automatización de tareas repetitivas, formularios, registros, organización de información, seguimiento de solicitudes, notificaciones e integración de herramientas.",
          tags: ["Automatización", "Software", "Procesos"],
          href: enlaceWhatsApp("Automatización de procesos"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Internet, redes y WiFi",
          description: "Diagnóstico de conectividad, configuración de routers y puntos de acceso, revisión de cobertura, conexiones entre dispositivos y organización de redes.",
          tags: ["Redes", "WiFi", "Conectividad"],
          href: enlaceWhatsApp("Internet, redes y WiFi"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Soporte técnico a computadoras",
          description: "Consulta sobre diagnóstico, mantenimiento, configuración, actualizaciones y problemas de computadoras o laptops. La viabilidad de reparación y recuperación se evalúa antes de intervenir.",
          tags: ["Computadoras", "Diagnóstico", "Soporte"],
          href: enlaceWhatsApp("Soporte técnico a computadoras"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Instalación de programas",
          description: "Instalación y configuración de software original o de código abierto. La compatibilidad, la disponibilidad y las licencias se revisan según el programa y el equipo.",
          tags: ["Software", "Configuración", "Licencias"],
          href: enlaceWhatsApp("Instalación de programas"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Arquitectura, ingeniería y modelado 3D",
          description: "Consulta de proyectos de dibujo técnico, modelado y visualización tridimensional. Las herramientas, formatos y entregables se definen según el alcance solicitado.",
          tags: ["Modelado 3D", "Diseño técnico", "Visualización"],
          href: enlaceWhatsApp("Arquitectura, ingeniería y modelado 3D"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Imagen, video, audio y diseño",
          description: "Edición y producción de recursos visuales, video, audio, animación y materiales gráficos. El formato y el alcance se acuerdan según el proyecto.",
          tags: ["Video", "Audio", "Edición"],
          href: enlaceWhatsApp("Imagen, video, audio y diseño"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Dominios, correo, SEO y Google Maps",
          description: "Consulta sobre dominios, correo profesional, publicación web, optimización técnica, organización de contenido, formularios, enlaces e integración de servicios digitales.",
          tags: ["Dominios", "Correo", "SEO"],
          href: enlaceWhatsApp("Dominios, correo, SEO y Google Maps"),
          buttonLabel: "Consultar servicio"
        },
        {
          title: "Paquetes completos a tu medida",
          description: "Combinación de servicios digitales, publicidad, diseño, impresión y soluciones técnicas. Se define una propuesta según las necesidades reales del negocio.",
          tags: ["Solución integral", "Personalizado", "Negocios"],
          href: enlaceWhatsApp("Paquetes completos a tu medida"),
          buttonLabel: "Consultar servicio"
        }
      ],

      portfolio: [],
      gallery: [],
      videos: [],
      live: {},
      schedule: [],
      pricing: [],
      testimonials: [],

      faq: [
        {
          question: "¿Cómo solicito un servicio?",
          answer: "Pulsa el botón del servicio que te interesa. El mensaje de WhatsApp incluirá el nombre de ese servicio para que podamos identificar tu solicitud."
        },
        {
          question: "¿Cuánto cuesta cada servicio?",
          answer: "Esta tarjeta no publica precios fijos. El costo se revisa según el alcance, los materiales, los equipos y los entregables necesarios, antes de confirmar el trabajo."
        },
        {
          question: "¿Puedo combinar varios servicios?",
          answer: "Sí. Puedes consultar un servicio individual o explicar qué combinación necesitas para tu negocio."
        },
        {
          question: "¿Todos los servicios se pueden resolver a distancia?",
          answer: "Depende del servicio y del estado de los equipos o sistemas. La modalidad de atención se confirma al revisar tu solicitud."
        }
      ],

      contact: {
        title: "Hablemos",
        description: "Cuéntame qué necesita tu negocio.",
        email: "",
        phone: "+52 56 4873 4291",
        whatsapp: enlaceWhatsApp("Mawddi"),
        website: "https://missy.mawddi.com/",
        booking: "",
        location: "Tepetlapa esq. con Palmira, Coyoacán, 04919 CDMX",
        responseTime: ""
      },

      map: {},
      newsletter: {},
      resume: {},
      events: [],
      products: [],
      sponsors: [],
      awards: [],
      experience: [],
      education: [],
      skills: [],
      certifications: [],
      publications: [],
      resources: [],
      links: [],
      customSections: []
    },

    footer: {
      text: "Mawddi · Soluciones digitales y publicitarias",
      links: [
        {
          label: "Sitio web",
          href: "https://missy.mawddi.com/"
        },
        {
          label: "WhatsApp",
          href: enlaceWhatsApp("Mawddi")
        }
      ]
    }
  };

  // La plantilla pública fija es templateFile en TARJETA_CONFIG.
  // ?plantilla=archivo.js es SOLO una vista de prueba temporal y no modifica config.js.
  // Cada visitante recibe templateFile salvo que abra deliberadamente ese parámetro de QA.
  const plantillasPermitidas = new Set([
    "a1-gallery.js",
    "ali-animus.js",
    "chonkylotus.js",
    "chrls-dsgn.js",
    "cyberpunk-neon-animado.js",
    "dribbble.js",
    "elena-tiffany.js",
    "everylunaever.js",
    "faymas.js",
    "finstey.js",
    "juls-passion.js",
    "lilly-vinnily.js",
    "mariana-gomes.js",
    "olivia-brooke.js",
    "sarah-anderson.js",
    "tali-edri.js",
    "valerie-senior.js",
    "yumie-tsuchinoko.js"
  ]);

  const plantillaSolicitada =
    new URLSearchParams(window.location.search).get("plantilla");

  if (plantillasPermitidas.has(plantillaSolicitada)) {
    window.TARJETA_CONFIG.templateFile = plantillaSolicitada;
  }
})();
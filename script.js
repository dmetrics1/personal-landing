/* ==========================================================================
   INTERACTIVE LOGIC — DANIEL MOLINA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTIÓN DEL MENÚ MÓVIL Y DROPDOWNS
    const hamburger = document.getElementById('hamburger');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a');
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    if (hamburger && navMenuWrapper) {
        // Toggle Menú Hamburguesa
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenuWrapper.classList.toggle('active');
            
            const expanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', expanded);
            hamburger.setAttribute('aria-label', expanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        });

        // Control de clics en links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const parentItem = link.closest('.has-dropdown');
                
                // Comportamiento especial para menús con dropdown en responsive (pantallas <= 991px)
                if (window.innerWidth <= 991 && parentItem && link.classList.contains('nav-link')) {
                    e.preventDefault();
                    // Alternar activo para el dropdown actual
                    parentItem.classList.toggle('active');
                    
                    // Cerrar otros dropdowns
                    dropdownItems.forEach(item => {
                        if (item !== parentItem) {
                            item.classList.remove('active');
                        }
                    });
                } else {
                    // Cierre del menú móvil tras hacer clic en un enlace final
                    hamburger.classList.remove('active');
                    navMenuWrapper.classList.remove('active');
                    dropdownItems.forEach(item => item.classList.remove('active'));
                }
            });
        });

        // Cerrar menú al presionar la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenuWrapper.classList.remove('active');
                dropdownItems.forEach(item => item.classList.remove('active'));
                hamburger.focus();
            }
        });
    }

    // 2. EFECTO NAVBAR SCROLLED (ESTILIZACIÓN EXTRA)
    const navbar = document.getElementById('navbar');
    
    function checkScroll() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }
    
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });

    // 3. ANIMACIONES DE REVELADO (INTERSECTION OBSERVER)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Si la sección tiene sub-elementos que queremos animar escalonadamente
                    const staggerItems = entry.target.querySelectorAll('.method-card, .service-card-leven, .pricing-card, .portfolio-card-leven, .fact-item');
                    staggerItems.forEach((item, index) => {
                        item.classList.add('reveal', `reveal-delay-${(index % 3) + 1}`);
                        setTimeout(() => {
                            item.classList.add('active');
                        }, 50);
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback: Revelar todo si el navegador no soporta Intersection Observer
        revealElements.forEach(element => {
            element.classList.add('active');
            const staggerItems = element.querySelectorAll('.method-card, .service-card-leven, .pricing-card, .portfolio-card-leven, .fact-item');
            staggerItems.forEach(item => item.classList.add('active'));
        });
    }

    // 4. ANIMACIÓN DE CONTADORES NUMÉRICOS (FUN FACTS)
    const counters = document.querySelectorAll('.fact-number');
    const funFactsSection = document.querySelector('.fun-facts-section');
    
    if (counters.length > 0 && funFactsSection) {
        const countUp = (counter) => {
            const target = +counter.getAttribute('data-target');
            
            // Definimos pasos y velocidad de la animación
            const duration = 2000; // ms
            const frameRate = 1000 / 60; // 60 FPS aprox
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;

            const animate = () => {
                frame++;
                const progress = frame / totalFrames;
                // Easing cuadrático de salida para suavizado al final
                const easeProgress = progress * (2 - progress);
                const currentValue = Math.round(target * easeProgress);

                counter.textContent = currentValue;

                if (frame < totalFrames) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target;
                }
            };

            animate();
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => countUp(counter));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        counterObserver.observe(funFactsSection);
    }

    // 5. ENVÍO DE FORMULARIO DE CONTACTO (MAILTO INTEGRATION)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');

    if (contactForm && formStatus && submitBtn && submitText) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const contactEmail = contactForm.dataset.contactEmail || 'dm0025900@gmail.com';
            
            // Validación local de campos
            const name = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('mensaje').value.trim();

            if (!contactForm.checkValidity() || !name || !email || !message) {
                contactForm.reportValidity();
                showStatus('error', 'Por favor, completa todos los campos del formulario.');
                return;
            }

            // Detección del campo trampa (antispam gotcha)
            if (contactForm.querySelector('[name="_gotcha"]').value) {
                return;
            }

            setLoadingState(true);

            try {
                const subject = `Nuevo contacto Marca Personal - ${name}`;
                const body = [
                    `Nombre: ${name}`,
                    `Correo: ${email}`,
                    '',
                    'Mensaje o descripción del proyecto:',
                    message
                ].join('\n');

                // Abrir cliente de correo nativo
                window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                setLoadingState(false);
                showStatus('success', 'Se ha preparado tu cliente de correo. Revisa y presiona enviar para completar el contacto.');
                contactForm.reset();
            } catch (error) {
                setLoadingState(false);
                showStatus('error', 'Ocurrió un problema al abrir el cliente de correo. Por favor escríbeme directamente a dm0025900@gmail.com.');
            }
        });
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitText.textContent = 'Procesando...';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
        } else {
            submitBtn.disabled = false;
            submitText.textContent = 'Enviar mensaje';
            submitBtn.style.opacity = '';
            submitBtn.style.cursor = '';
        }
    }

    function showStatus(type, message) {
        formStatus.className = 'form-status';
        formStatus.textContent = message;
        
        if (type === 'success') {
            formStatus.classList.add('success');
        } else {
            formStatus.classList.add('error');
        }

        formStatus.style.display = 'block';
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

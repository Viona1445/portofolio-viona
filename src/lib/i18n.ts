import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en', // Explicit default
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        about: "About",
                        skills: "Skills",
                        projects: "Projects",
                        contact: "Contact",
                        hireMe: "Hire Me"
                    },
                    hero: {
                        available: "Available for Work",
                        downloadCv: "Download CV",
                        contactMe: "Contact Me"
                    },
                    about: {
                        title: "About Me",
                        education: "Education"
                    },
                    experience: {
                        title: "Professional Journey"
                    },
                    skills: {
                        title: "My Toolkit",
                        technical: "Technical Skills",
                        tools: "Tools & Platforms",
                        soft: "Soft Skills"
                    },
                    projects: {
                        title: "Featured Work",
                        description: "A collection of mobile and web applications built with modern technologies."
                    },
                    contact: {
                        title: "Let's Connect",
                        getInTouch: "Get In Touch",
                        description: "I'm always open to new opportunities. Send me a message!",
                        success: "Message sent successfully!",
                        send: "Send Message"
                    }
                }
            },
            id: {
                translation: {
                    nav: {
                        home: "Beranda",
                        about: "Tentang",
                        skills: "Keahlian",
                        projects: "Proyek",
                        contact: "Kontak",
                        hireMe: "Hubungi Saya"
                    },
                    hero: {
                        available: "Tersedia untuk Pekerjaan",
                        downloadCv: "Unduh CV",
                        contactMe: "Hubungi Saya"
                    },
                    about: {
                        title: "Tentang Saya",
                        education: "Pendidikan"
                    },
                    experience: {
                        title: "Perjalanan Karir"
                    },
                    skills: {
                        title: "Keahlian Saya",
                        technical: "Keahlian Teknis",
                        tools: "Peralatan & Platform",
                        soft: "Keahlian Intrapersonal"
                    },
                    projects: {
                        title: "Karya Unggulan",
                        description: "Koleksi aplikasi mobile dan web yang dibangun dengan teknologi modern."
                    },
                    contact: {
                        title: "Mari Terhubung",
                        getInTouch: "Hubungi Saya",
                        description: "Saya selalu terbuka untuk peluang baru. Kirimkan pesan!",
                        success: "Pesan berhasil dikirim!",
                        send: "Kirim Pesan"
                    }
                }
            }
        }
    });

export default i18n;

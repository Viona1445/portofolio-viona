import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        
        const samarindaTime = new Date().toLocaleString('id-ID', { 
            timeZone: 'Asia/Makassar', 
            dateStyle: 'full', 
            timeStyle: 'long' 
        });
        formData.append('Waktu_Pengiriman_Lokal', samarindaTime);

        const formId = import.meta.env.VITE_FORMSPREE_ID || "mqaejebz";

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'vionaasya04@gmail.com', href: 'mailto:vionaasya04@gmail.com' },
        { icon: Phone, label: 'WhatsApp', value: '(+62) 852-5091-1597', href: 'https://wa.me/6285250911597' },
        { icon: MapPin, label: 'Location', value: 'Samarinda, Indonesia' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Viona1445' },
        { icon: Linkedin, href: 'https://linkedin.com/in/vionaasya-arinda' },
        { icon: Instagram, href: 'https://instagram.com/vionasyarinda' },
        { icon: Facebook, href: 'https://facebook.com/viona.asya.arinda' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {i18n.language === 'en' ? "Let's Connect" : 'Mari Terhubung'}
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-pink mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            {i18n.language === 'en' ? 'Get In Touch' : 'Hubungi Saya'}
                        </h3>
                        <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                            {i18n.language === 'en'
                                ? "I'm always open to new opportunities, collaborations, or just a friendly chat. Send me a message and I'll get back to you as soon as possible!"
                                : "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar obrolan ramah. Kirimkan pesan dan saya akan segera membalasnya!"}
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center space-x-6">
                                    <div className="w-12 h-12 bg-premium-pink/10 rounded-2xl flex items-center justify-center border border-premium-pink/20">
                                        <info.icon className="w-6 h-6 text-premium-pink" />
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-xs uppercase font-black tracking-widest mb-1">{info.label}</div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-bold hover:text-premium-pink transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-white font-bold">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-4 mt-12">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border border-white/5 hover:border-premium-pink/50 group transition-all"
                                >
                                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-premium-pink transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[32px] border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Name</label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            className="w-full bg-navy-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-premium-pink/50 transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            className="w-full bg-navy-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-premium-pink/50 transition-all"
                                            placeholder="vionaasya04@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Subject</label>
                                    <div className="relative">
                                        <select
                                            required
                                            name="_subject"
                                            className="w-full bg-navy-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-premium-pink/50 transition-all appearance-none cursor-pointer"
                                            defaultValue="Job Opportunity"
                                        >
                                            <option value="Job Opportunity">Job Opportunity</option>
                                            <option value="Project Collaboration">Project Collaboration</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={5}
                                        className="w-full bg-navy-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-premium-pink/50 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                className="w-full py-5 bg-premium-pink text-white rounded-2xl font-bold shadow-lg premium-glow flex items-center justify-center space-x-3 disabled:opacity-50"
                            >
                                {loading ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>{i18n.language === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>
                                    </>
                                )}
                            </motion.button>

                        </form>
                    </motion.div>
                </div>
            </div>
            
            <AnimatePresence>
                {status !== 'idle' && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-3 px-6 py-4 rounded-2xl shadow-2xl border ${
                            status === 'success' 
                                ? 'bg-navy-900 border-green-500/30 text-green-400'
                                : 'bg-navy-900 border-red-500/30 text-red-400'
                        }`}
                    >
                        {status === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                        <span className="font-bold">
                            {status === 'success' 
                                ? (i18n.language === 'en' ? 'Message sent successfully!' : 'Pesan berhasil dikirim!')
                                : (i18n.language === 'en' ? 'Failed to send message. Please try again.' : 'Gagal mengirim pesan. Silakan coba lagi.')}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;

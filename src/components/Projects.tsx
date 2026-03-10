import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { ExternalLink, Github, Monitor, Smartphone } from 'lucide-react';

const Projects = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    return (
        <section id="projects" className="py-24 bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            {i18n.language === 'en' ? 'Featured Work' : 'Karya Unggulan'}
                        </motion.h2>
                        <div className="w-20 h-1 bg-premium-blue rounded-full" />
                    </div>
                    <p className="text-slate-400 max-w-md text-right hidden md:block">
                        {i18n.language === 'en'
                            ? "A collection of mobile and web applications built with modern technologies and a focus on user experience."
                            : "Koleksi aplikasi mobile dan web yang dibangun dengan teknologi modern dan fokus pada pengalaman pengguna."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cvData.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                y: -10,
                                rotateX: idx % 2 === 0 ? 2 : -2,
                                rotateY: idx % 2 === 0 ? -2 : 2,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative perspective-1000"
                        >
                            <div className="glass-card h-full rounded-[32px] overflow-hidden border border-white/5 hover:border-premium-blue/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                                {/* Project Image Placeholder */}
                                <div className="h-56 bg-gradient-to-br from-navy-800 to-navy-950 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                                    />
                                    <div className="absolute inset-0 bg-premium-blue/10 group-hover:bg-premium-blue/20 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform">
                                        {project.type === 'Mobile App' ? <Smartphone size={80} /> : <Monitor size={80} />}
                                    </div>
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        {project.stack.slice(0, 2).map((s, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-black text-white tracking-widest">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="text-premium-blue text-xs font-bold uppercase tracking-widest mb-2">
                                        {project.type}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-glow transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                        {project.description[currentLang]}
                                    </p>

                                    <div className="flex items-center space-x-4">
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-white text-sm font-bold group-hover:text-premium-blue transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

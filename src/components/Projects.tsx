import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { ExternalLink, Github, Monitor, Smartphone, Eye, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section id="projects" className="py-24 bg-navy-950/50 relative overflow-hidden">

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
                    <p className="text-slate-400 max-w-md text-right hidden md:block leading-relaxed">
                        {i18n.language === 'en'
                            ? "A collection of mobile and web applications built with modern technologies and a focus on user experience."
                            : "Koleksi aplikasi mobile dan web yang dibangun dengan teknologi modern dan fokus pada pengalaman pengguna."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cvData.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="bg-navy-900/40 h-full rounded-[40px] overflow-hidden border border-white/5 hover:border-premium-blue/20 transition-colors duration-300 flex flex-col">
                                {/* Project Image Container */}
                                <div className="h-64 bg-gradient-to-br from-navy-800 to-navy-950 relative overflow-hidden shrink-0">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 transform -rotate-12">
                                            {project.type === 'Mobile App' ? <Smartphone size={160} /> : <Monitor size={160} />}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors" />

                                    {/* Overlay Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="px-6 py-3 bg-white text-navy-950 rounded-2xl font-bold flex items-center space-x-2 shadow-xl hover:scale-105 transition-transform"
                                        >
                                            <Eye size={18} />
                                            <span>{currentLang === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                                        </button>
                                    </div>

                                    {/* Tech Pills */}
                                    <div className="absolute top-6 right-6 flex flex-wrap justify-end gap-2 max-w-[70%]">
                                        {project.stack.slice(0, 3).map((s, i) => (
                                            <span key={i} className="px-3 py-1 bg-navy-950/50 backdrop-blur-md rounded-full text-[10px] uppercase font-black text-white tracking-widest border border-white/10">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute bottom-6 left-6 p-2 bg-premium-blue rounded-xl text-white shadow-lg">
                                        {project.type === 'Mobile App' ? <Smartphone size={20} /> : <Monitor size={20} />}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-premium-blue transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="text-premium-blue/60 text-[10px] font-black uppercase tracking-widest leading-none">
                                                {project.type}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {project.description[currentLang]}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="flex items-center space-x-4">
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-white transition-colors"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-white transition-colors"
                                                    title="View Code"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-xs font-black uppercase tracking-widest text-premium-blue hover:text-white transition-colors flex items-center space-x-2"
                                        >
                                            <span>{currentLang === 'en' ? 'Full Case Study' : 'Studi Kasus Lengkap'}</span>
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Monitor, Smartphone, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-navy-950/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[90vh] glass-card rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
                    >
                        {/* Header Image/Gallery */}
                        <div className="relative h-64 md:h-96 w-full overflow-hidden shrink-0 bg-gradient-to-br from-navy-800 to-navy-950">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 transform -rotate-12">
                                    {project.type === 'Mobile App' ? <Smartphone size={160} /> : <Monitor size={160} />}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-3 bg-navy-950/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white/20 transition-all z-10"
                            >
                                <X size={24} />
                            </button>

                            {/* Project Type Badge */}
                            <div className="absolute bottom-6 left-8 flex items-center space-x-3">
                                <div className="p-2 bg-premium-pink rounded-xl text-white">
                                    {project.type === 'Mobile App' ? <Smartphone size={20} /> : <Monitor size={20} />}
                                </div>
                                <span className="text-white text-sm font-black uppercase tracking-widest bg-navy-950/30 backdrop-blur-md px-3 py-1 rounded-full">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                            <div className="grid md:grid-cols-3 gap-12">
                                {/* Left Side: Info */}
                                <div className="md:col-span-2 space-y-10">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                            {project.title}
                                        </h2>
                                        <div className="prose prose-invert max-w-none">
                                            <h3 className="text-xl font-bold text-premium-pink mb-4 tracking-wide uppercase text-sm">
                                                {currentLang === 'en' ? 'Project Overview' : 'Ikhtisar Proyek'}
                                            </h3>
                                            <p className="text-slate-300 text-lg leading-relaxed">
                                                {project.overview?.[currentLang] || project.description[currentLang]}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-premium-pink mb-4 tracking-wide uppercase text-sm">
                                            {currentLang === 'en' ? 'My Role' : 'Peran Saya'}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {project.role?.[currentLang] || (currentLang === 'en' ? 'Software Engineer' : 'Perangkat Lunak Insinyur')}
                                        </p>
                                    </div>

                                    {project.features && (
                                        <div>
                                            <h3 className="text-xl font-bold text-premium-pink mb-6 tracking-wide uppercase text-sm">
                                                {currentLang === 'en' ? 'Key Features' : 'Fitur Utama'}
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {project.features[currentLang].map((feature: string, i: number) => (
                                                    <div key={i} className="flex items-start space-x-3 group">
                                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-premium-pink/10 flex items-center justify-center text-premium-pink group-hover:bg-premium-pink group-hover:text-white transition-all">
                                                            <ChevronRight size={14} />
                                                        </div>
                                                        <span className="text-slate-400 group-hover:text-white transition-colors">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.notes && (
                                        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200/80 text-sm">
                                            {project.notes[currentLang]}
                                        </div>
                                    )}

                                    {project.screenshots && project.screenshots.length > 0 && (
                                        <div>
                                            <h3 className="text-xl font-bold text-premium-pink mb-6 tracking-wide uppercase text-sm">
                                                {currentLang === 'en' ? 'Project Gallery' : 'Galeri Proyek'}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {project.screenshots.map((shot: string, i: number) => (
                                                    <div key={i} className="rounded-2xl overflow-hidden border border-white/5 bg-navy-900 aspect-video">
                                                        <img src={shot} alt={`Screenshot ${i}`} className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Sidebar */}
                                <div className="space-y-8">
                                    <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-6">
                                        <div>
                                            <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">
                                                {currentLang === 'en' ? 'Tech Stack' : 'Teknologi'}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((tech: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white border border-white/5">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/5 space-y-4">
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-4 bg-premium-pink text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-premium-pink/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-4 glass-card text-white border border-white/10 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-white/5 transition-all"
                                                >
                                                    <Github size={18} />
                                                    <span>View Code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;

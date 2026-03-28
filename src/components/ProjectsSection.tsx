import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: '🐰 Looney Tunes',
    description: 'Petualangan penuh humor, aksi konyol, dan pesan sederhana tentang persahabatan bersama Bugs Bunny.',
    image: '/looney tunes.jpg',
    color: 'from-blue-200 via-sky-300 to-cyan-200',
  },
  {
    title: '🐾 Pink Panther',
    description: 'Tentang seekor panther yang sering mengalami kejadian lucu dan menghibur tanpa banyak dialog.',
    image: '/pink panther.jpg',
    color: 'from-blue-300 via-indigo-200 to-sky-200',
  },
  {
    title: '👻 Scooby Doo',
    description: 'Menceritakan anjing bernama Scooby-Doo yang memecahkan misteri seram dengan cara yang seru.',
    image: '/scooby doo.jpg',
    color: 'from-sky-400 via-blue-500 to-indigo-400',
  },
  {
    title: '🍪 Sesame Street',
    description: 'Acara anak yang penuh karakter boneka lucu dan mengajarkan nilai-baik secara menyenangkan.',
    image: '/sesame street.jpg',
    color: 'from-cyan-300 via-sky-300 to-blue-400',
  },
  {
    title: '🔮 Shimmer & Shine',
    description: 'Dua jin kembar yang membantu sahabat mereka melalui petualangan ajaib penuh warna.',
    image: '/shimmer and shine.jpg',
    color: 'from-blue-200 via-cyan-400 to-sky-300',
  },
  {
    title: '🍓 Strawberry Shortcake',
    description: 'Strawberry Shortcake dan teman-temannya yang hidup di dunia manis penuh buah dan persahabatan.',
    image: '/strawberry shortcake.jpg',
    color: 'from-sky-300 via-blue-400 to-indigo-300',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-white dark:from-slate-950 dark:via-blue-950/20 dark:to-black overflow-hidden relative"
    >
      {/* Background Glows (Warna Soft Blue) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-500 dark:text-blue-400 font-medium tracking-widest uppercase text-sm">Curated Collection</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            My Favorite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Childhood Movie </span> 🐳
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative group/carousel">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
            <div className="flex -ml-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative p-6 rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-blue-100 dark:border-blue-900/20 backdrop-blur-md overflow-hidden group shadow-xl"
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                    <div className="relative">
                      {/* IMAGE CONTAINER */}
                      <div className={`relative p-[2px] rounded-2xl bg-gradient-to-b ${project.color} overflow-hidden shadow-lg`}>
                        <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                              <Play fill="white" className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="mt-6">
                        <h3 className="font-bold text-2xl text-slate-800 dark:text-blue-50">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-blue-100/60 mt-3 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className={`h-1.5 w-12 mt-6 rounded-full bg-gradient-to-r ${project.color}`} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
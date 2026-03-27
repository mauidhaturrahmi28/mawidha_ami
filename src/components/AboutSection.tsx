import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  const stats = [
  
    { icon: Coffee, value: '35+', label: 'Dessert menu' },
    { icon: Rocket, value: '2+', label: 'years of learning to bake' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 bg-navbg">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">About me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO / ICON */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden glass shadow-card"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👩‍🍳</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card"
              >
                <p className="font-display font-bold text-2xl text-gradient">
                  2+ Tahun
                </p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT + ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Digital & Craft Lover
            </h3>

            {/* ACCORDION */}
            <div className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-4 font-medium"
              >
                Tentang Saya
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden px-4"
              >
                <p className="text-muted-foreground pb-4">
                  Halo, saya Ami. Saya tertarik dengan dunia kerajinan,
                  terutama merajut dan menjahit. Selain itu, saya juga
                  memiliki kemampuan yang cukup baik dalam mempelajari bahasa.
                </p>
              </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
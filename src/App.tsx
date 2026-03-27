import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [animationData, setAnimationData] = useState(null);

  // ambil file lottie dari link kamu
  useEffect(() => {
    fetch("https://lottie.host/a5205b4f-c618-4079-a5fb-acfacc713c25/X3g0P2btge.lottie")
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const blob = new Blob([buffer]);
        const reader = new FileReader();
        reader.onload = () => {
setAnimationData(JSON.parse(reader.result as string));        };
        reader.readAsText(blob);
      });
  }, []);

  // durasi loading (3 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="w-40">
        {animationData && (
          <Lottie animationData={animationData} loop />
        )}
      </div>
    </motion.div>
  );
}
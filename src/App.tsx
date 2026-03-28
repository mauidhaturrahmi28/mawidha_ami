import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player"; // Pastikan ini terinstall
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// --- KOMPONEN LOADING SCREEN (DI LUAR APP UTAMA BIAR RAPI) ---
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#020617]">
      <div className="w-72 h-72">
        <DotLottiePlayer
          src="https://lottie.host/16d02a0e-04be-4bdf-9686-dff8b7e828eb/j5AqMBEnp4.lottie"
          autoplay
          loop
        />
      </div>
      {/* Teks loading dengan warna biru yang kamu suka */}
      <p className="mt-4 text-blue-400 font-semibold tracking-[0.2em] animate-pulse text-sm">
        SABAR GUYS...
      </p>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kita set loadingnya 2.5 detik aja biar gak kelamaan
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* LOGIKA: Kalau masih loading, tampilin si kucing. Kalau udah selesai, tampilin webnya */}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
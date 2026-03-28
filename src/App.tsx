import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// --- LOADING SCREEN ---
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
      <p className="mt-4 text-blue-400 font-semibold tracking-[0.2em] animate-pulse text-sm uppercase">
        Sabar ya...
      </p>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            {/* INI KUNCI TRANSLATE: Wadah yang dicari tombol Navbar */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            
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
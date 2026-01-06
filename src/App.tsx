import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";
import RecuperarSenha from "./pages/RecuperarSenha";
import Calendario from "./pages/Calendario";
import Ferias from "./pages/Ferias";
import Pedidos from "./pages/Pedidos";
import Equipa from "./pages/Equipa";
import Configuracoes from "./pages/Configuracoes";
import Historico from "./pages/Historico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/ferias" element={<Ferias />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/equipa" element={<Equipa />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

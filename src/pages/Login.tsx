import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PalmtreeIcon, Mail, Lock, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <PalmtreeIcon className="w-7 h-7 text-white" />
            </div>
            <span className="font-display font-bold text-2xl text-foreground">VacaFlow</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Bem-vindo de volta
            </h1>
            <p className="text-muted-foreground">
              Inicie sessão para gerir as suas férias
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 h-12 input-focus"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Palavra-passe</Label>
                <Link 
                  to="/recuperar-senha" 
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Esqueceu?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-12 input-focus"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
                Manter sessão iniciada
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity gap-2 text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-pulse-soft">A entrar...</span>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">ou</span>
            </div>
          </div>

          {/* SSO Button */}
          <Button 
            variant="outline" 
            className="w-full h-12 gap-2"
          >
            <Building2 className="w-5 h-5" />
            Continuar com SSO empresarial
          </Button>

          {/* Sign up link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Não tem conta?{" "}
            <Link to="/criar-conta" className="text-primary font-semibold hover:underline">
              Crie uma empresa
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="max-w-lg">
            <h2 className="font-display text-4xl font-bold mb-6 leading-tight">
              Gestão de férias simplificada para equipas modernas
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Automatize pedidos, aprovações e calendários. Mantenha a sua equipa sincronizada e produtiva.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-display font-bold">500+</p>
                <p className="text-sm text-white/60">Empresas</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">15k+</p>
                <p className="text-sm text-white/60">Utilizadores</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">98%</p>
                <p className="text-sm text-white/60">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

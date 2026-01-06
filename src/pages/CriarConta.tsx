import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PalmtreeIcon, Mail, Lock, User, Building2, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Gestão centralizada de férias",
  "Aprovações automatizadas",
  "Calendário partilhado",
  "Relatórios e analytics",
  "Integrações com calendários",
];

export default function CriarConta() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    }
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

          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span className="text-sm font-medium">Conta</span>
            </div>
            <div className="flex-1 h-0.5 bg-border mx-2">
              <div className={`h-full bg-primary transition-all ${step > 1 ? "w-full" : "w-0"}`} />
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                2
              </div>
              <span className="text-sm font-medium text-muted-foreground">Empresa</span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              {step === 1 ? "Criar conta" : "Dados da empresa"}
            </h1>
            <p className="text-muted-foreground">
              {step === 1 
                ? "Comece a gerir férias em minutos" 
                : "Configure a sua organização"
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="O seu nome"
                      className="pl-10 h-12 input-focus"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email profissional</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@empresa.com"
                      className="pl-10 h-12 input-focus"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Palavra-passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      className="pl-10 h-12 input-focus"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da empresa</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Empresa, Lda"
                      className="pl-10 h-12 input-focus"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employees">Número de colaboradores</Label>
                  <select
                    id="employees"
                    className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sector">Setor de atividade</Label>
                  <select
                    id="sector"
                    className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="tech">Tecnologia</option>
                    <option value="finance">Finanças</option>
                    <option value="health">Saúde</option>
                    <option value="retail">Retalho</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity gap-2 text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-pulse-soft">A criar...</span>
              ) : step === 1 ? (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Criar empresa
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>

            {step === 2 && (
              <Button 
                type="button" 
                variant="ghost"
                className="w-full"
                onClick={() => setStep(1)}
              >
                Voltar
              </Button>
            )}
          </form>

          {/* Sign in link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Iniciar sessão
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="max-w-lg">
            <h2 className="font-display text-4xl font-bold mb-6 leading-tight">
              Tudo o que precisa para gerir férias
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Plataforma completa para empresas de qualquer dimensão.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-white/90 italic mb-4">
                "O VacaFlow simplificou completamente a gestão de férias da nossa equipa. Recomendo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-white font-semibold text-sm">
                  RM
                </div>
                <div>
                  <p className="font-semibold text-sm">Ricardo Mendes</p>
                  <p className="text-xs text-white/60">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

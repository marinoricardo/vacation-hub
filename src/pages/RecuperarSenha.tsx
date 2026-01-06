import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PalmtreeIcon, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecuperarSenha() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <PalmtreeIcon className="w-7 h-7 text-white" />
          </div>
          <span className="font-display font-bold text-2xl text-foreground">VacaFlow</span>
        </div>

        <div className="bg-card rounded-2xl shadow-card border p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                  Recuperar palavra-passe
                </h1>
                <p className="text-muted-foreground">
                  Introduza o seu email para receber instruções de recuperação
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

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-pulse-soft">A enviar...</span>
                  ) : (
                    "Enviar instruções"
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-success-light mx-auto mb-6 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                Email enviado!
              </h2>
              <p className="text-muted-foreground mb-6">
                Verifique a sua caixa de entrada e siga as instruções para redefinir a sua palavra-passe.
              </p>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setSubmitted(false)}
              >
                Reenviar email
              </Button>
            </div>
          )}

          {/* Back link */}
          <Link 
            to="/login" 
            className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
}

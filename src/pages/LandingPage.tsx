import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  BarChart3, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Palmtree,
  Clock,
  Bell,
  Smartphone,
  Building2,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendário Inteligente",
      description: "Visualize férias de toda a equipa num calendário interactivo e evite conflitos de ausências."
    },
    {
      icon: Clock,
      title: "Aprovações Rápidas",
      description: "Fluxo de aprovação simplificado com notificações instantâneas para gestores."
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe o uso de férias com dashboards e relatórios personalizados."
    },
    {
      icon: Bell,
      title: "Notificações Automáticas",
      description: "Lembretes automáticos sobre saldos, aprovações pendentes e férias próximas."
    },
    {
      icon: Smartphone,
      title: "Acesso Mobile",
      description: "Solicite e aprove férias de qualquer lugar, a qualquer hora, no seu telemóvel."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos com encriptação de ponta e conformidade com a legislação moçambicana."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "2.500",
      currency: "MZN",
      period: "/mês",
      description: "Ideal para pequenas empresas",
      features: [
        "Até 15 colaboradores",
        "Calendário de férias",
        "Pedidos e aprovações",
        "Suporte por email",
        "1 administrador"
      ],
      popular: false
    },
    {
      name: "Profissional",
      price: "7.500",
      currency: "MZN",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 50 colaboradores",
        "Tudo do plano Starter",
        "Relatórios avançados",
        "Integrações (em breve)",
        "5 administradores",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "15.000",
      currency: "MZN",
      period: "/mês",
      description: "Soluções corporativas",
      features: [
        "Colaboradores ilimitados",
        "Tudo do plano Profissional",
        "API personalizada",
        "Gestor de conta dedicado",
        "Administradores ilimitados",
        "SLA garantido"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Directora de RH",
      company: "TechMoz, Maputo",
      content: "O VacaFlow transformou a forma como gerimos as férias. Antes perdíamos horas com papelada, agora é tudo automático.",
      avatar: "MS"
    },
    {
      name: "João Tembe",
      role: "Gestor de Operações",
      company: "Construções Beira",
      content: "Finalmente conseguimos ter visibilidade de toda a equipa. Os conflitos de férias acabaram!",
      avatar: "JT"
    },
    {
      name: "Ana Machel",
      role: "CEO",
      company: "StartUp Nampula",
      content: "Simples, intuitivo e adaptado à nossa realidade. Recomendo a todas as empresas moçambicanas.",
      avatar: "AM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Palmtree className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">VacaFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preços</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testemunhos</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/criar-conta">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">
            🇲🇿 Feito para empresas moçambicanas
          </Badge>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight mb-6">
            Gestão de Férias{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Simples e Moderna
            </span>{" "}
            para a sua Empresa
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Automatize pedidos, aprovações e acompanhamento de férias. 
            Menos burocracia, mais produtividade para a sua equipa em Moçambique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/criar-conta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                Experimentar 14 Dias Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14">
              Ver Demonstração
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Empresas" },
              { value: "25.000+", label: "Colaboradores" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9/5", label: "Avaliação" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Funcionalidades</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo o que precisa para gerir férias
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas e intuitivas para simplificar a gestão de ausências na sua organização.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Como Funciona</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comece em 3 passos simples
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Crie a sua conta",
                description: "Registe a sua empresa em menos de 2 minutos. Sem cartão de crédito."
              },
              {
                step: "02",
                title: "Adicione a equipa",
                description: "Convide colaboradores e defina gestores. Tudo com um clique."
              },
              {
                step: "03",
                title: "Gerencie férias",
                description: "Receba pedidos, aprove ou rejeite, e acompanhe tudo no calendário."
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-display font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Preços</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planos adaptados à sua realidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preços em Meticais, sem surpresas. Cancele quando quiser.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-border/50 ${plan.popular ? 'border-primary shadow-xl scale-105 bg-card' : 'bg-card/50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.currency}{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
              <Building2 className="w-4 h-4" />
              <span>Precisa de um plano personalizado? <a href="#" className="text-primary hover:underline">Fale connosco</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testemunhos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que dizem os nossos clientes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para modernizar a gestão de férias?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Junte-se a centenas de empresas moçambicanas que já simplificaram os seus processos de RH.
              </p>
              <Link to="/criar-conta">
                <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
                  Criar Conta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Palmtree className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl text-foreground">VacaFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma de gestão de férias feita para empresas moçambicanas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Actualizações</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 VacaFlow. Todos os direitos reservados. 🇲🇿 Feito em Moçambique
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

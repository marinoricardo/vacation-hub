import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const features = [
    {
      number: "01",
      title: "Calendário Inteligente",
      description: "Visualize férias de toda a equipa num calendário interactivo e evite conflitos de ausências."
    },
    {
      number: "02",
      title: "Aprovações Rápidas",
      description: "Fluxo de aprovação simplificado com notificações instantâneas para gestores."
    },
    {
      number: "03",
      title: "Relatórios Detalhados",
      description: "Acompanhe o uso de férias com dashboards e relatórios personalizados."
    },
    {
      number: "04",
      title: "Notificações Automáticas",
      description: "Lembretes automáticos sobre saldos, aprovações pendentes e férias próximas."
    },
    {
      number: "05",
      title: "Acesso Mobile",
      description: "Solicite e aprove férias de qualquer lugar, a qualquer hora, no seu telemóvel."
    },
    {
      number: "06",
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
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <Palmtree className="w-5 h-5 text-primary-foreground" />
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
              <Button size="sm">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Simplified */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Feito para empresas moçambicanas
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Gestão de Férias{" "}
              <span className="text-primary">Simples e Moderna</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Automatize pedidos, aprovações e acompanhamento de férias. Menos burocracia, mais produtividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/criar-conta">
                <Button size="lg" className="text-lg px-8 h-14">
                  Experimentar 14 Dias Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Ver Demonstração
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Sem cartão de crédito · 14 dias grátis · Cancelamento fácil
            </p>
          </div>

          {/* Stats - Clean typography */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-border">
            {[
              { value: "500+", label: "Empresas" },
              { value: "25.000+", label: "Colaboradores" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9/5", label: "Avaliação" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Numbers instead of icons */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Funcionalidades</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo o que precisa para gerir férias
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas e intuitivas para simplificar a gestão de ausências.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <span className="text-4xl font-display font-bold text-primary/20 mb-2">
                    {feature.number}
                  </span>
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

      {/* How it Works - Clean steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Como Funciona</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Comece em 3 passos simples
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Crie a sua conta",
                description: "Registe a sua empresa em menos de 2 minutos. Sem cartão de crédito."
              },
              {
                step: "2",
                title: "Adicione a equipa",
                description: "Convide colaboradores e defina gestores. Tudo com um clique."
              },
              {
                step: "3",
                title: "Gerencie férias",
                description: "Receba pedidos, aprove ou rejeite, e acompanhe tudo no calendário."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Clean bullets */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Preços</p>
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
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">Mais Popular</Badge>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-12">
            Precisa de um plano personalizado? <a href="#" className="text-primary hover:underline">Fale connosco</a>
          </p>
        </div>
      </section>

      {/* Testimonials - Clean rating */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Testemunhos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              O que dizem os nossos clientes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-primary mb-4">★★★★★</p>
                  <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground font-semibold text-sm">
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

      {/* CTA Section - Simplified */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para modernizar a gestão de férias?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Junte-se a centenas de empresas moçambicanas que já simplificaram os seus processos de RH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/criar-conta">
                <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
                  Criar Conta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Fale com Vendas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Palmtree className="w-5 h-5 text-primary-foreground" />
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
                <li><a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Preços</a></li>
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
              © {new Date().getFullYear()} VacaFlow. Design by Marino Ricardo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

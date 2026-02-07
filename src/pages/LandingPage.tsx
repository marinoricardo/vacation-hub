import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, CheckCircle, Clock, Users, Shield, Smartphone, Zap, BarChart3, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: CalendarDays, title: "Calendário Inteligente", description: "Visualize férias de toda a equipa num calendário interactivo e evite conflitos de ausências." },
  { icon: Zap, title: "Aprovações Rápidas", description: "Fluxo de aprovação simplificado com notificações instantâneas para gestores." },
  { icon: BarChart3, title: "Relatórios Detalhados", description: "Acompanhe o uso de férias com dashboards e relatórios personalizados." },
  { icon: Bell, title: "Notificações Automáticas", description: "Lembretes automáticos sobre saldos, aprovações pendentes e férias próximas." },
  { icon: Smartphone, title: "Acesso Mobile", description: "Solicite e aprove férias de qualquer lugar, a qualquer hora, no seu telemóvel." },
  { icon: Shield, title: "Segurança Total", description: "Dados protegidos com encriptação de ponta e conformidade com a legislação moçambicana." },
];

const plans = [
  {
    name: "Starter",
    price: "2.500",
    currency: "MZN",
    period: "/mês",
    description: "Ideal para pequenas empresas",
    features: ["Até 15 colaboradores", "Calendário de férias", "Pedidos e aprovações", "Suporte por email", "1 administrador"],
    popular: false,
  },
  {
    name: "Profissional",
    price: "7.500",
    currency: "MZN",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: ["Até 50 colaboradores", "Tudo do plano Starter", "Relatórios avançados", "Integrações (em breve)", "5 administradores", "Suporte prioritário"],
    popular: true,
  },
  {
    name: "Empresarial",
    price: "15.000",
    currency: "MZN",
    period: "/mês",
    description: "Soluções corporativas",
    features: ["Colaboradores ilimitados", "Tudo do plano Profissional", "API personalizada", "Gestor de conta dedicado", "Administradores ilimitados", "SLA garantido"],
    popular: false,
  },
];

const testimonials = [
  { name: "Maria Santos", role: "Directora de RH", company: "TechMoz, Maputo", content: "O VacaFlow transformou a forma como gerimos as férias. Antes perdíamos horas com papelada, agora é tudo automático.", avatar: "MS" },
  { name: "João Tembe", role: "Gestor de Operações", company: "Construções Beira", content: "Finalmente conseguimos ter visibilidade de toda a equipa. Os conflitos de férias acabaram!", avatar: "JT" },
  { name: "Ana Machel", role: "CEO", company: "StartUp Nampula", content: "Simples, intuitivo e adaptado à nossa realidade. Recomendo a todas as empresas moçambicanas.", avatar: "AM" },
];

const logos = ["TechMoz", "BancaMZ", "EduPro", "HealthPlus", "LogiMZ"];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
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

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        {/* Decorative circles */}
        <div className="absolute top-40 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p 
              variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-6 tracking-wide uppercase bg-primary/10 px-4 py-1.5 rounded-full"
            >
              <Zap className="w-3.5 h-3.5" />
              Feito para empresas moçambicanas
            </motion.p>

            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Gestão de Férias{" "}
              <span className="text-gradient-primary">Simples e Moderna</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automatize pedidos, aprovações e acompanhamento de férias. Menos burocracia, mais produtividade para a sua equipa.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/criar-conta">
                <Button size="lg" className="text-lg px-8 h-14 bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                  Experimentar 14 Dias Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Ver Demonstração
                </Button>
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} custom={4} className="text-sm text-muted-foreground flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-success" /> Sem cartão de crédito</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-success" /> 14 dias grátis</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-success" /> Cancelamento fácil</span>
            </motion.p>
          </motion.div>

          {/* Trust Logos */}
          <div className="mt-20 pt-10 border-t border-border/50">
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">Confiado por empresas líderes em Moçambique</p>
            <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {logos.map((logo) => (
                <span key={logo} className="text-lg font-display font-bold text-muted-foreground/30 select-none">{logo}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-border/50">
            {[
              { value: "500+", label: "Empresas" },
              { value: "25.000+", label: "Colaboradores" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9/5", label: "Avaliação" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Funcionalidades</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo o que precisa para gerir férias
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas e intuitivas para simplificar a gestão de ausências da sua empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Como Funciona</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Comece em 3 passos simples
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Crie a sua conta", description: "Registe a sua empresa em menos de 2 minutos. Sem cartão de crédito.", icon: Users },
              { step: "2", title: "Adicione a equipa", description: "Convide colaboradores e defina gestores. Tudo com um clique.", icon: CheckCircle },
              { step: "3", title: "Gerencie férias", description: "Receba pedidos, aprove ou rejeite, e acompanhe tudo no calendário.", icon: CalendarDays },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-20 h-20 border-2 border-primary/20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-muted/30">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className={`relative border-border/50 h-full ${plan.popular ? 'border-primary shadow-xl md:scale-105 bg-card' : 'bg-card/50'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-lg">Mais Popular</Badge>
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
                          <CheckCircle className="w-4 h-4 text-success shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/criar-conta">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Começar Agora
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-12">
            Precisa de um plano personalizado? <a href="#" className="text-primary hover:underline font-medium">Fale connosco</a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Testemunhos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              O que dizem os nossos clientes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card h-full">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-warning fill-warning" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Posso testar gratuitamente?", a: "Sim! Oferecemos 14 dias de teste gratuito sem necessidade de cartão de crédito. Pode cancelar a qualquer momento." },
              { q: "O VacaFlow funciona no telemóvel?", a: "Sim, a aplicação é totalmente responsiva e funciona perfeitamente no telemóvel, tablet e computador. Pode até instalá-la como PWA." },
              { q: "Os dados da minha empresa estão seguros?", a: "Absolutamente. Utilizamos encriptação de ponta a ponta e os nossos servidores estão em conformidade com as normas de segurança internacionais." },
              { q: "Posso exportar relatórios?", a: "Sim, pode exportar relatórios em formato PDF e Excel com toda a informação de férias da sua equipa." },
              { q: "É adaptado à legislação moçambicana?", a: "Sim, o VacaFlow foi desenhado especificamente para o mercado moçambicano, respeitando a legislação laboral local sobre férias e ausências." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border rounded-xl p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-10 right-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Pronto para modernizar a gestão de férias?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                Junte-se a centenas de empresas moçambicanas que já simplificaram os seus processos de RH.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/criar-conta">
                  <Button size="lg" variant="secondary" className="text-lg px-8 h-14 shadow-lg">
                    Criar Conta Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Fale com Vendas
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
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

import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Bell, 
  Shield, 
  Building2, 
  Camera, 
  Mail, 
  Phone,
  Globe,
  CalendarDays,
  Save
} from "lucide-react";

export default function Configuracoes() {
  return (
    <AppLayout>
      <AppHeader 
        title="Configurações" 
        subtitle="Gerir conta e preferências" 
      />
      <PageTransition>
      <div className="p-4 md:p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-muted/50 p-1 flex-wrap h-auto">
            <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <User className="w-4 h-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Bell className="w-4 h-4" />
              Notificações
            </TabsTrigger>
            <TabsTrigger value="company" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Building2 className="w-4 h-4" />
              Empresa
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Shield className="w-4 h-4" />
              Segurança
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="bg-card rounded-xl border shadow-card p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Informações Pessoais
              </h3>
              
              {/* Avatar Section */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="bg-gradient-warm text-white text-2xl font-semibold">
                      MC
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maria Costa</p>
                  <p className="text-sm text-muted-foreground">Gestora de RH</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Alterar foto
                  </Button>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nome completo</Label>
                  <Input defaultValue="Maria Costa" className="h-11 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>Cargo</Label>
                  <Input defaultValue="Gestora de RH" className="h-11 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="maria.costa@empresa.com" className="h-11 pl-9 input-focus" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="+258 84 123 4567" className="h-11 pl-9 input-focus" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Departamento</Label>
                  <select className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm input-focus">
                    <option>Recursos Humanos</option>
                    <option>Desenvolvimento</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Fuso horário</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="flex h-11 w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm input-focus">
                      <option>Lisboa (GMT+0)</option>
                      <option>Londres (GMT+0)</option>
                      <option>Paris (GMT+1)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-gradient-primary gap-2">
                  <Save className="w-4 h-4" />
                  Guardar alterações
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-card rounded-xl border shadow-card p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Preferências de Notificação
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <p className="font-medium text-foreground">Novos pedidos de férias</p>
                    <p className="text-sm text-muted-foreground">
                      Receber notificação quando há novos pedidos para aprovar
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <p className="font-medium text-foreground">Estado do pedido</p>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre aprovação ou rejeição dos seus pedidos
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <p className="font-medium text-foreground">Lembretes de calendário</p>
                    <p className="text-sm text-muted-foreground">
                      Lembrar férias próximas da equipa
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <p className="font-medium text-foreground">Relatórios semanais</p>
                    <p className="text-sm text-muted-foreground">
                      Resumo semanal de atividade de férias
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-foreground">Notificações por email</p>
                    <p className="text-sm text-muted-foreground">
                      Receber todas as notificações também por email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Company Tab */}
          <TabsContent value="company" className="space-y-6">
            <div className="bg-card rounded-xl border shadow-card p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Dados da Empresa
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nome da empresa</Label>
                  <Input defaultValue="Empresa, Lda" className="h-11 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>NIF</Label>
                  <Input defaultValue="123456789" className="h-11 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>Setor</Label>
                  <select className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm input-focus">
                    <option>Tecnologia</option>
                    <option>Finanças</option>
                    <option>Saúde</option>
                    <option>Retalho</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Nº de colaboradores</Label>
                  <select className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm input-focus">
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Política de Férias
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Dias de férias anuais</Label>
                    <Input type="number" defaultValue="22" className="h-11 input-focus" />
                  </div>
                  <div className="space-y-2">
                    <Label>Ano fiscal começa em</Label>
                    <select className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm input-focus">
                      <option>Janeiro</option>
                      <option>Abril</option>
                      <option>Julho</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-gradient-primary gap-2">
                  <Save className="w-4 h-4" />
                  Guardar alterações
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="bg-card rounded-xl border shadow-card p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Segurança da Conta
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Palavra-passe atual</Label>
                  <Input type="password" placeholder="••••••••" className="h-11 input-focus max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label>Nova palavra-passe</Label>
                  <Input type="password" placeholder="Mínimo 8 caracteres" className="h-11 input-focus max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label>Confirmar palavra-passe</Label>
                  <Input type="password" placeholder="Repetir palavra-passe" className="h-11 input-focus max-w-md" />
                </div>
                
                <Button variant="outline">Alterar palavra-passe</Button>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-foreground mb-4">Autenticação de dois fatores</h4>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg max-w-md">
                  <div>
                    <p className="font-medium text-foreground">2FA desativado</p>
                    <p className="text-sm text-muted-foreground">
                      Adicione uma camada extra de segurança
                    </p>
                  </div>
                  <Button size="sm">Ativar</Button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-destructive mb-4">Zona de perigo</h4>
                <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30">
                  Eliminar conta
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </PageTransition>
    </AppLayout>
  );
}

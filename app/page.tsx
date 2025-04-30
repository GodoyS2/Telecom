import Link from "next/link"
import Image from "next/image"
import { Phone, Wifi, Globe, Users, BarChart, Shield, CheckCircle, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Wifi className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">Telecom Raiz</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Serviços
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Sobre
            </Link>
            <Link href="#plans" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Planos
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Entrar
            </Button>
            <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700">Começar</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Conecte o seu mundo com Telecom Raiz
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Soluções de telecomunicações confiáveis, rápidas e seguras para empresas e indivíduos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-600 hover:bg-teal-700">Começar</Button>
                  <Button variant="outline">Saiba mais</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Superman.png"
                  width={550}
                  height={550}
                  alt="Telecom Raiz Hero"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white hover:bg-teal-700">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soluções de Telecomunicações Completas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma ampla gama de serviços para atender a todas as suas necessidades de telecomunicações.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Phone className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>Serviços de Celular</CardTitle>
                  <CardDescription>Planos de celular completos com cobertura nacional.</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Chamadas e mensagens ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Dados de alta velocidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Roaming internacional</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Wifi className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>Soluções de Internet</CardTitle>
                  <CardDescription>Internet rápida e confiável para casa e negócios.</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Conexões de fibra óptica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Bandeira ilimitada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Suporte técnico 24/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Globe className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>Soluções de Negócios</CardTitle>
                  <CardDescription>Infraestrutura de telecomunicações de nível empresarial.</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Sistemas VoIP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Linhas dedicadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span>Soluções de nuvem</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white hover:bg-teal-700">
                    Sobre Nós
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Conectando Pessoas desde 2005
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Telecom Raiz tem sido líder na inovação em telecomunicações há mais de 15 anos, fornecendo
                    serviços confiáveis para milhões de clientes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-teal-600" />
                      <span className="text-xl font-bold">2M+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-teal-600" />
                      <span className="text-xl font-bold">50+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Países Cobertos</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-teal-600" />
                      <span className="text-xl font-bold">99.9%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Tempo de Ativação da Rede</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      <span className="text-xl font-bold">100%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Conexões Seguras</p>
                  </div>
                </div>
                <div>
                  <Button className="bg-teal-600 hover:bg-teal-700">Saiba mais sobre nós</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Superman.png"
                  width={550}
                  height={550}
                  alt="Telecom Raiz Team"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white hover:bg-teal-700">
                  Planos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Escolha o Plano Perfeito para Você
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos planos flexíveis para atender às suas necessidades e orçamento.
                </p>
              </div>
            </div>

            <Tabs defaultValue="mobile" className="w-full max-w-4xl mx-auto mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mobile">Celular</TabsTrigger>
                <TabsTrigger value="internet">Internet</TabsTrigger>
                <TabsTrigger value="business">Negócios</TabsTrigger>
              </TabsList>

              <TabsContent value="mobile" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Básico</CardTitle>
                      <CardDescription>Para usuários leves</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $19<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>2GB de Dados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Chamadas ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Mensagens ilimitadas</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-teal-600">
                    <CardHeader>
                      <div className="absolute right-4 top-4 rounded-full bg-teal-600 px-2 py-1 text-xs font-semibold text-white">
                        Popular
                      </div>
                      <CardTitle>Padrão</CardTitle>
                      <CardDescription>Para usuários médios</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $29<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>10GB de Dados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Chamadas ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Mensagens ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Chamadas internacionais</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <CardDescription>Para usuários pesados</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $49<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Dados ilimitados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Chamadas ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Mensagens ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Roaming internacional</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Suporte Premium</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="internet" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Básico</CardTitle>
                      <CardDescription>Para pequenas famílias</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $39<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>100 Mbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Dados ilimitados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Suporte básico</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-teal-600">
                    <CardHeader>
                      <div className="absolute right-4 top-4 rounded-full bg-teal-600 px-2 py-1 text-xs font-semibold text-white">
                        Popular
                      </div>
                      <CardTitle>Padrão</CardTitle>
                      <CardDescription>Para famílias médias</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $59<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>500 Mbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Dados ilimitados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Roteador WiFi incluso</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Suporte 24/7</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <CardDescription>Para grandes famílias</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $89<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>1 Gbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Dados ilimitados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Sistema WiFi Premium</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Suporte prioritário</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Integração com Smart Home</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="business" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Startup</CardTitle>
                      <CardDescription>Para pequenas empresas</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $99<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>500 Mbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>5 Phone Lines</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Basic VoIP</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-teal-600">
                    <CardHeader>
                      <div className="absolute right-4 top-4 rounded-full bg-teal-600 px-2 py-1 text-xs font-semibold text-white">
                        Popular
                      </div>
                      <CardTitle>Negocio</CardTitle>
                      <CardDescription>Para pequenas empresas</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $199<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>1 Gbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>20 Phone Lines</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Advanced VoIP</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Cloud Storage</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>Para grandes empresas</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $399<span className="ml-1 text-sm font-medium text-muted-foreground">/mo</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>10 Gbps</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Linhas de telefone ilimitadas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>VoIP corporativo</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Suporte dedicado</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600" />
                          <span>Soluções personalizadas</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Começar</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white hover:bg-teal-700">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos clientes falam</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Não seja só nossa palavra. Aqui está o que nossos clientes têm a dizer.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Proprietário de Pequena Empresa</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Telecom Raiz has transformed our business communications. Their reliable service and excellent
                    customer support have made a significant difference."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Michael Chen</h3>
                      <p className="text-sm text-muted-foreground">Entusiasta de Tecnologia</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Eu já fui com muitos provedores, mas Telecom Raiz oferece as velocidades de internet mais rápidas que já experimentei. Sua conexão de fibra óptica é incomparável."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Customer"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Emily Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">Família de Quatro</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Nossa família depende da Telecom Raiz para todas as nossas necessidades de conectividade. Os planos familiares são acessíveis e o serviço é consistentemente confiável."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white hover:bg-teal-700">
                    Contate-nos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Entre em contato</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Tem perguntas ou precisa de assistência? Nosso time está aqui para ajudar.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <span>+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-teal-600" />
                    <span>suporte@telecomraiz.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    <span>Rua dos Comerciantes, 123, São Paulo, SP</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite seu primeiro nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Sobrenome
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite seu sobrenome"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite seu email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite sua mensagem"
                    />
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Enviar mensagem</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pronto para se conectar?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de clientes satisfeitos e experimente a diferença da Telecom Raiz.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">Começar hoje</Button>
                <Button variant="outline">Contate a vendas</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center mx-auto gap-4 md:h-24 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="h-6 w-6 text-teal-600" />
            <span className="text-lg font-bold">Telecom Raiz</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Telecom Raiz. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600">
              Termos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600">
              Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

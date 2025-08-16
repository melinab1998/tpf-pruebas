// src/pages/Home.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Smile, Heart, ClipboardCheck } from "lucide-react";
import logoLight from "@/img/logo-light-1.png";
import logoDark from "@/img/logo-dark-1.png";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
export default function Home() {

  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* NAVBAR */}
      {/* NAVBAR */}
      <nav className="w-full border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="Logo clínica"
              className="h-12 w-auto"
            />
            <span className="hidden md:inline text-lg font-bold text-[var(--primary)]">
              STURN
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost">Inicio</Button>
            <Button variant="ghost">Servicios</Button>
            <Button variant="ghost">Contacto</Button>
            <Button variant="outline" className="hidden md:inline">
              Iniciar sesión
            </Button>
            <ModeToggle />
          </div>
        </div>
      </nav>

   {/* HERO */}
<section className="flex flex-col items-center justify-center text-center px-4 py-24 mt-8">
  <Badge className="mb-4">Cuidando sonrisas desde 2010</Badge>
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Clínica Odontológica <br />
    Erica L. Zaghis
  </h1>
  <p className="text-[var(--muted-foreground)] max-w-2xl leading-relaxed text-lg md:text-xl mt-2 mb-8">
    Tu salud bucal en las mejores manos. Reserva tu turno online de forma
    rápida y sencilla para cuidar tu sonrisa con atención profesional y de confianza.
  </p>
  <Button className="py-5 px-8 text-lg font-semibold bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors">
    Agendar Turno
  </Button>
</section>


   {/* SECCIÓN DE SERVICIOS MEJORADA */}
<section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Servicios Odontológicos</h2>
    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
      Cuidado dental integral con tecnología de vanguardia y profesionales especializados
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Odontología General",
        description: "Revisiones completas, limpiezas profesionales y tratamientos básicos para mantener tu salud bucal.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        )
      },
      {
        title: "Ortodoncia",
        description: "Corrección de la posición dental con brackets metálicos, estéticos o alineadores invisibles.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
        )
      },
      {
        title: "Estética Dental",
        description: "Blanqueamientos, carillas y tratamientos para conseguir la sonrisa que siempre has deseado.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        )
      }
    ].map((servicio) => (
      <Card key={servicio.title} className="group hover:shadow-lg transition-all duration-300 h-full">
        <CardHeader className="flex flex-col items-center">
          <div className="p-3 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {servicio.icon}
          </div>
          <CardTitle className="text-xl">{servicio.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">{servicio.description}</p>
          <Button variant="link" className="mt-6 text-primary hover:no-underline">
            Más información
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

       {/* TESTIMONIOS */}
      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Pacientes</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {["Ana", "Luis", "Carla"].map((nombre) => (
            <Card key={nombre} className="flex-1 bg-[var(--card)] border-[var(--border)] p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="mb-4">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${nombre}`} />
                  <AvatarFallback>{nombre[0]}</AvatarFallback>
                </Avatar>
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-[var(--muted-foreground)] italic">
                  "{nombre} tuvo una experiencia excelente con nuestro servicio."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

        {/* SOBRE LA DOCTORA */}
      <section className="max-w-4xl mx-auto mt-20 px-4">
        <Card className="bg-[var(--card)] border-[var(--border)] flex flex-col md:flex-row items-center p-6 gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/doctor.jpg" alt="Dra. Erica" />
            <AvatarFallback>EZ</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="mb-2">Dra. Erica L. Zaghis</CardTitle>
            <CardDescription>
              Con más de 15 años de experiencia en odontología general y estética dental,
              la Dra. Erica se especializa en brindar atención personalizada y de calidad
              para cada paciente.
            </CardDescription>
          </div>
        </Card>
      </section>

      
      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cómo saco un turno?</AccordionTrigger>
            <AccordionContent>
              Podés agendar tu turno en línea a través de nuestra plataforma seleccionando
              el servicio y horario disponible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Atienden obras sociales?</AccordionTrigger>
            <AccordionContent>
              Sí, trabajamos con varias obras sociales y prepagas. Consultanos por la tuya.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Dónde está ubicada la clínica?</AccordionTrigger>
            <AccordionContent>
              Nuestra clínica se encuentra en el centro de la ciudad, con fácil acceso
              y estacionamiento cercano.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
<footer className="w-full border-t bg-card mt-20">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> {/* Contenedor mejorado */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Contacto */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contacto</h3>
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>contacto@clinica.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Av. Principal 123, Ciudad</span>
          </div>
        </div>
      </div>

      {/* Enlaces */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
        <div className="space-y-2">
          <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            Inicio
          </p>
          <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            Servicios
          </p>
          <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            Equipo médico
          </p>
          <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            Contacto
          </p>
        </div>
      </div>

      {/* Horario */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Horario de atención</h3>
        <div className="text-muted-foreground space-y-2">
          <div className="flex justify-between">
            <span>Lunes - Viernes</span>
            <span>8:00 - 20:00</span>
          </div>
          <div className="flex justify-between">
            <span>Sábados</span>
            <span>9:00 - 14:00</span>
          </div>
          <div className="flex justify-between">
            <span>Domingos</span>
            <span>Cerrado</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Clínica Odontológica. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}


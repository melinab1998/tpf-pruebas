// src/pages/Home.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logoLight from "@/img/logo-light-1.png";
import logoDark from "@/img/logo-dark-1.png";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";

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
        <section className="flex flex-col items-center justify-center text-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido a Clínica Odontológica
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-2xl leading-relaxed text-lg md:text-xl mt-2 mb-6">
          Gestiona tus turnos de forma fácil, rápida y segura. Nuestra plataforma
          digital está diseñada para profesionales y pequeños negocios. 
        </p>
        <Button className="mt-2 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors">
          Agendar Turno
        </Button>
      </section>

      {/* CARDS DE SERVICIOS */}
      <section className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Odontología general", "Ortodoncia", "Estética dental"].map((servicio) => (
          <Card key={servicio} className="bg-[var(--card)] border-[var(--border)]">
            <CardHeader>
              <CardTitle>{servicio}</CardTitle>
            </CardHeader>
            <CardContent className="text-[var(--muted-foreground)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper, erat in luctus posuere, arcu justo bibendum justo,
              nec laoreet purus leo in elit.
            </CardContent>
          </Card>
        ))}
      </section>

      {/* TESTIMONIOS */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Pacientes</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {["Ana", "Luis", "Carla"].map((nombre) => (
            <Card key={nombre} className="flex-1 bg-[var(--card)] border-[var(--border)]">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="mb-4">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${nombre}`} />
                  <AvatarFallback>{nombre[0]}</AvatarFallback>
                </Avatar>
                <p className="text-[var(--muted-foreground)]">
                  {nombre} tuvo una experiencia excelente con nuestro servicio.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 py-6 border-t border-[var(--border)] text-center bg-[var(--card)]">
        <p className="text-[var(--muted-foreground)]">© 2025 Clínica Odontológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}


"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Envuelve toda la app y permite alternar entre temas.
 * `attribute="class"` hace que next-themes agregue la clase `.dark` al <html>.
 */
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

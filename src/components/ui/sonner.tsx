"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

// Os formulários usam `toast` do sonner; este é o Toaster que o apresenta.
// Site só com tema claro: não segue o modo escuro do sistema.
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="top-center"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

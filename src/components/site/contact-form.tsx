"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(3, "Indique o seu nome completo."),
  email: z.string().email("Indique um email válido."),
  phone: z.string().min(9, "Indique um telefone válido.").max(20, "Telefone inválido."),
  message: z.string().min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
  consent: z.boolean().refine((v) => v === true, "Tem de aceitar a política de privacidade."),
  // honeypot
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  const consent = watch("consent");

  const onSubmit = async (values: FormValues) => {
    // honeypot: silently drop
    if (values.company) {
      setSubmitted(true);
      reset();
      return;
    }
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setSubmitted(true);
      reset();
      toast.success("Mensagem enviada com sucesso!");
    } catch (e) {
      toast.error("Não foi possível enviar. Tente novamente ou telefone-nos.");
    }
  };

  if (submitted) {
    return (
      <div className={cn("rounded-lg border-2 border-dashed border-primary/30 bg-secondary/50 p-8 text-center")}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl text-primary mb-2">Recebemos a sua mensagem</h3>
        <p className="text-muted-foreground mb-6">
          Entraremos em contacto brevemente. Para assuntos urgentes, recomendamos o contacto telefónico.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("company")}
        name="company"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Nome *</Label>
          <Input id="c-name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Email *</Label>
          <Input id="c-email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-phone">Telefone *</Label>
        <Input id="c-phone" type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">Mensagem *</Label>
        <Textarea
          id="c-message"
          rows={5}
          placeholder="Descreva a sua questão, pedido de esclarecimento ou situação..."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm">
        <Checkbox
          id="c-consent"
          checked={!!consent}
          onCheckedChange={(v) => setValue("consent", v === true, { shouldValidate: true })}
          className="mt-0.5"
        />
        <span className="text-muted-foreground leading-snug">
          Aceito o tratamento dos meus dados para resposta a esta mensagem, conforme a{" "}
          <a href="/politica-privacidade" className="text-primary underline">Política de Privacidade</a>. *
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> A enviar...</>
        ) : (
          <>Enviar mensagem <ArrowRight className="w-4 h-4 ml-1" /></>
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        Resposta típica em 1 dia útil. Para assuntos urgentes, ligue diretamente.
      </p>
    </form>
  );
}

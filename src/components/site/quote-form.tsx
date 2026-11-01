"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { insuranceTypes } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(3, "Indique o seu nome completo."),
  phone: z.string().min(9, "Indique um telefone válido."),
  email: z.string().email("Indique um email válido."),
  insuranceType: z.string().min(1, "Selecione um tipo de seguro."),
  message: z.string().optional(),
  hasCurrentInsurance: z.boolean().optional(),
  wantsChangeBroker: z.boolean().optional(),
  consent: z.boolean().refine(v => v === true, "Tem de aceitar a política de privacidade."),
  // honeypot
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm({
  compact = false,
  initialInsuranceType,
}: {
  compact?: boolean;
  initialInsuranceType?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, insuranceType: initialInsuranceType ?? "" },
  });

  const consent = watch("consent");
  const hasCurrent = watch("hasCurrentInsurance");
  const wantsChange = watch("wantsChangeBroker");

  const onSubmit = async (values: FormValues) => {
    // honeypot: if company is filled, silently drop
    if (values.company) {
      setSubmitted(true);
      reset();
      return;
    }
    try {
      const res = await fetch("/api/cotacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setSubmitted(true);
      reset();
      toast.success("Pedido enviado com sucesso!");
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
        <h3 className="font-serif text-2xl text-primary mb-2">Recebemos o seu pedido</h3>
        <p className="text-muted-foreground mb-6">Entraremos em contacto brevemente para esclarecer a sua necessidade e apresentar a simulação.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Enviar outro pedido
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} name="company" className="hidden" aria-hidden="true" />

      <div className={cn("grid gap-5", compact ? "" : "md:grid-cols-2")}>
        <div className="space-y-2">
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone *</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className={cn("grid gap-5", compact ? "" : "md:grid-cols-2")}>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="insuranceType">Tipo de seguro *</Label>
          <Controller
            name="insuranceType"
            control={control}
            render={({ field }) => (
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="insuranceType" ref={field.ref} onBlur={field.onBlur} aria-invalid={!!errors.insuranceType}>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {insuranceTypes.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.insuranceType && <p className="text-xs text-destructive">{errors.insuranceType.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem ou necessidade</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Descreva o que pretende segurar, capital, situações específicas, prazos..."
          {...register("message")}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex items-start gap-3 cursor-pointer text-sm">
          <Checkbox
            id="hasCurrent"
            checked={!!hasCurrent}
            onCheckedChange={(v) => setValue("hasCurrentInsurance", v === true)}
            className="mt-0.5"
          />
          <span className="text-muted-foreground leading-snug">Já tem seguro atual</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer text-sm">
          <Checkbox
            id="wantsChange"
            checked={!!wantsChange}
            onCheckedChange={(v) => setValue("wantsChangeBroker", v === true)}
            className="mt-0.5"
          />
          <span className="text-muted-foreground leading-snug">Pretende alterar o mediador</span>
        </label>
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm">
        <Checkbox
          id="consent"
          checked={!!consent}
          onCheckedChange={(v) => setValue("consent", v === true, { shouldValidate: true })}
          className="mt-0.5"
        />
        <span className="text-muted-foreground leading-snug">
          Aceito o tratamento dos meus dados para resposta a este pedido, conforme a{" "}
          <a href="/politica-privacidade" className="text-primary underline">Política de Privacidade</a>. *
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> A enviar...</>
        ) : (
          <>Pedir simulação sem compromisso <ArrowRight className="w-4 h-4 ml-1" /></>
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        Resposta típica em 1 dia útil. Sem compromisso. Os seus dados não são cedidos a terceiros para marketing.
      </p>
    </form>
  );
}

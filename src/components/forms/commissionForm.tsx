"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  address: z.string().min(5).max(100),
  message: z.string().min(5).max(500),
});

const formFields: { name: keyof z.infer<typeof formSchema>; placeholder: string }[] = [
  { name: "name", placeholder: "name*" },
  { name: "email", placeholder: "email*" },
  { name: "phone", placeholder: "phone*" },
  { name: "address", placeholder: "address*" },
  { name: "message", placeholder: "your message*" },
];

export default function CommissionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={fieldConfig.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#ef4826] hover:bg-[#26ef47] px-20 flex items-center cursor-pointer text-black uppercase"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

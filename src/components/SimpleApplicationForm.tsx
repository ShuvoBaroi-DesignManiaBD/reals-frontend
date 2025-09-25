"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Vārds ir obligāts"),
  companyName: z.string().optional(),
  email: z
    .string()
    .email("Nepareizs e-pasta formāts")
    .min(1, "E-pasts ir obligāts"),
  phone: z.string().min(1, "Telefons ir obligāts"),
});

type FormData = z.infer<typeof formSchema>;

const SimpleApplicationForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: FormData) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  return (
    <section className="w-full flex justify-center py-16 lg:py-20">
      <div className="max-w-screen-xl flex flex-col items-start bg-gradient-to-br from-[#109afc] via-[#7c3afc] to-[#c347fc] rounded-[20px] shadow-[4px_4px_28px_9px_rgba(209,81,255,0.2)] p-20 relative">
        {/* Header Section */}
        <div className="flex items-start justify-between self-stretch"></div>

        {/* Content Section */}
        <div className="flex items-start justify-between self-stretch gap-10">
          <div className="space-y-4">
            <h2 className="w-[342px] text-white font-poppins text-[44px] leading-[49px] tracking-[0.88px] font-normal">
              Pieteikties pasākumam!
            </h2>
            <p className="text-white font-poppins text-lg leading-[25px] tracking-[0]">
              Aizpildi īsu pieteikuma formu, un mēs Tev atsūtīsim piemērotāko
              pasākuma programmas piedāvājumu.
              <br />
              <br />
              Tu vari izvēlēties no jau gatavām programmām vai saņemt pielāgotu
              risinājumu tieši Tavam kolektīvam, klasei vai ģimenei.
              <br />
              <br />
              Mēs sazināsimies tuvāko 1–2 darba dienu laikā!
            </p>
          </div>

          {/* Form Fields Section */}
          <div className="w-full flex flex-col items-center self-stretch">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Vārds *"
                          className="h-16 placeholder:pb-10 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white text-xs" />
                    </FormItem>
                  )}
                />
                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Uzņēmuma nosaukums"
                          className="h-16 placeholder:pb-10 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Epasts *"
                          className="h-16 placeholder:pb-10 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Tālrunis *"
                          className="h-16 placeholder:pb-10 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex justify-end self-stretch mt-8">
                  <button
                    type="submit"
                    className="w-full bg-white border border-[#c347fc] rounded-[5px] py-3 text-[#c347fc] font-nunito text-[15px] font-medium uppercase tracking-wide hover:bg-[#c347fc] hover:text-white transition-colors duration-200"
                  >
                    Iesniegt Anketu
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleApplicationForm;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Vārds ir obligāts"),
  email: z
    .string()
    .email("Nepareizs e-pasta formāts")
    .min(1, "E-pasts ir obligāts"),
  phone: z.string().min(1, "Telefons ir obligāts"),
  eventType: z.string().min(1, "Pasākuma veids ir obligāts"),
  participantCount: z.string().min(1, "Dalībnieku skaits ir obligāts"),
  eventLocation: z.string().optional(),
  participants: z.string().min(1, "Dalībnieki ir obligāti"),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  budget: z.string().optional(),
  specialRequests: z.string().optional(),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const ApplicationFormSection: React.FC = () => {
  const [showForm, setShowForm] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      participantCount: "30-50",
      eventLocation: "",
      participants: "",
      eventDate: "",
      eventTime: "",
      budget: "",
      specialRequests: "",
      newsletter: false,
    },
  });

  const onSubmit = (values: FormData) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  const participantOptions = [
    { value: "līdz-30", label: "Līdz 30" },
    { value: "30-50", label: "30 - 50" },
    { value: "50-100", label: "50 - 100" },
    { value: "100-200", label: "100 - 200" },
    { value: "virs-200", label: "Virs 200" },
  ];

  return (
    <section className="w-full flex justify-center py-16 lg:py-24">
      <div className="max-w-screen-xl flex gap-20 justify-between relative rounded-[20px] bg-gradient-to-br from-primary via-[#7c3afc] to-secondary p-8 lg:p-16 xl:p-20 shadow-[4px_4px_28px_9px_rgba(209,81,255,0.2)]">
        <div className="mb-8 lg:mb-0 lg:w-[42%] space-y-4">
          <h2 className="text-white font-poppins text-3xl lg:text-[44px] leading-tight lg:leading-[49px] tracking-[0.88px] font-normal">
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[60%] max-w-[570px]"
          >
            {/* Form Fields */}
            <div className="flex-1 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Vārds *"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Epasts *"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
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
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Event Type */}
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                        >
                          <option value="">Pasākuma veids *</option>
                          <option value="korporatīvs">
                            Korporatīvs pasākums
                          </option>
                          <option value="dzimšanas-diena">
                            Dzimšanas diena
                          </option>
                          <option value="skolas-pasākums">
                            Skolas pasākums
                          </option>
                          <option value="ģimenes-pasākums">
                            Ģimenes pasākums
                          </option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg
                            width="18"
                            height="9"
                            viewBox="0 0 18 9"
                            fill="none"
                          >
                            <path
                              d="M1 1L9 7L17 1"
                              stroke="#3f3f3f"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Participant Count */}
              <FormField
                control={form.control}
                name="participantCount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] p-4">
                        <p className="text-[#3f3f3f] font-poppins text-sm font-light mb-5">
                          Dalībnieku skaits pasākumā *
                        </p>
                        <div className="space-y-2">
                          {participantOptions.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <div className="relative">
                                <input
                                  type="radio"
                                  name="participantCount"
                                  value={option.value}
                                  checked={field.value === option.value}
                                  onChange={() => field.onChange(option.value)}
                                  className="sr-only"
                                />
                                <div
                                  className={`w-[17px] h-[17px] rounded-full border ${
                                    field.value === option.value
                                      ? "border-[#109afc] bg-white"
                                      : "border-[#3a434a] bg-white"
                                  }`}
                                >
                                  {field.value === option.value && (
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#109afc] m-[2px]"></div>
                                  )}
                                </div>
                              </div>
                              <span
                                className={`text-black font-poppins text-sm ${
                                  field.value === option.value
                                    ? "font-medium"
                                    : "font-light"
                                }`}
                              >
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Event Location */}
              <FormField
                control={form.control}
                name="eventLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Pasākuma vieta"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Participants */}
              <FormField
                control={form.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                        >
                          <option value="">Kas piedalīsies pasākumā *</option>
                          <option value="kolēģi">Kolēģi</option>
                          <option value="ģimene">Ģimene</option>
                          <option value="draugi">Draugi</option>
                          <option value="skolēni">Skolēni</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg
                            width="18"
                            height="9"
                            viewBox="0 0 18 9"
                            fill="none"
                          >
                            <path
                              d="M1 1L9 7L17 1"
                              stroke="#3f3f3f"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Event Date */}
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Vēlamais pasākuma datums"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Event Time */}
              <FormField
                control={form.control}
                name="eventTime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <select
                          {...field}
                          className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                        >
                          <option value="">Vēlamais pasākuma laiks</option>
                          <option value="rīts">Rīts (9:00-12:00)</option>
                          <option value="diena">Diena (12:00-17:00)</option>
                          <option value="vakars">Vakars (17:00-22:00)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg
                            width="18"
                            height="9"
                            viewBox="0 0 18 9"
                            fill="none"
                          >
                            <path
                              d="M1 1L9 7L17 1"
                              stroke="#3f3f3f"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Aptuvenais budžets"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Special Requests */}
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        placeholder="Īpašās vēlmes (piezīmes)"
                        rows={3}
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#c1d5e3] rounded-[10px] text-[#3f3f3f] font-poppins text-sm font-light placeholder:text-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Newsletter Checkbox */}
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-4 pt-6">
                    <FormControl>
                      <div className="relative mt-1">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="size-5 accent-primary text-white rounded"
                        />

                        {/* <div
                              className={`w-5 h-5 border border-[#c1d5e3] rounded-sm bg-white/90 backdrop-blur-sm cursor-pointer ${
                                field.value ? "bg-[#109afc]" : ""
                              }`}
                              onClick={() => field.onChange(!field.value)}
                            >
                              {field.value && (
                                <svg
                                  className="w-3 h-3 text-white m-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div> */}
                      </div>
                    </FormControl>
                    <p className="text-white font-poppins text-xs font-light leading-relaxed">
                      Piekrītu saņemt norādītajā e-pastā- bezmaksas, publiskos
                      pasākumus, sezonas akcijas, īpašos mārketinga
                      piedāvājumus, manai biznesa izaugsmei!
                    </p>
                    <FormMessage className="text-white text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit Buttons */}
              <div className="space-y-2 pt-6">
                <button
                  type="submit"
                  className="w-full bg-white border border-[#c347fc] rounded-[5px] py-3 px-6 text-[#c347fc] font-nunito text-sm font-medium uppercase tracking-wide hover:bg-[#c347fc] hover:text-white transition-colors duration-200"
                >
                  Iesniegt Anketu
                </button>
                <button
                  type="button"
                  className="w-full bg-[#c347fc] rounded-[5px] py-3 px-6 text-white font-nunito text-sm font-medium uppercase tracking-wide hover:bg-[#a63dd4] transition-colors duration-200"
                >
                  Turpināt, lai izveidotu unikālu pasākuma programmu
                </button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ApplicationFormSection;

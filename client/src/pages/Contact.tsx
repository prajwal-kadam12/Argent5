import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactSubmit } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";

export default function Contact() {
  const mutation = useContactSubmit();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-base md:text-lg text-slate-600 px-4">
              Have questions about our nutritional solutions? We're here to provide expert guidance and support.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start px-2 sm:px-0">
            {/* Contact Information & Map */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-2.5 rounded-lg text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Enterprise, D-128/129, Okhla Industrial Area,<br />
                        Phase-I, New Delhi – 110020, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-2.5 rounded-lg text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                      <a href="tel:+919560073833" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                        +91 95600 73833
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-2.5 rounded-lg text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                      <a href="mailto:bm@intercorp.in" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                        bm@intercorp.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.418485290638!2d77.2713!3d28.5262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3fa4aaaaaab%3A0x673479632490076a!2sOkhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1715620000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Intercorp Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-500 text-sm">We typically respond within 24 business hours.</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your inquiry..." 
                            className="min-h-[140px] bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

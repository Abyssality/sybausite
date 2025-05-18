import { Meteors } from "@/components/ui/meteors"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Search, FileText, HelpCircle, MessageSquare, Book } from "lucide-react"

export const metadata = {
  title: "Help Center - Orbyte Hosting",
  description: "Find answers to common questions and get help with your Orbyte Hosting services.",
}

export default function HelpPage() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Help Center
        </h1>
        <p className="text-blue-300/80 max-w-2xl mx-auto">
          Find answers to common questions and get help with your Orbyte Hosting services.
        </p>
      </div>

      <div className="relative z-10 mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full bg-blue-950/10 border border-blue-900/20 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16">
        {[
          {
            icon: <FileText className="h-8 w-8 text-blue-500" />,
            title: "Documentation",
            description: "Detailed guides and documentation for all our services.",
            link: "/help/docs",
          },
          {
            icon: <HelpCircle className="h-8 w-8 text-blue-500" />,
            title: "FAQs",
            description: "Answers to commonly asked questions.",
            link: "#faqs",
          },
          {
            icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
            title: "Contact Support",
            description: "Get in touch with our support team.",
            link: "/help/contact",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="bg-blue-950/10 border border-blue-900/20 rounded-xl p-6 hover:bg-blue-900/20 transition-colors flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-blue-300/80">{item.description}</p>
          </Link>
        ))}
      </div>

      <div className="relative z-10" id="faqs">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Frequently Asked Questions</h2>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="h-5 w-5 text-blue-500" />
            <span>Getting Started</span>
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-blue-900/20 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-blue-900/10 transition-colors">
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-blue-950/10">
                <p className="text-blue-300/80">
                  To create an account, click on the "Get Started" button on our homepage and follow the registration
                  process. You'll need to provide your email address and create a password. Once registered, you can log
                  in to your account and start setting up your servers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-blue-900/20 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-blue-900/10 transition-colors">
                How do I purchase a hosting plan?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-blue-950/10">
                <p className="text-blue-300/80">
                  After creating an account, navigate to our Plans page and select the plan that best suits your needs.
                  Click on the "Purchase Now" button, and you'll be guided through the payment process. Once your
                  payment is confirmed, your server will be set up and ready to use within minutes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="h-5 w-5 text-blue-500" />
            <span>Minecraft Servers</span>
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-4" className="border border-blue-900/20 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-blue-900/10 transition-colors">
                How do I make my Minecraft server "cracked"?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-blue-950/10">
                <p className="text-blue-300/80">
                  To make your Minecraft server accessible to players with non-premium accounts (often called
                  "cracked"), you need to set <code>online-mode=false</code> in your server.properties file. Here's how:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2 text-blue-300/80">
                  <li>Log in to your server control panel</li>
                  <li>Navigate to the Files section</li>
                  <li>Open the server.properties file</li>
                  <li>
                    Find the line that says <code>online-mode=true</code> and change it to{" "}
                    <code>online-mode=false</code>
                  </li>
                  <li>Save the file and restart your server</li>
                </ol>
                <p className="mt-2 text-blue-300/80">
                  Please note that running a cracked server may expose you to security risks, as players don't need to
                  authenticate with Mojang's servers.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

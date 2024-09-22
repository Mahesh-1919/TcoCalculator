import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const faqItems = [
  {
    question: "What is Total Cost of Ownership (TCO)?",
    answer:
      "Total Cost of Ownership (TCO) is a comprehensive assessment of the costs associated with a product, service, or system over its entire life cycle. It includes both direct and indirect costs incurred during the acquisition, operation, maintenance, and eventual disposal or replacement of the asset",
  },
  {
    question: "How does the TCO calculator work?",
    answer:
      "Total Cost of Ownership (TCO) is a comprehensive assessment of the costs associated with a product, service, or system over its entire life cycle. It includes both direct and indirect costs incurred during the acquisition, operation, maintenance, and eventual disposal or replacement of the asset",
  },
  {
    question: "What information do I need to use the TCO calculator?",
    answer: "To use the TCO calculator...",
  },
  {
    question: "Can I compare multiple vehicles using the calculator?",
    answer: "Yes, you can...",
  },
  {
    question: "What are the factors considered in the TCO calculation?",
    answer: "The factors considered...",
  },
  {
    question: "How accurate are the results provided by the TCO calculator?",
    answer: "The accuracy...",
  },
  {
    question: "Do the calculations include government incentives or subsidies?",
    answer: "The calculations...",
  },
  {
    question: "Why do I need to enter my state and vehicle model?",
    answer: "Entering your state and vehicle model...",
  },
  {
    question:
      "What is the purpose of the 'Consider Battery Replacement' option?",
    answer: "The 'Consider Battery Replacement' option...",
  },
  {
    question: "How do I interpret the results of the TCO calculator?",
    answer: "To interpret the results...",
  },
  {
    question: "Can I save or share the results of the TCO calculation?",
    answer: "Yes, you can save or share...",
  },
  {
    question: "Are there any limitations to the TCO calculator?",
    answer: "The TCO calculator has some limitations...",
  },
  {
    question: "Is the TCO calculator mobile-friendly?",
    answer: "Yes, the TCO calculator...",
  },
  {
    question: "Who should use the TCO calculator?",
    answer: "The TCO calculator is designed for...",
  },
];

export default function Component() {
  return (
    <div className="min-h-screen bg-whiteflex flex-col">
      <div className="bg-teal-500 text-white py-2 px-4 container mx-auto">
        FAQ
      </div>
      <div className="flex-grow container mx-auto px-4 py-8 ">
        <Accordion
          type="single"
          collapsible
          className="md:max-w-4xl md:mx-auto"
        >
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="bg-teal-500 text-white p-4 hover:bg-teal-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold mb-4 md:mb-0">Techlanz</div>
            <div className="flex items-center">
              <Input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="mr-2 bg-gray-700 text-white"
              />
              <Button className="bg-teal-500 hover:bg-teal-600">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={16} />
                <span>info@techlanze.com</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2" size={16} />
                <span>+91 9047116404</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>HSR, Bangalore Karnataka</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Techlanz</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Products</h3>
              <ul>
                <li>Courses</li>
                <li>Services</li>
                <li>Products & Solutions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Resources</h3>
              <ul>
                <li>Community</li>
                <li>Articles</li>
                <li>Webinars</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Youtube size={24} />
            <Facebook size={24} />
            <Twitter size={24} />
            <Instagram size={24} />
            <Linkedin size={24} />
          </div>

          <div className="text-center mt-8">
            <p>&copy; 2024 Techlanz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

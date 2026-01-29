'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, Check, Mail, BarChart3, Users, Clock, Menu, X } from "lucide-react"

export default  function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Create and send professional invoices in under a minute.",
      description: "Streamline your invoicing process with our intuitive interface"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "See every payment status at a glance from one dashboard.",
      description: "Real-time payment tracking and visibility"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Understand your income and outstanding payments instantly.",
      description: "Comprehensive financial insights at your fingertips"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Manage clients and invoice history without extra tools.",
      description: "All your business data in one centralized location"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₦5,000",
      period: "/month",
      description: "Perfect for freelancers",
      features: [
        "Up to 50 invoices per month",
        "Basic invoice templates",
        "Email notifications",
        "30-day invoice history",
        "Basic reports",
        "Email support"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Premium",
      price: "₦10,000",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Unlimited invoices",
        "Custom branding",
        "Automated payment reminders",
        "Full invoice history",
        "Advanced analytics & reports",
        "Priority support",
        "Multi-currency support",
        "API access"
      ],
      cta: "Start Free Trial",
      highlighted: true
    }
  ]

  const faqs = [
    {
      question: "How do I get started with InvoicePro?",
      answer: "Getting started is simple! Sign up with your email, create your company profile, and you can send your first invoice in minutes. We provide templates and guides to help you along the way."
    },
    {
      question: "Can I customize my invoices with my company branding?",
      answer: "Yes! With our Premium plan, you can fully customize invoices with your logo, company colors, and custom fields to match your brand identity."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major payment methods including bank transfers, cards, mobile money, and digital wallets. Your clients can pay directly through the invoice link."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for both plans. No credit card required to get started."
    },
    {
      question: "Can I export my data?",
      answer: "Absolutely! You can export invoices, reports, and client data in multiple formats including PDF and CSV at any time."
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-level encryption (256-bit SSL) and comply with international data protection standards. Your data is automatically backed up daily."
    }
  ]

  const companies = [
    { name: "Google", initials: "G" },
    { name: "Microsoft", initials: "MS" },
    { name: "Amazon", initials: "A" },
    { name: "Stripe", initials: "S" },
    { name: "Shopify", initials: "SH" },
    { name: "Slack", initials: "SL" }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">InvoicePro</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#faq" className="block py-2 text-gray-700 hover:text-blue-600">FAQ</a>
              <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  One dashboard to invoice clients, track payments, and <span className="text-blue-600">control cash flow.</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stop juggling spreadsheets. Automate your invoicing, get paid faster, and manage your business finances in one powerful platform.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto w-fit">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>

            {/* Right - Dashboard Mockup */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl opacity-5"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 h-full flex flex-col justify-between border border-gray-700 shadow-2xl">
                {/* Dashboard Header */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold text-lg">Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="space-y-4 flex-1">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-4">
                    <p className="text-blue-100 text-sm">Total Income</p>
                    <p className="text-white text-2xl font-bold mt-1">₦245,000</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Pending</p>
                      <p className="text-white font-bold mt-1">₦45,000</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Paid</p>
                      <p className="text-white font-bold mt-1">₦200,000</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 mt-4">
                    <p className="text-gray-400 text-sm">Recent Invoice</p>
                    <p className="text-white font-semibold mt-2">Invoice #014</p>
                    <p className="text-blue-400 text-sm mt-1">USD 1200</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-24 h-24 bg-blue-500 opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Your Business</h2>
            <p className="text-xl text-gray-600">Everything you need to manage invoicing and payments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Send Invoices Automatically Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Sending invoices automatically
              </h2>
              <p className="text-lg text-gray-300">
                This can reduce the risk of forgetting to send invoices and also avoid late payments from customers which results in disrupted cash flow and company operations.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto w-fit">
                Get Started
              </Button>
            </div>

            {/* Right - Invoice Cards */}
            <div className="relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Card */}
                <div className="absolute w-72 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-2xl transform rotate-3 z-20">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-blue-100 text-sm">Due 10 Jan</p>
                      <h3 className="text-white text-2xl font-bold mt-2">Invoice #014</h3>
                    </div>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">B</span>
                    </div>
                  </div>
                  <p className="text-blue-100 text-xs mb-1">ITEMS</p>
                  <p className="text-white font-semibold">System Information</p>
                  <p className="text-blue-200 text-2xl font-bold mt-4">USD1200</p>
                </div>

                {/* Back Cards */}
                <div className="absolute w-64 h-72 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-xl transform -rotate-2 z-10 top-8 left-8 border border-gray-600">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Invoice Status</p>
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                          <span className="text-gray-300 text-sm">Unpaid</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                          <span className="text-gray-300 text-sm">Paid</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
                          <span className="text-gray-300 text-sm">Overdue</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-tl-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12">Trusted by over 100+ startups and businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-sm text-center">{company.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 border transition ${
                  plan.highlighted
                    ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl transform scale-105"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <Button
                  asChild
                  className={`w-full mb-8 py-6 text-lg h-auto ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <button>{plan.cta}</button>
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900">Features included:</p>
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition transform ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IP</span>
                </div>
                <span className="text-white font-bold text-lg">InvoicePro</span>
              </div>
              <p className="text-sm">Making invoicing simple for businesses worldwide.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Updates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; 2026 InvoicePro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

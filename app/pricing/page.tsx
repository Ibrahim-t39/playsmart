import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Access to select courses",
      "Limited career center resources",
      "Community forum access",
    ],
    cta: "Get Started",
    href: "/signup",
  },
  {
    name: "Pro",
    price: "$10/month",
    features: [
      "Full access to all courses",
      "Priority mentorship matching",
      "Advanced career center tools",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
    href: "/subscribe",
  },
  {
    name: "School",
    price: "$5,000–$20,000/year",
    features: [
      "Bulk student accounts",
      "Custom workshops and courses",
      "Dedicated support team",
      "Analytics and progress tracking",
      "Integration with school systems",
    ],
    cta: "Contact Sales",
    href: "/contact-sales",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-300">
            Select the plan that best fits your needs and start your STEM-Sports journey today.
          </p>
        </div>

        {/* Plans Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-green-400 to-blue-500 text-black border border-green-500"
                  : "bg-gray-800"
              }`}
            >
              <div className="p-8">
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    plan.highlighted ? "text-white" : "text-green-400"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-4xl font-extrabold mb-8 ${
                    plan.highlighted ? "text-white" : "text-gray-200"
                  }`}
                >
                  {plan.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-6 h-6 text-green-400 mr-3" />
                      <span
                        className={`${
                          plan.highlighted ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`w-full py-3 rounded-lg font-medium text-lg block text-center transition-colors duration-300 ${
                    plan.highlighted
                      ? "bg-white text-green-500 hover:bg-gray-200"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We offer tailored plans for schools and organizations. Get in touch
            with our team to discuss your specific needs.
          </p>
          <a
            href="/contact-sales"
            className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-8 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition-transform transform hover:scale-105"
          >
            Contact Our Sales Team
          </a>
        </div>
      </div>
    </div>
  );
}

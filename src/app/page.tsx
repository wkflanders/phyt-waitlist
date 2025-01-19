'use client';

import { useState } from "react";

import { CornerDownRight } from 'lucide-react';
import { inconsolata } from './fonts';
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzt0PTC429uY0FdeiLlS5Jw9PS9gbexr49bKrd99B3wp4_Iwg8k6cGTvMKmhTngMBK85A/exec',
        {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors' // Add this to handle CORS
        }
      );

      // Since we're using no-cors, we won't get a real response status
      // Instead, assume success if we get here without an error
      setStatus('success');
      setEmail('');

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/IMG_0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      <div className="relative flex h-screen justify-center items-center">
        <div className="flex-grid">
          <div className="mb-8 hover:cursor-default">
            <img
              src="/PHYT.svg"
              alt="PHYT Logo"
              className="h-24 w-auto"
            />
          </div>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl hover:cursor-default`}>Run.</h2>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl hover:cursor-default`}>Bet.</h2>
          <h2 className={`${inconsolata.className} text-phyt_blue leading-6 tracking-wider text-xl font-semibold mb-8 hover:cursor-default`}>Earn.</h2>
          <p className="font-inconsolata text-gray-100 tracking-widest mb-3 hover:cursor-default">It&apos;ll pay to be early...</p>
          <form onSubmit={handleSubmit} className="relative h-12">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 border-2 border-gray-500 rounded-lg pl-4 pr-12 py-1"
              placeholder="email"
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="absolute right-0 top-0 text-gray-500 p-1 rounded-lg border-2 border-gray-400 bg-gray-200 disabled:opacity-50"
            >
              <CornerDownRight />
            </button>
          </form>
          <p className="font-inconsolata text-gray-100 tracking-wider hover:cursor-default">Be early.</p>
          {status === 'success' && (
            <p className="font-inconsolata text-green-500 tracking-wider mb-2 hover:cursor-default">Thanks for signing up!</p>
          )}
          {status === 'error' && (
            <p className="font-inconsolata text-red-500 tracking-wider mb-2 hover:cursor-default">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-row items-center space-x-5 py-2">
        <a target="_blank" href="https://discord.gg/bdVmWMtrZ8">
          <Image src="/discord.png" alt="discord" className="invert" width={30} height={30} />
        </a>
        <a target="_blank" href="https://x.com/Phytdotfun">
          <Image src="/x.png" alt="twitter" className="invert" width={23} height={23} />
        </a>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-gray-200 hover:text-phyt_blue font-inconsolata"
        >
          Privacy and Terms
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-600 rounded-lg w-4/5 font-inconsolata max-w-4xl max-h-[80%] overflow-y-auto p-6 text-gray-300">
            <h1 className="text-2xl font-semibold mb-4">Privacy and Terms</h1>
            <h4 className="text-xl font-bold mb-4">Last Updated: November 20, 2024</h4>

            <p>
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and informs you of your privacy rights and how the law protects you.
            </p>

            <p>
              By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h4 className="text-lg font-semibold mt-4">Interpretation and Definitions</h4>

            <h5 className="text-md font-bold mt-2">Interpretation</h5>
            <p>
              The words with initial letters capitalized have meanings defined under the following conditions. These definitions apply whether they appear in singular or plural form.
            </p>

            <h5 className="text-md font-bold mt-2">Definitions</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
              <li>
                <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party. &quot;Control&quot; means ownership of 50% or more of shares, equity interest, or other securities.
              </li>
              <li>
                <strong>Company:</strong> CM Labs, referred to as &quot;We,&quot; &quot;Us,&quot; or &quot;Our,&quot; located at 810 Seashore Road, NJ, 08204.
              </li>
              <li><strong>Cookies:</strong> Small files placed on your device to track activity and improve your experience.</li>
              <li><strong>Country:</strong> Refers to New Jersey, United States.</li>
              <li>
                <strong>Device:</strong> Any device that can access the Service, such as a computer, cellphone, or tablet.
              </li>
              <li>
                <strong>Personal Data:</strong> Information relating to an identified or identifiable individual.
              </li>
              <li><strong>Service:</strong> Refers to the Website, phyt.fun.</li>
              <li>
                <strong>Service Provider:</strong> A third-party entity that processes data on behalf of the Company.
              </li>
              <li>
                <strong>Usage Data:</strong> Data collected automatically, such as IP address, browser type, and time spent on pages.
              </li>
              <li>
                <strong>You:</strong> The individual or legal entity accessing or using the Service.
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Collecting and Using Your Personal Data</h4>

            <h5 className="text-md font-bold mt-2">Types of Data Collected</h5>

            <h6 className="text-sm font-semibold mt-2">Personal Data</h6>
            <p>
              While using our Service, we may ask you to provide certain personally identifiable information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>First and last name</li>
              <li>Usage Data</li>
            </ul>

            <h6 className="text-sm font-semibold mt-2">Usage Data</h6>
            <p>
              Usage Data is collected automatically and may include details such as your device&apos;s IP address, browser type, and the pages you visit.
            </p>

            <h5 className="text-md font-bold mt-2">Tracking Technologies and Cookies</h5>
            <p>
              We use cookies and similar technologies to track activity and improve our Service. You can configure your browser to refuse cookies, but some parts of the Service may not function properly.
            </p>

            <h6 className="text-sm font-semibold mt-2">Types of Cookies Used</h6>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Necessary Cookies:</strong> Essential for providing the Service.</li>
              <li>
                <strong>Functionality Cookies:</strong> Used to remember your preferences and enhance your experience.
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Use of Your Personal Data</h4>
            <p>We may use your Personal Data for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining the Service</li>
              <li>Managing your account</li>
              <li>Contacting you about updates or offers</li>
              <li>Improving our Service through data analysis</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Retention of Your Personal Data</h4>
            <p>
              We retain your Personal Data as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>

            <h4 className="text-lg font-semibold mt-4">Disclosure of Your Personal Data</h4>
            <p>
              Your Personal Data may be disclosed in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business transactions, such as mergers or acquisitions</li>
              <li>Legal obligations or requests by public authorities</li>
              <li>Protecting the rights and safety of the Company and users</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Children&apos;s Privacy</h4>
            <p>
              Our Service is not intended for individuals under 13. If we learn that we have collected Personal Data from a child under 13 without parental consent, we will delete it.
            </p>

            <h4 className="text-lg font-semibold mt-4">Changes to This Privacy Policy</h4>
            <p>
              We may update this Privacy Policy periodically. Changes are effective when posted on this page.
            </p>

            <h4 className="text-lg font-semibold mt-4">Contact Us</h4>
            <p>If you have questions about this Privacy Policy, you can contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By X: <a href="https://x.com/SteveFlanders22" className="text-blue-600 underline">@SteveFlanders22</a></li>
            </ul>

            <button
              onClick={() => setIsModalOpen(false)}
              className="font-inconsolata py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

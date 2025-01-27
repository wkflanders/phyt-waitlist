// components/PrivacyPolicy.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface PrivacyPolicyProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Focus on the modal when it opens
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div
                className="bg-gray-600 rounded-lg w-4/5 font-inconsolata max-w-4xl max-h-[80%] overflow-y-auto p-6 text-gray-300"
                ref={modalRef}
                tabIndex={-1}
            >
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
                        <strong>Company:</strong> Phyt.fun, referred to as &quot;We,&quot; &quot;Us,&quot; or &quot;Our,&quot; located at 810 Seashore Road, NJ, 08204.
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
                        <strong>Health Data:</strong> Information related to the physical health of an individual.
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
                    <li>Health Data</li>
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
                    <li>Processing health-related information to enhance user experience</li>
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
                    <li>By Email: <a href="mailto:stephen@phyt.fun" className="underline">stephen@phyt.fun</a> or <a href="mailto:william@phyt.fun" className="underline">william@phyt.fun</a></li>
                    <li>By X: <a href="https://x.com/SteveFlanders22" className="underline">@SteveFlanders22</a></li>
                </ul>

                <button
                    onClick={onClose}
                    className="font-inconsolata py-2 rounded-lg mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4"
                >
                    Close
                </button>
            </div>
        </div>
    );

};

export default PrivacyPolicy;

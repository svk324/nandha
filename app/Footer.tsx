import Link from "next/link";
import React from "react";

const FooterSection = () => {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt="Logo"
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            {["twitter", "facebook", "instagram", "linkedin"].map((social, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        title={social}
                                        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                    >
                                        {/* SVG icons for social platforms */}
                                        {/* Use a different SVG for each social platform */}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            {["About", "Features", "Works", "Career"].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        title={link}
                                        className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        title={link}
                                        className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LearnHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground">
                Sitemap
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
            </div>
        </section>
    );
};

export default FooterSection;

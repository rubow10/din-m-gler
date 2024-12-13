"use client";

import NavHeader from "@components/NavHeader";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavHeader />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center bg-blue-50 relative">
        

        {/* Black SVG below "Hov!" */}
        <img
          src="/svg/black.svg"
          alt="Black Rectangle"
          className="w-36 mt-2"
        />

        {/* Error Message */}
        <p className="text-gray-600 text-lg mt-6">
          Du er havnet på en side som ikke findes! <br />
          Det er kedeligt - vi har enten en besvær af et ledt
          vildt i vores internettropper, <br /> og det beder om gå tilbage.
        </p>
        <Link
          href="/"
          className="bg-black text-white py-2 px-6 rounded-md text-lg hover:bg-gray-800 mt-4"
        >
          Tilbage til forsiden
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ghor Bari Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ghor Bari</h3>
            <p className="text-sm">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="mt-4">
              <span className="block font-bold">Business Hour</span>
              Monday - Friday: 10:00am - 06:00pm
            </p>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/helpDesk" className="hover:underline">
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Instagram Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative">
                  {/* Placeholder for images */}
                  <div className="w-full h-20 bg-gray-300 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-6">
          All Rights Reserved by At Bank 2020
        </p>
      </footer>
    </div>
  );
}





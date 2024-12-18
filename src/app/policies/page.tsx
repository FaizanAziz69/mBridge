import { Footer, Navbar } from '@/components';
import { FC } from 'react';

const Policies: FC = () => {
  return (
    <div className='!bg-black'>
      <Navbar />
      <div className="p-6 sm:p-8 lg:p-10 bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how StyleHaws collects, uses, and protects your personal information when you use our app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="font-semibold">Personal Information:</h3>
            <p >
              We collect personal details such as your name, email address, and payment information when you create an account or place an order.
            </p>
            <h3 className="font-semibold mt-4">Usage Data:</h3>
            <p>
              We collect data about how you interact with the app, including pages viewed, time spent, and other usage metrics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              The information we collect is used to provide, improve, and secure our app. This includes:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Managing user accounts and orders</li>
              <li>Improving app functionality and user experience</li>
              <li>Processing payments securely</li>
              <li>Communicating with users regarding their orders or support inquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Security</h2>
            <h3 className="font-semibold">Sharing:</h3>
            <p>
              We do not sell or rent your personal data. Your information may be shared with third-party services for payment processing and order fulfillment.
            </p>
            <h3 className="font-semibold mt-4">Security:</h3>
            <p>
              We take appropriate security measures to protect your personal information, including encryption and secure servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience and collect usage data. You can disable cookies through your browser settings if preferred.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We reserve the right to update our Privacy Policy at any time. Users will be notified of any significant changes.
            </p>
          </section>

          <p className="text-center mt-6">
            By using StyleHaws, you acknowledge that you have read, understood, and agree to this Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policies;

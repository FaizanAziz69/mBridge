import { Footer, Navbar } from '@/components';
import { FC } from 'react';

const Terms: FC = () => {
  return (
    <div >
    <Navbar />
    <div className="p-6 sm:p-8 lg:p-10 bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By using StyleHaws, you agree to these Terms and Conditions, our Privacy Policy, and any other policies or guidelines that may be posted on the app. If you do not agree with these terms, please do not use the app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
          <h3 className="font-semibold">Designers:</h3>
          <p>
            To create a profile, you must register as a designer and provide accurate information about your services and dresses. You must be of legal age to enter into binding contracts in your jurisdiction.
          </p>
          <h3 className="font-semibold mt-4">Customers:</h3>
          <p>
            To place orders, you must register as a customer and provide accurate information for order fulfillment and communication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Designer Profiles</h2>
          <p>
            Designers can showcase their dresses on their profiles, which will be visible to customers. Designers are responsible for ensuring that all information, including images and descriptions, is accurate and up-to-date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Custom Orders</h2>
          <h3 className="font-semibold">Placing Orders:</h3>
          <p>
            Customers may customize and place orders for dresses. The designer will provide a final order quotation based on the customization requested.
          </p>
          <h3 className="font-semibold mt-4">Acceptance of Quotation:</h3>
          <p>
            If the customer accepts the quotation, the order will be placed, and payment must be made in advance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment and Transactions</h2>
          <p>
            <span className="font-semibold">Payment Process:</span> Customers must make payment in advance upon acceptance of the quotation. Payments are processed through the app and held in the app’s account until the order is completed.
          </p>
          <p className="mt-4">
            <span className="font-semibold">New Designers:</span> Payments for orders by new designers will remain in the app’s account until the order is delivered. Designers may only cash out payments after the order is completed and shipped.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Experienced Designers:</span> Designers with a minimum of 10 successful orders may request to cash out payments after the order is completed but before shipping the dress.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Fulfillment and Shipping</h2>
          <p>
            Designers are responsible for the fulfillment and shipping of orders. All shipping costs, timelines, and handling must be clearly communicated to customers. Designers must ensure timely delivery and provide tracking information if available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Refunds and Disputes</h2>
          <h3 className="font-semibold">Refunds:</h3>
          <p>
            Refunds are subject to the app's refund policy and will be processed if there is an issue with the order. The app will mediate disputes between customers and designers.
          </p>
          <h3 className="font-semibold mt-4">Disputes:</h3>
          <p>
            In case of disputes regarding orders or payments, the app will review the issue and make a decision based on the provided evidence and our policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
          <h3 className="font-semibold">Designers:</h3>
          <p>
            You are responsible for fulfilling orders as described, shipping on time, and providing accurate quotations. You must adhere to all relevant laws and regulations in your jurisdiction.
          </p>
          <h3 className="font-semibold mt-4">Customers:</h3>
          <p>
            You are responsible for providing accurate order details and making timely payments. You must communicate promptly with designers regarding any issues or questions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">App Usage</h2>
          <p>
            You agree to use the app in compliance with all applicable laws and not to engage in any activities that may harm or disrupt the app’s operation or other users' experiences.
          </p>
        </section>

        <p className="text-center mt-6">
          By using StyleHaws, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Terms;

import React from 'react'
import Navbar from '@/components/Navbar'

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">Last Updated: May 1, 2025</p>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                <p>
                  Billion Dollar Contractor ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                <p>We collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personal information such as name, email address, phone number, and company information when you fill out forms or subscribe to our services.</li>
                  <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                  <li>Records and copies of your correspondence if you contact us.</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p>We use information that we collect about you or that you provide to us:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>To present our website and its contents to you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To fulfill any other purpose for which you provide it.</li>
                  <li>To notify you about changes to our website or any products or services we offer.</li>
                  <li>To improve our website and services.</li>
                  <li>In any other way we may describe when you provide the information.</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclosure of Your Information</h2>
                <p>We may disclose aggregated information about our users without restriction. We may disclose personal information:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>To our subsidiaries and affiliates.</li>
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>To fulfill the purpose for which you provide it.</li>
                  <li>For any other purpose disclosed by us when you provide the information.</li>
                  <li>To comply with any court order, law, or legal process.</li>
                  <li>To enforce or apply our terms of use and other agreements.</li>
                  <li>If we believe disclosure is necessary to protect the rights, property, or safety of our company, our customers, or others.</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p>
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our website, and any transmission is at your own risk.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Our Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new Privacy Policy on this page with a notice that the Privacy Policy has been updated.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p>
                  To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> info@billiondollarcontractor.com</p>
                  <p><strong>Phone:</strong> 1-888-850-2095</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Privacy 
import React from 'react'
import Navbar from '@/components/Navbar'

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">Last Updated: May 1, 2025</p>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Billion Dollar Contractor ("we," "our," or "us") regarding your use of our website, products, and services (collectively, the "Services").
                </p>
                <p className="mt-4">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to the Terms</h2>
                <p>
                  We may revise these Terms at any time by posting an updated version on our website. Your continued use of the Services after we post any modifications to the Terms will constitute your acknowledgment of the modifications and your consent to be bound by the modified Terms.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Access and Use of Services</h2>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for your personal or internal business purposes, subject to your compliance with these Terms.
                </p>
                <p className="mt-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Use the Services in any way that violates any applicable law or regulation.</li>
                  <li>Use the Services for any harmful, fraudulent, or deceptive purpose.</li>
                  <li>Attempt to gain unauthorized access to any part of the Services, other accounts, or computer systems.</li>
                  <li>Interfere with the proper functioning of the Services.</li>
                  <li>Collect or harvest any information from the Services without our permission.</li>
                  <li>Copy, modify, create derivative works of, distribute, or publicly display any content from the Services without our prior written consent.</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property Rights</h2>
                <p>
                  The Services and all content, features, and functionality thereof, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by us, our licensors, or other providers and are protected by United States and international copyright, trademark, patent, and other intellectual property or proprietary rights laws.
                </p>
                <p className="mt-4">
                  Nothing in these Terms grants you any right, title, or interest in the Services or any content, features, or functionality thereof.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">User Content</h2>
                <p>
                  Our Services may allow you to post, upload, or submit content. You retain ownership of any intellectual property rights that you hold in that content. When you post, upload, or submit content to or through our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, distribute, and display that content in connection with the Services.
                </p>
                <p className="mt-4">
                  You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>You own or control all rights in and to the content you post, upload, or submit.</li>
                  <li>All of your content is accurate and does not violate these Terms.</li>
                  <li>Your content does not infringe upon any intellectual property right or other right of any person or entity.</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Termination</h2>
                <p>
                  We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p className="mt-4">
                  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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

export default Terms 
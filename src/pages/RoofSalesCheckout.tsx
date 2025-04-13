import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GHLFormEmbed from '@/components/GHLFormEmbed';

/**
 * Checkout page for Roof Sales Bootcamp using GHL forms for payment processing.
 * 
 * NOTE: Currently using GHL form IDs from the forms created in GHL:
 * 1. Early Bird form: GHL form with ID bWJeCTvmhZPem9goQjRf
 * 2. Standard form: Need to create a form for this product
 */
function RoofSalesCheckout() {
  // Get plan type from URL query parameters
  const searchParams = new URLSearchParams(window.location.search);
  const plan = searchParams.get('plan') || 'early';
  
  // Set the correct form ID based on the plan parameter
  const getFormId = () => {
    switch(plan) {
      case 'early':
        return 'bWJeCTvmhZPem9goQjRf'; // Early bird GHL form ID
      case 'standard':
        return '67fc2a1d846c488583c59b01'; // Still using product ID - Replace with Standard form ID when created
      default:
        return 'bWJeCTvmhZPem9goQjRf'; // Default to early bird
    }
  };

  // Get display information based on plan
  const getPlanInfo = () => {
    switch(plan) {
      case 'early':
        return {
          title: 'Early Bird Enrollment - Solar to Roof Bootcamp',
          price: '$1,895',
          description: 'Complete your enrollment at our special early bird price. Only a few spots remaining!'
        };
      case 'standard':
        return {
          title: 'Standard Enrollment - Solar to Roof Bootcamp',
          price: '$2,495',
          description: 'Complete your enrollment in our comprehensive Solar to Roof Bootcamp program.'
        };
      default:
        return {
          title: 'Early Bird Enrollment - Solar to Roof Bootcamp',
          price: '$1,895',
          description: 'Complete your enrollment at our special early bird price. Only a few spots remaining!'
        };
    }
  };

  const planInfo = getPlanInfo();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{planInfo.title} - Contractor Growth Systems</title>
        <meta name="description" content={planInfo.description} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Complete Your Enrollment</h1>
              <p className="text-xl text-gray-600">{planInfo.title} - {planInfo.price}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <GHLFormEmbed 
                formId={getFormId()}
                height="1746px"
                title="Solar to Roof Bootcamp Checkout"
                showTitle={false}
                containerClassName="w-full"
              />
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Your Investment is Protected</h3>
              <p className="text-gray-700">
                If you follow our system and don't close your first deal within 60 days of completing 
                the bootcamp, we'll continue working with you at no additional cost until you do.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default RoofSalesCheckout; 
import React from 'react';
import BusinessGrowthDashboard from '@/components/BusinessGrowthDashboard';
import Navbar from '@/components/Navbar';

function BusinessGrowth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <BusinessGrowthDashboard />
      </main>
    </div>
  );
}

export default BusinessGrowth; 
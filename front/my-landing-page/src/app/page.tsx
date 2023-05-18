import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
      </header>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Our Mission</h2>
          <p>Insert your mission statement here</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Our Vision</h2>
          <p>Insert your vision statement here</p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Portfolio</h2>
          <p>Display your portfolio items here</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
          <p>Insert your contact information and contact form here</p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Our Services</h2>
          <p>Describe your services and their benefits here</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

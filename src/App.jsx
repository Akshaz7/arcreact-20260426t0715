const { useState, useEffect } = React;

function Hero() {
  return (
    <section className="py-32 bg-neutral-950 text-center">
      <h1 className="text-8xl font-semibold text-blue-500 mb-6"> hackupc</h1>
      <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
        Pioneering technology solutions that drive growth and efficiency.
      </p>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Cutting-edge Technology</h2>
          <p className="text-neutral-400">Using the latest tech trends to stay ahead of the curve.</p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Scalable Solutions</h2>
          <p className="text-neutral-400">Designed to grow and adapt with your business needs.</p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Expert Team</h2>
          <p className="text-neutral-400">A talented team dedicated to delivering excellence.</p>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-32 bg-neutral-950 text-center">
      <h2 className="text-5xl font-semibold text-white mb-6">Join Us in Shaping Tomorrow</h2>
      <button className="mt-8 px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-2xl hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </section>
  );
}

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
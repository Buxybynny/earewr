function About() {
  return (
    <section className="py-24 px-5 bg-[#081120]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
          className="rounded-3xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-5">
            About Our Studio
          </h2>

          <p className="text-gray-300 leading-8">
            We create immersive gaming experiences that combine
            storytelling, competitive gameplay and cinematic visuals.
            Our mission is to build worlds players never forget.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
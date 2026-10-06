function Team() {
  return (
    <section className="py-24 bg-[#081120] px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#111827] p-8 rounded-3xl"
            >
              <img
                src={`https://i.pravatar.cc/300?img=${item}`}
                className="w-28 h-28 rounded-full mx-auto"
              />

              <h3 className="mt-5 text-2xl font-semibold">
                Developer {item}
              </h3>

              <p className="text-gray-400 mt-2">
                Game Designer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
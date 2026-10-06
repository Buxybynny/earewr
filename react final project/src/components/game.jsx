const games = [
  {
    title: "Cyber Clash",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420",
  },
  {
    title: "Shadow Legends",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
  },
  {
    title: "Future Wars",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
  },
];

function Games() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Games
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#101828] rounded-3xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={game.image}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {game.title}
                </h3>

                <button className="mt-4 text-purple-400">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Games;
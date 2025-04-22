// src/components/NewsSection.jsx
const NewsSection = () => {
  const news = [
    {
      title: "Harvard Researchers Make Breakthrough in AI",
      date: "April 15, 2025",
    },
    {
      title: "New Sustainability Initiatives Announced",
      date: "April 10, 2025",
    },
    {
      title: "Commencement 2025 Speakers Revealed",
      date: "April 5, 2025",
    },
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-serif font-bold mb-8 text-center">
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

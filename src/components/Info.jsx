// src/components/InfoSection.jsx
const Info = () => {
  const info = [
    {
      title: "Academics",
      description: "Explore our range of undergraduate and graduate programs.",
    },
    {
      title: "Research",
      description: "Discover innovative research across disciplines.",
    },
    {
      title: "Campus Life",
      description: "Experience a vibrant student life and community.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 bg-lightGray">
      {info.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Info;

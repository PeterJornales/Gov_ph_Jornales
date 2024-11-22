const news = [
  {
    title: "New Digital Payment System Launched",
    date: "November 15, 2023",
    category: "Technology",
  },
  {
    title: "National Vaccination Drive Updates",
    date: "November 14, 2023",
    category: "Health",
  },
  {
    title: "Economic Recovery Plan Announced",
    date: "November 13, 2023",
    category: "Economy",
  },
];

const News = () => {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Latest News and Updates
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-accent mb-2">{item.category}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <time className="text-sm text-gray-500">{item.date}</time>
                <a
                  href="#"
                  className="mt-4 inline-block text-primary hover:text-primary-dark transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

const Testimonial = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-6">
              "Experts-Tec transformed our server performance and cut downtime by 90%. Their support is simply unmatched."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-gray-900">Michael L.</p>
                <p className="text-gray-600">CTO at NovaTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  
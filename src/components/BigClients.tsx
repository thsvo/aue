
const BigClients = () => {
    const clients = [
      {
        name: "Government of Sharjah",
        logo: "/lovable-uploads/cdbb37af-f37a-45da-8d13-0da4071e3282.png",
        description: "Government Entity"
      },
      {
        name: "Ajman Free Zone",
        logo: "/lovable-uploads/f3231fbb-ebec-48e1-8a9e-8af4b96f114e.png",
        description: "Free Zone Authority"
      },
      {
        name: "UNEC Construction",
        logo: "/lovable-uploads/96f16693-fd68-450b-8e01-28c8ec764968.png",
        description: "Construction Solutions"
      },
      {
        name: "Al Ain FC",
        logo: "/lovable-uploads/3f29a89d-e7fd-462a-9bac-5faddd28568e.png",
        description: "Sports Organization"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Biggest Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-24 w-auto mb-6 object-contain"
                />
                <h3 className="text-xl font-bold mb-2 text-center">{client.name}</h3>
                <p className="text-gray-600 text-center">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BigClients;
  
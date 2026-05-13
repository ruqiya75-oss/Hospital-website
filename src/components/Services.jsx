const services = [

  "Cardiology",
  "Neurology",
  "Dental Care",
  "Orthopedics",
  "Pediatrics",
  "Emergency Care"

]

function Services() {

  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">

          Our Departments

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Professional healthcare services with
          advanced medical treatment.

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >

              <h2 className="text-2xl font-semibold text-blue-700">

                {service}

              </h2>

              <p className="mt-4 text-gray-600 leading-7">

                Experienced doctors and advanced
                healthcare solutions for patients.

              </p>

              <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">

                Learn More

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Services
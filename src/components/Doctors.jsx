const doctors = [

  {
    name: "Dr. Sarah Johnson",
    field: "Cardiologist",
    experience: "10 Years Experience"
  },

  {
    name: "Dr. David Smith",
    field: "Neurologist",
    experience: "12 Years Experience"
  },

  {
    name: "Dr. Emily Brown",
    field: "Pediatrician",
    experience: "8 Years Experience"
  }

]

function Doctors() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">

          Meet Our Doctors

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Highly experienced medical specialists
          dedicated to patient care.

        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {doctors.map((doctor, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                alt="doctor"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">

                  {doctor.name}

                </h2>

                <p className="text-blue-700 mt-3">

                  {doctor.field}

                </p>

                <p className="text-gray-500 mt-2">

                  {doctor.experience}

                </p>

                <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">

                  Book Consultation

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Doctors
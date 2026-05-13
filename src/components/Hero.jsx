function Hero() {

  return (

    <section className="bg-blue-50 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">

            Trusted Healthcare
            For Your Family

          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Experienced doctors, emergency care,
            advanced treatments, and compassionate
            healthcare services for every patient.

          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700">

              Book Appointment

            </button>

            <button className="border border-red-500 text-red-500 px-7 py-4 rounded-xl hover:bg-red-500 hover:text-white">

              Emergency

            </button>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc"
            alt="doctor"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>

  )
}

export default Hero
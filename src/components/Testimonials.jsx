const reviews = [

  {
    name: "Aarav Sharma",
    review:
      "Excellent doctors and very caring staff. The treatment process was smooth and professional."
  },

  {
    name: "Priya Verma",
    review:
      "The hospital environment is clean and modern. Highly recommended healthcare services."
  },

  {
    name: "Rahul Mehta",
    review:
      "Quick emergency response and experienced doctors. Very satisfied with the medical care."
  }

]

function Testimonials() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">

          Patient Testimonials

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Trusted by thousands of patients
          for quality healthcare services.

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >

              <div className="flex mb-4 text-yellow-500 text-2xl">

                ★★★★★

              </div>

              <p className="text-gray-600 leading-8">

                "{item.review}"

              </p>

              <h2 className="text-2xl font-bold mt-6">

                {item.name}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Testimonials
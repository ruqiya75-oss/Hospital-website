function Appointment() {

  return (

    <section className="py-20 bg-blue-50">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white p-10 rounded-3xl shadow-2xl">

          <h1 className="text-4xl font-bold text-center">

            Book An Appointment

          </h1>

          <p className="text-center text-gray-600 mt-4">

            Fill the form and our medical team
            will contact you shortly.

          </p>

          <form className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-4 rounded-xl outline-none"
            />

            <select className="border p-4 rounded-xl outline-none">

              <option>Select Department</option>

              <option>Cardiology</option>

              <option>Neurology</option>

              <option>Dental Care</option>

              <option>Pediatrics</option>

            </select>

            <input
              type="date"
              className="border p-4 rounded-xl outline-none"
            />

            <input
              type="time"
              className="border p-4 rounded-xl outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="border p-4 rounded-xl md:col-span-2 outline-none"
            ></textarea>

            <button className="bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 md:col-span-2">

              Confirm Appointment

            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Appointment
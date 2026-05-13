import { FaPhoneAlt } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

function Emergency() {

  return (

    <section className="bg-red-600 text-white py-8">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">

        <div>

          <h1 className="text-4xl font-bold">

            24/7 Emergency Support

          </h1>

          <p className="mt-3 text-lg">

            Immediate medical assistance anytime.

          </p>

        </div>

        <div className="flex gap-4">

          <a
            href="tel:+919876543210"
            className="bg-white text-red-600 px-6 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-gray-100"
          >

            <FaPhoneAlt />

            Call Now

          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-green-500 px-6 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-green-600"
          >

            <FaWhatsapp />

            WhatsApp

          </a>

        </div>

      </div>

    </section>

  )
}

export default Emergency
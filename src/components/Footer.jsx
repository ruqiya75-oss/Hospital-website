function Footer() {

  return (

    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        <div>

          <h1 className="text-3xl font-bold text-blue-400">

            MedCare

          </h1>

          <p className="mt-6 text-gray-400 leading-8">

            Trusted healthcare services with
            experienced doctors and modern
            medical facilities.

          </p>

        </div>

        <div>

          <h2 className="text-2xl font-semibold">

            Quick Links

          </h2>

          <ul className="mt-6 space-y-4 text-gray-400">

            <li>Home</li>

            <li>Doctors</li>

            <li>Departments</li>

            <li>Appointments</li>

          </ul>

        </div>

        <div>

          <h2 className="text-2xl font-semibold">

            Contact

          </h2>

          <ul className="mt-6 space-y-4 text-gray-400">

            <li>+91 9876543210</li>

            <li>medcarehospital@gmail.com</li>

            <li>Bangalore, India</li>

          </ul>

        </div>

        <div>

          <h2 className="text-2xl font-semibold">

            Emergency

          </h2>

          <p className="mt-6 text-gray-400 leading-8">

            24/7 emergency medical support
            available for patients.

          </p>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

        © 2026 MedCare Hospital.
        All Rights Reserved.

      </div>

    </footer>

  )
}

export default Footer
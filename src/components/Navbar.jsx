function Navbar() {
  return (

    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-blue-700">
          MedCare
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li className="hover:text-blue-600 cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Doctors
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Services
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Contact
          </li>

        </ul>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          Book Appointment
        </button>

      </div>

    </nav>

  )
}

export default Navbar
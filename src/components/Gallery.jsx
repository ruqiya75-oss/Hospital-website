const images = [

  "https://images.unsplash.com/photo-1516549655169-df83a0774514",

  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",

  "https://images.unsplash.com/photo-1579684385127-1ef15d508118",

  "https://images.unsplash.com/photo-1538108149393-fbbd81895907"

]

function Gallery() {

  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">

          Hospital Infrastructure

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Modern facilities and advanced
          healthcare infrastructure.

        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={image}
                alt="hospital"
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Gallery
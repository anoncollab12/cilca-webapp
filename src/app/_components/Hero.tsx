export default function Hero() {
  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 -left-[50%] -top-[50%] h-[200%] w-[200%]">
        <iframe
          src="https://www.youtube.com/embed/0M1C9yEzplI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=0M1C9yEzplI"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-full w-full object-cover"
          title="Background video"
        />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Membresía holística
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Texto
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Conoce más
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/cursos"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Ir a los cursos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Membresia() {
  return (
    <section className="bg-purple-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Diferentes modalidades de membresía
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Selecciona el plan ideal para ti.
          </p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {[
            {
              title: "Inicial",
              description:
                "Buena opción para para comenzar a aprender un curso a la vez.",
              price: "$49",
              features: ["1 curso al mes", "Ventaja 2", "Ventaja 3"],
            },
            {
              title: "Estándar",
              description:
                "Excelente para aprender de distintos cursos al mes.",
              price: "$99",
              features: [
                "3 cursos al mes",
                "Ventaja 2",
                "Ventaja 3",
                "Ventaja 4",
              ],
            },
            {
              title: "Premium",
              description:
                "La mejor para aprender sin límites con toda tu familia.",
              price: "$199",
              features: [
                "Cursos ilimitados",
                "Hasta 5 cuentas familiares",
                "Ventaja 3",
                "Ventaja 4",
                "Ventaja 5",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                {plan.description}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/mes</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4"
                >
                  Seleccionar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

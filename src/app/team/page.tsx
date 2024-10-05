export default function Team() {
    const teamData = [
      {
        name: "CEO Name",
        role: "CEO",
        bio: "Short biography of the CEO.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Head of Department 1",
        role: "Head of Department",
        bio: "Short biography of the head of department.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Head of Department 2",
        role: "Head of Department",
        bio: "Short biography of the head of department.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Team Lead 1",
        role: "Team Lead",
        bio: "Short biography of the team lead.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Team Lead 2",
        role: "Team Lead",
        bio: "Short biography of the team lead.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Team Lead 3",
        role: "Team Lead",
        bio: "Short biography of the team lead.",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Team Lead 4",
        role: "Team Lead",
        bio: "Short biography of the team lead.",
        image: "https://placehold.co/100x100",
      },
    ];
  
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Nuestro Equipo
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Conoce a los líderes de nuestra organización.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
import { SiLinkedin, SiTutanota } from "@icons-pack/react-simple-icons";

export async function generateMetadata() {
  return {
    title: "Contact | melikechan",
    description: "Contact information of melikechan.",

    openGraph: {
      title: "Contact | melikechan",
      description: "Contact information of melikechan.",
    },

    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col mx-8 my-4 min-h-screen space-y-4 animate-fadeIn">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-lg">You can contact me via:</p>

      <section className="flex flex-col">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/melikechan"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row gap-2 items-center"
            >
              <SiLinkedin size={24} />
              <span className="hover:underline focus:underline active:underline">
                LinkedIn
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:melikechan@tuta.io"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row gap-2 items-center"
            >
              <SiTutanota size={24} />
              <span className="hover:underline focus:underline active:underline">
                melikechan[at]tuta.io
              </span>
            </a>
          </li>
        </ul>
        <p className="text-sm">
          For my resume, please reach out to me via email or LinkedIn.
        </p>
      </section>
    </main>
  );
}

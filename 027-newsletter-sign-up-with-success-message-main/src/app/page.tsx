import Form from "./components/Form";
import Image from "./components/Image";
import List from "./components/List";

export default function Home() {
  return (
    <div
      className="md:max-w-md bg-white md:rounded-2xl lg:flex lg:flex-row-reverse lg:max-w-fit lg:p-6 lg:items-center"
    >
      <header>
        <Image
          mobileSrc="/assets/images/illustration-sign-up-mobile.svg"
          tabletSrc="/assets/images/illustration-sign-up-tablet.svg"
          desktopSrc="/assets/images/illustration-sign-up-desktop.svg"
          alt="Illustration sign up"
        />
      </header>

      <main
        className="p-6"
      >
        <section>
        <h1
          className="text-4xl font-bold"
        >Stay updated!</h1>
        <p
          className="mt-6"
        >Join 60.000+ product managers receiving monthly updates on:</p>

        <List />

        <Form />
        </section>
      </main>
    </div>
  );
}

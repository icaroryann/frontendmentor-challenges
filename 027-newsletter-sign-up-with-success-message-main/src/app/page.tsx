import Image from "./components/Image";



export default function Home() {
  return (
    <div>
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

        <ul
          className="mt-4 list-image-[url(/assets/images/icon-list.svg)] list-inside space-y-2"
        >
          <li>Porduct discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>

        <form 
          action=""
          className="mt-6"
        >
          <label 
            htmlFor="email"
            className="font-bold"
          >
            Email address
          </label>
          <input
            className="block mt-2 border-1 border-zinc-500 rounded-md p-4 w-full"
            type="email" 
            name="email" 
            id="email"
            placeholder="email@company.com"
          />
          <button 
            className="mt-4 text-center bg-gray-900 text-white w-full py-4 rounded-md"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
        </section>
      </main>
    </div>
  );
}

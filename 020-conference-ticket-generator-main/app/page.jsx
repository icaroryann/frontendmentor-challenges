import { Form } from "next/form";

export default function Home() {
  return (<>
    {/*<!-- Form starts -->*/}
    <h1 className="text-2xl w-xs text-center md:w-2xl md:text-5xl">
      Your Journey to Coding Conf 2025 Starts Here!
    </h1>

    <span className="mt-4 text-md w-2xs text-center text-zinc-300 md:w-xl">
      Secure your spot at next year's biggest coding conference.
    </span>

    <form action="" method="get" autoComplete="on" noValidate className="w-full p-6 md:w-md">
      <label htmlFor="avatar">
        Upload Avatar
        <input type="file" name="file" id="avatar" className="hidden" />

        <div className="mt-2 h-30 border-2 border-dashed bg-[var(--Neutral-900)] rounded-2xl border-[var(--Neutral-500)] p-2 flex flex-col items-center justify-center gap-2">
          <div className="bg-[var(--Neutral-700)]/50 w-fit p-2 rounded-xl border-2 border-[var(--Neutral-700)]">
            <img src="/icon-upload.svg" alt="" />
          </div>
          <span className="text-[var(--Neutral-500)]">
            Drag and drop or click to upload
          </span>
        </div>
      </label>
      <div className="mt-2 flex items-center gap-2">
        <img src="icon-info.svg" alt="" className="inline" />
        <span className="text-[var(--Neutral-700)]">Upload your photo (JPG or PNG, max size: 500KB).</span>
      </div>
      
      <label htmlFor="name" className="mt-4 block">
        Full Name
      </label>
      <input type="text" name="name" id="" className="border-2 border-[var(--Neutral-700)] bg-[var(--Neutral-900)] rounded-xl w-full p-2" />
    </form>

    {/*Lá vamos nos*/}

    {/*Email Address
    example@email.com

    GitHub Username
    @yourusername

    Generate My Ticket

    <!-- Form ends -->

    <!-- Generated tickets starts -->

    Congrats, <!-- Full Name -->! Your ticket is ready.

    We've emailed your ticket to <!-- Email Address --> and will send updates in the run up to the event.

    Coding Conf
    Jan 31, 2025 / Austin, TX

    <!-- Generated tickets ends -->
    */}
    </>
  )

}

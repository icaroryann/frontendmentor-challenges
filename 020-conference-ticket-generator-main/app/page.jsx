export default function Home() {
  return (<>
    {/*<!-- Form starts -->*/}
    <h1 className="text-2xl w-xs text-center md:w-2xl md:text-5xl">
      Your Journey to Coding Conf 2025 Starts Here!
    </h1>

    <span className="mt-4 text-md w-2xs text-center text-zinc-300 md:w-xl">
      Secure your spot at next year's biggest coding conference.
    </span>

    <form action="" method="get" autoComplete="on" noValidate className="w-full p-6">
      <label htmlFor="avatar">
        Upload Avatar
      </label>

      <div>
        <div className="bg-gray-600 w-fit p-2 rounded-xl">
          <img src="/icon-upload.svg" alt="" />
        </div>
      </div>
    </form>

    {/*Drag and drop or click to upload
    Upload your photo (JPG or PNG, max size: 500KB).

    Full Name

    Email Address
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

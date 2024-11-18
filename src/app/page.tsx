import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-khaki text-center">
      <nav className="bg-seasalt-100 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <button className="hover:opacity-80 transition duration-300">
            <Image
              src="/button-menu-up.svg"
              alt="Menu"
              width={50}
              height={50}
            />
            <span className="sr-only">Menu</span>
          </button>
          <button className="hover:opacity-80 transition duration-300">
            <Image
              src="/button-logo-up.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="sr-only">Logo</span>
          </button>
          <button className="hover:opacity-80 transition duration-300">
            <Image
              src="/button-leaderboard-up.svg"
              alt="Leaderboard"
              width={50}
              height={50}
            />
            <span className="sr-only">Leaderboard</span>
          </button>
        </div>
      </nav>
      <h1 className="text-3xl font-bold p-3">Bienvenido a Milpa! WIP</h1>
      <div className="flex flex-col items-center h-screen">
        <Image
          src={"/nopal_and_mountains.svg"}
          alt="Nopal and Mountains"
          width={800}
          height={300}
        />
      </div>
    </div>
  );
}

'use client';

import { useRouter } from "next/navigation";

function BrushStrokes() {
  return (
    <>
      <div className="absolute -inset-y-20 -left-40 h-[451px] w-[287px] bg-brush-1" />
      <div className="absolute -inset-y-8 -right-40 h-[251px] w-[267px] bg-brush-2" />
    </>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-hero mx-auto max-w-full desktop:w-hero-web h-hero-height transform-gpu -rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="absolute -left-4 -top-4 w-full h-full bg-blue-900">
      </div>
      <div className="relative w-full h-full bg-blue-100">
        <div className="absolute inset-0 ring-8 ring-blue-100 ring-inset" />
        <div className="absolute left-3 top-3 bg-corner-1 w-8 h-8" />
        <div className="absolute right-3 top-3 bg-corner-4 w-8 h-8" />
        <div className="absolute left-1/2 -top-8 w-1 h-8 bg-gradient-to-b from-transparent to-gray-600" />
        <div className="relative h-full">
          {children}
        </div>
      </div>
      <div className="absolute -top-4 -right-0 w-4 h-4" style={{
        background: 'linear-gradient(225deg, transparent 50%, #141a2b 50%)'
      }} />
    </div>
  );
}

function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="z-10 absolute -top-64 desktop:-top-60 right-0 desktop:right-10 bg-btn-blue w-52 h-24 mt-32 desktop:mt-56 focus:outline-none active:bg-btn-blue-active pl-6 pt-5 active:pl-4 active:pt-3 font-bubblegum text-4xl"
      onClick={onClick}
    >
      PLAY
    </button>
  );
}

function CallToAction({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className="absolute inset-x-0 desktop:-top-[94px] bg-hero-nopal mx-auto max-w-full w-hero h-hero-height desktop:w-[900px] desktop:h-[650px] transform-gpu hover:scale-[1.02] transition-transform duration-300" />
      <div
        className="absolute inset-x-0 top-[165px] bg-hero-milpa-mobile desktop:bg-hero-milpa-desktop mx-auto w-[205px] h-[276px] desktop:w-[590px] desktop:h-[220px] shadow-lg overflow-hidden"
        style={{
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <PlayButton onClick={onClick} />
      </div>
    </>
  );
}

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-beige-100">
      <nav className="bg-blue-100 h-[50px]">
        <div className="max-w-[960px] mx-auto">
          <div className="flex justify-between mx-4 lg:mx-0">
            <button
              type="button"
              className="w-[50px] h-[50px] focus:outline-none bg-nav-menu active:bg-nav-menu-active"
            />
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-[50px] h-[50px] focus:outline-none bg-nav-logo active:bg-nav-logo-active"
            />
            <button
              type="button"
              onClick={() => window.location.href = '/#leaderboard'}
              className="w-[50px] h-[50px] focus:outline-none bg-nav-leaderboard active:bg-nav-leaderboard-active"
            />
          </div>
        </div>
      </nav>

      <div className="flex justify-center relative">
        <div className="relative flex-col w-screen overflow-x-hidden">
          <div className="relative w-hero mx-auto max-w-full desktop:w-hero-web h-hero-height mt-5 desktop:mt-[86px]">
            <BrushStrokes />
            <Frame>
              <CallToAction onClick={() => router.push('/play')} />
            </Frame>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-32 desktop:top-44 min-w-[1366px] pointer-events-none">
          <div className="bg-hero-mountains h-[550px] w-[1366px]" />
        </div>
      </div>
    </div>
  );
}

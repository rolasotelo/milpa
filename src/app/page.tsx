'use client';

import { useRouter } from "next/navigation";

function BrushStrokes() {
  return (
    <>
      <div className="absolute -inset-y-20 -left-40 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
      <div className="absolute -inset-y-8 -right-40 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
    </>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-offset-0 ring-milpaBlue-dark mt-5 tablet:mt-herobox-top-web">
      <div className="absolute left-1 top-1 bg-symbol-corner-1 w-8 h-8" />
      <div className="absolute right-1 top-1 bg-symbol-corner-4 w-8 h-8" />
      {children}
    </div>
  );
}

function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="z-10 absolute -top-64 tablet:-top-60 right-0 tablet:right-10 bg-button-blue w-52 h-24 mt-32 tablet:mt-56 focus:outline-none focus:bg-button-blue-pressed pl-6 pt-5 focus:pl-4 focus:pt-3"
      onClick={onClick}
      style={{
        fontFamily: "goodlife-serif, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "2.25rem",
      }}
    >
      PLAY
    </button>
  );
}

function CallToAction({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className="absolute inset-x-0 tablet:-top-94px bg-nopal-herobox mx-auto max-w-100vw w-20.38rem h-herobox-web tablet:w-nopal-herobox tablet:h-nopal-herobox" />
      <div className="absolute inset-x-0 top-170px bg-milpa-mobile tablet:bg-milpa-web mx-auto w-milpa-mobile h-milpa-mobile tablet:w-milpa-web tablet:h-milpa-web">
        <PlayButton onClick={onClick} />
      </div>
    </>
  );
}

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-milpaBeige-default">
      <nav className="bg-milpaBlue-default h-navbar-height">
        <div className="max-w-navbar-width mx-auto">
          <div className="flex justify-between mx-4 lg:mx-0">
            <button className="w-button-square h-button-square focus:outline-none bg-button-menu active:bg-button-menu-pressed" />
            <button
              onClick={() => router.push('/')}
              className="w-button-square h-button-square focus:outline-none bg-button-logo active:bg-button-logo-pressed"
            />
            <button
              onClick={() => window.location.href = '/#leaderboard'}
              className="w-button-square h-button-square focus:outline-none bg-button-leaderboard active:bg-button-leaderboard-pressed"
            />
          </div>
        </div>
      </nav>

      <div className="flex justify-center relative">
        <div className="relative flex-col w-screen overflow-x-hidden">
          <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web h-herobox-web mt-5 tablet:mt-herobox-top-web">
            <BrushStrokes />
            <Frame>
              <CallToAction onClick={() => router.push('/play')} />
            </Frame>
          </div>
        </div>
        <div className="absolute -right-96 top-32 tablet:inset-x-0 tablet:top-44 bg-mountains-herobox mx-auto h-mountains w-mountains" />
      </div>
    </div>
  );
}

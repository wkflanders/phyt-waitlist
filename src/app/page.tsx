import { CornerDownRight } from 'lucide-react';
import { inconsolata } from './fonts';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/IMG_0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Main content */}
      <div className="relative flex h-screen justify-center items-center">
        <div className="flex-grid">
          <h1 className="text-8xl hollow-text font-bold tracking-tighter mb-8">
            PHYT
          </h1>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl`}>Get in shape.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl`}>Build better habits.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl`}>Grow your character.</h2>
          <h2 className={`${inconsolata.className} text-phyt_green leading-6 tracking-wider text-xl font-semibold mb-8`}>Get rewarded.</h2>
          <p className="font-inconsolata text-gray-100 tracking-widest mb-2">It'll pay to be early...</p>
          <div className="relative h-12">
            <input
              className="w-full bg-gray-200 border-2 border-gray-500 rounded-lg pl-4 py-1"
              placeholder='email'
            />
            <button className="absolute right-0 top-0 text-gray-500 p-1 rounded-lg border-2 border-gray-500 bg-gray-200">
              <CornerDownRight />
            </button>
          </div>
          <p className="font-inconsolata text-gray-100 tracking-wider">Be early.</p>
        </div>
      </div>
    </div>
  );
}

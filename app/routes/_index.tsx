import type { MetaFunction } from "@remix-run/node";
import remixLogo from '../../public/remix-logo.svg'
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "The Remix Clap Stack" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-blue-200 w-screen h-screen justify-center items-center flex flex-col px-5">
      <div className="bg-blue-950 p-28 rounded-3xl flex flex-col justify-center">
        <div className="flex flex-col gap-y-8 pb-14 justify-center">
          <h1 className="text-blue-400 text-7xl font-bold text-center">The Remix Clap Stack 👏</h1>
          <p className="text-blue-200 text-2xl font-light text-center w-3/4 mx-auto">This is a minimal Remix stack to serve as a starting point for demo. Simple, just like clapping hands when singing birthday song</p>
        </div>
        <Link className="h-fit w-fit inline-flex mx-auto" to={'https://remix.run'}>
          <img className="h-16" src={remixLogo} alt="remix" />
        </Link>
      </div>
    </div>
  );
}

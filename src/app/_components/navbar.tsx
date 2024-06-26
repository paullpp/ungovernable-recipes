import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SearchBar from "./searchBar";

export default function Navbar() {
  return (
    <>
      <div className="navbar border-b">
        <SignedIn>
          <div className="flex-none dropdown">
            <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a href="/recipes">Browse Recipes</a></li>
              <li><a href="/account/recipes">My Recipes</a></li>
              <li><a href="/account/upvotes">My Upvotes</a></li>
              <SignedIn>
                <li>
                  <a href="/recipes/upload"> Upload Recipe</a>
                </li>
              </SignedIn>
            </ul>
          </div>
        </SignedIn>
        <div className="flex-1">
          <a href="/" className="btn btn-ghost sm:text-xl md:text-2xl text-neutral font-bold text-wrap w-fit">Ungovernable Recipes</a>
        </div>
        <div className="flex-none gap-2">
          <SearchBar />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
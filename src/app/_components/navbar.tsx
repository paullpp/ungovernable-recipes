import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="navbar border-b">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-2xl text-neutral font-bold">Ungovernable Recipes</a>
        </div>
        <div className="flex-none gap-2">
          <SignedIn>
            <button className="btn btn-ghost rounded font-semibold text-lg"> Upload Recipe</button>
          </SignedIn>
          <div className="form-control">
            <input type="text" placeholder="Search Recipes" className="input input-bordered w-24 md:w-auto" />
          </div>
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
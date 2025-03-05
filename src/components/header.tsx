import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src="./logo.svg" alt="" />
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Submit</Button>
        </div>
      ) : (
        <div>
          <Button>Submit</Button>
        </div>
      )}
    </div>
  );
}

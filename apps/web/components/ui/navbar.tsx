import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
  const { user } = useUser();
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          bolt
        </Link>

        {user ? (
          <UserButton />
        ) : (
          <div className="flex items-center gap-4">
            <SignInButton>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-700 hover:bg-gray-800 text-white"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignInButton>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </SignInButton>
          </div>
        )}
      </div>
    </nav>
  );
}

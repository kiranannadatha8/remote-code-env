import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          bolt
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            size="sm"
            className="bg-gray-700 hover:bg-gray-800 text-white"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

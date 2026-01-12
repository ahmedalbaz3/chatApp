import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <section className="hero min-h-dvh flex items-center justify-center px-5">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-7xl font-bold ">
              Welcome to ChatApp
            </h1>
            <p className="py-6 text-gray text-sm md:text-md">
              Connect and communicate seamlessly with our intuitive chat
              platform.
            </p>
            <Link href="/chat" passHref>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent cursor-pointer text-background"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

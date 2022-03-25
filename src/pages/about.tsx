import Link from "next/link";
import type { NextPage } from "next";
import { Counter } from "~/components/ui/Counter";

const About: NextPage = () => (
  <div>
    <Counter />
    <Link href="/">
      <a>to main page</a>
    </Link>
  </div>
);
export default About;

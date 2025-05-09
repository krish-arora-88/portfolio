import type { Route } from "./+types/home";
import Maintenance from "./maintenance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Krish Arora" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  return <Maintenance />;
  // return <Welcome />;
}

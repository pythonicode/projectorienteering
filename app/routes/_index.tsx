import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Project Orienteering" },
    {
      name: "description",
      content: "Project Orienteering was founded by Anthony Riley in 2024 to support elite US orienteers who are motivated to compete at the highest level in international competition.",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-serif p-4 max-w-screen-sm mx-auto">
      <h1 className="text-xl font-bold">Project Orienteering</h1>
      <p className="mb-8">Empowering Elite US Orienteering to Dominate the World Stage</p>
      <p className="mb-4">I am excited to announce the launch of Project Orienteering, a foundation with one goal: to empower elite orienteers with the resources, training, and support needed to succeed at international competitions.</p>
      <p className="mb-8">
      The United States is a dominant force in all kinds of sports: power, strength and endurance, however in orienteering our performance is severely behind top-tier orienteering countries like Sweden, Switzerland, and Norway. It's time to close that gap
      </p>
      <h2 className="text-lg font-bold mb-2">Our Mission</h2>
      <p className="mb-4">Project Orienteering exists to bring together talented athletes, passionate supporters, and forward-thinking sponsors to create an environment where U.S. orienteers can thrive at the highest levels. The foundation's sole focus is to provide the tools necessary for sustained improvement and competitive success</p>
      <p className="mb-4">
We believe that with the right support, U.S. orienteering athletes can reach the same level of dominance as our Olympic athletes in distance running and other endurance events. We aim to identify and nurture orienteering talent, ensuring they have access to top-tier coaching, competition, and training materials
      </p>
      <h2 className="text-lg font-bold mb-2">Why Orienteering?</h2>
      <p className="mb-4">Orienteering is one of the most challenging and exhilarating sports, combining endurance, strategy, and adventure. Athletes race through the wilderness with nothing but a map and a compass, relying on their skills and instincts to navigate the terrain.</p>
      <p className="mb-4">It’s time for the U.S. to step up in this underappreciated sport. With the right team, resources, and support, we can become a global force in orienteering.</p>
      <h2 className="text-lg font-bold mb-2">Join Us</h2>
      <p className="mb-4">We are looking for motivated athletes, dedicated supporters, and forward-thinking sponsors to join us in this journey. If you're interested in becoming a part of Project Orienteering, please reach out.</p>

      <p className="mb-4">Together, we can change the future of U.S. orienteering.</p>

      <p className="mb-2">Anthony Riley</p>
      <p className="mb-2">Founder, Project Orienteering</p>
      <p className="mb-2">2024</p>

      <p className="mb-4">Contact Us: <a href="mailto:anthony@projectorienteering.com" className="text-blue-500 underline">anthony@projectorienteering.com</a></p>
    </div>
  );
}

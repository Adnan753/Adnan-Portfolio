import Rail from './components/Rail';
import Rule from './components/Rule';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Evidence from './components/sections/Evidence';
import Experience from './components/sections/Experience';
import Stack from './components/sections/Stack';
import Credentials from './components/sections/Credentials';
import Contact from './components/sections/Contact';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="shell">
      <Rail />

      <main className="page">
        <Hero />

        <Rule thirds />
        <Stats />
        <Rule thirds />

        <Evidence />

        <div style={{ height: 100 }} />
        <Rule />

        <Experience />
        <Rule />

        <Stack />
        <Rule />

        <Credentials />
        <Rule />

        <Contact />
      </main>
    </div>
  );
}

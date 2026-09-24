import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <section className="container-px pt-48 pb-32 text-center">
      <SEO title="Page not found — Jayanth Technologies" />
      <p className="font-mono text-sm text-mist-dim mb-4">404</p>
      <h1 className="font-display text-3xl text-paper">This page doesn't exist.</h1>
      <p className="mt-4 text-mist">The page you're looking for may have moved.</p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}

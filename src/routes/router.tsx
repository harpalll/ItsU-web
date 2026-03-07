import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Game = lazy(() => import("@/pages/Game"));
const Staking = lazy(() => import("@/pages/Staking"));
const Roadmap = lazy(() => import("@/pages/Roadmap"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const License = lazy(() => import("@/pages/License"));
const Security = lazy(() => import("@/pages/Security"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/license" element={<License />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Suspense>
  );
}


import { Routes, Route, Navigate } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";
import { Loader } from "../../components/Loader";
const Page = lazy(() => import('../Page').then(module => ({ default: module.Page })));
const Info = lazy(() => import('../Info').then(module => ({ default: module.Info })));
import './App.css'

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <main class="app">
          <Routes>
            <Route path="/">
              <Route path="/" element={Page<Movie>({urlType: "movie"})}/>
              <Route path="/:id" element={<Info />}/>
            </Route>
            <Route path='*' element={<Navigate href="/"/>} />
          </Routes>
      </main>
    </Suspense>
  );
};
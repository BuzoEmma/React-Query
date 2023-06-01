import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link,  } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/Home";
import SuperHero from "./components/SuperHero";
import RQSuperheros from "./components/RQSuperheros";
import RQSuperHeroesDetail from "./components/RQSuperHeroesDetail";
import ParrallelQuery from "./components/ParrallelQuery.page";
import DynamicParrallelQueries from "./components/DynamicParrallelQueries";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueriesPage from "./components/PaginatedQueriesPage";
import InfiniteQueriesPage from "./components/InfiniteQueriesPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="route">
            <nav>
              <li>
                <Link to={"/"} className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/superHero"} className="link">
                  SuperHeros
                </Link>
              </li>
              <li>
                <Link to={"/RQSuperheros"} className="link">
                  RQ Super Heros
                </Link>
              </li>
              <li>
                <Link to={"/ParrallelQuery"} className="link">
                ParrallelQuery
                </Link>
              </li>
              <li>
                <Link to={"/DynamicParrallelQueries"} className="link">
                ParrallelQuery
                </Link>
              </li>
              <li>
                <Link to={"/DependentQueries"} className="link">
                DependentQueries
                </Link>
              </li>
              <li>
                <Link to={"/PaginatedQueriesPage"} className="link">
                PaginatedQueriesPage
                </Link>
              </li>
              <li>
                <Link to={"/InfiniteQueriesPage"} className="link">
                InfiniteQueriesPage
                </Link>
              </li>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/superHero" element={<SuperHero />} />
            <Route path="/RQSuperheros" element={<RQSuperheros />} />
            <Route path="/ParrallelQuery" element={<ParrallelQuery />} />
            <Route path="/DynamicParrallelQueries" element={<DynamicParrallelQueries heroIds={[1, 3]} />} />
            <Route path="/DependentQueries" element={<DependentQueries email="buzoemma6@gmail.com" />} />
            <Route path="/PaginatedQueriesPage" element={<PaginatedQueriesPage />} />
            <Route path="/InfiniteQueriesPage" element={<InfiniteQueriesPage />} />

            <Route path="/RQSuperhero/:heroId" element={<RQSuperHeroesDetail />} />
            
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;

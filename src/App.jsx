import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './components/root';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {store} from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "/Features",
        element: <Features />
      }, {
        path: "/About",
        element: <About />
      },
      {
        path: "/Projects",
        element: <Projects />
      },
      {
        path: "/Contact",
        element: <Contact />
      }]
    }
  ])




function App() {

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </>);
}
export default App;
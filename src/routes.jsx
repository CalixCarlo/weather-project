
import Weather from "./views/Weather"
import News from "./views/News"
import About from "./views/About"

const routes = [
 
  {
    path: "/",
    element: <Weather />
  
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/about",
    element: <About />
  }
]

export default routes
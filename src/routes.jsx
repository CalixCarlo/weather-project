
import Weather from "./views/Weather"
import News from "./views/other/News"
import About from "./views/other/About"

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
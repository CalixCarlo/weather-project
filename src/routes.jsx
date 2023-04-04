
import Weather from "./views/Weather"
import News from "./views/News"

const routes = [
 
  {
    path: "/",
    element: <Weather />
  
  },
  {
    path: "/news",
    element: <News />
  }
]

export default routes
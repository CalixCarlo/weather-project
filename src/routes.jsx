import Login from "./views/Login"
import Weather from "./views/Weather"
import News from "./views/News"

const routes = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/weather",
    element: <Weather />
  
  },
  {
    path: "/news",
    element: <News />
  }
]

export default routes
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"
import Cart from "./components/Cart"

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<ErrorPage />} path="/*" />
      </Route>
    </Routes>
  )
}

export default App
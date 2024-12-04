import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"
import Cart from "./components/Cart"

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/e-shoes" />
        <Route element={<Cart />} path="e-shoes/cart" />
        <Route element={<ErrorPage />} path="e-shoes/*" />
      </Route>
    </Routes>
  )
}

export default App
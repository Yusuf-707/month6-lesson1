import React from "react"
import ProductsList from "./ProductsList"

export default function App() {
  // const [count, setCount] = React.useState(0)

  // const handleIncrementCount = () => {
  //   setCount(prev => prev + 1)
  //   setCount(prev => prev + 4)
  // }
  // const handleDecrementCount = () => {
  //   count > 3 ?
  //     setCount(count - 4)
  //     : setCount(count)
  // }
  return (
    <main>
      {/* <h2>{count}</h2>

      <button onClick={() => handleIncrementCount()}>увеол</button>
      <button onClick={() => handleDecrementCount()}>умен на 4</button> */}
      <header>
        <h2>Products</h2>
      </header>
      <ProductsList />
    </main>
  )
}

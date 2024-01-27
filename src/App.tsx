import ProductCard from "./components/ProductCard"
import { productList } from "./data"
import MyModal from "./components/Modal"
import { useState } from "react"
import ButtonComp from "./components/ButtonComp"
function App() {

  const renderProductList=productList.map( product=> <ProductCard  key={product.id} product={product} />)

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
  <>
<div className="container mx-auto text-center">

<ButtonComp classname="bg-green-700 hover:bg-green-400 my-4 w-96 text-center mx-auto " onClick={openModal} > Add </ButtonComp>


<div className="border-2   border-red-700 m-5 grid xl:grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-2 " >
    
    {renderProductList}

  </div>
  
<MyModal isOpen={isOpen} closeModal={closeModal} title="Add a new product " >    

<div className="flex items-center space-x-4" >
<ButtonComp classname="bg-indigo-800 hover:bg-indigo-500" onClick={closeModal}> cancel </ButtonComp>
<ButtonComp classname="bg-red-600 hover:bg-red-400 "> supmit </ButtonComp>
</div>

</MyModal>

</div>
  </>
  )
}

export default App

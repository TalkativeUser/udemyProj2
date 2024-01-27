import ImgComp from "./ImgComp"
import ButtonComp from "./ButtonComp"
import { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/stringCut"
interface IProps {

product:IProduct

}

 const ProductCard=({product}:IProps) =>{
  
  const {title,imageURL,description}=product;
  return (
    <div className="border-2 rounded-md p-2 flex flex-col mx-auto  " >

       <ImgComp classname="rounded-lg" imgUrl={imageURL} alt="product name" />
       <h3>{title}</h3>
<p>{txtSlicer(description)}</p>

        <div className="py-3 flex items-center space-x-2 " >

          <span className="w-5 h-5 rounded-full bg-indigo-700 cursor-pointer " />
          <span className="w-5 h-5 rounded-full bg-yellow-400 cursor-pointer " />
          <span className="w-5 h-5 rounded-full bg-orange-700 cursor-pointer " />
        </div>
        <div className="py-3 flex items-center space-x-2 justify-between " >

         <span>55234$</span>
      <img className="h-10 w-10 rounded-full" src="https://carconfigurator.ferrari.com/rt-assets/data/cars/sf90spider/ui/splashpage.jpg" alt="" />
        </div>

        <div className=" flex mt-2 space-x-2" >


<ButtonComp classname="bg-indigo-800"  onClick={()=>{ console.log('button 1 ');}}>Edit</ButtonComp>
<ButtonComp classname="bg-red-600"     onClick={()=>{ console.log('button 2 ');}}>Delete</ButtonComp>

{/*   */}

        </div>
             
    </div>
  )
}


export default ProductCard
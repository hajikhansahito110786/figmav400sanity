import Image from "next/image";
import { client} from "@/sanity/lib/client"
//import { urlFor } from "@/sanity/lib/image";
//&&[Category=='Chair']`
export default async function SanityData() {

 // await client.fetch(`*[_type == 'product'] && *[Category == 'Chair']`);
    //console.log(products)
   
    const products:any = await client.fetch(`*[_type == 'product']`)
  //console.log(products)
  
/*
  const products:any = await client.fetch(`*[_type == "product"]{
    Name,
    Image,
    Category
  }[50]
  `)
  console.log(products)
  */
  return (
   <div>
<h1>sanity data </h1>
<ul>
{
 products.map((product:any,i:number) => (
  

   
   <>
   
   
   <li key={product._id}></li>
   {


   }

<h2>Product_name</h2>
   <h2>{product.name}</h2>
      <h2>Product_category</h2>
   <h2>{product.category}</h2>
    
    <h2>Poduct_price</h2>
    <h2>{product.price}</h2>
	 <h2>product_description</h2>
	   <h2>{product.description}</h2>
	      <h2>product_discountPercentage</h2>
	     <h2>{product.discountPercentage}</h2>
   <img src={product.imagePath} alt={product.name} width="200" />
   <img src={product.image} alt={product.name} width="200" />


  







    
   </>
  
 
 ))



/*
data.map((items:any)=>{

return(
  <div>
    <Image src={urlFor(items.image).url()} alt={items.name} width={200} height={200}></Image>
    <h1>{items.name}</h1>
    </div>
)

})

*/
}
</ul>
      </div>
  
  );
}

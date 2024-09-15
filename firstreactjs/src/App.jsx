
import Card from './pages/card'
// import Images from '../pages/Images'
function App() {

   let array=[10,20,30,40,50];
   return(
    <>  
    <div class="flex justify-evenly mt-14 mb-14 h-52 bg-grey-100">
    <Card />
    <Card />
    <Card />

     </div>

     {array.map((item) => {
      return (
         <div>
            <h1>{item}</h1>
            <br/>
         </div>);
     })}


    {/* <div class="flex justify-evenly mt-14 mb-14 h-52">
      <Images />
      <Images />
      <Images />
    </div> */}
   
    </>
  

   )

}

export default App

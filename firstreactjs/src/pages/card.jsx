
import Image from '../assets/testimonial-1.jpg'
const Card = (props) => {
  console.log(props)

    return(

        // <div class=" flex flex-row justify-center bg-grey shadow-lg rounded-lg overflow-hidden max-w-xs  ">
      <>
        <div class=" p-4 flex flex-row justify-center bg-grey shadow-lg rounded-lg overflow-hidden max-w-xs">
        <p class="text-black-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet nam eveniet enim facilis! Fugit in ad ullam error tempora, facere ducimus totam sint perferendis, voluptates dolores eum nobis ex.</p>
        </div>
        <img src={Image} class="w-full h-48 " alt= "error" />
       
        </>
  )
        
        

}
export default Card
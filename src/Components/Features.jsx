import { useNavigate } from "react-router-dom"
import imag from "../assets/storyimage.png"


export default function Features(){

  const navigate = useNavigate()

  return(
        <div>
            {/* <div className="hero min-h-screen mt-4">
  <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse gap-10">
    
    <div>
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold font-merriweather">Our Story</h1>
      <p className="py-6 text-gray-600 font-playfair text-md sm:text-xl md:text-xl lg:text-2xl">
      Our restaurant is a family-run restaurant with a love for traditional British cooking. Our chefs use only the freshest, locally-sourced ingredients to create dishes that are both familiar and exciting!
      </p>
      <button className="btn bg-textcolor text-white" onClick={()=>navigate("/about")}>Learn more</button>
    </div>
    <img
      src={imag}
      className="md:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" 
      alt="Our Restaurant Interior"
    />
  </div>
</div> */}


<section className="mt-20 py-16 bg-white text-center">
  <h2 className="text-4xl font-bold text-[#1c7303] mb-8 font-merriweather">Our Key Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
    
    {/* Feature 1 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Qur'an with Tajweed</h3>
      <p className="text-gray-700 font-playfair">Hum students ko proper Tajweed ke sath Qur'an padhna sikhatay hain.</p>
    </div>

    {/* Feature 2 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Hifz Program</h3>
      <p className="text-gray-700 font-playfair">Bacho aur adults dono ke liye Hifz-e-Qur'an ke mukammal programs.</p>
    </div>

    {/* Feature 3 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Islamic Education</h3>
      <p className="text-gray-700 font-playfair">Namaz, Masail, Duaein aur Roz marra ki Islami Taleemat <span className="text-[#1c7303] underline cursor-pointer">etc</span>.</p>
    </div>

    {/* Feature 4 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Female Teachers Available</h3>
      <p className="text-gray-700 font-playfair" >Khawateen ke liye alag female ustaniyan mojud hain.</p>
    </div>

    {/* Feature 5 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Flexible Timings</h3>
      <p className="text-gray-700 font-playfair">Har age group ke liye morning aur evening timings.</p>
    </div>

    {/* Feature 6 */}
    <div className="shadow-lg rounded-xl p-6 border border-[#1c7303]">
      <h3 className="text-xl font-semibold text-[#1c7303] mb-2 font-merriweather">Certificate on Completion</h3>
      <p className="text-gray-700 font-playfair">Har course ke baad completion certificate diya jata hai.</p>
    </div>
    
  </div>
</section>


        </div>
    )
}
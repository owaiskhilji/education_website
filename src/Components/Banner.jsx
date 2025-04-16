import QuranImage from "../assets/quran/quran3.png"





export default function Banner() {

    return (
      <div>
        <div className="bg-gradient-to-b px-6 sm:py-20 py-10 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${QuranImage})`}}
        >
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-5xl max-sm:text-3xl font-bold leading-tight mb-6 font-arabic"> وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ</h1>
        <p className="text-lg mb-12">Aur humne Qur’an ko samajhne ke liye asaan banaya hai, to kya koi hai jo naseehat le.</p>
        <span className="text-sm">(Surah Qamar - 17)</span>
      </div>
    </div>
  
      </div>
    );
  }
  
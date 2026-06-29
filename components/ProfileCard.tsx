import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="max-w-[90%] md:max-w-[50%] mx-auto p-5 rounded-[10px] bg-white flex flex-col items-center">
      <Image
        src="/images/david.jpg"
        alt="passport"
        width={200}
        height={200}
        className="w-[200px] h-[200px] rounded-full border-[5px] border-red-600 -mt-[60px] shadow-[10px_10px_5px_rgba(194,45,45,0.2)] object-cover"
      />

      <p className="font-bold text-[25px] pt-[50px] pb-5 text-[#821186] [text-shadow:2px_2px_5px_red]">
        Monday David Sarka
      </p>

      <div className="py-[5px] flex gap-[5px]">
        <img src="/images/star.svg" alt="icon" className="w-5 h-5" />
        <span className="text-black">Front-End Engineer</span>
      </div>

      <div className="py-[5px] flex gap-[5px]">
        <img src="/images/location.svg" alt="icon" className="w-5 h-5" />
        <span className="text-black">Abuja, Nigeria</span>
      </div>

      <div className="flex gap-8 py-5">
        <div className="flex flex-col items-center">
          <p className="font-bold text-black">336</p>
          <p className="text-black">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-black">9476</p>
          <p className="text-black">Likes</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-black">43</p>
          <p className="text-black">Works</p>
        </div>
      </div>

      <div className="flex gap-8 py-5">
        <div className="w-10 h-10 rounded-full p-[5px] bg-red-600">
          <img src="/images/youtube.svg" alt="youtube" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-10 h-10 rounded-full p-[5px] bg-[#cea4a4]">
          <img src="/images/instagram.svg" alt="instagram" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-10 h-10 rounded-full p-[5px] border border-[#4f91f3]">
          <img src="/images/twitter.svg" alt="twitter" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-10 h-10 rounded-full p-[5px] bg-black">
          <img src="/images/github.svg" alt="github" className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto text-center">
        <a
          href="#"
          className="min-w-[100px] rounded-[10px] py-5 px-[50px] no-underline text-white bg-[#eb6565] hover:bg-[#745c5c] transition-colors"
        >
          Follow
        </a>
        <a
          href="https://wa.me/message/LXGRFD362WJXM1"
          className="min-w-[100px] rounded-[10px] py-5 px-[50px] no-underline text-white bg-[#045f4b] hover:bg-[#745c5c] transition-colors"
        >
          Whatsap
        </a>
      </div>
    </div>
  )
}

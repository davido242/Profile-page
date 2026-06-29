'use client'

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between py-10 font-bold mb-8 md:mb-0">
      <a href="#" className="text-[25px] uppercase no-underline text-white">
        <span className="lowercase text-white text-base">online</span>MD
      </a>
      <ul className="hidden md:flex gap-5 list-none">
        <li
          className="cursor-pointer"
          onClick={() => window.alert('About us page in development')}
        >
          <a href="#" className="no-underline text-white">About</a>
        </li>
        <li><a href="#" className="no-underline text-white">Contact</a></li>
        <li><a href="#" className="no-underline text-white">Services</a></li>
        <li><a href="#" className="no-underline text-white">Blog</a></li>
      </ul>
    </header>
  )
}

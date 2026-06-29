import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-[#821186] to-[#3b1e32] min-h-screen text-white">
      <div className="w-[90%] mx-auto">
        <Header />
        <ProfileCard />
        <Footer />
      </div>
    </div>
  )
}

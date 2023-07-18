import { Hero, Navbar, Story,Product,Trending,FAQSection,ProductGrid, Footer,Videosection} from '@/components'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen' >
      <div className="p-[3.3vw]">
      <Navbar/>
     <Hero/>
     <Story/>
     <Product/>
<Videosection/>
     <ProductGrid/>
     <Trending/>
     <FAQSection/>
      </div>
     <Footer/>
     
    </main>
  )
}

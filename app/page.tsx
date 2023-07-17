import { Hero, Navbar, Story,Product,Trending,FAQSection,ProductGrid, Footer,Videosection} from '@/components'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <div className="min-h-screen p-12">
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

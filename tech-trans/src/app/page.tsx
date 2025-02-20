import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ArticleList from "@/components/ArticleList"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="bg-secondary bg-opacity-10">
          <ArticleList />
        </div>
      </main>
      <Footer />
    </div>
  )
}


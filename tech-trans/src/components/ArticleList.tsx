import ArticleCard from "@/components/ArticleCard"

const articles = [
  {
    id: "learn-typescript-functions",
    title: "Learn TypeScript functions",
    description: "Master the basics of TypeScript functions and improve your coding skills.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "enhance-skills-time-poor",
    title: "Enhance your skills even if you're time poor",
    description: "Discover effective strategies for learning and growing in tech with limited time.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "using-ai-to-build-apps",
    title: "Using AI to build apps",
    description: "Explore how AI can revolutionize your app development process.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export default function ArticleList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}


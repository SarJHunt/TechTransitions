import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import type { Article, PageProps, GenerateMetadataProps } from "@/types"

// This would typically come from a database or API
const articles: Article[] = [
  {
    id: "learn-typescript-functions",
    title: "Learn TypeScript Functions",
    content: `
      # Learn TypeScript Functions

      TypeScript functions are a powerful feature that can help you write more robust and maintainable code.

      ## Basic Function Syntax

      Here's a simple TypeScript function:

      \`\`\`typescript
      function greet(name: string): string {
        return \`Hello, \${name}!\`;
      }
      \`\`\`

      ## Function Types

      TypeScript allows you to define function types:

      \`\`\`typescript
      type GreetFunction = (name: string) => string;

      const greet: GreetFunction = (name) => \`Hello, \${name}!\`;
      \`\`\`

      ## Generic Functions

      TypeScript supports generic functions:

      \`\`\`typescript
      function identity<T>(arg: T): T {
        return arg;
      }

      let output = identity<string>("myString");
      \`\`\`

      By mastering these concepts, you'll be well on your way to becoming a TypeScript expert!
    `,
    imageUrl: "/typescript-functions.jpg",
  },
  {
    id: "enhance-skills-time-poor",
    title: "Enhance Your Skills Even If You're Time Poor",
    content: `
      # Enhance Your Skills Even If You're Time Poor

      Being time poor doesn't mean you can't improve your skills. Here are some strategies to help you learn efficiently:

      1. **Micro-learning**: Break down large topics into small, manageable chunks.
      2. **Use dead time**: Listen to podcasts or watch educational videos during your commute.
      3. **Set specific goals**: Focus on learning one specific skill at a time.
      4. **Practice deliberately**: Quality of practice is more important than quantity.
      5. **Use spaced repetition**: Review material at increasing intervals to improve retention.

      Remember, consistency is key. Even 15 minutes a day can lead to significant improvements over time!
    `,
    imageUrl: "/time-poor-learning.jpg",
  },
  {
    id: "using-ai-to-build-apps",
    title: "Using AI to Build Apps",
    content: `
      # Using AI to Build Apps

      Artificial Intelligence (AI) is revolutionizing app development. Here's how you can leverage AI in your apps:

      ## 1. Natural Language Processing (NLP)

      Use NLP to create chatbots or voice assistants:

      \`\`\`javascript
      import { NLPManager } from 'node-nlp';

      const manager = new NLPManager({ languages: ['en'] });
      manager.addDocument('en', 'How are you?', 'greetings');
      manager.addAnswer('en', 'greetings', 'I'm doing well, thank you!');

      manager.train();
      manager.process('en', 'How are you doing?').then(console.log);
      \`\`\`

      ## 2. Machine Learning for Predictions

      Implement machine learning models to make predictions:

      \`\`\`python
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LinearRegression
      import numpy as np

      X = np.array([[1], [2], [3], [4]])
      y = np.array([2, 4, 6, 8])

      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

      model = LinearRegression()
      model.fit(X_train, y_train)

      predictions = model.predict(X_test)
      print(predictions)
      \`\`\`

      By incorporating AI into your apps, you can create more intelligent and responsive user experiences.
    `,
    imageUrl: "/ai-app-building.jpg",
  },
]

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const article = articles.find((a) => a.id === params.id)
  return {
    title: article ? `${article.title} | Tech Transitions` : "Article Not Found",
    description: article ? article.content.substring(0, 160) : "Article not found",
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-primary hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <Image
        src={article.imageUrl || "/placeholder.svg"}
        alt={article.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}


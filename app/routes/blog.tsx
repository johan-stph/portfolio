import { Link } from 'react-router';
import { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';

export function meta() {
  return [
    { title: 'Blog - Johannes Stephan' },
    {
      name: 'description',
      content: 'Thoughts and articles by Johannes Stephan',
    },
  ];
}

// Blog posts data
const blogPosts = [
  {
    id: 'hello-world',
    title: 'Hello World',
    description: 'Welcome to my blog! This is my first blog post.',
    date: '2026-01-01',
    excerpt:
      "Welcome to my new blog! I'm excited to share my thoughts, experiences, and learnings in tech, algorithms, and computer vision.",
  },
];

export default function Blog() {
  useEffect(() => {
    // Set body background color to match blog background
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    document.documentElement.style.backgroundColor = 'rgb(255, 255, 255)';

    // Check for dark mode
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.style.backgroundColor = 'rgb(2, 6, 23)';
      document.documentElement.style.backgroundColor = 'rgb(2, 6, 23)';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-6 -ml-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            >
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-50">
            Blog
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Thoughts, ideas, and learnings
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <article className="border-b border-slate-200 dark:border-slate-800 pb-8 last:border-0">
                <time className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-2xl font-bold mt-2 mb-2 text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link, useParams } from 'react-router';
import { useEffect } from 'react';
import { Button } from '~/components/ui/button';

export function meta({ params }: { params: { postId: string } }) {
  const post = getBlogPost(params.postId);
  return [
    { title: post ? `${post.title} - Blog` : 'Blog Post' },
    {
      name: 'description',
      content: post?.description || 'Blog post',
    },
  ];
}

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = {
  'hello-world': {
    id: 'hello-world',
    title: 'Hello World',
    description: 'Welcome to my blog! This is my first blog post.',
    date: '2026-01-01',
    content: `
Hello World

Welcome to my new blog! 

More is coming ...
    `,
  },
};

function getBlogPost(postId: string) {
  return blogPosts[postId as keyof typeof blogPosts];
}

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.postId || '');

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

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <Link to="/blog">
            <Button
              variant="ghost"
              className="mb-6 -ml-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            >
              ← Back to Blog
            </Button>
          </Link>
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">
              Post Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Sorry, the blog post you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Link to="/blog">
          <Button
            variant="ghost"
            className="mb-8 -ml-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            ← Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-10">
            <time className="text-sm text-slate-500 dark:text-slate-500 font-medium">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900 dark:text-slate-50">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {post.description}
            </p>
          </header>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-10">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headers
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1
                      key={index}
                      className="text-3xl font-bold mt-10 mb-4 text-slate-900 dark:text-slate-50"
                    >
                      {paragraph.substring(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold mt-8 mb-3 text-slate-900 dark:text-slate-50"
                    >
                      {paragraph.substring(3)}
                    </h2>
                  );
                }

                // Handle lists
                if (paragraph.includes('\n-')) {
                  const items = paragraph
                    .split('\n')
                    .filter((line) => line.trim());
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-2 my-5 text-slate-700 dark:text-slate-300"
                    >
                      {items.map((item, i) => {
                        const text = item
                          .replace(/^-\s*/, '')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        return (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: text }}
                          />
                        );
                      })}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph
                    .split('\n')
                    .filter((line) => line.trim());
                  return (
                    <ol
                      key={index}
                      className="list-decimal pl-6 space-y-2 my-5 text-slate-700 dark:text-slate-300"
                    >
                      {items.map((item, i) => {
                        const text = item.replace(/^\d+\.\s*/, '');
                        return <li key={i}>{text}</li>;
                      })}
                    </ol>
                  );
                }

                // Regular paragraph
                if (paragraph.trim()) {
                  return (
                    <p
                      key={index}
                      className="my-5 text-slate-700 dark:text-slate-300 leading-relaxed text-[17px]"
                    >
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

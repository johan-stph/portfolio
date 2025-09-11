import { Github, Linkedin, Mail, Network, Eye, Brain } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export function meta() {
  return [
    { title: 'Johannes Stephan - Portfolio' },
    {
      name: 'description',
      content:
        'Portfolio of Johannes Stephan, Master Student specializing in Graph-based Algorithms and Computer Vision',
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* Modern geometric logo with animated elements */}
            <div className="relative w-32 h-32 group">
              {/* Main hexagon container */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl rotate-12 shadow-2xl transform transition-all duration-500 group-hover:rotate-0 group-hover:scale-105">
                {/* Inner geometric pattern */}
                <div className="absolute inset-2 bg-white/10 rounded-xl backdrop-blur-sm">
                  {/* Animated dots representing graph nodes */}
                  <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute bottom-3 left-3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-3 right-3 w-2 h-2 bg-pink-300 rounded-full animate-pulse delay-450"></div>

                  {/* Connecting lines representing graph edges */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="20"
                      y1="20"
                      x2="80"
                      y2="20"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <line
                      x1="20"
                      y1="20"
                      x2="20"
                      y2="80"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                      className="animate-pulse delay-100"
                    />
                    <line
                      x1="80"
                      y1="20"
                      x2="80"
                      y2="80"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                      className="animate-pulse delay-200"
                    />
                    <line
                      x1="20"
                      y1="80"
                      x2="80"
                      y2="80"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                      className="animate-pulse delay-300"
                    />
                    <line
                      x1="20"
                      y1="20"
                      x2="80"
                      y2="80"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      className="animate-pulse delay-400"
                    />
                    <line
                      x1="80"
                      y1="20"
                      x2="20"
                      y2="80"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      className="animate-pulse delay-500"
                    />
                  </svg>

                  {/* Central initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold tracking-wider">
                      JS
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating geometric elements */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded transform rotate-45 animate-bounce"
                style={{ animationDelay: '0s' }}
              ></div>
              <div
                className="absolute -top-1 -right-3 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded transform rotate-12 animate-bounce"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="absolute -bottom-1 -left-3 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce"
                style={{ animationDelay: '1.5s' }}
              ></div>
            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl font-bold  dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Johannes Stephan
          </h1>

          <p className="text-xl text-slate-700 dark:text-slate-200 mb-2 font-medium">
            Master Student
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              graph-based algorithms
            </span>{' '}
            and{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              computer vision
            </span>
            . Currently pursuing my Master's degree while exploring cutting-edge
            research in algorithmic graph theory and visual intelligence
            systems.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() =>
                window.open('https://github.com/johan-stph', '_blank')
              }
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  'https://linkedin.com/in/johannes-stephan',
                  '_blank'
                )
              }
              className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                (window.location.href = 'mailto:johannes.stephan@example.com')
              }
              className="flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              <Mail className="w-5 h-5" />
              Contact
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-slate-900 dark:text-white">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                I'm a dedicated Master's student with a deep fascination for the
                mathematical elegance of graph algorithms and the transformative
                potential of computer vision. My research focuses on developing
                efficient algorithms for complex network analysis and advancing
                visual understanding systems through innovative computational
                approaches.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Research Interests Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    Graph-based Algorithms
                  </CardTitle>
                </div>
                <CardDescription className="text-blue-700 dark:text-blue-200">
                  Network analysis and algorithmic graph theory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Exploring efficient algorithms for graph traversal, shortest
                  path problems, network flow optimization, and community
                  detection in large-scale networks.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-purple-900 dark:text-purple-100">
                    Computer Vision
                  </CardTitle>
                </div>
                <CardDescription className="text-purple-700 dark:text-purple-200">
                  Visual intelligence and image understanding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                  Developing advanced computer vision systems for object
                  detection, image segmentation, and visual scene understanding
                  using deep learning architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:scale-105 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-emerald-900 dark:text-emerald-100">
                    Machine Learning
                  </CardTitle>
                </div>
                <CardDescription className="text-emerald-700 dark:text-emerald-200">
                  Interdisciplinary algorithmic research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                  Bridging graph theory and computer vision through machine
                  learning, exploring graph neural networks and their
                  applications in visual understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">
            &copy; 2025 Johannes Stephan. Built with React Router and Tailwind
            CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

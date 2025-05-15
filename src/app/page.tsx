import Image from "next/image";
import Link from "next/link";
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-2 pt-20 sm:pt-32 pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Quick Noter
              <span className="block text-blue-500">Your Minimalist Note-Taking Companion</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              A modern, secure, and beautiful note-taking application that helps you capture your thoughts instantly.
            </p>
            <div className="flex flex-col items-center gap-2 mt-8">
              <Link 
                href="https://chromewebstore.google.com/detail/quick-noter/bnkpplgnfkpbccekholmglpolocanijk"
                className="flex items-center gap-3 px-10 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-colors"
                style={{ minWidth: 280, justifyContent: 'center' }}
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  {/* Chrome SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path><path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path><path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path><path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path><path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path><path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
                  </svg>
                </span>
                Add to Chrome
              </Link>
            </div>
            {/* Enhanced Screenshot Mockup */}
            <div className="flex justify-center mt-10 sm:mt-16 w-full">
              <Image
                src="/quicknoter-screenshot.png"
                alt="Quick Noter Screenshot"
                width={1200}
                height={700}
                className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              Powerful Features for Modern Note-Taking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-blue-500 text-xl sm:text-2xl mb-3">📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Rich Text Editing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Format your notes with ease using our comprehensive text editing tools.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-blue-500 text-xl sm:text-2xl mb-3">🔒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">PIN Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Keep your sensitive notes secure with PIN protection.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-blue-500 text-xl sm:text-2xl mb-3">🌓</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Dark/Light Mode</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Choose your preferred theme for comfortable note-taking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Ready to Start Taking Notes?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Download Quick Noter now and experience the future of note-taking.
            </p>
            <div className="flex flex-col items-center gap-2">
              <Link 
                href="https://chromewebstore.google.com/detail/quick-noter/bnkpplgnfkpbccekholmglpolocanijk"
                className="flex items-center gap-3 px-10 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-colors"
                style={{ minWidth: 280, justifyContent: 'center' }}
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  {/* Chrome SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path><path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path><path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path><path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path><path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path><path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
                  </svg>
                </span>
                Add to Chrome
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <p>© 2024 Quick Noter. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

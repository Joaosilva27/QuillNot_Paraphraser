import { useState } from "react";
import QuillNotShowcasePicture from "./images/quillnot.png";
import GithubIcon from "./images/github.png";
import QuillNotIcon from "./images/QuillNotIcon.png";

export default function SignUp() {
  const [isHovering, setIsHovering] = useState(false);

  const handleSignIn = () => {
    // Here you would implement your Google sign-in functionality
    console.log("Signing in with Google");
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex-1 flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-8 items-center'>
        <div className='flex-1 max-w-lg'>
          <div>
            <div className='flex justify-between mb-6 w-full'>
              <div className='flex items-center'>
                <img src={QuillNotIcon} className='h-10 object-contain bg-white rounded-3xl' />
                <h2 className='text-4xl font-bold text-green-800 ml-2'>QuillNot Paraphraser</h2>
              </div>

              <div className='flex flex-col justify-end items-end'>
                <a
                  className='text-black text-sm underline flex items-center'
                  href='https://www.joaoportfolio.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  by João Silva
                  <img src={GithubIcon} className='h-4 w-4 ml-1.5 animate-bounce object-contain' />
                </a>
              </div>
            </div>

            <p className='text-lg text-gray-600 mb-4'>
              Transform your writing with QuillNot — the 100% free paraphrasing tool for students, writers, and professionals.
            </p>

            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Key Features:</h3>

              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-[#7A9E7E] mr-2'>✓</span>
                  <span>
                    Paraphrase up to <span className='font-medium'>3000 characters</span> with just one click
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#7A9E7E] mr-2'>✓</span>
                  <span>
                    Choose from multiple paraphrasing styles:
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {["Standard", "Academic", "Fluent", "Human", "Formal", "Extended", "Shortened", "Custom"].map(style => (
                        <span key={style} className='inline-block px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md'>
                          {style}
                        </span>
                      ))}
                    </div>
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#7A9E7E] mr-2'>✓</span>
                  <span>
                    <span className='font-medium text-blue-600'>AI Bypasser Mode</span> that helps avoid AI content detection by replacing common
                    machine-generated patterns
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#7A9E7E] mr-2'>✓</span>
                  <span>Control how much your text is changed using an adjustable rewrite intensity slider</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#7A9E7E] mr-2'>✓</span>
                  <span>Edit paraphrased results at the sentence and word level</span>
                </li>
              </ul>

              <button
                onClick={handleSignIn}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className='w-full mt-6 py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-md border border-gray-300 shadow-sm transition-all flex items-center justify-center'
              >
                <svg className='w-5 h-5 mr-2' viewBox='0 0 24 24'>
                  <path
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    fill='#34A853'
                  />
                  <path
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    fill='#EA4335'
                  />
                </svg>
                {isHovering ? "Continue with Google" : "Sign in with Google"}
              </button>
            </div>
          </div>

          <div className='bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm mt-6 text-blue-700'>
            <div className='font-medium mb-1'>Why do I need to sign in?</div>
            <p>QuillNot is completely free to use. Signing in helps prevent abuse and ensures fair daily usage for everyone.</p>
          </div>
        </div>

        <div className='flex-1 flex justify-center items-center max-w-2xl'>
          <div className='relative'>
            <img src={QuillNotShowcasePicture} alt='QuillNot Showcase' className='w-full h-auto object-contain rounded-lg' />
          </div>
        </div>
      </main>

      <footer className='bg-white border-t border-gray-200 py-4'>
        <div className='max-w-7xl mx-auto px-4 text-center text-sm text-gray-600'>
          <p>QuillNot respects your privacy. We do not store any of your paraphrased content.</p>
        </div>
      </footer>
    </div>
  );
}

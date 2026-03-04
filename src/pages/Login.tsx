import React from 'react';
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex items-center justify-center p-6"
    >
      <div className="w-full max-w-[480px] space-y-8">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl font-black tracking-tight">Welcome Back</h1>
          <p className="text-gray-400">Log in to your account to continue</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input className="flex h-14 w-full rounded-lg border border-border-dark bg-zinc-800 px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Enter your email" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Password</label>
              <button className="text-sm font-medium text-primary hover:underline">Forgot password?</button>
            </div>
            <input className="flex h-14 w-full rounded-lg border border-border-dark bg-zinc-800 px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Enter your password" type="password" />
          </div>
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors flex items-center justify-center text-lg">
            Log In
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border-dark"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-dark px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-border-dark bg-zinc-800 px-4 py-2 text-sm font-semibold transition-colors hover:bg-zinc-700"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </motion.div>
  );
}

import { useState, useCallback, memo } from 'react';
import { Eye, EyeOff, User, Lock, Globe } from 'lucide-react';
import uniteLogo from '../../imports/unite-logo.png';

export const LoginForm = memo(function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  }, [username, password]);

  const togglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <div className="hidden lg:flex items-center gap-3 mb-4">
          <img src={uniteLogo} alt="Unite Logo" className="h-12 w-auto object-contain" loading="eager" decoding="async" />
        </div>
        <span className="text-[10px] sm:text-xs text-gray-400 tracking-wide">Version : 4.7.7</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00b8cd] focus:border-[#00b8cd] transition-all"
              placeholder="Enter your username"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00b8cd] focus:border-[#00b8cd] transition-all"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 gap-4">
          <div className="relative flex-1 max-w-[140px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-4 w-4 text-gray-400" />
            </div>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-full pl-9 pr-7 py-2 text-sm border border-gray-300 rounded text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-1 focus:ring-[#00b8cd] focus:border-[#00b8cd] transition-all cursor-pointer"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="hi">हिन्दी</option>
              <option value="ur">اردو</option>
              <option value="ml">മലയാളം</option>
              <option value="tl">Tagalog</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <a href="#" className="text-xs font-semibold text-[#00b8cd] hover:text-[#0093a8] transition-colors">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00b8cd] text-white py-2 rounded text-sm font-semibold hover:bg-[#00a5ba] focus:outline-none focus:ring-2 focus:ring-[#00b8cd] focus:ring-offset-2 transition-all mt-2"
        >
          Sign In
        </button>
      </form>

    </div>
  );
});

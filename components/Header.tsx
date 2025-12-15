import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, User, Network } from 'lucide-react';
import { MENU_ITEMS, ASSETS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentDate = "دوشنبه ۲۶ آذر ۱۴۰۴"; 

  return (
    <header className="bg-white shadow-md relative z-50 font-[Vazirmatn]">
      {/* Top Bar with Background Image */}
      <div 
        className="text-white text-sm relative bg-cover bg-center"
        style={{ 
            backgroundImage: `url('${ASSETS.HEADER_BG}')`,
            backgroundColor: '#004C9A',
            minHeight: '140px'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>

        <div className="container mx-auto px-4 h-full relative z-10 py-4">
           {/* Header Content Row */}
           <div className="flex flex-col md:flex-row justify-between items-center h-full gap-4">
                
                {/* Right: Organization Logo */}
                <div className="order-1 flex items-center justify-center md:justify-start w-full md:w-auto">
                    <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                        <img 
                            src={ASSETS.LOGO} 
                            alt="لوگوی سازمان" 
                            className="w-20 md:w-24 h-auto drop-shadow-xl filter brightness-100"
                        />
                        <div className="flex flex-col text-right">
                            <h1 className="text-lg md:text-2xl font-bold leading-tight drop-shadow-md">
                                اداره کل آموزش فنی و حرفه ای
                            </h1>
                            <span className="text-sm md:text-lg font-light text-blue-100">
                                استان خراسان رضوی
                            </span>
                        </div>
                    </a>
                </div>

                {/* Left: Slogan & Utilities */}
                <div className="order-2 flex flex-col items-center md:items-end gap-4 w-full md:w-auto mt-2 md:mt-0">
                    <div className="flex items-center gap-3">
                         {/* Search Box */}
                         <div className="relative hidden md:block">
                            <input 
                                type="text" 
                                placeholder="جستجو کنید..." 
                                className="bg-white/10 border border-white/20 rounded-full py-1.5 px-4 pr-10 text-sm focus:outline-none focus:bg-white/20 transition w-64 placeholder-blue-200"
                            />
                            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-200" />
                         </div>

                        <div className="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 text-xs font-mono">
                            {currentDate}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-md flex items-center gap-2 transition shadow-lg">
                            <User size={16} />
                            <span>ورود / عضویت</span>
                        </a>
                        <button className="bg-white/10 hover:bg-white/20 p-2 rounded-md transition text-white" title="نقشه سایت">
                             <Network size={18} />
                        </button>
                    </div>
                </div>
           </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#1e3a8a] text-white border-b-4 border-orange-500 sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center min-h-[50px]">
                {/* Mobile Menu Button */}
                <div className="md:hidden py-3 w-full flex justify-between items-center">
                    <span className="font-bold text-base">منوی خدمات</span>
                    <button 
                    className="text-white p-1 hover:bg-white/10 rounded"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full transition-all duration-300`}>
                    <ul className="flex flex-col md:flex-row md:items-center gap-1 text-[13px] font-medium">
                        {MENU_ITEMS.map((item, index) => (
                        <li key={index} className="group relative">
                            <a 
                            href={item.href} 
                            className="flex items-center justify-between md:justify-start gap-1 py-4 px-4 hover:bg-[#152c6e] transition whitespace-nowrap border-l border-white/5"
                            >
                            {item.title}
                            {item.submenu && <ChevronDown size={12} className="opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />}
                            </a>
                            
                            {/* Mega Menu / Submenu */}
                            {item.submenu && (
                            <div className="hidden group-hover:block md:absolute top-full right-0 bg-white text-[#444] shadow-xl min-w-[200px] z-50 border-t-2 border-orange-500 rounded-b-md animate-fade-in origin-top">
                                <ul className="py-1">
                                {item.submenu.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                    <a href={sub.href} className="block py-2.5 px-4 hover:bg-orange-50 text-sm hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0">
                                        {sub.title}
                                    </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
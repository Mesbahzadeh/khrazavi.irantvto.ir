import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import QuickAccess from './components/QuickAccess';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import GeminiSearch from './components/GeminiSearch';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-[Vazirmatn]">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <QuickAccess />
        <NewsSection />
        
        {/* Info Banner Section */}
        <section className="bg-blue-900 text-white py-12 my-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">سامانه ملی استاندارد مهارت</h2>
                <p className="max-w-2xl mx-auto text-blue-100 mb-8">
                    جهت مشاهده استانداردهای آموزشی و منابع آزمون، به سامانه ملی استاندارد مراجعه نمایید. دسترسی به بیش از ۶۰۰۰ استاندارد آموزشی در گروه‌های مختلف تحصیلی.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg">
                    ورود به سامانه
                </button>
            </div>
        </section>
      </main>
      <Footer />
      <GeminiSearch />
    </div>
  );
}

export default App;
import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { LATEST_NEWS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">آخرین اخبار و رویدادها</h2>
            <p className="text-gray-500 text-sm mt-1">گزارش فعالیت‌ها و اطلاعیه‌های مهم</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
            مشاهده آرشیو اخبار
            <ArrowLeft size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATEST_NEWS.map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {news.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={12} className="ml-1" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-gray-800 font-bold text-sm mb-3 line-clamp-2 hover:text-blue-700 transition">
                  <a href="#">{news.title}</a>
                </h3>
                <p className="text-gray-500 text-xs line-clamp-3 mb-4 flex-1">
                  {news.summary}
                </p>
                <a href="#" className="text-blue-600 text-xs font-bold mt-auto flex items-center justify-end hover:gap-2 transition-all">
                  ادامه مطلب
                  <ArrowLeft size={12} className="mr-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
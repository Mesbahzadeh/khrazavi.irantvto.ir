import React from 'react';
import * as Icons from 'lucide-react';
import { QUICK_SERVICES } from '../constants';

const QuickAccess: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#004C9A] relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#fe0000] after:w-1/2 after:mx-auto">
            میز خدمت الکترونیک
          </h2>
          <p className="text-gray-500 mt-3 text-sm">دسترسی سریع به سامانه ها و خدمات سازمان</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {QUICK_SERVICES.map((service) => {
            // @ts-ignore
            const IconComponent = Icons[service.iconName];
            
            return (
              <a 
                key={service.id} 
                href={service.link}
                className="group flex flex-col items-center justify-center p-4 rounded-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg ${service.color} transform group-hover:rotate-3 transition duration-300 border-b-4 border-black/10`}>
                  {IconComponent && <IconComponent size={36} strokeWidth={1.5} />}
                </div>
                <h3 className="text-sm font-bold text-gray-700 group-hover:text-[#004C9A] text-center leading-relaxed">
                  {service.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
import React from 'react';
import { MapPin, Phone, Mail, ChevronLeft, Instagram, Send, Globe } from 'lucide-react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white font-[Vazirmatn] text-sm relative overflow-hidden mt-10">
      {/* Top Border Gradient */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About & Logo */}
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-xl inline-block backdrop-blur-sm">
                <img 
                    src={ASSETS.LOGO_FOOTER} 
                    alt="سازمان فنی و حرفه ای" 
                    className="h-24 w-auto object-contain filter drop-shadow-lg"
                />
            </div>
            <h3 className="text-lg font-bold text-orange-400 mt-2">اداره کل آموزش فنی و حرفه ای</h3>
            <p className="text-blue-100 leading-7 text-justify opacity-90">
              این پورتال جهت اطلاع‌رسانی و ارائه خدمات الکترونیک به مهارت‌آموزان، مربیان و کارکنان سازمان آموزش فنی و حرفه‌ای استان خراسان رضوی طراحی شده است.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                دسترسی سریع
            </h3>
            <ul className="space-y-3">
              {[
                'میز خدمت الکترونیک',
                'پورتال جامع سازمان',
                'استعلام گواهینامه',
                'ثبت نام در دوره‌ها',
                'آموزشگاه‌های آزاد',
                'قوانین و مقررات'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center gap-2 text-blue-100 hover:text-orange-400 transition-colors group">
                    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Related Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                پیوندهای مرتبط
            </h3>
            <ul className="space-y-3">
              {[
                'وزارت تعاون، کار و رفاه اجتماعی',
                'سازمان آموزش فنی و حرفه ای کشور',
                'استانداری خراسان رضوی',
                'سامانه ملی اشتغال',
                'درگاه ملی مجوزها'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center gap-2 text-blue-100 hover:text-green-400 transition-colors group">
                    <Globe size={14} className="opacity-70" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                اطلاعات تماس
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-400 shrink-0 mt-1" />
                <span>مشهد، میدان فردوسی، بلوار شهید قرنی، نرسیده به قرنی ۳۴</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-400 shrink-0" />
                <span dir="ltr">051-37003250</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-400 shrink-0" />
                <span>info@khrtvto.ir</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition" title="ایتا">
                    <img src={ASSETS.SOCIAL_EITAA} alt="Eitaa" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition" title="بله">
                    <img src={ASSETS.SOCIAL_BALE} alt="Bale" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition text-white">
                    <Instagram size={24} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition text-white">
                    <Send size={24} />
                </a>
            </div>
          </div>
        </div>

        {/* Certificates & Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
                {/* Placeholder for Trust Logos */}
                <div className="bg-white/90 p-1 rounded w-16 h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition cursor-pointer">
                     <img src={ASSETS.ENAMAD} alt="Enamad" className="max-w-full max-h-full" />
                </div>
                <div className="bg-white/90 p-1 rounded w-16 h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition cursor-pointer">
                     <span className="text-gray-800 text-[10px] text-center font-bold">ساماندهی</span>
                </div>
            </div>
            
            <div className="text-center md:text-left">
                <p className="opacity-70 text-xs mb-1">
                    طراحی و توسعه: تیم فنی (نسخه متن‌باز جهت گیت‌هاب)
                </p>
                <p className="text-sm font-medium">
                    © ۱۴۰۴ کلیه حقوق محفوظ است. اداره کل آموزش فنی و حرفه ای خراسان رضوی
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
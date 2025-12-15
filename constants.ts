import { MenuLink, NewsItem, ServiceLink } from './types';

export const ASSETS = {
  // Abstract blue header background, professional and clean
  HEADER_BG: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1920&q=80',
  
  // Official TVTO Logo - Specific link provided by user
  LOGO: 'https://khrazavi.irantvto.ir/uploads/187/2023/Jul/29/khrtvto-logo2.svg',
  
  // Same logo for footer
  LOGO_FOOTER: 'https://khrazavi.irantvto.ir/uploads/187/2023/Jul/29/khrtvto-logo2.svg',
  
  // Emblem of Iran for official aesthetic
  SLOGAN: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Emblem_of_Iran.svg/200px-Emblem_of_Iran.svg.png',
  
  // Iranian Social Media Icons (Specific links provided)
  SOCIAL_EITAA: 'https://khrazavi.irantvto.ir/uploads/187/2022/Dec/26/90-GraFa-1_1_crop.png',
  SOCIAL_BALE: 'https://khrazavi.irantvto.ir/uploads/187/2022/Dec/26/18_1_crop.png',
  
  // Placeholder for Enamad/Samandehi
  ENAMAD: 'https://cdn.zarinpal.com/badges/trust-logo.png' 
};

export const MENU_ITEMS: MenuLink[] = [
  { title: 'صفحه اصلی', href: '/' },
  { 
    title: 'معرفی سازمان', 
    href: '#',
    submenu: [
      { title: 'تاریخچه و اهداف', href: '#' },
      { title: 'چارت سازمانی', href: '#' },
      { title: 'معرفی مدیرکل', href: '#' }
    ]
  },
  { 
    title: 'خدمات آموزشی', 
    href: '#',
    submenu: [
      { title: 'جستجوی استانداردها', href: '#' },
      { title: 'ثبت نام در دوره‌ها', href: '#' },
      { title: 'لیست آموزشگاه‌های آزاد', href: '#' }
    ]
  },
  { 
    title: 'آزمون و گواهینامه', 
    href: '#',
    submenu: [
      { title: 'برنامه آزمون‌ها', href: '#' },
      { title: 'دریافت کارت ورود به جلسه', href: '#' },
      { title: 'استعلام گواهینامه مهارت', href: '#' }
    ]
  },
  { title: 'اخبار و اطلاعیه‌ها', href: '#' },
  { title: 'تماس با ما', href: '#' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'توانمندسازی نیروی انسانی',
    subtitle: 'برگزاری دوره‌های تخصصی در مراکز آموزش فنی و حرفه‌ای سراسر استان',
    // Welding/Industrial image
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'تکنولوژی و نوآوری',
    subtitle: 'تجهیز کارگاه‌های کامپیوتر و هوش مصنوعی مطابق با استانداردهای روز',
    // Computer lab/Coding image
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'مهارت آموزی در صنایع خودرو',
    subtitle: 'آموزش تعمیرات تخصصی مکانیک و برق خودرو با اساتید مجرب',
    // Automotive repair image
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'هنر و صنایع دستی',
    subtitle: 'حمایت از مشاغل خانگی و آموزش‌های هنری برای کارآفرینی',
    // Craft/Artisan image
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=1200'
  }
];

export const QUICK_SERVICES: ServiceLink[] = [
  { 
    id: 1, 
    title: 'پورتال جامع سازمان', 
    iconName: 'Globe', 
    color: 'bg-indigo-600',
    link: '#'
  },
  { 
    id: 2, 
    title: 'ثبت نام آزمون ادواری', 
    iconName: 'FileSignature', 
    color: 'bg-emerald-600',
    link: '#' 
  },
  { 
    id: 3, 
    title: 'استعلام گواهینامه', 
    iconName: 'Award', 
    color: 'bg-amber-500',
    link: '#' 
  },
  { 
    id: 4, 
    title: 'آموزشگاه‌های آزاد', 
    iconName: 'Building2', 
    color: 'bg-purple-600',
    link: '#' 
  },
  { 
    id: 5, 
    title: 'استانداردهای آموزشی', 
    iconName: 'BookOpen', 
    color: 'bg-blue-500',
    link: '#' 
  },
  { 
    id: 6, 
    title: 'میز خدمت الکترونیک', 
    iconName: 'MonitorCheck', 
    color: 'bg-rose-600',
    link: '#' 
  },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'آغاز ثبت نام نوزدهمین مسابقات ملی مهارت',
    date: '۲۶ آذر ۱۴۰۴',
    summary: 'ثبت نام مسابقات ملی مهارت در رشته‌های مختلف فناوری اطلاعات، جوشکاری، آشپزی و ... آغاز شد.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    category: 'مسابقات'
  },
  {
    id: 2,
    title: 'افتتاح مرکز تخصصی آموزش‌های دانش‌بنیان',
    date: '۲۲ آذر ۱۴۰۴',
    summary: 'با حضور ریاست سازمان، مرکز آموزش مهارت‌های نوین و دانش‌بنیان در مشهد افتتاح گردید.',
    imageUrl: 'https://images.unsplash.com/photo-1531297461136-82lw9z21171?auto=format&fit=crop&q=80&w=400',
    category: 'افتتاحیه'
  },
  {
    id: 3,
    title: 'تفاهم‌نامه همکاری با دانشگاه فردوسی',
    date: '۲۰ آذر ۱۴۰۴',
    summary: 'در راستای طرح مهارت‌افزایی دانشجویان، تفاهم‌نامه همکاری مشترک امضا شد.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
    category: 'تفاهم‌نامه'
  },
  {
    id: 4,
    title: 'برگزاری کارگاه آموزشی ایمنی در محیط کار',
    date: '۱۸ آذر ۱۴۰۴',
    summary: 'دوره آموزشی HSE ویژه مربیان مراکز دولتی و آموزشگاه‌های آزاد برگزار شد.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400',
    category: 'آموزشی'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the intelligent AI assistant for the "Khorasan Razavi Technical and Vocational Training Organization" (اداره کل آموزش فنی و حرفه ای خراسان رضوی).
Your name is "Maharat Yar" (مهارت یار).
Your goal is to help users find information about vocational courses, certificates, news, and organizational details.
Answer in Persian (Farsi) politely and formally.
Current Year is 1404.
Key facts:
- This is an open-source project demo.
- Services include: Free training in gov centers, Exams, Certificates.
`;
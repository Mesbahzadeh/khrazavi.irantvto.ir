export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  category: string;
}

export interface ServiceLink {
  id: number;
  title: string;
  iconName: string; // Changed back to iconName for Lucide
  color: string;    // Added color for styling
  link: string;
}

export interface MenuLink {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: number;
  featured: boolean;
  content?: string;
  lessonCount?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceTime {
  day: string;
  name: string;
  time: string;
  description?: string;
  highlighted?: boolean;
}

export interface Belief {
  glyph: string;
  title: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export interface Sermon {
  id: string;
  title: string;
  pastor: string;
  date: string;
  scripture: string;
  duration: string;
  category: string;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  titleBurmese: string;
  slug: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: number;
  uploadDate: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  thumbnail: string;
}

export const categories = [
  "All",
  "Entertainment",
  "Music",
  "Education",
  "Comedy",
  "Drama",
  "Documentary",
  "Sports",
];

export const videos: Video[] = [
  {
    id: "1",
    title: "Traditional Dance Performance",
    titleBurmese: "ရိုးရာ အကအလှ ပြပွဲ",
    slug: "traditional-dance-performance",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "12:34",
    category: "Entertainment",
    views: 45200,
    uploadDate: "2026-02-01",
    description: "A beautiful traditional dance performance showcasing the rich cultural heritage of Myanmar. This performance features classical movements and traditional costumes.",
  },
  {
    id: "2",
    title: "Myanmar Cooking: Classic Mohinga",
    titleBurmese: "မြန်မာ ဟင်းချက်နည်း - မုန့်ဟင်းခါး",
    slug: "myanmar-cooking-mohinga",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "18:22",
    category: "Education",
    views: 89100,
    uploadDate: "2026-01-28",
    description: "Learn to cook the beloved traditional Mohinga dish. Step-by-step instructions with local ingredients and authentic techniques.",
  },
  {
    id: "3",
    title: "Comedy Night Live Episode 5",
    titleBurmese: "ဟာသညကပွဲ အပိုင်း ၅",
    slug: "comedy-night-live-ep5",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "32:10",
    category: "Comedy",
    views: 120300,
    uploadDate: "2026-02-05",
    description: "The funniest moments from Comedy Night Live Episode 5. Featuring top comedians performing their best sets.",
  },
  {
    id: "4",
    title: "Acoustic Guitar Covers",
    titleBurmese: "ဂစ်တာ သီချင်းများ",
    slug: "acoustic-guitar-covers",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "25:48",
    category: "Music",
    views: 67500,
    uploadDate: "2026-01-15",
    description: "A relaxing collection of popular songs performed with acoustic guitar. Perfect for evening relaxation.",
  },
  {
    id: "5",
    title: "Bagan Temple Tour",
    titleBurmese: "ပုဂံ ဘုရားပွဲတော် လည်ပတ်ခြင်း",
    slug: "bagan-temple-tour",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "45:30",
    category: "Documentary",
    views: 34700,
    uploadDate: "2026-02-08",
    description: "Explore the magnificent temples of Bagan. A documentary covering the history, architecture, and spiritual significance of these ancient structures.",
  },
  {
    id: "6",
    title: "Football Highlights",
    titleBurmese: "ဘောလုံး အကောင်းဆုံး ဂိုးများ",
    slug: "football-highlights",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "15:20",
    category: "Sports",
    views: 98400,
    uploadDate: "2026-02-10",
    description: "The best goals and moments from this week's matches. Incredible skills and dramatic finishes.",
  },
  {
    id: "7",
    title: "Drama Series: Golden Heart Ep.12",
    titleBurmese: "ရွှေနှလုံးသား အပိုင်း ၁၂",
    slug: "golden-heart-ep12",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "48:15",
    category: "Drama",
    views: 156000,
    uploadDate: "2026-02-09",
    description: "The latest episode of the hit drama series Golden Heart. Emotions run high as the story reaches a turning point.",
  },
  {
    id: "8",
    title: "Learn English: Daily Conversations",
    titleBurmese: "အင်္ဂလိပ်စာ သင်ခန်းစာ",
    slug: "learn-english-daily",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "20:00",
    category: "Education",
    views: 52800,
    uploadDate: "2026-02-03",
    description: "Practical English lessons for daily conversations. Perfect for beginners who want to improve their speaking skills.",
  },
  {
    id: "9",
    title: "Street Food Adventures",
    titleBurmese: "လမ်းဘေး အစားအစာ စွန့်စားခန်း",
    slug: "street-food-adventures",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "22:40",
    category: "Entertainment",
    views: 73200,
    uploadDate: "2026-01-20",
    description: "Exploring the vibrant street food scene. From tea shops to noodle stalls, discover the best local eats.",
  },
  {
    id: "10",
    title: "Traditional Music Collection",
    titleBurmese: "ရိုးရာ ဂီတစုစည်းမှု",
    slug: "traditional-music-collection",
    thumbnail: "/placeholder.svg?height=400&width=700",
    duration: "35:15",
    category: "Music",
    views: 41600,
    uploadDate: "2026-02-07",
    description: "A beautiful collection of traditional Myanmar music. Features classical instruments and timeless melodies.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Download Videos Safely",
    slug: "how-to-download-videos-safely",
    excerpt: "Learn the best practices for downloading videos safely and securely from trusted sources.",
    content: "Downloading videos from the internet can be risky if you don't know what to look for. In this guide, we'll walk you through the safest methods to download videos for offline viewing.\n\n## Choose Trusted Sources\n\nAlways download from websites you trust. Look for HTTPS in the URL and verify the site's reputation before downloading any content.\n\n## Check File Formats\n\nStick to common video formats like MP4, WebM, and MKV. Be cautious of executable files disguised as video files.\n\n## Use Antivirus Software\n\nKeep your antivirus software updated and scan all downloaded files before opening them.\n\n## Respect Copyright\n\nOnly download videos that are available for free download. Respect content creators' rights and intellectual property.",
    author: "Admin",
    date: "2026-02-10",
    tags: ["Guide", "Safety", "Download"],
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "2",
    title: "Best Video Formats for Mobile",
    slug: "best-video-formats-mobile",
    excerpt: "Discover which video formats work best on mobile devices for smooth playback.",
    content: "Not all video formats are created equal when it comes to mobile playback. Here's what you need to know about choosing the right format.\n\n## MP4 - The Universal Choice\n\nMP4 is the most widely supported format across all mobile devices. It offers good quality with reasonable file sizes.\n\n## WebM - Great for Web\n\nWebM is optimized for web streaming and works well on most modern mobile browsers.\n\n## Resolution Matters\n\nFor mobile viewing, 720p is often sufficient and saves significant storage space compared to 1080p or 4K.",
    author: "Admin",
    date: "2026-02-05",
    tags: ["Guide", "Mobile", "Formats"],
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "3",
    title: "Top 10 Myanmar Entertainment Channels",
    slug: "top-myanmar-entertainment-channels",
    excerpt: "Our curated list of the best Myanmar entertainment channels you should follow.",
    content: "Myanmar's digital entertainment scene is thriving. Here are our top picks for channels that consistently deliver quality content.\n\n## 1. Classic Drama Hub\n\nFeaturing the best Myanmar drama series with high production values and compelling stories.\n\n## 2. Comedy Central MM\n\nThe go-to destination for Myanmar comedy content, from stand-up to sketch comedy.\n\n## 3. Music Myanmar\n\nA diverse collection of Myanmar music spanning traditional to modern genres.",
    author: "Admin",
    date: "2026-01-28",
    tags: ["Entertainment", "Channels", "Top 10"],
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "4",
    title: "Understanding Video Quality: 360p to 4K",
    slug: "understanding-video-quality",
    excerpt: "A comprehensive guide to video quality settings and what they mean for your viewing experience.",
    content: "Video quality can be confusing with all the different options available. Let's break down what each quality setting means.\n\n## 360p - Basic Quality\n\nSuitable for very slow connections. The video will be watchable but blurry on larger screens.\n\n## 720p - HD Ready\n\nGood balance of quality and file size. Works well for most content.\n\n## 1080p - Full HD\n\nSharp and detailed. The standard for most content today.\n\n## 4K - Ultra HD\n\nThe highest quality available. Best for large screens and detailed content.",
    author: "Admin",
    date: "2026-01-20",
    tags: ["Guide", "Quality", "Technical"],
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "5",
    title: "Myanmar Internet Tips for Streaming",
    slug: "myanmar-internet-streaming-tips",
    excerpt: "Optimize your internet connection for the best video streaming experience in Myanmar.",
    content: "Streaming videos in Myanmar can sometimes be challenging due to varying internet speeds. Here are some tips to improve your experience.\n\n## Use Wi-Fi When Possible\n\nWi-Fi connections are generally more stable than mobile data for streaming.\n\n## Download for Offline Viewing\n\nIf your connection is slow, download videos during off-peak hours for later viewing.\n\n## Adjust Quality Settings\n\nLower the video quality if you're experiencing buffering. 480p works well for most mobile screens.",
    author: "Admin",
    date: "2026-01-15",
    tags: ["Tips", "Streaming", "Internet"],
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getVideosByCategory(category: string): Video[] {
  if (category === "All") return videos;
  return videos.filter((v) => v.category === category);
}

export function getRelatedVideos(currentId: string, limit = 4): Video[] {
  return videos.filter((v) => v.id !== currentId).slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatViews(views: number): string {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
}

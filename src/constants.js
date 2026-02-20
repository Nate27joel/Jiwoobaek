import img1 from './assets/doctor1.png'
import img2 from './assets/doctor2.png'
import img3 from './assets/doctor3.png'
import img4 from './assets/engle.jfif'
import skin from './assets/skin.jfif'
import mos from './assets/mos.jfif'
import Laser from './assets/Laser.jfif'
import img5 from './assets/Jiwoo.jpg'

export const SERVICES = [
  {
    id: 'mohs',
    title: 'Mohs Micrographic Surgery',
    description: 'Specialized surgical technique for treating common types of skin cancer.',
    category: 'medical',
    image: mos,
    longDescription: 'Mohs surgery is a precise surgical technique used to treat skin cancer. During Mohs surgery, thin layers of cancer-containing skin are progressively removed and examined until only cancer-free tissue remains.',
    benefits: ['Highest cure rate', 'Minimizes healthy tissue loss', 'Excellent cosmetic results', 'Immediate results']
  },
  {
    id: 'botox',
    title: 'Botox & Fillers',
    description: 'Non-surgical injectable treatments to smooth wrinkles and restore volume.',
    category: 'cosmetic',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Our expert injectors use the latest FDA-approved neuromodulators and dermal fillers to provide natural-looking facial rejuvenation tailored to your unique anatomy.',
    benefits: ['Reduce fine lines', 'Restore facial volume', 'No downtime', 'Gradual, natural results']
  },
  {
    id: 'skin-cancer',
    title: 'Skin Cancer Screenings',
    description: 'Comprehensive full-body checks for early detection of skin cancer.',
    category: 'medical',
    image: skin,
    longDescription: 'Early detection is vital. Our board-certified dermatologists perform thorough examinations to identify suspicious moles or lesions.',
    benefits: ['Early melanoma detection', 'Peace of mind', 'Prevention education', 'Professional monitoring']
  },
  {
    id: 'laser',
    title: 'Laser Rejuvenation',
    description: 'Advanced laser technology for skin resurfacing and pigment correction.',
    category: 'cosmetic',
    image: Laser,
    longDescription: 'Address sun damage, scars, and uneven texture with our suite of state-of-the-art lasers including CO2, IPL, and Fraxel.',
    benefits: ['Even skin tone', 'Reduce scarring', 'Stimulate collagen', 'Address redness']
  }
];

export const DOCTORS = [
  {
    id: 'dr-miller',
    name: 'Dr. Stone Sanchez',
    title: 'MD, FAAD',
    specialties: ['Medical Dermatology', 'Mohs Surgery'],
    image: img1,
    bio: 'Dr. Andrew Santiago is a board-certified dermatologist with over 15 years of experience in Mohs Micrographic Surgery and complex medical dermatology.',
    education: ['Stanford University Medical Center', 'Harvard Medical School', 'Board Certified by American Board of Dermatology']
  },
  {
    id: 'dr-chen',
    name: 'Dr. Andrew Santiago',
    title: 'MD, FAAD',
    specialties: ['Dermatologic Surgeon', 'Plastic Surgeon'],
    image: img2,
    bio: 'Dr. Stone Sanchez specializes in advanced cosmetic procedures, focusing on natural-looking facial rejuvenation and non-invasive laser treatments.',
    education: ['Johns Hopkins School of Medicine', 'UC Berkeley', 'Society for Dermatologic Surgery Fellow']
  },
   {
    id: 'Dr Sarafi',
    name: 'Dr. Hernandez Jose',
    title: 'MD, FAAD',
    specialties: ['Skin Dermatologist', 'Laser Therapy'],
    image: img3,
    bio: 'Dr. Hernandez Jose excels in high-precision energy-based therapies. His practice integrates the latest in fractional laser technology and radio-frequency skin tightening to deliver transformative clinical results with minimal recovery time.',
    education: ['Seoul National University (SNU) College of Medicine', 'Seoul, South Korea', 'Society for Dermatologic Surgery Fellow']
  },
  {   id: 'Dr Sarafi',
    name: 'Dr. Jiwoo  Baek',
    title: 'Dr. and Ceo of Jiwoobaek Dermatology Clinic',
    specialties: ['Skin Dermatologist'],
    image: img5,
    bio: "A leading authority in energy-based rejuvenation, CEO Jiwoo Baek specializes in the application of advanced light and thermal modalities. His practice focuses on the intersection of fractional laser science and radio-frequency lifting to achieve profound skin remodeling with a primary emphasis on optimizing patient recovery times.",
    education: ['Seoul National University (SNU) College of Medicine', 'Seoul, South Korea', 'Society for Dermatologic Surgery Fellow']
  },
  // ... other properties
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Elena R.',
    text: "The care I received for my Mohs surgery was exemplary. Dr. Stone Sanchez is not only skilled but incredibly compassionate.",
    rating: 5,
    location: 'Chipley Street Clinic'
  },
  {
    id: '2',
    author: 'Mark T.',
    text: "I've been coming here for skin checks for 10 years. The office is professional, clean, and the staff is always friendly.",
    rating: 5,
    location: 'Englewood'
  },
  {
    id: '3',
    author: 'Sophia L.',
    text: "Highly recommend for cosmetic treatments. Dr. Hernandez Jose gave me such natural results with my fillers. I feel 10 years younger!",
    rating: 5,
    location: 'Chipley Street Clinic'
  },
   {
    id: '4',
    author: 'Nathan Fred.',
    text: "Highly recommend for cosmetic treatments. Dr. Hernandez Jose gave me such natural results with my fillers. I feel 10 years younger!",
    rating: 5,
    location: 'Chipley Street Clinic'
  }
];

export const LOCATIONS = [
  {
    id: 'sarasota',
    name: 'Chipley Street Clinic',
    address: '1181 Chipyeong-dong, Seo-gu, Gwangju, South Korea',
    phone: '(806) 231-4316',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'englewood',
    name: 'Englewood Annex',
    address: '5678 Dearborn St, Englewood, FL 34223',
    phone: '+1(808) 863-1133',
    hours: 'Mon-Thu: 9:00 AM - 4:00 PM',
    mapUrl: 'https://maps.google.com',
    image: img4
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Ultimate Guide to Sun Protection in Florida',
    excerpt: 'Living on the Gulf Coast means sun exposure is a daily reality. Learn the latest in UV protection.',
    content: 'Full article content about sun protection...',
    author: 'Dr. Sarah Miller',
    date: 'May 12, 2024',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Science of Retinoids: What to Expect',
    excerpt: 'Retinoids are the gold standard of anti-aging. Here is how to incorporate them into your routine.',
    content: 'Full article content about retinoids...',
    author: 'Dr. James Chen',
    date: 'April 28, 2024',
    category: 'Cosmetic',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Understanding Mohs Surgery: A Patient Success Story',
    excerpt: 'Hear from one of our patients about their journey through Mohs Micrographic Surgery.',
    content: 'Full article content about Mohs...',
    author: 'Dr. Sarah Miller',
    date: 'March 15, 2024',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  }
];
export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: { id: string; label: string; url: string; hasDropdown?: boolean }[];
  contactButton: { text: string; url: string };
}

export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image1: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  stats: {
    id: string;
    number: string;
    suffix: string;
    text: string;
    icon: string;
  }[];
  imageMain: string;
  imageSmall: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
}

export interface WhatWeDoItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  url?: string;
}

export interface WhatWeDoData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description?: string;
  image?: string;
  features?: WhatWeDoItem[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FaqItem[];
}

export interface ContactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
  };
  image?: string;
  mapUrl: string;
}

export interface FooterData {
  logoImage: string;
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
}

export interface WedBlissTemplateData {
  common: {
    globalUI?: {
      loadingText: string;
      notFoundText: string;
    };
    Footer?: FooterData;
  };
  categories: {
    WedBliss: {
      templateComponents?: any;
      sections: {
        Header?: { variants?: { WedBlissHeader1?: HeaderData } };
        Hero?: { variants?: { WedBlissHero1?: HeroData } };
        AboutUs?: { variants?: { WedBlissAboutUs1?: AboutUsData } };
        Services?: { variants?: { WedBlissServices1?: ServicesData } };
        WhatWeDo?: { variants?: { WedBlissWhatWeDo1?: WhatWeDoData } };
        Gallery?: { variants?: { WedBlissGallery1?: GalleryData } };
        Testimonials?: { variants?: { WedBlissTestimonials1?: TestimonialsData } };
        Faq?: { variants?: { WedBlissFaq1?: FaqData } };
        Contact?: { variants?: { WedBlissContact1?: ContactData } };
      };
    };
  };
}

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "family-1",
    src: "/images/gallery/family/1.jpg",
    title: "Family Portrait",
    description: "Family portrait session",
    category: "Family",
  },
  {
    id: "corporate-1",
    src: "/images/gallery/corporate/1.jpg",
    title: "Corporate Photography",
    description: "Corporate and personal headshots",
    category: "Corporate",
  },
  {
    id: "studio-1",
    src: "/images/gallery/studio/1.jpg",
    title: "Studio Photography",
    description: "Professional studio sessions",
    category: "Studio",
  },
  {
    id: "wedding-1",
    src: "/images/gallery/weddings/1.jpg",
    title: "Wedding Photography",
    description: "Beautiful wedding ceremony",
    category: "Weddings",
  },
  {
    id: "events-1",
    src: "/images/gallery/events/1.jpg",
    title: "Event Photography",
    description: "Professional event photography",
    category: "Events",
  },
  {
    id: "branding-1",
    src: "/images/gallery/branding/1.jpg",
    title: "Corporate and Personal Branding",
    description: "Visuals for branding imagery",
    category: "Branding",
  },
  
  {
    id: "party-1",
    src: "/images/gallery/partyevents/1.jpg",
    title: "Birthday Celebration",
    description: "Special birthday moments",
    category: "PartyEvents",
  },
  {
    id: "studio-fashion-1",
    src: "/images/gallery/studiofashion/1.jpg",
    title: "Studio Fashion",
    description: "Professional fashion photography",
    category: "StudioFashion",
  },

  {
    id: "studio-fashion-1",
    src: "/images/gallery/branding/5.jpg",
    title: "Custom Projects",
    description: "Tailored photography solutions for unique needs",
    category: "Customprojects",
  },
]
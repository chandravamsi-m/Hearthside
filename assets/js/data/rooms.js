/**
 * rooms.js — Room Data Objects
 * Single source of truth for all room/suite data.
 * TODO: API — Replace this static array with a fetch() call to your booking engine
 * endpoint. The shape of each object should match the API response or be mapped here.
 */

const ROOMS_DATA = [
  {
    id: 'rose-suite',
    name: 'The Rose Suite',
    type: 'suite',
    slug: 'room-detail.html?room=rose-suite',
    shortDescription: 'Our flagship suite with a private terrace overlooking the walled garden.',
    description: 'Indulge in the ultimate Hearthside experience. The Rose Suite features a kingsize four-poster bed, original Victorian fireplace, freestanding copper bath, and a private stone terrace draped in climbing roses. Afternoon tea is served in-room by request.',
    bedType: 'King Four-Poster',
    areaM2: 52,
    maxGuests: 2,
    floor: 2,
    view: 'Walled Garden',
    images: {
      hero: 'assets/images/rooms/rose-suite-hero.png',
      alt: 'assets/images/rooms/rose-suite-alt.png',
      gallery: []
    },
    amenities: ['Private Terrace','Freestanding Bath','Fireplace','King Four-Poster','Nespresso','Rain Shower','Free Wi-Fi','Smart TV','Minibar','In-Room Safe','Bathrobes & Slippers','Turn-Down Service'],
    rate: { base: 340, currency: 'GBP', unit: 'night' },
    availability: 'available', // 'available' | 'limited' | 'unavailable'
    availableCount: null,
    tags: ['romantic','luxury','suite','heritage'],
    featured: true,
  },
  {
    id: 'orchard-room',
    name: 'The Orchard Room',
    type: 'double',
    slug: 'room-detail.html?room=orchard-room',
    shortDescription: 'A sunlit double room with views across our ancient apple orchard.',
    description: 'Wake up to dappled orchard light streaming through the original sash windows. The Orchard Room blends country comfort with refined detail — a cloud-soft super-king bed, hand-stitched linen, and a roll-top bath in the en-suite.',
    bedType: 'Super King',
    areaM2: 36,
    maxGuests: 2,
    floor: 1,
    view: 'Apple Orchard',
    images: {
      hero: 'assets/images/rooms/orchard-room-hero.png',
      alt: 'assets/images/rooms/orchard-room-alt.png',
      gallery: []
    },
    amenities: ['Roll-Top Bath','Super King Bed','Garden View','Nespresso','Free Wi-Fi','Smart TV','In-Room Safe','Bathrobes & Slippers'],
    rate: { base: 220, currency: 'GBP', unit: 'night' },
    availability: 'available',
    availableCount: null,
    tags: ['romantic','countryside'],
    featured: true,
  },
  {
    id: 'library-room',
    name: 'The Library Room',
    type: 'double',
    slug: 'room-detail.html?room=library-room',
    shortDescription: 'A cosy retreat lined with curated bookshelves and an original fireplace.',
    description: 'For the thoughtful guest. The Library Room is steeped in atmosphere — ceiling-height shelves of curated reads, a working Victorian fireplace, a wingback reading chair, and a walk-in shower with pebble tiles.',
    bedType: 'King',
    areaM2: 30,
    maxGuests: 2,
    floor: 1,
    view: 'Courtyard',
    images: {
      hero: 'assets/images/rooms/library-room-hero.png',
      alt: 'assets/images/rooms/library-room-hero.png',
      gallery: []
    },
    amenities: ['Working Fireplace','King Bed','Reading Chair','Walk-In Shower','Nespresso','Free Wi-Fi','Smart TV'],
    rate: { base: 195, currency: 'GBP', unit: 'night' },
    availability: 'limited',
    availableCount: 2,
    tags: ['cosy','romantic','heritage'],
    featured: false,
  },
  {
    id: 'meadow-room',
    name: 'The Meadow Room',
    type: 'double',
    slug: 'room-detail.html?room=meadow-room',
    shortDescription: 'A serene double room opening directly onto the wildflower meadow.',
    description: 'Step straight onto the meadow terrace from your French doors. The Meadow Room is light, airy and beautifully understated — linen drapes, a kingsize bed, exposed limestone floor, and an oversized walk-in rainfall shower.',
    bedType: 'King',
    areaM2: 32,
    maxGuests: 2,
    floor: 0,
    view: 'Wildflower Meadow',
    images: {
      hero: 'assets/images/rooms/meadow-room-hero.png',
      alt: 'assets/images/rooms/meadow-room-hero.png',
      gallery: []
    },
    amenities: ['French Door Terrace','Rainfall Shower','King Bed','Free Wi-Fi','Smart TV','Nespresso'],
    rate: { base: 210, currency: 'GBP', unit: 'night' },
    availability: 'available',
    availableCount: null,
    tags: ['countryside','ground-floor'],
    featured: true,
  },
  {
    id: 'loft-suite',
    name: 'The Loft Suite',
    type: 'suite',
    slug: 'room-detail.html?room=loft-suite',
    shortDescription: 'A converted barn loft with vaulted beams, hot tub and panoramic views.',
    description: 'The Loft Suite occupies the entirety of our restored 18th-century barn. Original oak beams soar overhead, a private hot tub sits on the private deck, and the mezzanine sleeping area offers sweeping countryside views through full-height glazing.',
    bedType: 'Super King',
    areaM2: 68,
    maxGuests: 2,
    floor: 1,
    view: 'Panoramic Countryside',
    images: {
      hero: 'assets/images/rooms/loft-suite-hero.png',
      alt: 'assets/images/rooms/loft-suite-alt.png',
      gallery: []
    },
    amenities: ['Private Hot Tub','Vaulted Beams','Mezzanine','Free-Standing Bath','Nespresso','Minibar','Free Wi-Fi','Smart TV','Fireplace','In-Room Safe'],
    rate: { base: 420, currency: 'GBP', unit: 'night' },
    availability: 'available',
    availableCount: null,
    tags: ['romantic','luxury','suite','hot-tub','heritage'],
    featured: true,
  },
  {
    id: 'garden-cottage',
    name: 'Garden Cottage',
    type: 'cottage',
    slug: 'room-detail.html?room=garden-cottage',
    shortDescription: 'A self-contained stone cottage in the grounds — perfect for extended stays.',
    description: 'Complete seclusion in our walled garden. The Garden Cottage features a separate sitting room with log burner, a fully-equipped kitchenette, and a generous kingsize bedroom. Ideal for honeymoons, anniversaries, or simply staying longer.',
    bedType: 'King',
    areaM2: 58,
    maxGuests: 2,
    floor: 0,
    view: 'Walled Garden',
    images: {
      hero: 'assets/images/rooms/garden-cottage-hero.png',
      alt: 'assets/images/rooms/garden-cottage-hero.png',
      gallery: []
    },
    amenities: ['Separate Sitting Room','Log Burner','Kitchenette','King Bed','Private Garden','Free Wi-Fi','Smart TV','Nespresso','Washer/Dryer'],
    rate: { base: 290, currency: 'GBP', unit: 'night' },
    availability: 'unavailable',
    availableCount: 0,
    tags: ['romantic','luxury','cottage','extended-stay','heritage'],
    featured: false,
  },
];

/**
 * Utility helpers
 */
const RoomsData = {
  all: () => ROOMS_DATA,
  byId: (id) => ROOMS_DATA.find(r => r.id === id) || null,
  featured: () => ROOMS_DATA.filter(r => r.featured),
  available: () => ROOMS_DATA.filter(r => r.availability !== 'unavailable'),
  byType: (type) => ROOMS_DATA.filter(r => r.type === type),
};

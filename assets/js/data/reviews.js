/**
 * reviews.js — Guest Review Data
 * Static sample reviews. Replace or augment with API data as needed.
 */

const REVIEWS_DATA = [
  {
    id: 1,
    guestName: 'Eleanor & Thomas R.',
    location: 'London, UK',
    rating: 5,
    stayDate: 'October 2024',
    room: 'The Rose Suite',
    title: 'A perfect anniversary escape',
    body: 'We arrived not knowing what to expect and left completely enchanted. The Rose Suite is every bit as beautiful as the photographs — probably more so. The hosts remembered our anniversary and left champagne and wildflowers on the terrace. Exceptional in every detail.',
    avatar: 'E',
    verified: true,
    source: 'Direct',
    response: {
      from: 'Catherine, Host',
      message: 'Eleanor and Thomas, we were so happy to celebrate with you both. We hope to welcome you back for many anniversaries to come!'
    }
  },
  {
    id: 2,
    guestName: 'James H.',
    location: 'Edinburgh, UK',
    rating: 5,
    stayDate: 'September 2024',
    room: 'The Loft Suite',
    title: 'The best weekend break I\'ve ever taken',
    body: 'The Loft Suite alone is worth the drive. Hot tub under the stars, breakfast delivered in a hamper, silence so complete you forget the world exists. I\'ve stayed in boutique hotels all over Europe — Hearthside stands with the very best.',
    avatar: 'J',
    verified: true,
    source: 'Direct',
    response: null,
  },
  {
    id: 3,
    guestName: 'Sophie & Mark D.',
    location: 'Bristol, UK',
    rating: 5,
    stayDate: 'August 2024',
    room: 'The Orchard Room',
    title: 'Exactly what we needed',
    body: 'Utterly peaceful. Waking up to the orchard view with coffee in hand is one of those rare simple pleasures that stays with you. The team are warm, attentive without being intrusive, and the breakfast — the homemade granola! — was genuinely exceptional.',
    avatar: 'S',
    verified: true,
    source: 'Booking.com',
    response: {
      from: 'Catherine, Host',
      message: 'Sophie and Mark, thank you so much — our kitchen team will be thrilled to hear their granola made such an impression. Come back in autumn for the apple harvest!'
    }
  },
  {
    id: 4,
    guestName: 'Dr. Priya K.',
    location: 'Manchester, UK',
    rating: 4,
    stayDate: 'July 2024',
    room: 'The Library Room',
    title: 'Atmospheric and beautifully considered',
    body: 'The Library Room is a sanctuary. I came to write and found I could do nothing but read beautifully and sleep deeply. My only tiny note is that the Wi-Fi was slow in heavy rain — a minor grumble in an otherwise flawless stay.',
    avatar: 'P',
    verified: true,
    source: 'TripAdvisor',
    response: {
      from: 'Catherine, Host',
      message: 'Thank you Priya — your feedback on the Wi-Fi has been noted and we have since upgraded. We\'d love to have you back!'
    }
  },
  {
    id: 5,
    guestName: 'William & Anna F.',
    location: 'Cotswolds, UK',
    rating: 5,
    stayDate: 'June 2024',
    room: 'Garden Cottage',
    title: 'Our little corner of paradise',
    body: 'We stayed four nights in the Garden Cottage for our honeymoon and didn\'t want to leave. Having our own space but still being pampered with Hearthside\'s hospitality was the ideal balance. The breakfast hampers left at the door each morning were a beautiful touch.',
    avatar: 'W',
    verified: true,
    source: 'Direct',
    response: null,
  },
  {
    id: 6,
    guestName: 'Clara M.',
    location: 'Paris, France',
    rating: 5,
    stayDate: 'May 2024',
    room: 'The Meadow Room',
    title: 'A true English countryside gem',
    body: 'I came from Paris specifically looking for a genuine English countryside experience. Hearthside delivered beyond my imagination — the meadow, the breakfasts, the way a pot of Earl Grey appeared as if by magic. I will return every year.',
    avatar: 'C',
    verified: true,
    source: 'Google',
    response: null,
  },
];

const ReviewsData = {
  all: () => REVIEWS_DATA,
  byId: (id) => REVIEWS_DATA.find(r => r.id === id) || null,
  topRated: (count = 3) => [...REVIEWS_DATA].sort((a, b) => b.rating - a.rating).slice(0, count),
  averageRating: () => {
    const total = REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0);
    return (total / REVIEWS_DATA.length).toFixed(1);
  },
  count: () => REVIEWS_DATA.length,
};

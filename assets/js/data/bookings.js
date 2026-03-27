/**
 * bookings.js — Sample Booking Data (Dashboard Demo)
 * Used to populate guest dashboard with realistic demo content.
 * TODO: API — Replace with authenticated API fetch in production.
 */

const BOOKINGS_DATA = [
  {
    id: 'HSB-2024-0891',
    roomId: 'rose-suite',
    roomName: 'The Rose Suite',
    guestName: 'Eleanor Roberts',
    checkIn: '2025-02-14',
    checkOut: '2025-02-17',
    nights: 3,
    guests: 2,
    status: 'confirmed',    // confirmed | pending | cancelled | completed
    addOns: [
      { name: 'Champagne Welcome', price: 45 },
      { name: 'In-Room Breakfast (×3)', price: 72 },
    ],
    roomRate: 340,
    totalAmount: 1237,
    currency: 'GBP',
    paymentStatus: 'paid',
    specialRequests: [
      { id: 1, category: 'Celebration', text: 'Anniversary — please arrange flower decoration', status: 'confirmed' }
    ],
    bookingDate: '2025-01-10',
    invoiceId: 'INV-2024-0891',
    source: 'direct',
    notes: '',
  },
  {
    id: 'HSB-2024-0756',
    roomId: 'orchard-room',
    roomName: 'The Orchard Room',
    guestName: 'Eleanor Roberts',
    checkIn: '2024-09-20',
    checkOut: '2024-09-22',
    nights: 2,
    guests: 2,
    status: 'completed',
    addOns: [],
    roomRate: 220,
    totalAmount: 440,
    currency: 'GBP',
    paymentStatus: 'paid',
    specialRequests: [],
    bookingDate: '2024-08-15',
    invoiceId: 'INV-2024-0756',
    source: 'direct',
    notes: '',
  },
  {
    id: 'HSB-2024-0612',
    roomId: 'library-room',
    roomName: 'The Library Room',
    guestName: 'Eleanor Roberts',
    checkIn: '2024-06-05',
    checkOut: '2024-06-07',
    nights: 2,
    guests: 1,
    status: 'cancelled',
    addOns: [],
    roomRate: 195,
    totalAmount: 390,
    currency: 'GBP',
    paymentStatus: 'refunded',
    specialRequests: [],
    bookingDate: '2024-05-01',
    invoiceId: 'INV-2024-0612',
    source: 'direct',
    notes: 'Cancelled by guest — full refund issued per policy.',
  },
];

const INVOICES_DATA = BOOKINGS_DATA.map(b => ({
  id: b.invoiceId,
  bookingRef: b.id,
  date: b.bookingDate,
  amount: b.totalAmount,
  currency: b.currency,
  status: b.paymentStatus,
  roomName: b.roomName,
}));

const BookingsData = {
  all: () => BOOKINGS_DATA,
  byId: (id) => BOOKINGS_DATA.find(b => b.id === id) || null,
  upcoming: () => {
    const today = new Date().toISOString().split('T')[0];
    return BOOKINGS_DATA.filter(b => b.checkIn >= today && b.status !== 'cancelled');
  },
  past: () => {
    const today = new Date().toISOString().split('T')[0];
    return BOOKINGS_DATA.filter(b => b.checkOut < today && b.status === 'completed');
  },
  cancelled: () => BOOKINGS_DATA.filter(b => b.status === 'cancelled'),
  invoices: () => INVOICES_DATA,
};

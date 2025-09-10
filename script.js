// ნაბიჯი 1: სასტუმროს ჯავშნების მონაცემთა სტრუქტურა
let hotelBookings = [
  {
    bookingId: 101,
    guestName: "ანა ბერიძე",
    roomType: "Standard",
    checkInDate: "2025-07-20",
    checkOutDate: "2025-07-25",
    isPaid: true,
  },
  {
    bookingId: 102,
    guestName: "გიორგი კაპანაძე",
    roomType: "Deluxe",
    checkInDate: "2025-08-01",
    checkOutDate: "2025-08-05",
    isPaid: false,
  },
  {
    bookingId: 103,
    guestName: "ნინო დანელია",
    roomType: "Suite",
    checkInDate: "2025-09-10",
    checkOutDate: "2025-09-15",
    isPaid: true,
  },
];

console.log("საწყისი ჯავშნები:", hotelBookings);

// ნაბიჯი 2: ახალი ჯავშნის დამატება
let newBooking = {
  bookingId: 104,
  guestName: "ლუკა ქავთარაძე",
  roomType: "Standard",
  checkInDate: "2025-10-05",
  checkOutDate: "2025-10-10",
  isPaid: false,
};

hotelBookings.push(newBooking);
console.log("ახალი ჯავშანი დაემატა:", newBooking);
console.log("განახლებული ჯავშნების სია:", hotelBookings);

// ნაბიჯი 3: ჯავშნის გაუქმება (pop)
let canceledBooking = hotelBookings.pop();
console.log("გაუქმებული ჯავშანი:", canceledBooking);
console.log("ჯავშნების სია გაუქმების შემდეგ:", hotelBookings);

// ნაბიჯი 4: ჯავშნის სტატუსის შემოწმება
let firstBooking = hotelBookings[0];

if (firstBooking.isPaid) {
  console.log(`ჯავშანი ${firstBooking.bookingId}-ისთვის გადახდილია.`);
} else {
  console.log(
    `ჯავშანი ${firstBooking.bookingId}-ისთვის გადაუხდელია. გთხოვთ, შეახსენოთ სტუმარს.`
  );
}

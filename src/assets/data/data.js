export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Tengku Muhammad Adriel',
            child: 'Anak kedua dari',
            father: 'Muhammad Ali Nafiah',
            mother: 'Sri Yuliati',
            image: './src/assets/images/image17.png'
        },
        P: {
            id: 2,
            name: 'Nanda Vriska Oktaviana',
            child: 'Anak pertama dari',
            father: 'Deni Hermawan',
            mother: 'Subekti Rihwangi',
            image: './src/assets/images/image15.png'
        },

        couple: './src/assets/images/image18.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Agustus',
            date: '03',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Agustus',
            date: '03-04',
            day: 'Minggu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Rukem, RT 04/ RW 013 No.50, Desa Mangun Jaya, Kec. Tambun Selatan, Kab. Bekasi, Jawa Barat'
    },

    link: {
        calendar: 'https://calendar.app.google/7s78dRpew3nvAfuA8',
        map: 'https://maps.app.goo.gl/tLmqFGZWZQCgDQ6o9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/image.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/image1.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/image2.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/image3.jpeg'
        },
        {
            id: 5,
            image: './src/assets/images/image4.jpeg'
        },
        {
            id: 6,
            image: './src/assets/images/image5.jpeg'
        },
        {
            id: 7,
            image: './src/assets/images/image6.jpeg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Tengku Muhammad Adriel',
            icon: './src/assets/images/bca.png',
            rekening: '3431878907'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz-PEBeNYrGOoZB7YrqLMcWjQ3lYmGY0oxi7DauhQJSIVz9P6UZhspqobusDak1uKZi/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}

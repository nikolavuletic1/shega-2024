// NAVIGATION
export const NAV_LINKS = [
    // { href: '/', key: 'home', label: 'O Nama', },
    // // { href: '/', key: 'O Nama', label: 'O Nama', },
    // { href: '/about', key: 'about', label: 'Igre', },
    // // { href: '/', key: 'pricing ', label: 'Pricing ' },
    // { href: '/contact', key: 'contact', label: 'Kontakt',   },

    { key: 'home', href: '/', label: 'Početna', id: '/', slug: ['/']},
    { key: 'about', href: '/', label: 'O nama', id: '/about', slug: ['/']},
    { key: 'games', href: '/', label: 'Igre', id:'/games', slug: ['/about'] },
    { key: 'contact', href: '/', label: 'Kontakt', id: '/contact', slug: ['/contact'] },
  ];

  
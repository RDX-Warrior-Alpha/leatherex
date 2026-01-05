
import { NavItem, Product, LeatherGrade, TanningType } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Catalog', path: '/catalog' },
  { label: 'Consultation', path: '/sourcing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Artisan Deerskin Driver',
    category: 'Gloves',
    grade: LeatherGrade.FULL_GRAIN,
    tanning: TanningType.VEGETABLE,
    origin: 'Italy',
    moq: '500 Pairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKwN8EbuMoI7-ZYEYiSqZoDrvFUX8H8c2oksGlxQPUOgZmYDTk4GBRzsk5iZ5thbMbhDec8JnKjziacQ0kkTgeQfmmUcXiIdTDsjSOyG0yGkUL8X0M_ue5ejqrao0Kwwjr3FzW-QEzfY45ImW303VuAGcXGJRbCgUsRXivmJokYJlLXuepLgSL87cLvK-S5aY9jirhQBqYW11Kx0Z5WFl2HTLV5qQW5GQCbur2C67BTIv162MmbQxWFHm7ZG8F8wo3vOaNWnqsnFc',
    description: 'Ultra-soft deerskin gloves for driving and everyday luxury. Features reinforced palm stitching.',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Nappa Black',
    category: 'Gloves',
    grade: LeatherGrade.TOP_GRAIN,
    tanning: TanningType.CHROME,
    origin: 'Pakistan',
    moq: '1000 Pairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhLZD0nH3yaSh0prlCINUNKsALUyGd5bn7dunFUMsXpaTQOCvmtueT73w-hgaE2Z-CJeWRw8xP5EcAaHZq16qfvmsS13A02PTXG8LuwK3yiuiIUUGZUm3PwIquKbXhfY5cQnrhSESkfdnqILIwfQWzav49AKYxowtwoFYDjM77DvEX4Y9_BIhoBh1wOeORkmUH3uLuUj0Hv6_0ubNDIljFe1mfmd1xD7PWLmR_KGdLQGvlQKK29KlG8lSy21lA94Ve-liAdTBIEdQ',
    description: 'Sleek, professional lambskin gloves with a timeless finish. Touchscreen compatible fingertips.',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Heavy Duty Split Cowhide',
    category: 'Safety',
    grade: LeatherGrade.SPLIT,
    tanning: TanningType.CHROME,
    origin: 'India',
    moq: '2500 Pairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgktN9kvbMUu3NjLKHlWqkYNi8OV0SSSYLDLa9eslRY2sbYGgQqYpJ7083Hqwknu6dlXGF0hqWfO85o_KiEhdYW66QrvEfSC7cH8gXxZAnWv2wIR5UdHbqxp3hLXfSz-ClD8OQaEEYkI8giaRYh3aMfiUjhHGuCtlwlwZxdrhxOQcGADIp5U2r7eBdU7TMtFc5K6RoP5uL52i3NR_Eks8qJkyegoU2mqAk8dsZAlIhqATlXGShguOPAijZTYuayIM9jkthAMbxw7k',
    description: 'Rugged protection for industrial environments. Abrasion and heat resistant finish.'
  },
  {
    id: '4',
    name: 'Milano Red Fashion',
    category: 'Gloves',
    grade: LeatherGrade.FULL_GRAIN,
    tanning: TanningType.VEGETABLE,
    origin: 'Italy',
    moq: '200 Pairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTWjm-wV21uFquhPCme3VL4q2xepvp0LotO6V5By9sJQXtXMJW0KohAswwSNY1QG0YcnMrkkg0m8-LDJpU3uToDicuf1p3VpndFzLt55bKgT_MpTisMVD0fLrFPkZ8rOC8ksKE5BKMAU2j6NVLMgNTazTlwgtVGYIhPvOoRRjz7eI-fkMh0CxWssTia1xyIIASWtl63LYsFgJnU2XNUMBuqeiYZuswGjNIesfrfYK5v6P04QRMKUJ04S16zOlVV-epyiwNmsCgtnc',
    description: 'Vibrant, hand-finished lambskin for high fashion. Exceptional softness and stretch.'
  },
  {
    id: '5',
    name: 'Premium Weekend Duffel',
    category: 'Bags',
    grade: LeatherGrade.FULL_GRAIN,
    tanning: TanningType.VEGETABLE,
    origin: 'USA',
    moq: '100 Units',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEozlXPAd2qsb0CuEyyJ0kPenoN9zgOIPHWgSWuBfLkuGdNVp1DvB3zYFZByMnxL639dwiG0g2SvmFLKshLZHQqeqQarJxx8acEqzs_j3j41ZgLTb8rbT6B-TMM1emN3wDquQRuz2KzQZYholtm-SWDV_Upp6HiMa0ney-diDFb5I5S53LunTJtL6Zj-elNhK6x4l6gbebIV9ICzVCVDfcujC_LKxg5ANrcNjNEO1NfBxjWLEUuX4DSC65WQ72kPOsXtItwrXJ_0Q',
    description: 'Handcrafted travel companion designed to last a lifetime. Solid brass hardware.'
  },
  {
    id: '6',
    name: 'Raw Calfskin Hides',
    category: 'Accessories',
    grade: LeatherGrade.FULL_GRAIN,
    tanning: TanningType.VEGETABLE,
    origin: 'Argentina',
    moq: '500 SQFT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwXtzCj-XZ26-h96ExqrvQHSgjT71bLHOOBPlcsfJTkWeND_Xm74apL-tTuYCnyKSV9tVZ1PSUQMvvNUepD5g8i3IcgmrCzwALoL2J9wxaS_ExutEQ-1Lcld_mSvFvSOUcIU5uA418C8-8__mIa1N0EW2H7mgN3Hy4EJ_NLSj8JA-Jq2F6c_HpmZziTg7ZioKqKdGyXMijPpbD_DrrGGPhdpeZmojbXQaUPFaeg3ZjhifISbYBg0TxGBvI8AuAmyIA_1emaxB7l-A',
    description: 'Natural unfinished calfskin for custom crafting and luxury goods manufacturing.',
    isNew: true
  }
];

import { COURSE } from "../models/CourseCard";

export const CATEGORIES = [
  new Category('c1', 'Popular', 'book-outline'),
  new Category('c2', 'Lembaga', 'business-outline'),
  new Category('c3', 'Voucher', 'cash'),
  new Category('c4', 'Pinjaman', 'card'),
  new Category('c5', 'Lainnya', 'grid-outline'),
];

export const COURSE = [
  new COURSE(
    "m1",
    ["c1", "c2"],
    "Animasi 3D with Blender",
    "../assets/images/ilustrasi1.png",
    '1 January 2023',
    'MyEduSolve',
    "Hanansyah Abigail",
  ),
  new COURSE(
    "m2",
    ["c1", "c2"],
    "Pengenalan Mode AI ",
    "../assets/images/ilustrasi1.png",
    '09 Oktober 2023',
    "TechHub Institute",
    "Sarah Johnson",
  ),
  new COURSE(
    "m3",
    ["c1", "c2"],
    "Desain UI/UX Modern" ,
    "../assets/images/ilustrasi1.png",
    '2023-08-20',
    "DesignLab Solutions",
    "David Lee",
  ),
  new COURSE(
    "m4",
    ["c1", "c2"],
    "Pemrograman Web Lanjut" ,
    "../assets/images/ilustrasi1.png",
    '2023-09-25',
    "CodeCamp University",
    "Michael Smith",
  ),
  new COURSE(
    "m5",
    ["c1", "c2"],
    "Bisnis Digital" ,
    "../assets/images/ilustrasi1.png",
    '2023-08-15',
    "E-Commerce Mastery",
    "Emily Davis",
  ),
  new COURSE(
    "m6",
    ["c1", "c2"],
    "Data Science Fundamentals" ,
    "../assets/images/ilustrasi1.png",
    '2023-09-05',
    "Analytics Academy",
    "John Williams",
  ),

];

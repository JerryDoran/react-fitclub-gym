import { AiOutlineHeart } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import { IoBarbellSharp } from 'react-icons/io5';

export const plansData = [
  {
    icon: AiOutlineHeart,
    name: 'BASIC PLAN',
    price: '25',
    features: [
      '2 hours of excercises',
      'Free consultaion to coaches',
      'Access to The Community',
    ],
  },
  {
    icon: FaCrown,
    name: 'PREMIUM PLAN',
    price: '30',
    features: [
      '5 hour of excercises',
      'Free consultaion of Coaches',
      'Access to minibar',
    ],
  },
  {
    icon: IoBarbellSharp,
    name: 'PRO PLAN',
    price: '45',
    features: [
      '8 hours of excercises',
      'Consultation of Private Coach',
      'Free Fitness Merchandises',
    ],
  },
];

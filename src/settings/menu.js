import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon
} from 'react-feather';

export default function () {
  return [
    {
      href: '/dashboard/home',
      icon: BarChartIcon,
      title: 'Dashboard'
    },
    {
      href: '/dashboard/customers',
      icon: UsersIcon,
      title: 'Customers'
    },
    {
      href: '/dashboard/products',
      icon: ShoppingBagIcon,
      title: 'Products'
    }
  ];
}

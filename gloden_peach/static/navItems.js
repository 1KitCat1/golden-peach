import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Assets',
    icon: <AiOutlinePieChart />,
    link: '/',
  },
  {
    title: 'Trade',
    icon: <BiTrendingUp />,
    link: '',
  },
  {
    title: 'Pay',
    icon: <RiCoinsLine />,
    link: '',
  },
  {
    title: 'For You',
    icon: <MdWeb />,
    link: '',
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
    link: '',
  },
  {
    title: 'Invite Friends',
    icon: <BsPersonPlus />,
    link: '/navigation/invite',
  },
]
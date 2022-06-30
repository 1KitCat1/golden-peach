import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Assets',
    icon: <AiOutlinePieChart />,
    link: 'assets',
  },
  {
    title: 'Trade',
    icon: <BiTrendingUp />,
    link: 'trade',
  },
  {
    title: 'Pay',
    icon: <RiCoinsLine />,
    link: 'pay',
  },
  {
    title: 'For You',
    icon: <MdWeb />,
    link: 'foryou',
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
    link: 'notification',
  },
  {
    title: 'Invite Friends',
    icon: <BsPersonPlus />,
    link: 'invite',
  },
]
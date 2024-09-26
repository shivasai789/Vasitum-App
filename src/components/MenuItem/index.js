
import { MdDashboard } from "react-icons/md";
import { GoPersonAdd } from "react-icons/go";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LiaCookieSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <MdDashboard className="tab-icon" />,
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: <GoPersonAdd className="tab-icon" />,
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: <RiCalendarScheduleLine className="tab-icon" />,
  },
  {
    id: "employee",
    label: "Employee",
    icon: <GoPeople className="tab-icon" />,
  },
  {
    id: "department",
    label: "Department",
    icon: <LiaCookieSolid className="tab-icon" />,
  },
];

const otherItems = [
  {
    id: "support",
    label: "Support",
    icon: <BiSupport className="tab-icon" />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <IoSettingsOutline className="tab-icon" />,
  },
];

export { menuItems, otherItems };

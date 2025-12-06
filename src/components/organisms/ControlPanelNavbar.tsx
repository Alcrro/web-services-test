import { navbarItems } from "@/shared/data/administrator/navbar/NavbarData";

import SearchBar, { SearchItemProps } from "../molecules/SearchBar";
import NotificationItem, {
  NotificationItemProps,
} from "../atoms/NotificationItem";
import ThemeToggle from "@/components/atoms/buttons/ThemeToggle";
import ProfileItem, {
  ProfileItemProps,
} from "../molecules/header/navbar/ProfileItem";

interface NavbarItemMap {
  search: React.FC<SearchItemProps>;
  notifications: React.FC<NotificationItemProps>;
  "theme-toggle": React.FC;
  profile: React.FC<ProfileItemProps>;
}

const navbarMapper: NavbarItemMap = {
  search: SearchBar,
  notifications: NotificationItem,
  "theme-toggle": ThemeToggle,
  profile: ProfileItem,
};

const ControlPanelNavbar = () => {
  return (
    <div className="relative flex justify-between items-center p-4 bg-(--color-bg-section) rounded-xl">
      <div>lasts link</div>
      <div className=" menu_settings">
        <ul className="flex gap-2 items-center ">
          {navbarItems.map((item) => {
            const Component = navbarMapper[item.type as keyof NavbarItemMap];

            switch (item.type) {
              case "theme-toggle":
                return <ThemeToggle key={item.type} />;
              default:
                return (
                  <li className=" flex gap-2 items-center" key={item.type}>
                    <Component {...item} />
                  </li>
                );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default ControlPanelNavbar;

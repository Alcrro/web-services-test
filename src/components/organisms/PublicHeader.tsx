import style from "@/components/styles/header.module.scss";
import ToggleButton from "../atoms/buttons/ToggleNavbarMenuButton";
import ThemeToggle from "../atoms/buttons/ThemeToggle";
import CompanyLogo from "../atoms/company/CompanyLogo";
import NavbarMenu from "../molecules/header/navbar/NavbarMenu";
import NavModal from "../molecules/NavModal";

export default function PublicHeader() {
  return (
    <header className={style.header}>
      <NavModal>
        <CompanyLogo>ALCRRO</CompanyLogo>
        <div className="flex items-center max-sm:ml-0 max-sm:mx-0 ml-auto mx-2 ">
          <ThemeToggle />
          <ToggleButton />
        </div>
        <NavbarMenu />
      </NavModal>
    </header>
  );
}

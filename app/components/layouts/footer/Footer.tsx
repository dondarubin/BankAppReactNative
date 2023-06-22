import {FC} from "react";
import Padding from "../../ui/Padding";
import {AppColors} from "../../../../constants";
import {menu} from "./menu";
import NavItem from "./NavItem";
import {Routes} from "../../../navigation/types";

interface IFooter {
  navigate: (screenName: keyof Routes) => void,
  currentRoute: string
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {


  return (
    <Padding style={{
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 20,
      paddingTop: 8,
      borderTopColor: AppColors.MAIN,
      backgroundColor: AppColors.GRAY_TO,
      borderTopWidth: 1
    }}>
      {menu.map(item => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  )
}

export default Footer
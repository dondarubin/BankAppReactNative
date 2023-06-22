import {FC, useState} from "react";
import {IFooterItem} from "./types";
import {Pressable, Text} from "react-native";
import {AntDesign} from '@expo/vector-icons'
import {AppColors} from "../../../../constants";
import {Routes} from "../../../navigation/types";


interface INavItem {
  item: IFooterItem,
  navigate: (screenName: keyof Routes) => void,
  currentRoute: string
}

const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
  const isActive = currentRoute === item.title

  return (
    <Pressable
      style={{
        alignItems: 'center',
        width: '20%'
      }}
      onPress={() => navigate(item.title)}
    >
      <AntDesign
        style={{
          fontSize: 20,
          lineHeight: 28,
          color: isActive ? AppColors.MAIN : AppColors.WHITE
        }}
        name={item.iconName}
      />

      <Text style={{
        fontSize: 12,
        lineHeight: 16,
        color: isActive ? AppColors.MAIN : AppColors.WHITE,
        marginTop: 1
      }}
      >
        {item.title}
      </Text>
    </Pressable>
  )
}

export default NavItem
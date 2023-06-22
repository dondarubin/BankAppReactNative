import {Routes} from "./app/navigation/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {
    }
  }
}
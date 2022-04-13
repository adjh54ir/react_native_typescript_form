import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export declare module CommonInteface {
    /**
     * Stack Navigation 화면 리스트 
     */
    export type RootStackViewList = {
        default: undefined;
        home: undefined;
    }
    /**
     * 하위 컴포넌트로 보낼 파라미터 데이터 
     */
    export type ChildrenProps = {
        route: RouteProp<RootStackViewList, any>;
        navigation: StackNavigationProp<RootStackViewList, any>;
        appState: AppStateType;
    }

    /**
     * 사용자의 현재 앱 위치 상태
     */
    export type AppStateType = "active" | "background" | "inactive" | "unknown" | "extension"


}

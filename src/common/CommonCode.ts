
/**
 * [정의] 사용자가 앱에서 어떤 상태 인지에 대한 코드 관리
 */
export const enum USER_APP_STATE {
    active = "active",          // 앱 안에서 사용중인 경우 
    inactive = "inactive",      // [IOS] 앱 안에서 벗어난 경우 
    background = "background",  // 앱 안에서 다른곳으로 벗어난 경우 
}
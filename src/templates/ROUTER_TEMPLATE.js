const ROUTER_TEMPLATE = `
import { router, useSegments } from 'expo-router';
import Layout from './layouts';

export default function Router() {

  /** Setup your logic for Authentication, notification and loading data

  const { loadingUser, loadingUserData, authCheck } = useAuthStore();
  const { isNotificationRoute, notificationRoute } = useNotificationStore();
  const { seenOnboard } = useScreensStore();
  const isSignedIn = authCheck === true;
  const isLoaded = loadingUser === false && loadingUserData === false;
  const isLoadingApp = loadingUser === true
  const isLoadingUser = loadingUserData === true;

  // Get the current route segment
  const segment = useSegments();

  useEffect(() => {
    // if (!isLoaded) return;

    const isRoutesGroups = segment[0] === home_group;

    console.log('segment[0]', segment[0])
    let navigateTo: any;
    switch (true) {
      case isLoadingApp:
        console.log('Loading App');
        navigateTo = loading_app;
        break;
      case isLoadingUser:
        console.log('Loading User');
        navigateTo = loading_user;
        break;
      case !seenOnboard:
        console.log('TO ONBOARD SCREEN')
        navigateTo = onboard_screen;
        break;
        case !isSignedIn:
        console.log('TO LANDING SCREEN')
        navigateTo = landing_screen;
        break;
        case isSignedIn && !isRoutesGroups:
        console.log('TO HOME')
        navigateTo = home_screen;
        break;
        case isSignedIn && isRoutesGroups:
        console.log('TO HOME')
        navigateTo = home_screen;
        break;
      default:
        break;
    }

    !isNotificationRoute ? router.replace(navigateTo) : router.push(notificationRoute);
  }, [isSignedIn, isLoaded, seenOnboard, isLoadingApp, isLoadingUser]);

   */

  return <Layout />;
}

`
module.exports = { ROUTER_TEMPLATE };
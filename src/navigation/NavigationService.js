import { StackActions, CommonActions } from '@react-navigation/native';
let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function reset(routeName, params) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    })
  );
}

function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace(routeName, params)
  );
}

function navigateScreen(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    })
  );
}

function goBack() {
  _navigator.dispatch(CommonActions.back({}));
}

export default {
  setTopLevelNavigator,
  navigateScreen,
  reset,
  replace,
  goBack,
};

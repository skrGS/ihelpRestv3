import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Text } from "@components";
import * as Utils from "@utils";
import { store } from "app/store";

/* Bottom Screen */
import Home from "@screens/Home";
import Category from "@screens/Category";
import Profile from "@screens/Profile";
import Post from "@screens/Post";
import Favourite from "@screens/Favourite";

/* Modal Screen only affect iOS */
import Search from "@screens/Search";
import SignUp from "@screens/SignUp";

/* Stack Screen */
import Messenger from "@screens/Messenger";
import Review from "@screens/Review";
import Feedback from "@screens/Feedback";
import Messages from "@screens/Messages";
import Notification from "@screens/Notification";
import ResetPassword from "@screens/ResetPassword";
import ChangePassword from "@screens/ChangePassword";
import ProfileEdit from "@screens/ProfileEdit";
import ChangeLanguage from "@screens/ChangeLanguage";
import ContactUs from "@screens/ContactUs";
import AboutUs from "@screens/AboutUs";
import PostDetail from "@screens/PostDetail";
import Setting from "@screens/Setting";
import ThemeSetting from "@screens/ThemeSetting";

/** Preview Component */
import PreviewComponent from "@screens/PreviewComponent";
import { useSelector } from "react-redux";
import { BaseColor, useTheme, BaseStyle } from "@config";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

/** ECommerce */
import ECategory from "@screens/ECategory";
import ECart from "@screens/ECart";
import EShipping from "@screens/EShipping";
import EPayment from "@screens/EPayment";
import EConfirmed from "@screens/EConfirmed";
import EMyOrder from "@screens/EMyOrder";
import ETrackOrder from "@screens/ETrackOrder";
import EWishlist from "@screens/EWishlist";
import ENotification from "@screens/ENotification";
import EAddress from "@screens/EAddress";
import EBank from "@screens/EBank";
import EBankDetail from "@screens/EBankDetail";
import EMessages from "@screens/EMessages";
import EFollowers from "@screens/EFollowers";
import EProductPageNotFound from "@screens/EProductPageNotFound";
import EReviews from "@screens/EReviews";
import EFeedback from "@screens/EFeedback";
import EHome from "@screens/EHome";
import EProduct from "@screens/EProduct";
import EProductDetail from "@screens/EProductDetail";
import EProductStoreProfile from "@screens/EProductStoreProfile";

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primaryColor,
        inactiveTintColor: BaseColor.grayColor,
        style: BaseStyle.tabBar,
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => {
            return <Icon name="inbox" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="Category"
        component={Category}
        options={{
          title: t("category"),
          tabBarIcon: ({ color }) => {
            return <Icon name="th-large" size={20} solid color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={Post}
        options={{
          title: t("posts"),
          tabBarIcon: ({ color }) => {
            return <Icon name="file" size={20} solid color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: t("favorites"),
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Icon solid name="bookmark" size={20} solid color={color} />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: BaseColor.whiteColor,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    top: -5,
                    right: -12,
                    borderRadius: 10,
                  }}
                >
                  <Text whiteColor caption2>
                    5
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("account"),
          tabBarIcon: ({ color }) => {
            return <Icon solid name="user-circle" size={20} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const EBottomTabNavigator = (props) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primaryColor,
        inactiveTintColor: BaseColor.grayColor,
        style: BaseStyle.tabBar,
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="EHome"
        component={EHome}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => {
            return <Icon name="inbox" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="EProduct"
        component={EProduct}
        options={{
          title: t("products"),
          tabBarIcon: ({ color }) => {
            return <Icon name="th-large" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="News"
        component={Post}
        options={{
          title: t("news"),
          tabBarIcon: ({ color }) => {
            return <Icon name="book" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="ECart"
        component={ECart}
        options={{
          title: t("cart"),
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Icon
                  solid
                  name="shopping-cart"
                  size={20}
                  solid
                  color={color}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: BaseColor.whiteColor,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    top: -5,
                    right: -12,
                    borderRadius: 10,
                  }}
                >
                  <Text whiteColor caption2>
                    3
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("account"),
          tabBarIcon: ({ color }) => {
            return <Icon solid name="user-circle" size={20} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const Main = (props) => {
  return (
    <MainStack.Navigator headerMode="none" initialRouteName="ECommerceMenu">
      <MainStack.Screen name="ECommerceMenu" component={EBottomTabNavigator} />
      <MainStack.Screen name="NewsMenu" component={BottomTabNavigator} />

      <MainStack.Screen name="Search" component={Search} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="Messenger" component={Messenger} />
      <MainStack.Screen name="Review" component={Review} />
      <MainStack.Screen name="Feedback" component={Feedback} />
      <MainStack.Screen name="Messages" component={Messages} />
      <MainStack.Screen name="Notification" component={Notification} />
      <MainStack.Screen name="ResetPassword" component={ResetPassword} />
      <MainStack.Screen name="ChangePassword" component={ChangePassword} />
      <MainStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <MainStack.Screen name="ContactUs" component={ContactUs} />
      <MainStack.Screen name="AboutUs" component={AboutUs} />
      <MainStack.Screen name="PostDetail" component={PostDetail} />
      <MainStack.Screen name="PreviewComponent" component={PreviewComponent} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />

      <MainStack.Screen name="EProductDetail" component={EProductDetail} />
      <MainStack.Screen name="EShipping" component={EShipping} />
      <MainStack.Screen name="EPayment" component={EPayment} />
      <MainStack.Screen name="EConfirmed" component={EConfirmed} />
      <MainStack.Screen name="EMyOrder" component={EMyOrder} />
      <MainStack.Screen name="ETrackOrder" component={ETrackOrder} />
      <MainStack.Screen name="EWishlist" component={EWishlist} />
      <MainStack.Screen name="ENotification" component={ENotification} />
      <MainStack.Screen name="EAddress" component={EAddress} />
      <MainStack.Screen name="EBank" component={EBank} />
      <MainStack.Screen name="EBankDetail" component={EBankDetail} />
      <MainStack.Screen name="ECategory" component={ECategory} />
      <MainStack.Screen
        name="EProductStoreProfile"
        component={EProductStoreProfile}
      />
      <MainStack.Screen name="EMessages" component={EMessages} />
      <MainStack.Screen name="EFollowers" component={EFollowers} />
      <MainStack.Screen
        name="EProductPageNotFound"
        component={EProductPageNotFound}
      />
      <MainStack.Screen name="EReviews" component={EReviews} />
      <MainStack.Screen name="EFeedback" component={EFeedback} />
    </MainStack.Navigator>
  );
};

export default Main;

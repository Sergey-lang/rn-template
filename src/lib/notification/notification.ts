import messaging from "@react-native-firebase/messaging";
import notifee, {AndroidImportance} from "@notifee/react-native";

class NotificationHelper {
    static async requestPermission() {
        const authStatus = await messaging().requestPermission();
        console.log("Notification permission:", authStatus);
    }

    static async displayNotification(title: string, body: string) {
        await notifee.requestPermission();

        await notifee.createChannel({
            id: "default",
            name: "Default Channel",
            importance: AndroidImportance.HIGH,
        });

        await notifee.displayNotification({
            title,
            body,
            android: {
                channelId: "default",
                importance: AndroidImportance.HIGH,
            },
        });
    }
}

export default NotificationHelper;

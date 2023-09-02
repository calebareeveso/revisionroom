import { useHMSNotifications } from '@100mslive/hms-video-react';
import { Notifications } from "@mantine/notifications";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
function RoomNotification() {
    const notification = useHMSNotifications();
    const router = useRouter()
    useEffect(() => {
        if (!notification) {
            return;
        }

        switch (notification.type) {
            // ...Other notification type cases
            case 'REMOVED_FROM_ROOM':
                // Redirect or Show toast to user
              
                Notifications.show({
                    id: "notification",
                    withCloseButton: true,
                    autoClose: 3000,
                    // title: "Error!!",
                    message: notification.data.reason,
                    color: "red",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                        />
                      </svg>
                    ),
                    className: "text-white",
                    // style: { backgroundColor: "red" },
                    styles: {
                      root: {
                        backgroundColor: "red",
                        borderColor: "red",
            
                        "&::before": { backgroundColor: "#ffffff" },
                      },
            
                      title: {
                        color: "#ffffff",
                      },
                      description: {
                        color: "#ffffff",
                        fontWeight: "400",
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "capitalize",
                      },
                      closeButton: {
                        color: "#ffffff",
                      },
                    },
                    sx: { backgroundColor: "red" },
                    loading: false,
                  });
                  setTimeout(() => {
                    router.replace('/feed')
                  }, 3000);
                break;
            case 'ROOM_ENDED':
                // Redirect or Show toast to user
              
                  Notifications.show({
                    id: "notification",
                    withCloseButton: true,
                    autoClose: 3000,
                    // title: "Error!!",
                    message: notification.data.reason,
                    color: "red",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                        />
                      </svg>
                    ),
                    className: "text-white",
                    // style: { backgroundColor: "red" },
                    styles: {
                      root: {
                        backgroundColor: "red",
                        borderColor: "red",
            
                        "&::before": { backgroundColor: "#ffffff" },
                      },
            
                      title: {
                        color: "#ffffff",
                      },
                      description: {
                        color: "#ffffff",
                        fontWeight: "400",
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "capitalize",
                      },
                      closeButton: {
                        color: "#ffffff",
                      },
                    },
                    sx: { backgroundColor: "red" },
                    loading: false,
                  });
                  setTimeout(() => {
                    router.replace('/feed')
                  }, 3000);
                break;
           
            
        }
    }, [notification]);

    return     <Notifications position="top-right" />;
}

export default RoomNotification;

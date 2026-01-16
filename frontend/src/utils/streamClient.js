import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { toast } from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { getStreamToken } from "../services/sessions";
import { useAuth } from "@clerk/clerk-react";

function useStreamClient(session, isSessionLoading, isHost, isParticipant) {
  const { getToken } = useAuth();
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "Completed") return;
      try {
        const clerkToken = await getToken();
        const { token, userId, userName, userImage } =
          await getStreamToken(clerkToken);
        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );
        // console.log(userId,userName,userImage,token);

        setStreamClient(client);
        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);
        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setChatClient(chatClientInstance);
        const chatChannel = chatClientInstance.channel(
          "messaging",
          session.callId
        );
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        toast.error("failed to join video call");
        console.log("error in initializing video call", error);
      } finally {
        setIsInitializingCall(false);
      }
    };
    if (session && !isSessionLoading) initCall();

    return () => {
      async function cleanup() {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          disconnectStreamClient();
        } catch (error) {
          console.log("cleanup error", error);
        }
      }
      cleanup();
    };
  }, [session, isSessionLoading, isHost, isParticipant]);

  return { streamClient, call, chatClient, channel, isInitializingCall };
}

export default useStreamClient;

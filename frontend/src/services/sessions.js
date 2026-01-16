import axios from "axios";
import axiosInstance from "../lib/axios";
import { useAuth } from "@clerk/clerk-react";

export const createSession = async ({ data, token }) => {
  const response = await axiosInstance.post("/session", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getActiveSessions = async (token) => {
  const response = await axiosInstance.get("/session/active", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMyRecentSessions = async (token) => {
  const response = await axiosInstance.get("/session/myRecent", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const getSessionById = async (id, token) => {
  const response = await axiosInstance.get(`/session/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const joinSession = async (id, token) => {
  const response = await axiosInstance.post(
    `/session/${id}/join`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const endSession = async (id, token) => {
  const response = await axiosInstance.post(
    `/session/${id}/end`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getStreamToken = async (token) => {
  console.log(token);
  const response = await axiosInstance.get(`/chat/token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

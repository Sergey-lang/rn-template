import {axiosInstance} from "./index.ts";

export type ProfileType = {
    id: number;
    name: string;
    username: string;
    address: {
        street: string;
        suite: string;
        city: string;
    }
    phone: string;
    website: string;
}


export const getProfile = async (id: number) => {
    const res = await axiosInstance.get<ProfileType>(`/users/${id}`)
    return res.data;
}

export const getPosts = async (userId?: string) => {
    const query = new URLSearchParams({
        ...(userId && { userId }),
    });
    const res = await axiosInstance.get<ProfileType[]>(`/users?${query}`);
    return res.data;
}

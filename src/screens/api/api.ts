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

export const getPeople = async () => {
    const res = await axiosInstance.get<ProfileType[]>('/users')
    return res.data;
}

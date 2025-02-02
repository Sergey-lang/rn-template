import {makeAutoObservable, runInAction} from "mobx";
import {getProfile, ProfileType} from "../../api/api.ts";

class ProfileStore {
    profile?: ProfileType;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getProfileAction = async (id: number) => {
        this.loading = true;
        this.error = null;

        try {
            const data = await getProfile(id);
            runInAction(() => {
                this.profile = data;
            });
        } catch (err) {
            runInAction(() => {
                this.error = "Ошибка загрузки профиля";
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

export default new ProfileStore();

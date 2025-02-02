import {makeAutoObservable, runInAction} from "mobx";
import {getPosts, getProfile, ProfileType} from "../../api/api.ts";

class PeopleStore {
    posts?: ProfileType[] = [];
    selectedPerson?:  ProfileType;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getPeopleAction = async (search?: string) => {
        this.loading = true;
        this.error = null;

        try {
            const data = await getPosts(search);
            runInAction(() => {
                this.posts = data;
            });
        } catch (err) {
            runInAction(() => {
                this.error = "List loading error";
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    getPersonAction = async (id: number) => {
        this.loading = true;
        this.error = null;

        try {
            const data = await getProfile(id);
            runInAction(() => {
                this.selectedPerson = data;
            });
        } catch (err) {
            runInAction(() => {
                this.error = "Profile loading error";
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

export default new PeopleStore();

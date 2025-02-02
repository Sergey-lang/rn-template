import {makeAutoObservable, runInAction} from "mobx";
import {getPeople, getProfile, ProfileType} from "../../api/api.ts";

class PeopleStore {
    people?: ProfileType[] = [];
    selectedPerson?:  ProfileType;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getPeopleAction = async () => {
        this.loading = true;
        this.error = null;

        try {
            const data = await getPeople();
            runInAction(() => {
                this.people = data;
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

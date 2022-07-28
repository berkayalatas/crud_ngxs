import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { defaultPermissions, IPermission } from "../models/ITodo";

export class AuthStateModel {
    permissions: IPermission[] | undefined;
}

@State<AuthStateModel>({
    name:'auth',
    defaults:{
        permissions: defaultPermissions
    }
})

@Injectable()
export class AuthState {
    @Selector()
    static getPermissions(state: AuthStateModel) {
        return state.permissions;
    }

}
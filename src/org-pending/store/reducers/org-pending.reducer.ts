import { PendingOrganisation, PendingOrganisationSummary } from '../../models/pending-organisation';
import * as fromRoot from '../../../app/store/reducers/app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PendingOrgActions, PendingOrgActionTypes } from '../actions/org-pending.actions';

export interface PendingOrganisationState {
    pendingOrganisations: PendingOrganisation[];
    loaded: boolean;
    loading: boolean;
}

const initialState: PendingOrganisationState = {
    pendingOrganisations: null,
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: PendingOrgActions
    ): PendingOrganisationState {
    switch (action.type) {
        case PendingOrgActionTypes.LOAD_PENDING_ORGANISATIONS: {
            console.log('in load');
            return {
              ...state,
              loaded: false,
              loading: true
            };
          }
        case PendingOrgActionTypes.LOAD_PENDING_ORGANISATIONS_SUCCESS:
        console.log(' action.payload pending',  action.payload);
        const payload = action.payload;
        let pendingOrganisations = payload;
        if (pendingOrganisations.length !== 0) {
            pendingOrganisations = payload.map((entity: PendingOrganisation) => {
                const element: PendingOrganisationSummary = {
                  ...entity,
                  routerLink: `/pending-organisations/pending-organisation/${entity.pbaNumber}/`
                };
                return element;
              });
          }
        return {
            ...state,
            pendingOrganisations:  pendingOrganisations,
            loaded: true,
            loading: false
        };
        default:
        return state;
}
}

export const getPendingOrganisations = (state: PendingOrganisationState) => state.pendingOrganisations;
export const getPendingOrganisationsLoading = (state: PendingOrganisationState) => state.loading;
export const getPendingOrganisationsLoaded = (state: PendingOrganisationState) => state.loaded;

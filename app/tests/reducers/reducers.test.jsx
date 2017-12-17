import expect from 'expect';
const deepFreeze = require('deep-freeze-strict');

const reducers = require('reducers');

describe('[Reducers]', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test search text'
            };
            let res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

            expect(res).toEqual(true);
        });
    });
});

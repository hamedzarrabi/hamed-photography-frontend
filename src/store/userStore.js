import {UserService} from '@/service/UserService';
import {createStore} from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        user: {
            id: Number,
            email: '',
            roles: '',
            name: '',
            phoneNumber: '',
        },
    },
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        user: (state) => state.user,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setIsLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }

    },
    actions: {
        setUser({commit}) {
            commit('setUser');
        },

        setIsLoggedIn({ commit }, isLoggedIn) {
            // ذخیره وضعیت isLoggedIn در localStorage
            localStorage.setItem('isLoggedIn', isLoggedIn);
            commit('setIsLoggedIn', isLoggedIn);
        },
        getIsLoggedIn({ commit }) {
            // بازیابی وضعیت isLoggedIn از localStorage
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn) {
                commit('setIsLoggedIn', isLoggedIn === 'true');
            }
        },

        async loginUser({commit}, user) {
            try {
                const response = await UserService.login(user);

                const accessToken = response.data.accessToken;
                const userId = response.data.userId;
                const email = response.data.email;
                const roles = response.data.role;
                const name = response.data.name;
                const phoneNumber = response.data.phoneNumber;


                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userId', userId);
                localStorage.setItem('email', email);
                localStorage.setItem('roles', roles);
                localStorage.setItem('name', name);
                localStorage.setItem('phoneNumber', phoneNumber);
                localStorage.setItem('accessToken', accessToken);

                // commit('setIsLoggedIn', true);
                if (userId && email && roles && name && phoneNumber) {
                    commit('setUser', {
                        id: userId,
                        email: email,
                        name: name,
                        phoneNumber: phoneNumber,
                        roles: roles,
                    });
                }


                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    },
    modules: {}
});

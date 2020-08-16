<template>
    <form class="login-form" @submit.prevent>
        <div class="login-form__login">
            <label for="">
                Login
                <input type="text" name="login" v-model="credentials.login" >
            </label>
        </div>
        <div class="login-form__password">
            <label for="">
                Paswword
                <input type="text" name="paswword" v-model="credentials.password>
            </label>
        </div>
        <div class="login-form__button-group">
            <button @click="onSignIn">Sing In</button>
            <button>Sing Up</button>
        </div>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
    export default {
        name: 'Login',
        data() {
            return {
                credentials: {
                    login: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['asyncSignIn']),
            onSignIn() {
                const { login, password } = this.credentials;
                if (login && password) {
                    this.asyncSignIn(this.credentials);

                }
                // this.$router.push('/dashboard')
            }
        }
    }
</script>
<style lang="scss">
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid red;
        &__login, &__password {
            width: 100%;
        }
        &__button-group {
            display: flex;
            flex-direction: column;
            width: 100px;
            margin-top: 10px;
        }
        label {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>

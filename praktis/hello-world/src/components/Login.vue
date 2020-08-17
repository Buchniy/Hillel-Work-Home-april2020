<template>
    <form class="login-form" @submit.prevent>
        <div class="login-form__login">
            <label for="">
               <p>Login</p>
                <input type="text" name="login" v-model="credentials.login" >
            </label>
        </div>
        <div class="login-form__password">
            <label for="">
                <p>Password</p>
                <input type="text" name="paswword" v-model="credentials.password">
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
           async onSignIn() {
                const { login, password } = this.credentials;

                if (login && password) {
                    const  isAuthorized = await this.asyncSignIn(this.credentials);
                    if(isAuthorized){
                        this.$router.push('/dashboard')
                    }

                }
                // this.$router.push('/dashboard')
            }
        }
    }
</script>
<style lang="scss">
    .login-form {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #9da3b5;
        /*background: papayawhip;*/
        padding: 15px;

        &__login, &__password {
            margin: 10px;
            width: 100%;
            /*color: #9da3b5;*/
        }
        &__button-group {
            display: flex;
            justify-content: center;


            margin-top: 15px;
        }
        &__button-group button{
            margin-left: 10px;
            margin-right: 10px;
            width: 80px;
            height: 25px;
            font-size: 15px;
            cursor: pointer;
            /*color: #9da3b5;*/
        }

        label {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 30px;
        }
        label p{
            margin: 0 auto;
            line-height: 30px;
        }
        input{
            margin-right: 10px;
            font-size: 15px;
            /*color: #9da3b5;*/

        }
    }
</style>

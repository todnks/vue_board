<template>
    <header class="header">
        <router-link to="/">홈</router-link>
        <div class="header__logo"></div>
        <nav class="header__nav">
            <ul class="header__list">
                <div v-if="this.$store.state.isMember">
                    <button @click="logout">로그아웃</button>
                </div>
                <div v-else>
                <router-link class="header__item" tag="li" to="/join">회원가입</router-link>
                <router-link class="header__item" tag="li" to="/login">로그인</router-link>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    member: {},
    data () {
        return {
            member: this.$store.state.member
        }
    },
    method: {
        logout (e){
            this.$store.comit('logout')
        }
    }
}
</script>

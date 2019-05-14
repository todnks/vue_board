<template>
  <div id="app">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    member: {},
    data () {
        return {
            member: this.$store.state.member
        }
    },
    methods: {
        logout (e){
            this.$store.commit('logout')
            alert("로그아웃 완료")
            this.$router.push('/')
      }
    }
}
</script>
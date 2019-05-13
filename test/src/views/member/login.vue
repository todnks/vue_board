<template>
    <div class="login">
        <form action="" method="post" @submit.prevent="login">
            <input type="text" name="id"><br>
            <input type="password" name="pw">
            <button type="submit">로그인</button>
        </form>

    </div>
</template>
<script>
export default {
    data () {
        return {
            id : null,
            pw : null
        }
    },
    methods: { 
        login (e) {
            const url = 'http://localhost:3000/member/login'
            
        }
    }
}
</script>

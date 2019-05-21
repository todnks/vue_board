<template>
    <div class="login">
        <form action="" method="post" @submit.prevent="login">
            <input type="text" name="id" placeholder="id"><br>
            <input type="password" name="pw" placeholder="pw">
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
            const frm = e.target
            const _this = this
            fetch(url ,{
                method: 'POST',
                body : JSON.stringify({
                    id: frm.id.value,
                    pw: frm.pw.value
                }),
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
            })
                .then(res => res.json())
                .then(json => {
                    if(json.length > 0) {
                        _this.$store.commit('login', json)
                        alert("로그인 완료")
                        _this.$router.push('/')
                    } else {
                        alert('아이디 또는 비밀번호 불일치')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

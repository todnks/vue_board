<template>
    <div class="form__box">
        <form action="" method="post" @submit.prevent="Update">
            <input type="text" name="subject" placeholder="제목" :value="subject"><br>
            <textarea name="content" id="" cols="30" rows="10" placeholder="글내용" v-html="content"></textarea>
            <button type="submit">글작성</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return { 
        subject: '',
        content: ''
        }
    },
    created () {
        if(!this.$store.state.isMember) {
            alert('로그인 후에 이용 해주세요')
            this.$router.go(-1)
        }
    },
    methods: {
        Update (e) {
            const url = `http://localhost:3000/board/update`
            const frm = e.target
            const _this = this
        }
    }
}
</script>

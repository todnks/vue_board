<template>
  <div class="join">
    <form action="" method="post" @submit.prevent="write">
       <input type="text" name="writer" placeholder="작성자" :value="writer" required><br>
       <input type="text" name="subject" placeholder="글제목" required><br>
       <input type="text" name="name" placeholder="name" required><br>
       <button type="submit">글작성</button>
    </form>
  </div>
</template>


<script>
export default {
    data() {
        return {
            wrtier: this.$store.state.member[0]['name'],
            subject: '',
            content: ''
        }
    },
    created () {
        if(!this.$store.isMember) {
            alert('로그인후에 이용해주세요')
            this.$router.go(-1)
        }
    },
    methods: {
        write (e) {
            const url = "http://localhost/board/write"
            const frm = e.target
            const _this = this
        }
    }
}
</script>

<template>
  <div class="join">
    <form action="" method="post" @submit.prevent="write">
       <input type="text" name="writer" placeholder="작성자" :value="writer" required readonly><br>
       <input type="text" name="subject" placeholder="글제목" required><br>
       <input type="text" name="content" placeholder="글내용" required><br>
       <button type="submit">글작성</button>
    </form>
  </div>
</template>


<script>
export default {
    data() {
        return {
            writer: this.$store.state.member[0]['name'],
            subject: '',
            content: ''
        }
    },
    created () {
        console.log(this.$store.state.isMember)
        if(!this.$store.state.isMember) {
            alert('로그인후에 이용해주세요')
            this.$router.go(-1)
        }
    },
    methods: {
        write (e) {
            const url = 'http://localhost:3000/board/write'
            const frm = e.target
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    writer : frm.writer.value,
                    subject : frm.subject.value,
                    content: frm.content.value
                }),
                headers: new Headers({
                    'Content-Type' : 'application/json'
                })
            })
            .then(res => res.json())
            alert("글작성 완료")
                this.$router.push('/')
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

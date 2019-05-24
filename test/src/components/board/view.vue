<template>
    <div class="content">
    <template v-if="view != null">
        <h3>제목: {{view.subject}}</h3>
        <p>작성자: {{view.writer}}</p>
        <p>작성일: {{view.date}}</p>
        <p>내용 : {{view.content}}</p>
    </template> 
    <div>
        <router-link tag="button" type="button" :to="`/board/update/${view.idx}`">수정</router-link>
        <form action="" method="post" @submit.prevent="Delete">
            <input type="hidden" name="idx" v-model="view.idx">
            <button type="submit">삭제</button>
        </form>
    </div>
    </div>
</template>

<script>
export default { 
    data () {
        return {
            view: null
        }
    },
    created () {
        const _this = this
        fetch(`http://localhost:3000/board/view/${_this.$route.params.idx}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            if(json.length) {
                _this.view = json[0]
            }
        })
        .catch(error => {
            console.log(error)
            })
    },
    methods: {
        Delete (e) {
            const url = `http://localhost:3000/board/delete`
            const frm = e.target
            const _this = this
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                  idx: frm.idx.value
                }),
                headers: new Headers({
                    'Content-Type' : 'application/json'
                })
            })
            .then(res => res.json())
                .then(json => {
                alert('게시물이 삭제되었습니다')
                _this.$router.push('/board')
            })
                .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<template>
  <div class="join">
    <form action="" method="post" @submit.prevent="join">
       <input type="text" name="id" placeholder="id" required><br>
       <input type="password" name="pw" placeholder="pw" required><br>
       <input type="text" name="name" placeholder="name" required><br>
       <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null,
      pw: null,
      name: null
    }
  },
  methods: {
    join (e) {
      const url = 'http://localhost:3000/member/join'
      const frm = e.target
      const _this = this
      fetch(url,{
        method: 'POST',
        body : JSON.stringify({
          id : frm.id.value,
          pw : frm.pw.value,
          name : frm.name.value
        }),
        headers: new Headers({
          'Content-Type':'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
           const cnt = json[0]['count(*)']
           if(cnt > 0) {
             alert("중복")
           } else{
             alert("회원가입 완료")
             _this.$router.push('/')
           }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
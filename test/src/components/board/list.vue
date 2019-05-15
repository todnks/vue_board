<template>
    <div>
        <h1>게시판 목록</h1>
        <div v-if="this.$store.state.isMember">
            <router-link to="./write" tag="p">게시판작성</router-link>
        </div>
        <ul v-if="this.list.length > 0">
            <li v-for="data in list" :key="data.idx">
                {{data.idx}} /
                <router-link :to="`./view/${data.idx}`">{{data.subject}}</router-link> /
                {{data.writer}}
                {{data.date}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: []
        }
    },
    cmoputed : {
        name: function() {
            return this.$store.state.name
        }
    },
    created () {
        fetch('http://localhost:3000/board')
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.list = json
        })
        .catch(error => {
            console.log(error)
        })
        console.log(this.list)
    }
}
</script>

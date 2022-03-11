<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="control-button" @click="changeValue()">Change Doc 3 status</button>
    <span>{{this.status === true ? 'true' : 'false'}}</span>
    <div><a href="/main">Back to Main Page</a></div>
  </div>
</template>
<script>
import db from "../utils/firebase"
import {getValue} from "../utils/getDoc";
import { doc, updateDoc } from "firebase/firestore";
  export default {
    name: 'ThirdPageVue',
    props: {
      msg: String
    },
    methods: {
      async changeValue() {
        let docRef = doc(db, "test", '3');
        await updateDoc(docRef, {
          value: !this.status
        });
        getValue('3').then(r => {
          this.status = r.value
        })
      }
    },
    data() {
      return {
        status: true
      }
    }
  }
</script>
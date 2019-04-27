<template>
    <div class="bkg">
        <v-layout align-center justify-center class="h-full">
            <v-flex xs12 md4 id="myflex">
                <v-card height="100%">
                    <form style="padding: 40px">
                        <v-text-field
                            v-model="person.name"
                            v-validate="'required|max:10'"
                            :counter="10"
                            :error-messages="errors.collect('name')"
                            label="用户名"
                            data-vv-name="name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="person.password"
                            v-validate="'required|max:10'"
                            :error-messages="errors.collect('password')"
                            label="密码"
                            data-vv-name="password"
                            type="password"
                            required
                        ></v-text-field>
                        <v-checkbox
                            v-model="checkbox"
                            label="记住密码"
                            type="checkbox"
                        ></v-checkbox>

                        <v-btn @click="submit" color="success">登录</v-btn>
                        <v-btn @click="clear">清空</v-btn>
                    </form>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
  import Vue from 'vue'
  import Axios from 'axios'
  import App from '../App.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      // person:{
      //     name: 'huangyao',
      //     password: '123456'
      // },
      checkbox: true,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          }
        }
      }
    }),
    watch: {
      checkbox: function(val) {
        if(val === false) this.clearPerson
      }
    },
    computed: {
      ...mapGetters({
        person: 'getPerson'
      }),
      ...mapActions([
        'clearPerson'
      ])
    },


    mounted () {
      this.$validator.localize('en', this.dictionary)
      if(this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        document.getElementById('myflex').style.height = '100%'
      }
    },

    methods: {
      submit () {
        let _this = this;
        this.$validator.validateAll().then(() => {
            this.$loading({
                showload: true
            })
            Axios.post('/login', _this.person).then( response => {
                this.$loading({
                    showload: false
                })
                if(response.status === 200) {
                  sessionStorage.setItem('token', 'hy')
                  if(this.$route.query.redirect){
                      let redirect = this.$route.query.redirect;
                      this.$router.push(redirect);
                  }else{
                      this.$router.push('/page');
                  }
                } else if(response.status === 201) {
                  this.$message({
                      text: response.data.msg
                  })
                }
            })
        })
      },
      clear () {
        // this.person.name = ''
        // this.person.password = ''
        // this.$validator.reset()
      }
    }
  }
</script>
<style lang="scss" scoped>
    .bkg {
        height: 100%;
    }
    .h-full {
      height: 100%;
    }
    // @media (max-width: 560px) {
    //   .flex.xs12 {
    //     height: 100%;
    //   }
    // }
</style>


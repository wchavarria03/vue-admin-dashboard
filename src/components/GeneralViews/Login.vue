<template>
  <div id="login">
    <div class="wrapper">
      <form class="form-signin" @submit.prevent="login({username, password})">
        <h2 class="form-signin-heading">Login</h2>
        <input type="text" v-model="username" class="form-control" name="username" placeholder="Username" required autofocus="" />
        <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required/>
        <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
        <input type="submit" class="btn btn-lg btn-primary btn-block" value="Login" />
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login () {
        this.$store.dispatch('LOGIN', {
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push({ name: 'profile' });
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  };
</script>
<style lang="scss">
  #login {
    .wrapper {
      margin-top: 80px;
      margin-bottom: 80px;
    }

    .form-signin {
      max-width: 380px;
      padding: 15px 35px 45px;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid rgba(0,0,0,0.1);

      .form-signin-heading,
      .checkbox {
        margin-bottom: 30px;
      }

      .checkbox {
        font-weight: normal;
      }

      .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;

        &:focus {
          z-index: 2;
        }
      }

      input[type="text"], input[type="password"] {
        &:focus {
          outline: none;
          box-shadow: 0 0 1px 1px #1abc9c;
        }
        -webkit-transition: 0.3s linear;
        -moz-transition: 0.3s linear;
        -o-transition: 0.3s linear;
        transition: 0.3s linear;
      }

      input[type="text"] {
        margin-bottom: -1px;
      }
      input[type="password"] {
        margin-bottom: 20px;
      }

      input[type="submit"] {
        background: #1abc9c;
        padding: 10px;
        font-size: 20px;
        display: block;
        width: 100%;
        border: none;
        color: #fff;
        border-radius: 5px;
        &:hover {
          background: #1bc6a4;
        }
      }
    }
  }
</style>

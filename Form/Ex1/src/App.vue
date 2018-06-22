<template>
    <div class="container">
        <form v-if="!isFormSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Signup</h1>
                    <input type="text" id="fName" class="form-control" v-model="user.fName">
                    <input type="text" id="lName" class="form-control" v-model="user.lName">
                    <input type="email" id="email" class="form-control" v-model="user.email">
                    <input type="password" id="password" class="form-control" v-model="user.password">
                    <input type="radio" id="data-yes" value="yes" v-model="saveData">
                    <input type="radio" id="data-no" value="no" v-model="saveData">


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button type="submit" @click.prevent="formSubmitted(true)">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <div id="on" @click="isOn = true" :class="{active: isOn}">On</div>
                    <div id="off" @click="isOn = false" :class="{active: !isOn}">Off</div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fName }} {{ user.lName }}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ saveData }}</p>
                        <p>Switch: {{ isOn }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return  {
          user: {
            fName: '',
            lName: '',
            email: '',
            password: '',
            data: [],
          },
          saveData: 'Yes',
          isFormSubmitted: false,
          isOn: true
        }
      },
      methods: {
        formSubmitted() {
          this.isFormSubmitted = true
        }
      }
    }
</script>

<style>
#on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
}

#on:hover, #on.active {
    background-color: lightgreen;
}

#off:hover, #off.active {
    background-color: lightcoral;
}
</style>

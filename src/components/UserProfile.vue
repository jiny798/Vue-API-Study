<template>
        <div class="user-container">
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
                <!-- <div>
                   username :  {{info.id}}
                </div> -->
                <slot name="username">

                </slot>
                <div class="time">
                   <!-- time :  {{info.created}} -->
                   <slot name="time">

                   </slot>
                </div>

                <slot name="karma"></slot>
            </div>
        </div>    
</template>

<script>
export default {
    props:{
        info: Object
    },
    computed:{
            userInfo(){
                return this.$store.state.user;
            }
        }
    }
</script>

<style>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
</style>
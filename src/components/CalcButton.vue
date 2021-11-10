<template>
    <button class="btn" :class="button.class" @click="clickHandler">{{ button.value }}</button>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'CalcButton',
    props: {
        button: {
            type: Object
        }
    },
    setup(props) {
        const store = useStore()
        const { button } = toRefs(props)
        const type = button.value.type
        const value = button.value.value
        const clickHandler = () => store.dispatch('clickHandler', {type, value})
        return {
            clickHandler
        }
    }
}
</script>
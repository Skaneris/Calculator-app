<template>
    <div class="trigger">
        <div class="value">
            <div v-for="value in values" :key="value">{{ value }}</div>
        </div>
        <div class="control">
            <div v-for="value in values" :key="value" @click="setTheme(value)"></div>
            <div class="target"></div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    name: 'ThemeTrigger',
    setup() {
        const values = ref([1, 2, 3])
        const store = useStore()
        const setTheme = value => store.dispatch('changeTheme', value)
        return {
            values,
            setTheme
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="display">
        <div>{{ value }}</div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Display',
    setup() {
        const store = useStore()
        const value = computed(() => store.getters.getDisplayValue)
        return {
            value
        }
    }
}
</script>

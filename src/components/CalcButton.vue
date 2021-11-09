<template>
    <button class="btn" :class="button.class">{{ button.value }}</button>
</template>

<script>
export default {
    name: 'CalcButton',
    props: {
        button: {
            type: Object
        }
    }
}
</script>
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        const phoneWidth = parseInt(window.screen.width, 0)
        const phoneHeight = parseInt(window.screen.height, 0)
        const phoneScale = phoneWidth / 750
        const ua = navigator.userAgent
        if (/Android (\d+\.\d+)/.test(ua)) {
            const version = parseFloat(RegExp.$1) // andriod 2.3
            if (version > 2.3) {
                document.write(
                    `<meta name="viewport" content="width=device-width,initial-scale=${phoneScale},minimum-scale=${phoneScale},maximum-scale=${phoneScale},user-scalable=no">`,
                ) // andriod 2.3以上
            } else {
                document.write(
                    '<meta name="viewport" content="width=device-width,user-scalable=no">',
                )
            }
            // 其他系统
        } else {
            document.write(
                `<meta name="viewport" content="width=device-width, initial-scale=${phoneScale},minimum-scale=${phoneScale},maximum-scale =${phoneScale},user-scalable=no,">`,
            )
        }
    },
}
</script>

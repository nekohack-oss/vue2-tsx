import Vue, { CreateElement, VNode } from 'vue'

import HelloWorld from './components/HelloWorld'

import Img from './assets/logo.png'

export default Vue.extend({
    render(h: CreateElement): VNode {
        return (
            <div id="app">
                <img alt="Vue logo" src={Img} />
                {/* @ts-ignore */}
                <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
            </div>
        )
    }
})
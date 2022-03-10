import * as React from 'react'
import Vue from "vue"
import testing from "./vue-components/Test.vue";

const VueWrapper = (
	{ componentProps }) => {
	const vueRef = React.useRef(null);
	const [vueInstance, setVueInstance] = React.useState(undefined)

	React.useEffect(() => {
		async function createVueInstance() {
		}

		createVueInstance()

		setVueInstance(new Vue({
			el: vueRef.current,
			data() {
				return {
					props: componentProps
				};
			},
			render: function(h) {
				return h(testing, {
					props: this.props
				});
			}
		}));

		return () => {
			vueInstance?.$destroy()
		};
	}, []);

	React.useEffect(() => {
		if(vueInstance) {
			const keys = Object.keys(componentProps)
			keys.forEach(key => vueInstance.props[key] = componentProps[key])
		}
	}, [Object.values(componentProps)]);

	return <div id="vue-component" ref={vueRef}></div>;
};

export default VueWrapper
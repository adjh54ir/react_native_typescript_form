/**
 * babel 은 범용적으로 지원되는 자바스크립트 버전으로 코드를 변환 시켜주는 패키지입니다.
 * 실행되는 플랫폼마다 지원되는 자바스크립트 버전이 다르기 때문에, 어느 플랫폼에서나 안전하게 구동될 수 있도록 구 버전의 자바스크립트로 코드를 변환 시켜준다고 생각하시면 됩니다.
 * 따라서 사용하는 패키지의 경우도 최신 자바스크립트 문법을 사용하는 경우, 바벨 설정을 통해 변환과정을 거칠 수 있도록 해주어야 하는 것입니다.
 * @param {*} api
 * @returns
 */
module.exports = (api) => {
	api.cache(true);

	return {
		presets: [
			'module:metro-react-native-babel-preset',
			['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
			'babel-preset-expo',
			'@babel/preset-typescript',
		],
	};
};

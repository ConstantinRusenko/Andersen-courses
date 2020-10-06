function request(url) {
	return new Promise((res,rej) => {
		const delayTime = Math.floor(Math.random() * 10000) + 1;

		setTimeout(() => (res(url)), delayTime);
	});
}

function willGetUrls(urls) {
	return new Promise(resolve => {
		urls.map(request).reduce(async (resultPromise, promise, index, promises) => {
			let { result = [], count = 0 } = await resultPromise;
			result[index] = await promise;
			if (promises.length === ++count) {
        		resolve(result);
      		}
			return { result, count };
		}, {});
	});
}

var urls = ['url1', 'url2', 'url3'];


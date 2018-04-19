import axios from 'axios';

export default callApi = (endpoint,method='GET',body) => {
	return axios({
		method:method,
		url:`${endpoint}`,
		data:body
	}).catch(err =>{
		console.log(err);
	});
}
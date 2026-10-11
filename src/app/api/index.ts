import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 10000,
	timeoutErrorMessage: "errors.timeout",
	headers: {
		"Content-Type": "application/json"
	}
});

export default api;

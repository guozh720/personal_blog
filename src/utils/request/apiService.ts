import ApiRequest from "./api";
import config from '../../config/index';

const axios = new ApiRequest(config.baseUrl);
export default axios;
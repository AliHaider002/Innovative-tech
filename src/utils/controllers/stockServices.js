
import ApiInstance from "../axiosconfig";
import { GET_ALL_Tickers } from "../routes";

const fetchTickers = async () => {
  const response = await ApiInstance.get(GET_ALL_Tickers);
  return response.data;
};

const stockService = {
  fetchTickers,
};

export default stockService;

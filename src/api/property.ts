import axios from "axios";

import { PropertyResponse } from "../common/types/api"

export const getPropertyData = async (question: string): Promise<PropertyResponse> => {
  return axios.post('/api/property', { question })
}
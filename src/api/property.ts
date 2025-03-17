import axios from "axios";

import { PropertyResponse } from "../types/api"

export const getPropertyData = async (question: string): Promise<PropertyResponse> => {
  return axios.post('/api/property', { question })
  // const requestOptions = {
  //   method: 'POST',
  //   body: JSON.stringify({ 
  //     question
  //   })
  // }

  // try {
  //   const response = await fetch('/api/property', requestOptions)

  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }

  //   return await response.json()
  // } catch (error) {
  //   throw error
  // }
}
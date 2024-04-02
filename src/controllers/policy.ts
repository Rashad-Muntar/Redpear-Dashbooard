import { getPoliciesService } from "../services/policy";
import { Request, Response } from 'express'

export const getPolicies = async (req: Request, res: Response) => {
  try {
    const policies = await getPoliciesService();
    res.render('index', { data: policies?.data?.data, title: 'Policies' });
    console.log(policies.data.data)
  } catch (error) {
    console.log(error);
  }
}
  
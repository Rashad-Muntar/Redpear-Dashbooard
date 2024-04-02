import { getPoliciesService, getPolicyService } from "../services/policy";
import { Request, Response } from 'express'

export const getPolicies = async (req: Request, res: Response) => {
  try {
    const policies = await getPoliciesService();
    res.render('index', { data: policies?.data?.data, title: 'Policies' });
  } catch (error) {
    console.log(error);
  }
}

export const getPolicy = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const policy = await getPolicyService(id);
    res.render('details', { data: policy?.data?.data?.policy, title: 'Policy' });
  } catch (error) {
    console.log(error);
  }
}
  
  
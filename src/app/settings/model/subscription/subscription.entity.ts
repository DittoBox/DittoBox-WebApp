export class Subscription {
}
export class AccountUsage {
  currentPlan: string = '';
  lowerPlan: string = '';
  upperPlan: string = '';
  users: {
    currentUsage: number;
    currentPlanLimit: number;
    lowerPlanLimit: number;
    upperPlanLimit: number;
  } = {
    currentUsage: 0,
    currentPlanLimit: 0,
    lowerPlanLimit: 0,
    upperPlanLimit: 0
  };
  containers: {
    currentUsage: number;
    currentPlanLimit: number;
    lowerPlanLimit: number;
    upperPlanLimit: number;
  } = {
    currentUsage: 0,
    currentPlanLimit: 0,
    lowerPlanLimit: 0,
    upperPlanLimit: 0
  };
  facilities: {
    currentUsage: number;
    currentPlanLimit: number;
    lowerPlanLimit: number;
    upperPlanLimit: number;
  } = {
    currentUsage: 0,
    currentPlanLimit: 0,
    lowerPlanLimit: 0,
    upperPlanLimit: 0
  };
}
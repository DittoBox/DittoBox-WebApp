export class Worker {
  id: string;
  firstName: string;
  lastName: string;
  accountId: string;
  groupId: string | null;
  privileges: string[];

  constructor(id: string, firstName: string, lastName: string, accountId: string, groupId: string | null, privileges: string[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountId = accountId;
    this.groupId = groupId;
    this.privileges = privileges;
  }
}

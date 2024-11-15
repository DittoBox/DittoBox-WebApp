export class Worker {
  id: number;
  firstName: string;
  lastName: string;
  accountId: number;
  groupId: number | null;
  location: string;
  privileges: string[];

  constructor(id: number, firstName: string, lastName: string, accountId: number, groupId: number | null, location: string, privileges: string[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountId = accountId;
    this.groupId = groupId;
    this.location = location;
    this.privileges = privileges;
  }
}

export class Notifications {
    alertType: number;
    issuedAt: Date;
    accountId: number;
    groupId: number;
    containerName: string

    constructor(alertType: number, issuedAt: Date, accountId: number, groupId: number, containerName:string) {
        this.alertType = alertType;
        this.issuedAt = issuedAt;
        this.accountId = accountId;
        this.groupId = groupId;
        this.containerName = containerName;
    }
}

export class Notifications {
    type: 'alert' | 'warning' | 'update';
    icon: string;
    title: string;
    message: string;
    date: Date;
    action?: string;
    viewed:boolean;

    constructor(type: 'alert' | 'warning' | 'update', icon: string, title: string, message: string, date: Date,viewed:boolean ,action?: string) {
        this.type = type;
        this.icon = icon;
        this.title = title;
        this.message = message;
        this.date = date;
        this.action = action;
        this.viewed = viewed;
    }
}

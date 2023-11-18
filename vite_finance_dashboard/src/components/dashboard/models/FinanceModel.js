export class FinanceModel {
    constructor(financeName, amount, changedAmount, hasIncreased, icon, percentage) {
        this.financeName = financeName;
        this.amount = amount;
        this.changedAmount = changedAmount;
        this.hasIncreased = hasIncreased;
        this.icon = icon;
        this.percentage = percentage;
    }
}
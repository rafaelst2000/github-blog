import moment from "moment";

export const relativeDateFormatter = (date: string) => moment(date).fromNow()
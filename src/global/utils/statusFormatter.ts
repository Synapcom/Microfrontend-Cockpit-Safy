import { status } from "./status";

export const statusFormat = (statusCode: number): string => {
    let statusName = '';

    status.map(element => {
        if (element.id === statusCode) {
            statusName = element.name;
        }
    });

    return statusName;
};

export const returnStatusClassName = (statusCode: number): string => {
    let className = '';

    status.map(element => {
        if (element.id === statusCode) {
            className = element.className;
        }
    });

    return className;
};

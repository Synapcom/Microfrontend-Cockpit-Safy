import { ReactNode } from "react";

export interface IMain {
    breadcrumbTextPaths: Array<string>;
    breadcrumbURLPaths: Array<string>;
    controls?: ReactNode;
    titleText: string;
    previousURL?: string;
}

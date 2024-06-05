declare interface IllustrationProp {
    alt: string;
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
    src: string | StaticImport | any;
    className: string;
}

declare interface IErrorInputs  {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    description: string;
}

declare type IFormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    description: string;
}

declare type IProjectData = {
    alt: string;
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
    src: string;
    projectName: string;
    description: string;
}

declare type IProjectModal = {
    isOpen: boolean;
    onRequestClose: () => void;
}

declare type INav = {
    isModal?: boolean;
}
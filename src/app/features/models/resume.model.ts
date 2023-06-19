export interface IResume {
    name: string,
    phone: string,
    summary: string
    address: string
    image: string
    linkedIn: string
    webLink: string
    personalInformation: IPersonal;
    education: Array<IEducation>;
    work: Array<IWork>;
    skill: Array<ISkill>;
    certification: Array<ICertification>;
    award: Array<IAwards>;
    references: Array<IReferences>;
}

export interface IPersonal {
    Email: string;
    Registration: string;
    Address: string;
    Phone: string;
    DepartmentId: Number;
    LinkedIn?: string;
    Website?: string;
    Summary: string;
    File?: string;
}

export interface IEducation {
    instituteName: string;
    major: string;
    marks: string;
    start: string;
    end: string;
}

export interface IWork {
    organization: string;
    jobRole: string;
    jobDescription: string;
    start: string;
    end: string;
}

export interface ISkill {
    name: string;
}

export interface ICertification {
    name: string;
    organization: string;
    end: string;
}

export interface IAwards {
    name: string;
    description: string;
}

export interface IReferences {
    name: string;
    phoneNumber: string;
    email: string;
}
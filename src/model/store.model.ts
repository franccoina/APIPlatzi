//-------------------------- Models for the Requests --------------------------

export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
    category:    ICategory[];
}

export interface ICategory {
    id:         number;
    name:       string;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

//-------------------------- Models for the Response of the URL Domain -------------------------- 

export interface IResponseDomain {
    message:    string;
    error:      string;
    statusCode: number;
}


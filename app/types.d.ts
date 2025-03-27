declare global {
    type Institutions = {
        data: Array<{
            id:      number;
            status:  string;
            sort:    null;
            name:    string;
            country: number;
            city:    null;
            logo:    string;
        }>
    }
    type Country = {
        id: number;
        sort: number | null;
        name: string;
    }
  }
  
  export {};


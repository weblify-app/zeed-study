declare global {
  type CmsResult<T> = {
    data: T[];
    errors?: Array<{
        message: string;
        extensions: {
            reason: string;
            code: string;
        }
    }>;
  };
  type CmsPageContent = {
    id: number;
    status: string;
    title: string;
    slug: string;
    body: string;
  };
  type NamedData = {
    id: number;
    sort: number | null;
    name: string;
  };
  type CourseLevelsOffered = {
    id: number;
    Institutions_id: number;
    course_levels_id: NamedData;
  };
  type Institution = {
    id: number;
    status: string;
    sort: number | null;
    name: string;
    country: NamedData;
    city: string;
    logo: string;
    course_levels_offered: CourseLevelsOffered[];
  };
  type Course = {
    id:                  number;
    status:              string;
    sort:                number |null;
    title:               string;
    english_requirement: string;
    description:         string;
    intake_months:       string[];
    course_level:        NamedData;
    subjec_area:         NamedData;
    institution:         Institution;
  }
}

export {};

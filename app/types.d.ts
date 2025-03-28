declare global {
  type HtmlContentData = {
    data: {
      id: number;
      status: string;
      title: string;
      slug: string;
      body: string;
    };
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
  type Institutions = {
    data: Array<{
      id: number;
      status: string;
      sort: number | null;
      name: string;
      country: NamedData;
      city: string;
      logo: string;
      course_levels_offered: CourseLevelsOffered[];
    }>;
  };
}

export {};
